import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function EducationCard({ education, theme }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
            : "linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)",
        color: theme !== "dark" ? "#7e8c9f" : "#e5e6e9",
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#2b2b42"}`,
      }}
      style={{
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238 / 0.05)",
      }}
      date={education.duration}
      iconStyle={{ background: education.iconBg, backgroundColor: "#e0eaf0" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[90%] h-[90%] relative overflow-hidden">
            <Image
              src={education.icon}
              alt={education.institute_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
          {education.course}
        </h3>

        <p
          className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.institute_name}
        </p>

        
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Education() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section className="w-full p-3 mt-10 md:mt-20">
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>What I have studied so far</p>
        <h2 className={`sectionHeadText text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-8 md:mt-20 flex flex-col">
        <VerticalTimeline lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(Education, "education");
