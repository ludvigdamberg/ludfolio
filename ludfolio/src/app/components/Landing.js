"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { GoArrowDown } from "react-icons/go";

function Landing() {

 
  useEffect(() => {

    const tl = gsap.timeline()

    tl.from(".logo", { y: 20 })
    tl.to(".logo", { duration: 0.5, y: 0, ease: "back.out", delay: 1.2, opacity: 1, stagger: 0.075 })

    setTimeout(() => {

      const tl = gsap.timeline()

      tl.to(".icon", { opacity: 1 })
      tl.to(".scroll", { opacity: 1 })
      tl.to(".icon", { y: 10, duration: 1, ease: "power1.inOut", repeat: -1, yoyo: true })

    }, 3000)


  }, [])


  return (
    <div>
      <div className=' h-[95vh] w-full p-20 flex flex-col '>
        <div className='  p-2 flex flex-col mt-36 mx-auto z-30 border-[1px] border-slate-700 rounded-sm'>
          <h1 className=' logo font-black text-8xl tracking-wide leading-[0.9] text-slate-800 italic opacity-0'>LUDVIG</h1>
          <h1 className=' logo font-black text-7xl tracking-wide leading-none text-slate-800 opacity-0'> DAMBERG</h1>
          <p className=' logo  text-[14px] font-light tracking-wide mx-0.5 text-slate-500 opacity-0 '>software engineer / media technology / computer science</p>
        </div>
        <p data-scroll data-scroll-speed="-0.4" className=' scroll -z-10 mx-auto mt-40 font-bold text-center text-slate-400 text-3xl italic opacity-0'>scroll down</p>
        <GoArrowDown className='icon mx-auto mt-10 text-3xl text-slate-400 opacity-0 -z-10' />
        <div className=' row-span-2 col-span-1'>
          <div className=' font-Roboto font-extralight text-xs p-2'>
          </div>

        </div>

      </div>
      <div className=' h-[50vh] w-full flex flex-col z-20'>

        
      </div>

    </div>
  )
}

export default Landing