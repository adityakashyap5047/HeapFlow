import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import EditQues from "./EditQues";

interface PageProps {
    params: Promise<{ quesId: string; quesName: string }>; // 👈 params as a Promise
    searchParams?: Record<string, string | string[] | undefined>; // Optional
}

const getQuestion = async (quesId: string) => {
    return await databases.getDocument(db, questionCollection, quesId);
};

const Page = async ({ params }: PageProps) => {
    const resolvedParams = await params; // 👈 Await params to resolve it

    if (!resolvedParams?.quesId) {
        throw new Error("Question ID is required");
    }

    const question = await getQuestion(resolvedParams.quesId);

    return <EditQues question={question} />;
};

export default Page;
