"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import Image from 'next/image';

function page() {

  

 
  useLayoutEffect(() => {

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        smoothWheel: true,
      })
    })()

    let ctx = gsap.context(() => {

      gsap.registerPlugin(ScrollTrigger);
      
         gsap.to(".pinner", {
              scrollTrigger: {
                trigger: ".pinner",
                start: "center center",
                end: "+=2000px",
                pin: true,
                scrub: true,
                markers: true,
                onUpdate: (self) => console.log("progress:", self.progress),
              },
            })
    

    })
    return () => ctx.revert();


  }, [])

  /*
    <div className="trigger flex rounded-xl overflow-hidden row-span-2 col-span-2">
              <img src="../../assets/gbg2.jpg" className="photo w-full h-full object-cover scale-[200%] " />
            </div>
  */

            
  return (
    <div className=' h-[300vh] w-full flex flex-col text-neutral-200 bg-neutral-950 '>
    
      <div className=' h-screen w-full flex justify-center items-center'>
      <div className=' pinner w-[8vh] flex h-[4vh] absolute rounded-xl border border-neutral-600 items-center justify-center font-extralight'>2019</div>
      </div>
    </div>
  )
}

export default page