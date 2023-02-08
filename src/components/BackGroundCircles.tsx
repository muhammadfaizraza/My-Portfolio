import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackGroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.3, 0.8, 0.1, 0.4],
        borderRadius: ["50%", "20%", "50%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border [#33333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border [#333333] rounded-full h-[300px] opacity-20 w-[300px] mt-52 absolute" />
      <div className="border [#33333] rounded-full h-[500px] opacity-20 w-[500px] mt-52 absolute animate-pulse" />
      <div className="border border-red-900 rounded-full opacity-20 h-[500px] w-[500px] mt-52 absolute" />
      <div className="border border-red-900 rounded-full opacity-20 h-[500px] w-[500px] mt-52 absolute" />
    </motion.div>
  );
}
