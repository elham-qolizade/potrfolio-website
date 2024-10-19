import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies: React.FC = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center tracking-normal font-medium"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 lg:flex-row"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          {" "}
          <AiOutlineHtml5 className="text-orange-700 text-7xl " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          {" "}
          <FaCss3Alt className="text-blue-600 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          {" "}
          <TbBrandTailwind className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          {" "}
          <IoLogoJavascript className="text-yellow-400 text-7xl" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiTypescript className="text-7xl text-cyan-800" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <TbBrandFramerMotion className="text-pink-600 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
