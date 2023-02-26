import React from "react";
// icons
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiGit } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaReact, FaNodeJs, FaSass, FaNpm } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMicrosoftexcel,
  SiGooglesheets,
} from "react-icons/si";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// type animation
import { TypeAnimation } from "react-type-animation";

function card(i, name) {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      className="flex flex-col justify-center items-center h-[110px] w-[110px] lg:h-[150px] lg:w-[150px] bg-black/20 rounded-full backdrop-blur-sm"
    >
      <motion.i
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="text-[50px] lg:text-[60px]"
      >
        {i}
      </motion.i>
      <p className="text-bold text-[12px] lg:text-[16px]">{name}</p>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col h-screen md:justify-center lg:justify-center items-center">
          <motion.h2
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex pb-6 text-[28px] h2 text-bold justify-center items-center"
          >
            <TypeAnimation
              sequence={["tecnologias", 2000, "serviços", 2000]}
              speed={50}
              className="text-gradient"
              wrapper="span"
              repeat={Infinity}
            />{" "}
            <span className="text-[#406aff] font-semibold">que uso</span>
          </motion.h2>
          <div className="flex justify-center items-center flex-wrap gap-3">
            {card(<AiFillHtml5 />, "HTML5")}
            {card(<DiCss3 />, "CSS3")}
            {card(<IoLogoJavascript />, "JAVASCRIPT")}
            {card(<FaNodeJs />, "NODE JS")}
            {card(<FaReact />, "REACT")}
            {card(<DiGit />, "GIT")}
            {card(<AiFillGithub />, "GITHUB")}
            {card(<FaNpm />, "NPM")}
            {card(<FaBootstrap />, "BOOTSTRAP")}
            {card(<FaSass />, "SASS")}
            {card(<SiTailwindcss />, "TAILWIND")}
            {card(<SiMicrosoftexcel />, "EXCEL")}
            {card(<SiGooglesheets />, "GOOGLE SHEETS")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
