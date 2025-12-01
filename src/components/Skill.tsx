import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  name?: string;
  proficiency?: number;
};

const Skill = ({ directionLeft, name = "Skill", proficiency = 100 }: Props) => {
  return (
    <div className="group relative cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-300 object-cover w-16 h-16 xl:w-32 xl:h-32 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out bg-[#00ffff]/20 flex items-center justify-center"
      >
        <p className="text-xs md:text-sm xl:text-base font-semibold text-white text-center px-2">
          {name}
        </p>
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out top-0 group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
