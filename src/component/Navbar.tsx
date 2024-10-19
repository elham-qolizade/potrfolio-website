import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logonomy-1729019937346.png";
const Navbar: React.FC = () => {
  return (
    <nav className="right-0 z-30 flex items-center justify-between p-4 py-6 ">
      <div>
        <span className="text-3xl text-white">
          <img className="max-w-20" src={logo} alt="" />
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 m-8 text-xl">
        <a href="https://github.com/">
          {" "}
          <FaGithub />
        </a>
        <a href="https://x.com/home">
          {" "}
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/elham_qolizade/?next=%2F&hl=en">
          {" "}
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/elham-qolizadeh-043131334/">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
