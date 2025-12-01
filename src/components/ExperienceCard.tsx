import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Avancera from "../../public/Avancera.png";

type Props = {
  title?: string;
  company?: string;
  period?: string;
  points?: string[];
  logo?: any;
};

const ExperienceCard = ({ title, company, period, points, logo }: Props) => {
  return (
    <article
      className="flex  flex-col rounded items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px]
    bg-[#292929] snap-center p-10  hover:opacity-100 opacity-70 cursor-pointer  transition-opacity duration-200 overflow-hidden
    "
    >
      <Image
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={logo || Avancera}
        alt={company || "Company"}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <p className="uppercase py-2  text-gray-300">
          {period}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00ffff]/80">
          {points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
