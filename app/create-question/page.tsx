import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import QuestionForm from "@/components/QuestionForm";

const Createquestion = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Question</h3>

      <QuestionForm type="create" session={session} />
    </Modal>
  );
};

export default Createquestion;
