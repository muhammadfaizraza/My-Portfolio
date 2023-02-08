import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Firstimg from "../../public/FirstImage.jpg";
import Logo from "../../public/logo.png";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex  flex-col rounded items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px]
    bg-[#292929] snap-center p-10  hover:opacity-100 opacity-70 cursor-pointer  transition-opacity duration-200 overflow-hidden 
    "
    >
      <Image
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={Firstimg}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Ceo of My Own</h4>
        <p className="font-bold text-2xl mt-1">Papa</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src={Logo}
            alt=""
            width="10"
            height="10"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={Logo}
            alt=""
            width="10"
            height="10"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={Logo}
            alt=""
            width="10"
            height="10"
          />
        </div>
        <p className="uppercase py-2  text-gray-300">
          Started Work .. Ended...
        </p>
        <ul className="list-disc space-y-1 ml-5 text-md">
          <li>
            Summary Points Summary PointsSummary PointsSummary PointsSummary
            Points{" "}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
