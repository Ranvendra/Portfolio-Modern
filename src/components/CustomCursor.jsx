import React from 'react'
import { useRef, useEffect } from 'react'
import {gsap} from "gsap";

const CustomCursor = () => {

    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    const isMobile = (typeof window !== 'undefined') && window.matchMedia("(max-width: 768px)").matches

    if (isMobile){
        return null
    }


    useEffect(()=> {

        // Get Cursor Element

        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current

        // initial position from screen

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50
        })

        // variable which controls cursor position with different speeds

        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.2, ease: "power3.out"
        })

        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.2, ease: "power3.out"
        })

        const xToBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.2, ease: "power2.out"
        })

        const yToBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.2, ease: "power3.out"
        })


        // Mouse Move handler

        const handlemouseMove = (e) => {

            xTo(e.clientX)
            yTo(e.clientY)
            xToBorder(e.clientX)
            yToBorder(e.clientY)

        }


        // Add Mouse Move Listner

        window.addEventListener("mousemove", handlemouseMove)

        // Add Click Animation

        window.addEventListener("mousedown", ()=>{
            gsap.to([cursor, cursorBorder], {
                scale: 0.6,
                duration: 0.2,
            })
        })

        window.addEventListener("mouseup", ()=>{
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.2,
            })
        })



    }, [])


  return (
    <>

    {/* Main Course Bot  */}

    <div
        ref ={cursorRef}
        className='fixed pointer-events-none top-0 left-0 w-[15px] h-[15px] bg-green-400 rounded-full pointor-events-none z-[999]'
    />

        <div
        ref ={cursorBorderRef}
        className='fixed pointer-events-none top-0 left-0 w-[30px] h-[30px] border-2  border-green-200 rounded-full pointor-events-none z-[999] opacity-70'
    />



   

    </>
  )

}
export default CustomCursor