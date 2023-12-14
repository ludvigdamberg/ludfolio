"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { GoArrowDown } from "react-icons/go";
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {


  useEffect(() => {

    const tl = gsap.timeline()

    tl.from(".logo", { y: 30 })
    tl.to(".logo", { duration: 0.5, y: 0, ease: "back.out", delay: 1.2, opacity: 1, stagger: 0.05 })

    setTimeout(() => {

      const tl = gsap.timeline()

      tl.to(".icon", { opacity: 1 })
      tl.to(".icon", { y: 10, duration: 1, opacity:0.5, ease: "power1.inOut", repeat: -1, yoyo: true })

    }, 2000)


  }, [])


  return (
    <div>
      <div className=' h-screen w-full p-20 flex flex-col text-neutral-200'>
        <div className=' flex flex-col '>
          <div className='  p-2 flex flex-col mx-auto h-[50vh] align-bottom justify-end z-30'>
            <div className='flex flex-row'>
            <h1 className=' font-poppins  logo font-montserrat font-black text-8xl tracking-wider leading-[0.7] italic opacity-0'>LUDVIG</h1>
            <p className='  logo font-black text-8xl tracking-wider leading-[0.7]  opacity-0 text-orange-500'>,</p>
            </div>
            <div className='flex flex-row'>
            <h1 className=' font-poppins logo font-black text-7xl tracking-wider opacity-0'>DAMBERG</h1>
            <p className='  logo font-black text-7xl tracking-wider opacity-0 text-red-500'>.</p>
            </div>
            <p className=' logo text-md font-thin mx-0.5  opacity-0 '>software engineer / media technology / data science</p>
            <GoArrowDown className='icon mx-auto mt-10 text-3xl text-neutral-200  opacity-0' />
          </div>
        </div>
        <div className=' h-full flex '>
          <Link href="/Contact" className=' group py-4 border-2 border-neutral-200 rounded-full px-5 mx-auto text-center my-auto bg-neutral-900 font-bold flex flex-row justify-center items-center '>CONTACT ME <MdOutlineArrowOutward className="group-hover:rotate-45 ease-in-out duration-300 mx-1 "/> </Link>
        </div>
      </div>
      <div data-scroll data-scroll-speed="0.2" className=' h-[30vh] w-[100%] rounded-md flex '>

      </div>

    </div >
  )
}

export default Landing