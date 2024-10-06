import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
const Technologies: React.FC = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 lg:flex-row">
        <div>
          {" "}
          <AiOutlineHtml5 className="text-orange-700 text-7xl " />
        </div>
        <div>
          {" "}
          <FaCss3Alt className="text-blue-600 text-7xl" />
        </div>
        <div>
          {" "}
          <TbBrandTailwind className="text-7xl text-cyan-400" />
        </div>

        <div>
          {" "}
          <IoLogoJavascript className="text-yellow-400 text-7xl" />
        </div>

        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div>
          <SiTypescript className="text-7xl text-cyan-800" />
        </div>
        <div>
          <TbBrandFramerMotion className="text-pink-600 text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
