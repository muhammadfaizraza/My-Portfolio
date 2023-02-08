import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import SecondImage from "../../public/FirstImage.jpg";

function About() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-2xl text-gray-300">
        About{" "}
      </h3>

      <Image
        className="-mb-20 md:mb-0 flex-shrink h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-66 xl:h-[500px] xl:w-[500px] "
        src={SecondImage}
        height="120"
        width="230"
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold md:my-100">
          Here is
          <span className="mx-1 pt-11 underline decoration-gray-100/80">
            My Background
          </span>
        </h4>
        <p className="text-base">
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. */}
        </p>
      </div>
    </div>
  );
}

export default About;
