import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <nav className="right-0 z-30 flex items-center justify-between p-4 py-6 ">
      <div>
        <span className="text-3xl text-white">eli </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 m-8 text-xl">
        <a>
          {" "}
          <FaGithub />
        </a>
        <a>
          {" "}
          <FaXTwitter />
        </a>
        <a>
          {" "}
          <FaInstagram />
        </a>
        <a>
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
