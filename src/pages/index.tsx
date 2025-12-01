import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "../components/About";
import Experiences from "../components/Exeriences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { PageInfo, Experience, Skill, Project, Social } from "typings";
// import { fetchPageInfo } from "@/utils/fetchPageInfo";
// import { fetchExperience } from "@/utils/fetchExperience";
// import { fetchSocials } from "@/utils/fetchSocials";
// import { fetchSkills } from "@/utils/fetchSkills";
// import { fetchProject } from "@/utils/fetchProject";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experience,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <>
      <Head>
        <title>Muhammad Faiz Raza - Full-Stack JavaScript Engineer</title>
        <meta name="description" content="Portfolio of Muhammad Faiz Raza, a full-stack engineer with 4 years of experience in MERN and React Native applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00ffff]/80 ">
        <Header socials={socials} />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experiences" className="snap-center">
          <Experiences />
        </section>
        <section className="snap-start" id="skills">
          <Skills />
        </section>
        <section className="snap-start" id="projects">
          <Projects />
        </section>
        <section className="snap-start " id="contact">
          <ContactMe />
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer ">
            <div className="justify-center flex items-center">
              <Image
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer
          "
                src="/profile.jpg"
                width={40}
                height={40}
                alt="Muhammad Faiz Raza"
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperience();
//   const socials: Social[] = await fetchSocials();
//   const skills: Skill[] = await fetchSkills();
//   const project: Project[] = await fetchProject();
//   return {
//     props: {
//       pageInfo,
//       experiences,
//       socials,
//       skills,
//       project,
//     },
//     revalidate: 10,
//   };
// };
