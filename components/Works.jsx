import React, { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { topProjects, otherProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github-blue.svg";
import GlobeLogo from "./../public/assets/icons/globe-blue.svg";
import YoutubeLogo from "./../public/assets/icons/youtube.svg";
import Link from "next/link";

function ProjectCard({
  index,
  name,
  description,
  tags,
  time,
  image,
  github_link,
  live_link,
  youtube_link
}) {
  const CHAR_LIMIT = 280;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      <Tilt
        tiltMaxAngleX="10"
        tiltMaxAngleY="10"
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight relative rounded-2xl 
          sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary 
          flex flex-col group"
      >
        <Link href={live_link || github_link} target="_blank" className="relative w-full h-[230px]">
          <div className="w-full h-full object-cover rounded-2xl relative overflow-hidden">
            <Image
              src={image}
              alt={`${name} Image`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-cover rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        </Link>

        <Link href={live_link || github_link} target="_blank" className="mt-5 px-4">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {truncateText(description, CHAR_LIMIT)}
          </p>
        </Link>

        <Link href={live_link || github_link} target="_blank" className="mt-4 flex flex-wrap gap-x-2 px-4">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </Link>

        <div className="mt-auto w-full py-2 flex justify-between items-center text-sm px-4">
          <span className="font-semibold">
            {time}
          </span>
          <div className="flex gap-2 items-center justify-center">
            <Link href={github_link} target="_blank"><GithubLogo className="w-6 h-6 z-10" /></Link>
            
            {
              live_link && <Link href={live_link} target="_blank"><GlobeLogo className="w-6 h-6 z-10" /></Link>
            }
              
            {
            youtube_link && <Link href={youtube_link} target="_blank"><YoutubeLogo className="w-7 h-7 z-10" /></Link>
            } 
           
          </div>
        </div>

      </Tilt>
    </motion.div>
  );
}

function Works() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectRef = useRef(null)
  const handleShowProjectClick = () => {
    setShowAllProjects(!showAllProjects);
    if (projectRef.current && showAllProjects) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="projects" ref={projectRef}>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have built so far</p>
        <h2 className={"sectionHeadText"}>Projects.</h2>
      </motion.div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {topProjects.map((project, index) => {
          return <ProjectCard key={`project-${index}`} index={index} {...project} />
        })}

        {showAllProjects && otherProjects.map((project, index) => {
          return <ProjectCard key={`project-${index}`} index={index} {...project} />
        })}
      </div>


        <div className="flex items-center justify-center">
          <button className="
            mt-10 px-6 py-3 rounded-xl 
            text-lg font-semibold 
            text-white
            bg-gradient-to-r from-indigo-500 to-violet-600
            hover:bg-gradient-to-r hover:from-violet-600 hover:to-pink-500
            transition-all duration-500 
            hover:-translate-y-1 
            hover:shadow-xl 
            active:translate-y-0 
            active:scale-95"  
            onClick={handleShowProjectClick } >{showAllProjects ? "Show Less" : "View All Projects"}
          </button>
        </div>
      
    </section>
  );
}

export default Works;
