import React from "react";
import Profile from "../assets/photo_2024-10-04_20-58-31.jpg";
import { motion } from "framer-motion";

const containerVaiants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero: React.FC = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center pb-8 lg:mt-10">
            <motion.img
              src={Profile}
              className="w-[350px]  border rounded-3xl border-stone-900"
              alt=""
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVaiants}
            className="flex flex-col items-center mt-10 lg:items-start"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:tex-8xl "
            >
              Elham Gholizade Mahali
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="text-3xl text-transparent bg-gradient-to-r from-stone-300 to-slate-600 bg-clip-text tracking-light"
            >
              Junior frontend developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="max-w-lg py-6 my-2 text-xl leading-relaxed tracking-tighter"
            >
              I am an enthusiastic and detail-oriented young developer with 2
              years of hands-on experience and skilled knowledge looking to use
              my technical and specialized skills to provide value to the client
              and contribute to successful projects today and in the future.
              Aiming to tackle new challenges and use coding and debugging
              skills to develop new features and improve the experience
            </motion.p>
            <motion.a
              variants={childVariants}
              className="p-4 mb-10 text-sm bg-white rounded-full text-stone-800"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
