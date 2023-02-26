import React from "react";
// image
import Image from "../assets/perfil6.png";
// icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// link
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="text-[45px] font-[900] leading-[1] lg:text-[90px]"
            >
              MATEUS <span className="text-[#406aff]">SOUZA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="mb-6 text-[25px] pt-2 lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">Eu sou</span>
              <TypeAnimation
                sequence={[
                  "Desenvolvedor",
                  2000,
                  "Contador",
                  2000,
                  "Web Designer",
                  2000,
                ]}
                speed={50}
                className="text-[#406aff]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="flex items-center justify-center btn btn-lg w-[200px] cursor-pointer"
              >
                Contato
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="flex items-center btn btn-lg w-[200px] justify-center cursor-pointer"
              >
                Portifolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a target={"blank"} href="https://github.com/itsmatsouza">
                <FaGithub />
              </a>
              <a target={"blank"} href="https://www.instagram.com/itsmatsouza/">
                <FaInstagram />
              </a>
              <a
                target={"blank"}
                href="https://www.linkedin.com/in/mateus-souza-825084194/"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex justify-center"
          >
            <img
              src={Image}
              alt="perfil"
              className="w-[300px] lg:w-[400px] relative lg:left-[85px] drop-shadow"
            ></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
