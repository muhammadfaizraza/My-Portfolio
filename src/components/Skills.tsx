import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const skills = [
  { name: "React", proficiency: 95 },
  { name: "Next.js", proficiency: 95 },
  { name: "Node.js", proficiency: 90 },
  { name: "Express", proficiency: 90 },
  { name: "React Native", proficiency: 90 },
  { name: "Redux Toolkit", proficiency: 90 },
  { name: "TypeScript", proficiency: 85 },
  { name: "JavaScript", proficiency: 95 },
  { name: "Tailwind CSS", proficiency: 90 },
  { name: "MUI", proficiency: 85 },
  { name: "Python", proficiency: 75 },
  { name: "FastAPI", proficiency: 75 },
  { name: "Docker", proficiency: 80 },
  { name: "CI/CD", proficiency: 85 },
  { name: "Git", proficiency: 90 },
  { name: "REST APIs", proficiency: 95 },
];

const Skills = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-200 text-sm">
        Hover Over a Skill For Current Proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} proficiency={skill.proficiency} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
