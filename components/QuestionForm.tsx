"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import FormField from "./FormField";
import Button from "./Button";
import CustomMenu from "./CustomMenu";
import { categoryFilters } from "@/constant";
import { updateQuestion, createNewQuestion, fetchToken } from "@/lib/actions";
import { FormState, QuestionInterface, SessionInterface } from "@/common.types";

type Props = {
  type: string;
  session: SessionInterface;
  question?: QuestionInterface;
};

const QuestionForm = ({ type, session, question }: Props) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    question: question?.question || "",
    answer: question?.answer || "",
    category: question?.category || "",
  });

  const handleStateChange = (fieldName: keyof FormState, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    const { token } = await fetchToken();

    try {
      if (type === "create") {
        console.log("create Question");
        await createNewQuestion(form, session?.user?.id, token);

        router.push("/");
      }

      if (type === "edit") {
        await updateQuestion(form, question?.id as string, token);

        router.push("/");
      }
    } catch (error) {
      console.error("Error creating question:", error);
      alert(
        `Failed to ${
          type === "create" ? "create" : "edit"
        } a question. Try again!`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <FormField
        title="Question"
        state={form.question}
        required={true}
        placeholder="Question"
        setState={(value) => handleStateChange("question", value)}
      />

      <FormField
        title="Answer"
        state={form.answer}
        required={true}
        placeholder="Answer"
        setState={(value) => handleStateChange("answer", value)}
      />

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flexStart w-full">
        <Button
          title={
            submitting
              ? `${type === "create" ? "Creating" : "Editing"}`
              : `${type === "create" ? "Create" : "Edit"}`
          }
          bgColor="bg-primary-blue-600 hover:bg-primary-blue-200"
          type="submit"
          leftIcon={submitting ? "" : "/plus.svg"}
          submitting={submitting}
        />
      </div>
    </form>
  );
};

export default QuestionForm;
