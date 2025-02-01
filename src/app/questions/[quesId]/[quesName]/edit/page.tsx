import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React, { use } from "react";
import EditQues from "./EditQues";

const fetchQuestion = async (quesId: string) => {
    return await databases.getDocument(db, questionCollection, quesId);
};

const Page = ({ params }: { params: { quesId: string; quesName: string } }) => {
    const question = use(fetchQuestion(params.quesId));

    return <EditQues question={question} />;
};

export default Page;