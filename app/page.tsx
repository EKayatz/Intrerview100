import { QuestionInterface } from "@/common.types";
import LoadMore from "@/components/LoadMore";
import Hero from "@/components/Hero";
import QuestionCard from "@/components/QuestionCard";
import { fetchAllQuestions } from "@/lib/actions";
import Categories from "@/components/Categories";

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
};

type Props = {
  searchParams: SearchParams;
};

type QuestionSearch = {
  questionSearch: {
    edges: { node: QuestionInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  try {
    const data = (await fetchAllQuestions(
      category,
      endcursor
    )) as QuestionSearch;

    console.log("questions:", data?.questionSearch?.pageInfo, "ende");

    const questionsToDisplay = data?.questionSearch?.edges || [];
    return (
      <section className="flexStart flex-col paddings mb-16">
        <Categories />
        <Hero />

        <section className="questions-grid">
          {questionsToDisplay.map(({ node }: { node: QuestionInterface }) => (
            <QuestionCard
              id={node?.id}
              question={node?.question}
              answer={node?.answer}
              avatarUrl={node?.createdBy.avatarUrl}
              userId={node?.createdBy.id}
              name={node?.createdBy.name}
            />
          ))}
        </section>

        <LoadMore
          startCursor={data?.questionSearch?.pageInfo?.startCursor}
          endCursor={data?.questionSearch?.pageInfo?.endCursor}
          hasPreviousPage={data?.questionSearch?.pageInfo?.hasPreviousPage}
          hasNextPage={data?.questionSearch?.pageInfo.hasNextPage}
        />
      </section>
    );
  } catch (error) {
    return (
      <section className="flexCenter flex-col lg:px-20 lg:py-[10rem] px-5 py-[3rem]">
        <Categories />
        <Hero />

        <p className="no-result-text text-center">
          No Questions found, go create some first.
        </p>
      </section>
    );
  }
};

export default Home;
