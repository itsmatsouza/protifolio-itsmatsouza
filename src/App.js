import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-fixed overflow-hidden">
      <div className="bg-site bg-no-repeat bg-cover w-full h-screen">
        <Nav />
        <Header />
        <Banner />
      </div>
      <div className="bg-bgabout bg-no-repeat bg-cover w-full h-screen">
        <About />
      </div>
      <div className="bg-services bg-no-repeat bg-cover w-full h-screen">
        <Services />
      </div>
      <div className="bg-work bg-no-repeat bg-cover w-full h-screen">
        <Work />
      </div>
      <div className="bg-contact bg-no-repeat bg-cover w-full h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default App;
