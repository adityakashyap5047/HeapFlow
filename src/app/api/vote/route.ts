import { answerCollection, db, questionCollection, voteCollection } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { UserPrefs } from "@/store/Auth";
import { NextRequest, NextResponse } from "next/server";
import { ID, Query } from "node-appwrite";

export async function POST(request: NextRequest) {
  try {

    //grab the data
    const {voteById, voteStatus, type, typeId} = await request.json();

    //list-document
    const response = await databases.listDocuments(
        db, voteCollection, [
            Query.equal("type", type),
            Query.equal("typeId", typeId),
            Query.equal("voteById", voteById),
        ]
    )

    if (response.documents.length > 0) {
        await databases.deleteDocument(db, voteCollection, response.documents[0].$id)

        //decrease the reputation
        const QuestionOrAnswer = await databases.getDocument(
            db,
            type === "question" ? questionCollection : answerCollection,
            typeId
        )

        const authorPrefs = await users.getPrefs<UserPrefs>(QuestionOrAnswer.authorId)

        await users.updatePrefs<UserPrefs>(QuestionOrAnswer.authorId, {
            reputation: response.documents[0].voteStatus === "upvoted" ? Number(authorPrefs.reputation) - 1 : Number(authorPrefs.reputation) + 1
        })
    }

    // that means prev vote does not exists or vote status changes
    if (response.documents[0]?.voteStatus !== voteStatus) {
        const doc = await databases.createDocument(db, voteCollection, ID.unique(), {
            type,
            typeId,
            voteStatus,
            voteById
        });

        // Increase or decrease the reputation
        const QuestionOrAnswer = await databases.getDocument(
            db,
            type === "question" ? questionCollection : answerCollection,
            typeId
        )

        const authorPrefs = await users.getPrefs<UserPrefs>(QuestionOrAnswer.authorId)

        // if vote was present
        if (response.documents[0]) {
            await users.updatePrefs<UserPrefs>(QuestionOrAnswer.authorId, {
                // that means prev vote was "upvoted" and new value is "downvoted" so we have to decrease the reputation
                reputation: response.documents[0].voteStatus === "upvoted" ? Number(authorPrefs.reputation) - 1 : Number(authorPrefs.reputation) + 1
            })
        } else {
            await users.updatePrefs<UserPrefs>(QuestionOrAnswer.authorId, {
                // that means the vote doesn't present
                reputation: voteStatus === "upvoted" ? Number(authorPrefs.reputation) + 1 : Number(authorPrefs.reputation) - 1
            })
        }

        const [upvotes, downvotes] = await Promise.all([
            databases.listDocuments(db, voteCollection, [
                Query.equal("type", type),
                Query.equal("typeId", typeId),
                Query.equal("voteStatus", "upvoted"),
                Query.equal("voteById", voteById),
                Query.limit(1), // for optimization as we only need total
            ]),
            databases.listDocuments(db, voteCollection, [
                Query.equal("type", type),
                Query.equal("typeId", typeId),
                Query.equal("voteStatus", "downvoted"),
                Query.equal("voteById", voteById),
                Query.limit(1), // for optimization as we only need total
            ])
        ]);

        return NextResponse.json(
            {
                data: { document: doc, voteResult: upvotes.total - downvotes.total },
                message: response.documents[0] ? "Vote Status Updated" : "Voted",
            },
            {
                status: 201,
            }
        );
    }

    const [upvotes, downvotes] = await Promise.all([
        databases.listDocuments(db, voteCollection, [
            Query.equal("type", type),
            Query.equal("typeId", typeId),
            Query.equal("voteStatus", "upvoted"),
            Query.equal("voteById", voteById),
            Query.limit(1),
        ]),
        databases.listDocuments(db, voteCollection, [
            Query.equal("type", type),
            Query.equal("typeId", typeId),
            Query.equal("voteStatus", "downvoted"),
            Query.equal("voteById", voteById),
            Query.limit(1),
        ])
    ])

    return NextResponse.json(
        {
            data: {
                documents: null,
                voteResult: upvotes.total - downvotes.total
            },
            message: "vote handled"
        },
        {
            status: 200
        }
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: error.message || "Error in voting",
        },
        {
          status: 500,
        }
      );
    } else {
      return NextResponse.json(
        {
          error: "Unknown error occurred in voting",
        },
        {
          status: 500,
        }
      );
    }
  }
}
