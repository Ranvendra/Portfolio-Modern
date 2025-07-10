import React from 'react'
import {useRef, useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ExternalLink} from "lucide-react"



// Project cards data array 
const ProjectCards = [
    {
        id: 1,
        title: "Python",
        imageSrc: "/Python.png"

    },

    {
        id: 2,
        title: "NodeJS",
        imageSrc: "/NodeJS.png"

    },

        {
        id: 3,
        title: "Html + CSS + JS",
        imageSrc: "/WebDev.png"

    },

    {
        id: 4,
        title: "ReactJS",
        imageSrc: "/ReactJS.png"

    }

]



const ProjectSection = () => {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const triggerRef = useRef(null);
    const horizontalRef = useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        // title reveal animation
        gsap.fromTo(
            titleRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse" 
                }
            }
        )

        // section entrance effect

        gsap.fromTo(
            triggerRef.current, 
            {
                y: 100,
                rotationX: 20,
                opacity: 0
            },

            {
                y: 0,
                rotationX: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Parallax Effect for entire section
        gsap.fromTo(
            sectionRef.current,
            {
                backgroundPosition: "50% 0%"
            },

            {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        )

        // Horizontal Scrolling
        // Create the horizontal scrolling animation 

        const horizontalScroll = gsap.to(".panel", {
            xPercent: -100 * (ProjectCards.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: ()=>`+=${horizontalRef.current.offsetWidth}`,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (ProjectCards.length - 1),
                    duration: {main: 0.2, max: 0.3},
                    delay: 0.1
                },
                invalidateOnRefresh: true,
            }
        })

        // Image animation
        // Animate each image panel

        const panels = gsap.utils.toArray(".panel")

        {panels.forEach((panel, i)=> {
            const image = panel.querySelector(".project-image")
            const imageTitle = panel.querySelector(".project-title")

            // Create a timeline For Each Panel

            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalScroll,
                    start: "left right",
                    end: "right left",
                    scrub: true
                }
            })

            // image scale and opacity animation

            t1.fromTo(image, { scale: 0, rotate: -20 }, {scale: 1, rotate: 1, duration: 0.5})

            // Title Animation If it Exist

            if (imageTitle) {
                t1.fromTo(imageTitle, {y: 30}, {y: -100, duration: 0.3, }, 0.2)
            }
        })}

        

    },[ProjectCards.length])


  return (
    <section
        ref={sectionRef}
        id='horizontal-section'
        className='relative py-20 bg-gray-100 overflow-hidden border-2 border-amber-500'
    >
        {/* section Title  */}

        <div className='container mx-auto px-4 mb-16 relative z-10 border-2 border-amber-500'>

            <h2
                ref={titleRef}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-blue-600 opacity-0'>
                Tech Stack
            </h2>

        </div>

        {/* Horizontal section  */}

        <div 
            ref={triggerRef}
            className='overflow-hidden opacity-0 border-2 border-amber-500'>

            <div
                ref={horizontalRef}
                className='horizontal-section flex md:w-[400%] w-[420%]'>

                {/* Project Cards Iterate  */}

                {ProjectCards.map((card)=> {

                    return (

                        <div
                            key={card.id}
                            className='panel relative flex items-center justify-center'
                        >
                            <div className='relative w-[70%] h-[70%] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 '>

                                <img
                                    src = {card.imageSrc}
                                    alt='Image Not Loaded.'
                                    className='project-image max-w-full max-h-full rounded-2xl object-cover'
                                 />

                                 <h2
                                    className='project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-blue-600 transition-colors duration-300 cursor-pointor'
                                >
                                        {card.title} <ExternalLink/>
                                </h2>
                               

                            </div>
                            
                        </div>
                    )

                    
                })}

            </div>


        </div>

    </section>
  )
}

export default ProjectSection

// 