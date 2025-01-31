import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB() {
    try {
        await databases.get(db);
        console.log("Database connection");
    } catch {
        try {
            await databases.create(db, db);
            console.log("Database created");

            //create collections
            await Promise.all([
                createAnswerCollection(),
                createCommentCollection(),
                createQuestionCollection(),
                createVoteCollection(),
            ])
            console.log("Collection created");
            console.log("Database connected");
        } catch (error) {
            console.log("Error while setting up the database or collection", error);
        }
    }

    return databases;
}