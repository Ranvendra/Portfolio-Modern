import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  useEffect(() => {
    //Register Scroll Trigger PLugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger when the page is fully Loaded
    ScrollTrigger.refresh();

    // CleanUp ScrollTrigger on Component Unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* Gradient Image  */}

      <img
        className="absolute top-0 right-0 opacity-60 -z-1 "
        src="/gradient.png"
      />

      {/* Blur EFFECT  */}

      <div className="h-0 w-[40rem] absolute top-20% right-[-5%] shadow-[0_0_1000px_25px_#e99b63] -rotate-[30deg] -z-10"></div>

      {/* header Comopnet  */}
      <Header />
      <Hero />
      <AboutSection />
      <ProjectSection />

      {/* <div className="border-2 border-amber-500">
        <div className="mt-20 text-4xl text-center">. . . This Project is Still in Development . . .</div>

      <div className="mt-1 text-md text-center">(and Do Not Try to Copy 🧐, Nahi to pulis case Kar Dunga 😂🤣🤣 )</div>
      </div> */}
    </main>
  );
};

export default App;
