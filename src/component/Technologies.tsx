import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

interface IconVariants {
  [key: string]: {
    y: number | number[];
    transition: {
      duration: number;
      ease: string;
      repeat: number;
      repeatType: string;
    };
  };
}

const iconvariants = (duration: number): IconVariants => ({
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

const duration = 2.5; // مدت زمان مورد نظر

const variants = iconvariants(duration);

const Technologies: React.FC = () => {
  return (
    <div className="pb-24">
      <motion.h2
        variants={variants as Variants}
        initial="initial"
        animate="animate"
        className="my-20 text-4xl font-medium tracking-normal text-center"
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
          variants={iconvariants(2.5) as Variants}
        >
          <AiOutlineHtml5 className="text-orange-700 text-7xl " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5) as Variants}
        >
          <FaCss3Alt className="text-blue-600 text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5) as Variants}
        >
          <TbBrandTailwind className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5) as Variants}
        >
          <IoLogoJavascript className="text-yellow-400 text-7xl" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5) as Variants}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5) as Variants}
        >
          <SiTypescript className="text-7xl text-cyan-800" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5) as Variants}
        >
          <TbBrandFramerMotion className="text-pink-600 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
