import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Exerience = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-300 text-2xl">
        Exerience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00ffff]/80 ">
        <ExperienceCard />
        <ExperienceCard />

        {/* <ExperienceCard /> */}
      </div>
    </div>
  );
};

export default Exerience;
