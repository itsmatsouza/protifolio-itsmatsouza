import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
// link
import { Link } from "react-scroll";
// motion
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-sm rounded-full max-w-[460px] mx-auto px-5 flex
        justify-between text-2xl items-center"
        >
          <motion.div whileTap={{ scale: 1.4, y: -10 }}>
            <Link
              to="home"
              smooth={true}
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 1.4, y: -10 }}>
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 1.4, y: -10 }}>
            <Link
              to="services"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsClipboardData />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 1.4, y: -10 }}>
            <Link
              to="work"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 1.4, y: -10 }}>
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsChatSquare />
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
