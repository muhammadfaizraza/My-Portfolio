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
        src="/profile.jpg"
        height="500"
        width="500"
        alt="Muhammad Faiz Raza"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold md:my-100">
          Here is
          <span className="mx-1 pt-11 underline decoration-gray-100/80">
            My Background
          </span>
        </h4>
        <p className="text-base">
          I am a full-stack engineer with about 4 years of experience in building production
          MERN and React Native applications for SaaS and e-commerce platforms. I possess strong
          skills in React/Next.js, Node/Express, API design, and CI/CD, complemented by a growing
          expertise in Python and agentic AI. Currently working as a Full-Stack Mobile App Developer
          at Santex Products, I've delivered React Native apps and Node/Express services with JWT/OAuth2
          authentication, real-time features with WebSockets, and optimized CI/CD pipelines. Previously,
          as a MERN Stack Developer at Avancera Solutions, I shipped full-stack features, improved frontend
          performance through code-splitting and optimization, and integrated payment and notification
          systems. My focus is on delivering high-performance solutions while collaborating effectively
          with teams to enhance user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
