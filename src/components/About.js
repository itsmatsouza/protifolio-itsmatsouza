import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// link
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section min-h-[85vh]" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-10 items-center h-screen lg:flex-row lg:items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-about jusitfy-center bg-contain bg-no-repeat w-[200px] lg:h-[400px] mix-blend-lighten"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <motion.h2
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex justify-center lg:justify-start text-gradient text-[27px] lg:h2 drop-shadow"
            >
              Sobre mim
            </motion.h2>
            <motion.h3
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              className="text-[20px] text-center lg:text-start lg:h3 mb-4"
            >
              Sou um{" "}
              <span className="text-[#406aff] font-semibold">
                desenvolvedor
              </span>{" "}
              Freelancer e{" "}
              <span className="text-[#406aff] font-semibold">contador</span>.
              Sou formado em Ciências Contábeis e atualmente estou finalizando o
              curso Full Stack JS da OneBitCode!
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              className="text-center lg:text-start mb-6"
            >
              Atualmente não tenho nenhuma experiência como desenvolvedor,
              porém,{" "}
              <span className="text-[#406aff] font-semibold">
                não se deixe enganar
              </span>
              , eu compenso a falta de experiência com{" "}
              <span className="text-[#406aff] font-semibold">
                criatividade e dedicalção
              </span>
              ! Me ajude a aumentar meu portifólio =)
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              className="flex justify-center lg:justify-start"
            >
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="btn btn-lg flex items-center justify-center cursor-pointer"
              >
                Contato
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
