"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  question: string;
  answer: string;
  avatarUrl: string;
  userId: string;
  name: string;
};

const QuestionCard = ({
  id,
  question,
  answer,
  avatarUrl,
  userId,
  name,
}: Props) => {
  const [randomLikes, setRandomLikes] = useState(0);
  const [randomViews, setRandomViews] = useState("");

  useEffect(() => {
    setRandomLikes(Math.floor(Math.random() * 10000));
    setRandomViews(
      String((Math.floor(Math.random() * 100000) / 1000).toFixed(1) + "k")
    );
  }, []);
  console.log(question, "question incl");
  return (
    <div className="flexCenter flex-col rounded-2xl">
      <Link
        href={`/question/${id}`}
        className="flexCenter group relative w-[20rem] h-[12rem] l bg-primary-blue-600 rounded-2xl text-primary-blue"
      >
        <div className="w-[80%] flexCenter">
          <p>{question}</p>
        </div>
      </Link>

      <div className="flexBetween w-[20rem] mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              width={24}
              height={24}
              className="rounded-full"
              alt="profile image"
            />
            <p>{name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={13} height={12} alt="heart" />
            <p className="text-sm">{randomLikes}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={12} height={9} alt="eye" />
            <p className="text-sm">{randomViews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
