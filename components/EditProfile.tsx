"use client";
import { useState, FormEvent } from "react";
import { UserForm, ProfileForm, SessionInterface } from "@/common.types";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions";
import FormField from "./FormField";
import Button from "./Button";
import { fetchToken } from "@/lib/actions";

type Props = {
  session: SessionInterface;
  user: ProfileForm;
};

const EditProfile = ({ session, user }: Props) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<UserForm>({
    name: user?.name || "",
    description: user?.description || "",
    avatarUrl: user?.avatarUrl || "",
    githubUrl: user?.githubUrl || "",
    linkedinUrl: user?.linkedinUrl || "",
    // bannerUrl: user?.bannerUrl || "",
  });

  const handleStateChange = (fieldName: keyof UserForm, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    const { token } = await fetchToken();

    try {
      await updateUser(form, session?.user?.id as string, token);
      router.push("/");
    } catch (error) {
      console.error("Error updating user:", error);
      alert(`Failed to edit user data. Try again!`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <FormField
        title="Name"
        state={form.name}
        required={true}
        placeholder="Name"
        setState={(value) => handleStateChange("name", value)}
      />

      <FormField
        title="Work"
        state={form.description}
        required={false}
        placeholder="Work"
        setState={(value) => handleStateChange("description", value)}
      />

      <FormField
        title="Avatar URL"
        state={form.avatarUrl}
        required={true}
        placeholder="Avatar Url"
        setState={(value) => handleStateChange("avatarUrl", value)}
      />

      {/* <FormField
        title="Banner URL"
        state={form.bannerUrl}
        required={false}
        placeholder="Banner Url"
        setState={(value) => handleStateChange("bannerUrl", value)}
      /> */}

      <FormField
        title="Github URL"
        state={form.githubUrl}
        required={false}
        placeholder="GitHub Url"
        setState={(value) => handleStateChange("githubUrl", value)}
      />
      <FormField
        title="LinkedIn URL"
        state={form.linkedinUrl}
        required={false}
        placeholder="Linked In Url"
        setState={(value) => handleStateChange("linkedinUrl", value)}
      />

      <div className="flexStart w-full">
        <Button
          title={submitting ? "Editing" : "Edit"}
          bgColor="bg-primary-blue-600 hover:bg-primary-blue-200"
          type="submit"
          leftIcon={submitting ? "" : "/plus.svg"}
          submitting={submitting}
        />
      </div>
    </form>
  );
};

export default EditProfile;
