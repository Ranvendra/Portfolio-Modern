import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    //This registers the ScrollTrigger plugin with GSAP so you can use it in your animations.
    gsap.registerPlugin(ScrollTrigger);

    //Title Animation

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },

      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          // ye wala "s" small hi likha jayega, lekin isko use karne ke pahle "S" capital s wala import karna padega.
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: -400, opacity: 0, filter: "blur(10px)" },

      {
        y: -700,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // stars animation with different speeds and directions

    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 20}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#340064]"
    >
      {/* // Stars - by using Javascript */}

      <div className="absolute inset-0 overflow-hidden blur-[10]">
        {[...Array(15)].map((_, i) => (
          <div
            ref={addToStars}
            key={`stars-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto p-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* About content- Container  */}
      <div
        ref={introRef}
        className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-15 px-5 lg:px-28 py-15 opacity-0"
      >
        {/* About Text */}
        <div className="md:w-3/5 h-full">
          <h3 className="text-sm md:text-2xl text-purple-200 tracking-wider h-full">
            I’m Ranvendra Pratap Singh, a second-year B.Tech student at Newton
            School of Technology, where I’m growing through hands-on experience
            in full-stack development, data structures, and system design.
            <br /> <br />
            I enjoy turning ideas into practical, working solutions. From the
            beginning of my journey, I’ve focused on writing clean, reliable
            code and building projects that reflect real-world needs. I value
            simplicity, clarity, and continuous learning in everything I do.
            <br /> <br />
            Driven by curiosity and a strong sense of ownership, I approach
            every challenge with focus and intention. Whether working
            independently or as part of a team, I aim to contribute
            thoughtfully, grow steadily, and build with purpose.
          </h3>
        </div>

        {/* Image */}
        <div className="md:w-2/5 overflow-hidden">
          <img
            src={"./Main.webp"}
            alt="Portrait of Ranvendra Pratap Singh"
            className="w-full px-12 h-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
