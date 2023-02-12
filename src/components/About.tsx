import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import SecondImage from "../../public/ImageAbout.jpeg";

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
          As a web developer, I have a strong passion for creating intuitive,
          visually appealing, and functional websites that provide a great user
          experience. With One Year of experience in the industry, I have honed
          my skills in Wordpress ,Shoppify , React ,Node. I am always eager to
          stay current with the latest web development trends and techniques,
          and I take pride in delivering clean, efficient, and well-structured
          code. I believe in building websites that are not only aesthetically
          pleasing, but also user-centric, accessible, and optimized for search
          engines.
        </p>
      </div>
    </div>
  );
}

export default About;
