import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [1, 2, 3, 4];

const Projects = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]"> Projects </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#00ffff]/80 scrollbar-thin ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 sna  p-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  "
          >
            <Image src="" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center ">
                <span className="underline decoration-[#00ffff]/50">
                  {" "}
                  Case Study {i + 1} of {Projects.length}:{" "}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries */}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#00ffff] opacity-50 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
