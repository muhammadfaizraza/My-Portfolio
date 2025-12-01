import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "../components/BackGroundCircles";
import firstpicture from "../assets/firstpicture.jpg";
import Image from "next/image";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi",
      "This is Muhammad Faiz Raza",
      "<Full-Stack JavaScript Engineer/>",
      "MERN Stack Expert",
      "React Native Developer",
      "AI & Agentic Systems",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-0">
      <BackGroundCircles />

      <Image
        src="/profile.jpg"
        className="relative rounded-full mx-auto object-cover w-32 h-32"
        width="128"
        height="128"
        alt="Muhammad Faiz Raza"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[5px]">
          Full-Stack JavaScript Engineer
        </h2>
        <h1 className="text-10xl lg:text-3xl font-semibold px-19">
          <span>
            {text}
            <Cursor cursorColor="red" />
          </span>
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButtons">About </button>
          </Link>
          <Link href="#skills">
            <button className="heroButtons">Skills</button>
          </Link>
          <Link href="#experiences">
            <button className="heroButtons">Experiences</button>
          </Link>
          <Link href="#contact">
            <button className="heroButtons">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
