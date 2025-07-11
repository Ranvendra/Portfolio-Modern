import { useMediaQuery } from "react-responsive";
import { Navigation } from "lucide-react";
import Spline from "@splinetool/react-spline";


const Hero = () => {

  // Hero Image Responsive.
  const insMobile = useMediaQuery({ maxWidth: 1080 });


  return (
    <main className="flex lg:mt-20 flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      {/* left section  */}

      <div className="max-w-190 ml-[3%] z-10 mt-[90%] md:mt-[60%] lg:mt-20">
        <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-4 font-sans z-10">
          RANVENDRA
          <br /> CS & A<span>I</span> SOPHOMORE
        </h1>

        {/* Description  */}

        <p className="text-base font-light sm:text-lg tracking-wider text-gray-300 max-w[25rem] lg: max-w-[50rem] z-10">
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
              <button className="flex items-center justify-center bg-transparent hover:bg-white hover:border-white hover:text-[rgb(255,50,50)] text-white border-1 border-white px-4 py-2 rounded-3xl transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg hover:scale-106">
                Resume <Navigation className="ml-1 h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section- 3D reobot  */}

      {insMobile ?
      <div className="z-[-50] relative overflow-hidden border-2 border-amber-500">
        <img src = "/hero3.png"
          className= "relative overflow-hidden z-[-50] border-1 border-green-500"
        />
      </div>
        :

        <Spline 
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/4aocxiH602KhxMTb/scene.splinecode" />


      }

        
      
      
    </main>
  );
};

export default Hero;
