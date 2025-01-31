import { answerCollection, db } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";
import {UserPrefs} from "@/store/Auth"

export async function POST(request: NextRequest) {
    try {
        const {questionId, answer, authorId} = await request.json();

        const response = await databases.createDocument(db, answerCollection, ID.unique(), {
            content: answer,
            authorId: authorId,
            questionId: questionId
        })

        // Increase author reputation
        const prefs = await users.getPrefs<UserPrefs>(authorId)
        await users.updatePrefs(authorId, {
            reputation: Number(prefs.reputation) + 1
        })

        return NextResponse.json(response, {
            status: 201
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    error: error.message || "Error creating while answer"
                },
                {
                    status: 500
                }
            );
        } else {
            return NextResponse.json(
                {
                    error: "Unknown error occurred"
                },
                {
                    status: 500
                }
            );
        }
    }
}