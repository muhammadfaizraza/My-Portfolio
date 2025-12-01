import React from "react";
import ExperienceCard from "./ExperienceCard";
import Avancera from "../../public/Avancera.png";
import SantexLogo from "../../public/santex-logo.png";
import ExpertizoLogo from "../../public/expertizo-logo.png";
import NoorLogo from "../../public/noor-logo.png";

type Props = {};

const experiences = [
  {
    title: "Full-Stack Mobile App Developer",
    company: "Santex Products",
    period: "02/2025 - Present",
    logo: SantexLogo,
    points: [
      "Delivered React Native app and Node/Express services; implemented JWT/OAuth2 with RBAC for secure flows",
      "Built real-time features with WebSockets (chat/notifications) and optimized API hot paths with caching/pagination",
      "Set up CI/CD (lint/tests/build/release), reducing release time from hours to minutes and improving reliability",
      "Collaborated with product/design to scope features, write technical specs, and improve user experience"
    ]
  },
  {
    title: "MERN Stack Developer",
    company: "Avancera Solutions",
    period: "01/2022 - 01/2025",
    logo: Avancera,
    points: [
      "Shipped full-stack features in React/Next.js + Node/Express across SaaS/e-commerce projects under tight SLAs",
      "Improved frontend performance via code-splitting, image optimization, and caching; reduced LCP/TTI significantly",
      "Integrated payments and notifications (Firebase/Twilio) with secure flows, monitoring, and audit trails",
      "Reviewed PRs and mentored juniors; created templates and checklists to speed up delivery"
    ]
  },
  {
    title: "MERN Stack Certification",
    company: "Expertizo University",
    period: "Completed",
    logo: ExpertizoLogo,
    points: [
      "Completed comprehensive MERN Stack certification program",
      "Gained expertise in MongoDB, Express.js, React.js, and Node.js",
      "Built full-stack applications following industry best practices"
    ]
  },
  {
    title: "Professional Diploma in IT",
    company: "Noor College",
    period: "Completed",
    logo: NoorLogo,
    points: [
      "Professional Diploma in Information Technology",
      "Foundation in computer science and software development",
      "Studied programming fundamentals and web technologies"
    ]
  }
];

const Exerience = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-300 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00ffff]/80 ">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            points={exp.points}
            logo={exp.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Exerience;
