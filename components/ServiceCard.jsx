import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt
  className="w-[250px]"
  tiltMaxAngleX={25}
  tiltMaxAngleY={25}
  scale={1.05}
  perspective={1200}
  transitionSpeed={900}
>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="w-full p-[2px] rounded-[20px] shadow-card bg-gradient-to-br from-[#65f0ff] via-[#6e3aff] to-[#ff4df4]"
  >
    <div className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[20px] py-6 px-10 min-h-[250px] flex flex-col justify-center items-center text-center">
      <div className="w-16 h-16 mb-3">{icon}</div>
      <h3 className="text-[#1d283a] dark:text-ctnPrimaryDark text-[20px] font-bold">
        {title}
      </h3>
    </div>
  </motion.div>
</Tilt>


  );
}

export default ServiceCard;
