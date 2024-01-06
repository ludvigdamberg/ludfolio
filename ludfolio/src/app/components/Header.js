"use client"
import gsap from 'gsap';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaCode, FaHouse } from "react-icons/fa6";
import { MdOutlineArrowOutward } from 'react-icons/md';


function Header() {
  const [home, setHome] = useState(false)
  const router = useRouter()

  useEffect(() => {

    const isHomePage = window.location.pathname === '/';

    console.log(window.location.pathname)
    console.log(isHomePage)

    if (!isHomePage) { setHome(true) }



  }, [])


  const expandMenu = () => {

    const tl = gsap.timeline()

    tl.to(".animat", { height: "40vh", duration: 0.4, display: "block", ease: "power3.out" })
    tl.to(".links", { opacity:1, duration: 0.25,delay:0.2})


  }

  const CollapseMenu = () => {

    const tl = gsap.timeline()

    tl.to(".links", { opacity:0, duration: 0.2})
    tl.to(".animat", { height: 0, duration: 0.25, display: "hidden", ease: "power2.in", delay:0.2 })

  }

  return (
    <div>
      <div className='animat h-0 w-full fixed z-40 bg-neutral-900 top-0 left-0 overflow-hidden flex-col items-center rounded-b-2xl'>
        <div className=' h-full text-center flex flex-col'>
          <Link className='group links opacity-0  text-xl my-auto font-bold text-indigo-600 flex ml-10' href={"/Projects"}><p className='  mx-2 '> Projects</p> <MdOutlineArrowOutward className=' my-auto' /></Link>
          <Link className='group links opacity-0  text-xl my-auto font-bold text-indigo-600 flex ml-10' href={"/Contact"}> <p className='  mx-2 '> Contact</p> <MdOutlineArrowOutward className=' my-auto' /></Link>
          <Link className='group links opacity-0 text-xl  my-auto font-bold text-indigo-600 flex ml-10' href={"/"}> <p className='  mx-2 '> Home</p> <FaHouse className=' my-auto' /></Link>
          <button className='group links opacity-0  text-xl my-auto font-bold text-neutral-600 flex ml-10' onClick={() => CollapseMenu()}> <p className=' mx-2'> Close x</p></button>
        </div>
      </div>
      <div className=' text-neutral-100 w-full h-[7vh] grid grid-cols-3 lg:grid-cols-4 p-5 bg-neutral-950 font-rubik'>
        <div className='grid grid-cols-3 lg:grid-cols-5 items-center font-extralight mx-3 text-xl z-20'>
          {home && <div className='group relative text-center hidden lg:block '>
            <Link href="/">
              <FaHouse className='  ease-in-out duration-200 m-auto text-neutral-100' />
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400'>Home</p>
            </Link>
          </div>}
          <div className='group relative text-center hidden lg:block '>
            <Link href="https://github.com/ludvigdamberg">
              <FaGithub className='  ease-in-out duration-200 m-auto text-neutral-100'></FaGithub>
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400 '>Github</p>
            </Link>

          </div>
          <div className='group relative text-center hidden lg:block '>
            <Link href="https://www.linkedin.com/in/ludvigdamberg">
              <FaLinkedin className=' ease-in-out duration-200 m-auto text-neutral-100' />
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400 '>LinkedIn</p>
            </Link>
          </div>
          <div className='group relative text-center hidden lg:block '>
            <Link href="https://github.com/ludvigdamberg/ludfolio">
              <FaCode className=' ease-in-out duration-200 m-auto' />
              <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400'>Code</p>
            </Link>
          </div>

        </div>
        <div className=''>
          {/* Filler Container */}
        </div>

        <div className='hidden lg:block'>
          {/* Filler Container */}
        </div>
        <div className='lg:font-extrabold  text-base z-20  flex flex-row justify-end lg:justify-center text-neutral-400  my-auto font-poppins '>
          <FaBars onClick={() => expandMenu()} className=' flex tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 my-2 lg:hidden text-xl' />
          <Link className=' hidden  tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 my-2 lg:flex' href="/Projects">Projects <MdOutlineArrowOutward className=' mx-1' /></Link>
          <Link className=' hidden tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 my-2 lg:flex' href="/Contact">Contact <MdOutlineArrowOutward className=' mx-1' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header