import Link from "next/link";
import { motion } from "framer-motion";

import { aboutPoints, RESUME_GOOGLE_DRIVE, socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
  
      <div className="space-y-3">
        {
          aboutPoints.map((about, idx) => {
          return <div key={idx} className="flex gap-2">
                  <span>{about.icon}</span>
                  <p>{about.text}</p>
                </div>
          })
        }
      </div>
    <div className="dark:bg-ctnSecondaryDark bg-gray-300 h-[2px] w-full rounded-lg shadow-md"></div>

        <div className="w-fit break-words">
          <Link
            href="mailto:dev.ujjawal.gupta@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-full gap-2 flex 
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-110"
            >
            <EmailIcon className="w-[30px] h-[30px]" />
            dev.ujjawal.gupta@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-125 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href={RESUME_GOOGLE_DRIVE}
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-indigo-500 text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-gradient-to-r from-sky-500  via-blue-400 to-indigo-500 text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
