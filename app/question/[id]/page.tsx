import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { getQuestionDetails } from "@/lib/actions";
import Modal from "@/components/Modal";
import QuestionActions from "@/components/QuestionActions";
import Button from "@/components/Button";
import { QuestionInterface } from "@/common.types";
import FlashCard from "@/components/FlashCard";

const Question = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = (await getQuestionDetails(id)) as {
    question?: QuestionInterface;
  };

  if (!result?.question)
    return <p className="no-result-text">Failed to fetch question info</p>;

  const questionDetails = result?.question;

  const renderLink = () => `/profile/${questionDetails?.createdBy?.id}`;

  return (
    <Modal>
      <section className="flexBetween gap-y-4 max-w-4xl max-xs:flex-col w-full">
        <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
          <Link href={renderLink()} className="flex gap-4">
            <Image
              src={questionDetails?.createdBy?.avatarUrl}
              width={50}
              height={50}
              alt="profile"
              className="rounded-full"
            />
            <Link href={renderLink()} className="text-center my-auto">
              {questionDetails?.createdBy?.name}
            </Link>
          </Link>
        </div>

        {session?.user?.email === questionDetails?.createdBy?.email && (
          <div className="flex justify-end items-center gap-2">
            <QuestionActions questionId={questionDetails?.id} />
          </div>
        )}
      </section>

      <FlashCard
        question={questionDetails?.question}
        answer={questionDetails?.answer}
      />
    </Modal>
  );
};

export default Question;
