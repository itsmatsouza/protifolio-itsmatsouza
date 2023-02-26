import React from "react";
// logo
import Logo from "../assets/4.png";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          <a
            href="https://itsmatsouza.github.io/protifolio-itsmatsouza/"
            className="bg-black/20 w-[200px] rounded-full flex justify-center items-center backdrop-blur-sm"
          >
            <img src={Logo} alt="logo-img" className="w-[70px]"></img>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
