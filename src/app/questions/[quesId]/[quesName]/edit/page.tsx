import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import EditQues from "./EditQues";

interface PageProps {
    params: { quesId: string; quesName: string };
    searchParams?: Record<string, string | string[] | undefined>; // Optional
}

const getQuestion = async (quesId: string) => {
    return await databases.getDocument(db, questionCollection, quesId);
};

const Page = async ({ params }: PageProps) => {
    if (!params?.quesId) {
        throw new Error("Question ID is required");
    }

    const question = await getQuestion(params.quesId);

    return <EditQues question={question} />;
};

export default Page;
