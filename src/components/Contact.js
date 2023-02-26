import React from "react";
// icons
import { BsWhatsapp } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="h-[80vh] lg:h-screen flex flex-col lg:flex-row pb-10 justify-center items-center">
          <div className="flex flex-col lg:flex-1 text-center lg:text-end lg:pr-5">
            <motion.h3
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="h3 text-[60px]"
            >
              E ai?
            </motion.h3>
            <motion.h2
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="leading-[1] text-[70px]"
            >
              Vamos trabalhar juntos?!
            </motion.h2>
          </div>
          <div className="lg:flex-1 pt-5 lg:pt-0">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col justify-evenly w-[300px] h-[180px] lg:w-[300px] lg:h-[280px] bg-black/20 rounded-[10px] backdrop-blur-sm p-5"
            >
              <motion.i
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-[60px] pb-5"
              >
                <BsWhatsapp />
              </motion.i>
              <a
                target={"blank"}
                href="https://wa.me/5519998175796?text=Ol%C3%A1+Mateus%21+Vim+pelo+seu+portif%C3%B3lio+e+queria+lhe+fazer+uma+proposta%21"
              >
                <motion.button
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  className="btn btn-lg"
                >
                  Me chame no WhatsApp!
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
