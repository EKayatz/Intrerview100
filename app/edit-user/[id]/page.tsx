import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import EditProfile from "@/components/EditProfile";
import { ProfileForm } from "@/common.types";

const EditUser = async () => {
  const user = (await getCurrentUser()) as { user: ProfileForm };
  const session = await getCurrentUser();
  if (!session)
    return <p className="no-result-text">Failed to fetch question info</p>;

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Profile</h3>
      <EditProfile session={session} user={user.user} />
    </Modal>
  );
};

export default EditUser;
