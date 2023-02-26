import React from "react";
// icons
import { AiOutlineLaptop } from "react-icons/ai";
import { TbFileSpreadsheet } from "react-icons/tb";
import { VscDebugDisconnect } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
// images
import Img1 from "../assets/portifolio1.png";
import Img2 from "../assets/portifolio2.png";
import Img3 from "../assets/portifolio3.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto h-screen">
        <div className="pt-6 flex flex-col items-center justify-start">
          <motion.h2
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="h2 text-[24px] lg:h2 text-gradient"
          >
            Meus
            <span className="text-[#406aff] font-semibold pl-1">serviços</span>
          </motion.h2>
          <motion.div
            drag={window.innerWidth < 948 ? "x" : ""}
            dragConstraints={{ right: 300, left: -300 }}
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-x-6"
          >
            <div className="p-5 w-[300px] lg:w-[350px] lg:h-200px bg-black/20 rounded-[10px] backdrop-blur-sm">
              <i className="pb-2 flex items-center justify-center text-[70px]">
                <AiOutlineLaptop />
              </i>
              <h3 className="pb-2 flex items-center justify-center text-[24px] font-bold">
                Web Designer
              </h3>
              <p className="text-[17px] leading-[1] text-center">
                Faço a criação de sites desde a funcionalidade ao design. Uso as
                mais diversas ferramentas para isso, mas o principal é o React.
              </p>
            </div>
            <div className="p-5 w-[300px] lg:w-[350px] lg:h-200px bg-black/20 rounded-[10px] backdrop-blur-sm">
              <i className="pb-2 flex items-center justify-center text-[70px]">
                <TbFileSpreadsheet />
              </i>
              <h3 className="pb-2 flex items-center justify-center text-[24px] font-bold">
                Excel/GoogleSheets
              </h3>
              <p className="text-[17px] leading-[1] text-center">
                Crio ferramentas de controle e manipulação de dados para todas
                as áreas necessárias. Criação de códigos no VisualBasic no Excel
                e códigos em JavaScript no GoogleSheets.
              </p>
            </div>
            <div className="p-5 w-[300px] lg:w-[350px] lg:h-200px bg-black/20 rounded-[10px] backdrop-blur-sm">
              <i className="font-white pb-2 flex items-center justify-center text-[70px]">
                <VscDebugDisconnect />
              </i>
              <h3 className="pb-2 flex items-center justify-center text-[24px] font-bold">
                API Web Services
              </h3>
              <p className="text-[17px] leading-[1] text-center">
                Crio integrações de sistemas ou quaisquer base de dados com
                interfaces Web. Facilitanto a manipulação e adicionando recursos
                necessários para o processo.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center pt-6">
          <motion.h2
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center justify-center h2 text-[24px] lg:h2 text-gradient"
          >
            Meus{" "}
            <span className="text-[#406aff] font-semibold px-1">
              principais
            </span>{" "}
            projetos
          </motion.h2>
          <motion.div
            drag={window.innerWidth < 948 ? "x" : ""}
            dragConstraints={{ right: 300, left: -300 }}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-x-6"
          >
            <motion.a
              target={"blank"}
              href="https://itsmatsouza.github.io/toDoList/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="p-5 w-[300px] lg:w-[350px] lg:h-200px bg-black/20 rounded-[10px] backdrop-blur-sm">
                <img
                  src={Img1}
                  alt="portifolio-img"
                  className="rounded-[10px] bg-cover pb-2 flex items-center justify-center"
                ></img>
                <h3 className="pb-2 flex items-center justify-center text-[24px] font-bold">
                  ToDoList(Apenas PC)
                  <i>
                    <GoLinkExternal />
                  </i>
                </h3>
              </div>
            </motion.a>
            <motion.a
              target={"blank"}
              href="https://itsmatsouza.github.io/tictactoe/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="p-5 w-[300px] lg:w-[350px] lg:h-200px bg-black/20 rounded-[10px] backdrop-blur-sm">
                <img
                  src={Img2}
                  alt="portifolio-img"
                  className="rounded-[10px] bg-cover pb-2 flex items-center justify-center"
                ></img>
                <h3 className="pb-2 flex items-center justify-center text-[24px] font-bold">
                  Tic Tac Toe
                  <i>
                    <GoLinkExternal />
                  </i>
                </h3>
              </div>
            </motion.a>
            <motion.a
              target={"blank"}
              href="https://itsmatsouza.github.io/weather-app-react/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="p-5 w-[300px] lg:w-[350px] lg:h-200px bg-black/20 rounded-[10px] backdrop-blur-sm">
                <img
                  src={Img3}
                  alt="portifolio-img"
                  className="rounded-[10px] bg-cover pb-2 flex items-center justify-center"
                ></img>
                <h3 className="pb-2 flex items-center justify-center text-[24px] font-bold">
                  Weather App
                  <i>
                    <GoLinkExternal />
                  </i>
                </h3>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
