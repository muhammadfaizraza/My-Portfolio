import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Pool Nest",
    description: "SaaS application for multi-vendor pool services. Built admin dashboard, scheduling, and payouts with role-based access and granular permissions.",
    link: "https://dashboard.thepoolnest.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "RBAC"]
  },
  {
    name: "Saddle Battles",
    description: "Real-time betting web app built using MERN stack. Implemented multilingual, real-time experience with websocket rooms and settlement logic. Handled high-traffic live sessions with admin controls and audit logging.",
    link: "https://saddlebattles.com/",
    tech: ["MERN Stack", "WebSockets", "Real-time", "Admin Controls"]
  },
  {
    name: "Legacy Honored",
    description: "QR management system using the MERN stack. QR generation/tracking with analytics and RBAC for fast lookups over large datasets.",
    link: "https://app.legacyhonored.com/",
    tech: ["MERN Stack", "QR System", "Analytics", "RBAC"]
  }
];

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
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#00ffff]/50">
                  Project {i + 1} of {projects.length}: {project.name}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#00ffff]/20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="text-center md:text-left">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffff] hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#00ffff] opacity-50 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
