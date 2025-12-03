import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { coding } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Link from "next/link";

function CodingCard({
  index,
  platform,
  link,
  image,
  points
}) {

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
        <Link href={link} target="_blank" className="w-full h-full relative">
            <Tilt
                tiltMaxAngleX="10"
                tiltMaxAngleY="10"
                className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit shadow-sm shadow-primary"
            >
                <div className="relative w-full h-[230px]">
                <div className="w-full h-full object-cover rounded-2xl relative">
                    <Image
                    src={image}
                    alt="coding_platform_image"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className="object-fill rounded-2xl"
                    />
                </div>
                </div>

                <div className="mt-5">
                <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
                    {platform}
                </h3>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {points.map((point, index) => (
                    <li
                        key={`coding-${index}`}
                        className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                    ))}
                </ul>
            </Tilt>
        </Link>
    </motion.div>
  );
}

function Coding() {
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="coding">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have solved so far</p>
        <h2 className={"sectionHeadText"}>Coding Practice Journey.</h2>
      </motion.div>

      

      <div className="md:mt-20 mt-10 flex justify-center flex-col md:flex-row gap-6 md:gap-10">
        {coding.map((platform, index) => (
          <CodingCard key={`coding-${index}`} index={index} {...platform} />
        ))}
      </div>
    </section>
  );
}

export default Coding;

