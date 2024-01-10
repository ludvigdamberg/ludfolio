"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { GoArrowDown } from "react-icons/go";
import Link from 'next/link';
import { FaEnvelope, FaFilePdf } from 'react-icons/fa';
import Image from 'next/image';
import { FaLocationPin } from 'react-icons/fa6';
import { MdWork } from "react-icons/md";

function Landing() {


  useEffect(() => {

    const tl = gsap.timeline()

    tl.fromTo(".logo",{y:40}, { duration: 0.5, y: 0, delay:1.8, ease: "back.out", opacity: 1, stagger: 0.1 })


    setTimeout(() => {

      const tl = gsap.timeline()

      tl.to(".icon", { opacity: 1 })
      tl.to(".icon", { y: 10, duration: 1, opacity: 0.5, ease: "power1.inOut", repeat: -1, yoyo: true })

    }, 2000)


  }, [])


  return (
    <div className=' h-[93vh] items-center justify-center lg:items-start lg:justify-normal w-full p-2 lg:p-10 flex flex-col text-neutral-200 bg-neutral-950'>

      <div className=' flex flex-col z-20 border rounded-xl px-3 py-3 w-[400px]   xl:my-0 xl:mx-0'>
        <div className=' grid grid-cols-3 w-full h-full'>
          <div className=' col-span-1 w-full h-full flex'>
            <div className=' w-[100px] h-[100px] relative overflow-hidden rounded-full col-span-1 my-auto'>
              <Image src={"/assets/pb.jpeg"} fill={true} className=" object-cover" />
            </div>
            <div className='relative flex rounded-full w-3 h-3 z-50 bg-green-500 top-[80px] left-[-17px] '>
              <div className=' bg-green-500 w-full h-full rounded-full opacity-50 z-50 animate-ping'></div>
            </div>
          </div>
          <div className=' w-full h-full flex flex-col col-span-2'>
            <p className=' font-light text-md mt-2 flex'><FaLocationPin className=' text-red-600 mx-2 my-auto' /> Norrköping, Sweden</p>
            <p className=' font-light text-md mt-2 flex'><MdWork className=' text-blue-600 mx-2 my-auto' /> Completing Masters thesis</p>

          </div>
        </div>
        <div className=' flex flex-row'>
          <div className=' h-full flex z-20 ml-auto  '>
            <Link href="/Contact" className=' group py-1 border-2 border-neutral-200 rounded-full px-3 mx-auto text-center my-auto font-light flex flex-row justify-center hover:bg-blue-800 ease-in-out duration-100 '>CONTACT <FaEnvelope className=" mx-2 my-auto " /> </Link>
          </div>
          <div className=' h-full flex z-20 mx-2  '>
            <a href="assets/CV_eng.pdf" download="CV_eng.pdf" className=' group py-1 border-2 border-neutral-200 rounded-full px-3 mx-auto text-center my-auto font-light flex flex-row justify-center hover:bg-blue-800 ease-in-out duration-100 '>RESUME <FaFilePdf className=" mx-2 my-auto " /> </a>
          </div>
        </div>
      </div>
      <p className=' font-light text-md mt-10 lg:hidden '> For a better Experience, use a computer!</p>
      <p className=' font-light text-md mt-10 lg:hidden '> Navigate through the menu at the top </p>
      <div className=' xl:flex flex-col hidden my-auto mx-auto '>
        <div className='  p-2 flex flex-col mx-auto h-full align-bottom justify-end z-30'>
          <div className='flex my-0'>
            <h1 className=' font-poppins  logo  font-black text-7xl sm:text-8xl tracking-wider italic  opacity-0'>LUDVIG</h1>
            <p className='  font-poppins logo font-black text-6xl sm:text-7xl tracking-wider opacity-0 text-orange-500'>,</p>
          </div>
          <div className='flex flex-row'>
            <h1 className=' font-poppins logo font-black text-6xl sm:text-7xl tracking-wider opacity-0'>DAMBERG</h1>
            <p className='  font-poppins logo font-black text-6xl sm:text-7xl tracking-wider opacity-0 text-red-500'>.</p>
          </div>
          <p className=' logo text-sm sm:text-lg font-thin mx-0.5  opacity-0 '>software engineer / media technology / data science</p>
          <GoArrowDown className='icon mx-auto mt-10 text-3xl text-neutral-200  opacity-0' />
        </div>
      </div>

    </div >


  )
}

export default Landing