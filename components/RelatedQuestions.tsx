import Link from "next/link";

import { getUserQuestions } from "@/lib/actions";
import { QuestionInterface, UserProfile } from "@/common.types";
import Image from "next/image";

type Props = {
  userId: string;
  questionId: string;
};

const RelatedQuestions = async ({ userId, questionId }: Props) => {
  const result = (await getUserQuestions(userId)) as { user?: UserProfile };

  const filteredQuestions = result?.user?.questions?.edges?.filter(
    ({ node }: { node: QuestionInterface }) => node?.id !== questionId
  );

  if (filteredQuestions?.length === 0) return null;

  return (
    <section className="flex flex-col mt-32 w-full">
      <div className="flexBetween">
        <p className="text-base font-bold">More by {result?.user?.name}</p>
        <Link
          href={`/profile/${result?.user?.id}`}
          className="text-primary-purple text-base"
        >
          View All
        </Link>
      </div>

      <div className="related_questions-grid">
        {filteredQuestions?.map(({ node }: { node: QuestionInterface }) => (
          <div className="flexCenter related_question-card drop-shadow-card">
            <Link
              href={`/question/${node?.id}`}
              className="flexCenter group relative w-full h-full"
            >
              <div className="hidden group-hover:flex related_question-card_title">
                <p className="w-full">hello</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedQuestions;
