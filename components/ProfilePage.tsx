import { QuestionInterface, UserProfile } from "@/common.types";
import Image from "next/image";
import Link from "next/link";

import QuestionCard from "./QuestionCard";

type Props = {
  user: UserProfile;
};

const ProfilePage = ({ user }: Props) => {
  const backgroundImage =
    "url('https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

  console.log(user?.questions?.edges, "BannerURl");

  return (
    <section className="flexCenter flex-col w-full paddings mx-auto relative">
      <div
        className={`h-[25rem] inset-0 absolute w-full flexCenter bg-cover bg-no-repeat top-[0rem] left-0`}
        style={{ backgroundImage }}
      ></div>
      <div className="flexBetween w-[80%] relative">
        <div className="flex gap-10 mt-[17rem] items-start w-full">
          <Image
            src={user?.avatarUrl}
            width={200}
            height={200}
            className="rounded-full"
            alt="user image"
          />
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold mt-[7rem]">{user?.name}</p>
            <p className="text-xl">
              {user?.description ? `${user?.description}` : <div></div>}
            </p>
            <div className="flex text-regular">
              <p>
                {user?.githubUrl ? (
                  <Link className="pr-5" href={user?.githubUrl}>
                    GitHub
                  </Link>
                ) : (
                  <div></div>
                )}
              </p>
              <p>
                {user?.linkedinUrl ? (
                  <Link href={user?.linkedinUrl}>LinkedIn</Link>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="flex-col lg:mt-28 mt-16 w-[80%]">
        <div className="profile_questions">
          {user?.questions?.edges?.map(
            ({ node }: { node: QuestionInterface }) => (
              <QuestionCard
                key={node?.id}
                id={node?.id}
                question={node?.question}
                answer={node?.answer}
                avatarUrl={user.avatarUrl}
                userId={user.id}
                name={user.name}
              />
            )
          )}
        </div>
      </section>
    </section>
  );
};

export default ProfilePage;
