import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-[8rem] flex flex-col">
      <div className="h-[5rem]" />
      <div className="flexCenter flex-col">
        <div className="flexCenter flex-col gap-10">
          <h1 className="text-6xl font-bold text-center lg:w-[80%]">
            Train for your next coding Interview
          </h1>
          <p className="text-center w-80">
            Find new coding questions that will help you improve your skills
          </p>
          <div className="flex gap-3 bg-primary-blue-600 form_field-input w-[70%]">
            <Image
              src="/magnifying-glass.svg"
              alt="search"
              height={20}
              width={20}
            />
            <input
              type={"text"}
              placeholder={"search"}
              className="outline-0 bg-primary-blue-600 w-full text-primary-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
