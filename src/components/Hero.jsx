import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  // Hero Image Responsive.
  const insMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false, // whether animation should happen only once
      mirror: true,
      offset: 100,
    });

    AOS.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  return (
    <main className="flex lg:mt-20 flex-col-reverse lg:flex-row lg:min-h-[calc(100vh-6rem)] pb-8 lg:pb-0">
      {/* left section  */}

      <div className="max-w-190 ml-[5%] sm:ml-[4%] z-10 lg:mt-60 lg:ml-[4%]">
        <h1
          data-aos="zoom-in-right"
          className="text-[25px] leading-[30px] sm:leading-none sm:text-5xl lg:text-6xl font-semibold tracking-wider my-4 font-sans z-10"
        >
          RANVENDRA
          <br /> SOPHOMORE CSE-<span className="text-amber-600 ">AI</span>
        </h1>

        {/* Description  */}

        <p
          data-aos="zoom-in-right"
          data-aos-duration="1300"
          className="text-base w-[91%] md:font-light sm:text-lg tracking-wider text-gray-300 max-w-[25rem] lg:max-w-[50rem] z-10"
        >
          At Newton School of Technology, with deep interest in technology and
          innovation, with a strong foundation in DSA, Web Development, and a
          burgeoning interest in Artificial Intelligence.
        </p>

        {/* Buttons  */}

        <div className="flex mt-10 gap-4">
          {/* Contact Me Button - Fixed */}

          <div>
            <a href="#">
              <button
                data-aos="fade-up-right"
                className="h-13 md-w-30 text-[17px] bg-[rgb(255,82,0)] text-white border-2 border-[rgb(255,82,0)] px-2 py-2 rounded-lg hover:bg-[rgb(255,50,50)] hover:border-[rgb(255,50,50)] hover:scale-105 transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg"
              >
                Message Me
              </button>
            </a>
          </div>

          {/* Resume Button - Fixed */}

          <div>
            <a href="#">
              <button
                data-aos="fade-up-left"
                className="h-13 flex items-center justify-center bg-transparent hover:bg-white hover:border-white hover:text-[rgb(255,50,50)] text-white border-1 border-white px-4 py-2 rounded-3xl transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg hover:scale-106 hover:font-bold"
              >
                Resume <Navigation className="ml-1 h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section- 3D reobot  */}

      {insMobile ? (
        <div 
          data-aos="zoom-in-left"
          className="z-[-50] relative overflow-hidden">
          <img src="/hero3.png" className="relative overflow-hidden z-[-50]" />
        </div>
      ) : (

         <Spline
         data-aos="zoom-in-left"
    className="absolute scale-120 lg:top-20 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
    scene="https://prod.spline.design/THEacrBqpTGcaN63/scene.splinecode"
  />
        // <div
        //   data-aos="zoom-in-left"
        //   className="absolute scale-150 inset-[-20 ml-20 lg:left-160 lg:top-50 z-[-20]"
        // >
        //   <img src="/hero3.png" className="w-full h-full object-contain" />
        // </div>
      )
      }
    </main>
  );
};

export default Hero;
