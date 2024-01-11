"use client"
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars, FaDownload, FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaCode, FaHouse } from "react-icons/fa6";
import { MdOutlineArrowOutward } from 'react-icons/md';


function Header() {

  const [home, setHome] = useState(false)

  useEffect(() => {

    const isHomePage = window.location.pathname === '/';

    if (!isHomePage) { setHome(true) }



  }, [])


  const expandMenu = () => {

    const tl = gsap.timeline()
    const tl2 = gsap.timeline()

    tl2.to(".bars", { rotate: -90, duration: 0.4, ease: "back.out" })
    tl.to(".animat", { height: "40vh", duration: 0.4, display: "block", ease: "power3.out" })
    tl.to(".links", { opacity:1, duration: 0.25})


  }

  const CollapseMenu = () => {

    const tl = gsap.timeline()

    tl.to(".links", { opacity:0, duration: 0.2})
    tl.to(".animat", { height: 0, duration: 0.25, display: "hidden", ease: "power2.in", delay:0.2 })
    tl.to(".bars", { rotate: 0, duration: 0.4, ease: "back.out" })

  }

  return (
    <div>
      <div className='animat h-0 w-full fixed  top-0 left-0 overflow-hidden flex-col items-center'>
        <div className=' h-full text-center grid grid-rows-3 grid-cols-2'>
          <Link className='group links opacity-0  text-xl my-auto  text-indigo-600 flex ml-10' href={"/Projects"}><p className='  mx-2 '> Projects</p> <MdOutlineArrowOutward className=' my-auto' /></Link>
          <Link className='group links opacity-0  text-xl my-auto  text-indigo-600 flex ml-10' href={"/Contact"}> <p className='  mx-2 '> Contact</p> <MdOutlineArrowOutward className=' my-auto' /></Link>
          <Link className='group links opacity-0 text-xl  my-auto  text-indigo-600 flex ml-10' href={"/"}> <p className='  mx-2 '> Home</p> <FaHouse className=' my-auto' /></Link>
          <a href="assets/CV_eng.pdf" download="CV_eng.pdf" className='group links opacity-0 text-xl  my-auto text-indigo-600 flex ml-10'> My resume <FaDownload className=' mx-2 my-auto' /></a>
          <button className='group links opacity-0  text-xl my-auto  text-neutral-600 flex ml-10' onClick={() => CollapseMenu()}> <p className=' mx-2'> Close x</p></button>
        </div>
      </div>
      <div className=' text-neutral-100 w-full grid grid-cols-3 lg:grid-cols-4 h-[6vh] font-light text-sm'>
        <div className='grid grid-cols-3 lg:grid-cols-5 items-center mx-3 text-xl mt-auto'>
          {home && <div className='group relative text-center hidden lg:block '>
            <Link href="/">
              <FaHouse className='  ease-in-out duration-200 m-auto text-neutral-200' />
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 text-sm text-neutral-300'>Home</p>
            </Link>
          </div>}
          <div className='group relative text-center hidden lg:block '>
            <Link href="https://github.com/ludvigdamberg">
              <FaGithub className='  ease-in-out duration-200 m-auto text-neutral-200'></FaGithub>
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 text-sm text-neutral-300 '>Github</p>
            </Link>

          </div>
          <div className='group relative text-center hidden lg:block '>
            <Link href="https://www.linkedin.com/in/ludvigdamberg">
              <FaLinkedin className=' ease-in-out duration-200 m-auto text-neutral-200' />
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 text-sm text-neutral-300 '>LinkedIn</p>
            </Link>
          </div>
          <div className='group relative text-center hidden lg:block '>
            <Link href="https://github.com/ludvigdamberg/ludfolio">
              <FaCode className=' ease-in-out duration-200 m-auto text-neutral-200' />
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 text-sm text-neutral-300'>Code</p>
            </Link>
          </div>

        </div>
        <div className=''>
          {/* Filler Container */}
        </div>

        <div className='hidden lg:flex'>
          {/* Filler Container */}
        </div>
        <div className='  text-base  flex flex-row justify-end lg:justify-center text-neutral-400  '>
          <FaBars onClick={() => expandMenu()} className='bars  flex tracking-wider hover:text-neutral-100 lg:mx-8 my-2 lg:hidden text-xl mt-auto' />
          <Link className=' hidden  tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 mt-auto lg:flex' href="/Projects">Projects </Link>
          <Link className=' hidden tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 mt-auto lg:flex' href="/Contact">Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default Header