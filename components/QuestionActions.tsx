"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteQuestion, fetchToken } from "@/lib/actions";

type Props = {
  questionId: string;
};

const QuestionActions = ({ questionId }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  const handleDeletequestion = async () => {
    setIsDeleting(true);

    const { token } = await fetchToken();

    try {
      await deleteQuestion(questionId, token);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-question/${questionId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" width={15} height={15} alt="edit" />
      </Link>

      <button
        type="button"
        disabled={isDeleting}
        className={`flexCenter delete-action_btn ${
          isDeleting ? "bg-gray" : "bg-primary-blue-600"
        }`}
        onClick={handleDeletequestion}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>
    </>
  );
};

export default QuestionActions;
