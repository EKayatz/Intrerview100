"use client";

import React from "react";
import Button from "./Button";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const FlashCard = ({ question, answer }: Props) => {
  const [solution, setSolution] = useState(false);
  return (
    <div className="w-full flexCenter flex-col ">
      <section
        className={`flexCenter flex-col mt-[3rem] md:py-[10rem] py-[3rem] px-10 lg:w-[40%] w-[80%] ${
          solution ? "bg-gray-100 text-primary-blue" : "bg-primary-blue-200"
        } rounded-2xl`}
      >
        <p className="max-w-5xl text-xl font-normal">
          {solution ? answer : question}
        </p>
      </section>
      <section className="justify-between flex gap-4 lg:mt-[5rem] mt-[3rem] lg:w-[40%] w-[70%]">
        <Button
          title="Save Flashcard"
          bgColor="bg-primary-blue-600 hover:bg-primary-blue-200"
        />
        <Button
          title={solution ? "Show Question" : "Show Solution"}
          handleClick={() => setSolution(!solution)}
          bgColor="bg-primary-blue-600 hover:bg-primary-blue-200"
        />
      </section>
    </div>
  );
};

export default FlashCard;
