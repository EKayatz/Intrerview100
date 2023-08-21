import { redirect } from "next/navigation";

import Modal from "@/components/Modal";
import QuestionForm from "@/components/QuestionForm";
import { getCurrentUser } from "@/lib/session";
import { getQuestionDetails } from "@/lib/actions";
import { QuestionInterface } from "@/common.types";

const Editquestion = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  const result = (await getQuestionDetails(id)) as {
    question?: QuestionInterface;
  };

  if (!result?.question)
    return <p className="no-result-text">Failed to fetch question info</p>;

  return (
    <Modal>
      <h3 className="modal-head-text">Edit question</h3>

      <QuestionForm type="edit" session={session} question={result?.question} />
    </Modal>
  );
};

export default Editquestion;
