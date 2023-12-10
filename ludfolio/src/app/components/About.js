"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaGraduationCap } from "react-icons/fa";

function About() {

  const me = ["Hello! My name is Ludvig, Im a 25 year old student from Gothenburg (Swe). I will soon be finished with my masters in Data Science and my main focus has been on media technology. Alot of my time goes to coding ofcourse, but otherwise I like to stay socializing, working out, playing games and learning new stuff! My main areas of expertise are Backend and fullstack coding. I've spent most of my time coding in JavaScripit, C++, and Java. But I have also touched upon other languages like python."]

  useEffect(() => {


    gsap.registerPlugin(ScrollTrigger)

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: 'top+=100px center',
        end: "+=250px",
        scrub: true,
        markers:true

      },
    });

    timeline2.from(".about", { y: 20, opacity: 0 }).to(".about", { y: 0, opacity: 1 }, 0);






  }, [])

  return (
    <div className=' h-screen w-full flex flex-col p-20 text-neutral-200 '>
      <div className=' about h-full w-full grid grid-cols-3 grid-rows-4 px-40 gap-2 z-40'>
        <div className='  col-span-3 row-span-1 rounded-xl p-5 justify-center flex flex-col '>
          <p className=' font-poppins font-black tracking-widest text-2xl text-neutral-300 font-oswald opacity-50 '>ABOUT</p>
          <p className=' font-black tracking-wide text-4xl text-neutral-100'>MY STORY</p>

        </div>
        <div className=' col-span-2 row-span-1 flex flex-col px-5 justify-center'>
          <p className=' font-semibold leading-relaxed text-md  '>{me[0]}</p>
        </div>
        <div className=' col-span-1 row-span-1 flex w-full h-full '>

          <div className=' w-full h-full bg-neutral-900 rounded-xl flex flex-col justify-center px-5 shadow-[0_0_5px_theme(colors.purple.600)] hover:shadow-[0_0_10px_theme(colors.purple.500)] ease-in-out duration-300'>
            <p className=' text-xl leading-relaxed font-light'>Academic Background</p>
            <p className='  text-xl leading-relaxed font-light '>Bachelor in Media Technology</p>
            <p className='  text-xl leading-relaxed font-light '>Master's in Computer Science</p>
            <p className='  text-md leading-relaxed font-light italic '>June 10, 2024 </p>
            <FaGraduationCap className=' absolute self-end mr-5 text-5xl text-neutral-400' />
          </div>
        </div>
        <div className=' col-span-3 row-span-1  p-5 justify-center flex flex-col'>
          <p className=' font-poppins font-black tracking-widest text-2xl text-neutral-300 font-oswald opacity-50 '>GENERAL</p>
          <p className=' font-black tracking-wide text-4xl text-neutral-100 '>TECHNICAL SKILLS</p>
        </div>
        <div className=' col-span-3 row-span-1 grid grid-cols-3 grid-rows-2 h-full w-full gap-4 pl-5'>
          <div className=' rounded-xl bg-neutral-900 flex w-full h-full items-center px-10 font-bold text-neutral-400 shadow-[0_0_5px_theme(colors.sky.400)] hover:shadow-[0_0_10px_theme(colors.sky.500)] ease-in-out duration-200'> Fullstack Development</div>
          <div className=' rounded-xl bg-neutral-900 flex w-full h-full items-center px-10 font-bold text-neutral-400 shadow-[0_0_5px_theme(colors.sky.400)] hover:shadow-[0_0_10px_theme(colors.sky.500)] ease-in-out duration-200'> Backend</div>
          <div className=' rounded-xl bg-neutral-900 flex w-full h-full items-center px-10 font-bold text-neutral-400 shadow-[0_0_5px_theme(colors.sky.400)] hover:shadow-[0_0_10px_theme(colors.sky.500)] ease-in-out duration-200'> Object Oriented Programming</div>
          <div className=' rounded-xl bg-neutral-900 flex w-full h-full items-center px-10 font-bold text-neutral-400 shadow-[0_0_5px_theme(colors.sky.400)] hover:shadow-[0_0_10px_theme(colors.sky.500)] ease-in-out duration-200'> Data Structures</div>
          <div className=' rounded-xl bg-neutral-900 flex w-full h-full items-center px-10 font-bold text-neutral-400 shadow-[0_0_5px_theme(colors.sky.400)] hover:shadow-[0_0_10px_theme(colors.sky.500)] ease-in-out duration-200'> Ai</div>
          <div className=' rounded-xl bg-neutral-900 flex w-full h-full items-center px-10 font-bold text-neutral-400 shadow-[0_0_5px_theme(colors.sky.400)] hover:shadow-[0_0_10px_theme(colors.sky.500)] ease-in-out duration-200'> 3D modelling and Integration</div>
        </div>

      </div>



    </div>
  )
}

export default About