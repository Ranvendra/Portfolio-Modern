import React from "react";
import { Navigation } from "lucide-react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      {/* left section  */}

      <div className="max-w-190 ml-[3%] z-10 mt-[90%] md:mt-[60%] lg:mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-4 font-sans">
          RANVENDRA
          <br /> CS & A<span>I</span> SOPHOMORE
        </h1>

        {/* Description  */}

        <p className="text-base font-light sm:text-lg tracking-wider text-gray-300 max-w[25rem] lg: max-w-[50rem]">
          At Newton School of Technology, with deep interest in technology and
          innovation, with a strong foundation in DSA, Web Development, and a
          burgeoning interest in Artificial Intelligence.
        </p>

        {/* Buttons  */}

        <div className="flex mt-10 gap-4">
          {/* Contact Me Button - Fixed */}

          <div>
            <a href="#">
              <button className="bg-[rgb(255,82,0)] text-white border-2 border-[rgb(255,82,0)] px-5 py-2 rounded-lg hover:bg-[rgb(255,50,50)] hover:border-[rgb(255,50,50)] hover:scale-105 transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg">
                Message Me
              </button>
            </a>
          </div>

          {/* Resume Button - Fixed */}

          <div>
            <a href="#">
              <button className="flex items-center justify-center bg-transparent hover:bg-green-600 hover:border-green-600 hover:text-white text-white border-1 border-white px-4 py-2 rounded-3xl transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg hover:scale-106">
                Resume <Navigation className="ml-1 h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section- 3D reobot  */}

      <div>
        <Spline 
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/4aocxiH602KhxMTb/scene.splinecode" />

        
      </div>
    </main>
  );
};

export default Hero;
