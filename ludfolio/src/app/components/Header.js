"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaCode, FaHouse } from "react-icons/fa6";
import { MdOutlineArrowOutward } from 'react-icons/md';


function Header({ handleClick }) {

  const [home,setHome] = useState(false)
  const router = useRouter()

  useEffect(() => {

    const isHomePage = window.location.pathname === '/';

    console.log(window.location.pathname)
    console.log(isHomePage)

    if (!isHomePage){ setHome(true)}

  },[])


  return (
    <div className=' text-neutral-100 w-full h-[7vh] grid grid-cols-2 lg:grid-cols-4 p-5 bg-neutral-950 font-rubik'>
      <div className='grid grid-cols-3 lg:grid-cols-5 items-center font-extralight mx-3 text-xl z-20'>
     { home &&  <div className='group relative text-center '>
          <Link href="/">
            <FaHouse className='  ease-in-out duration-200 m-auto text-neutral-100' />
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400'>Home</p>
          </Link>
        </div>}
        <div className='group relative text-center '>
          <Link href="https://github.com/ludvigdamberg">
            <FaGithub className='  ease-in-out duration-200 m-auto text-neutral-100'></FaGithub>
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400 '>Github</p>
          </Link>

        </div>
        <div className='group relative text-center '>
          <Link href="https://www.linkedin.com/in/ludvigdamberg">
            <FaLinkedin className=' ease-in-out duration-200 m-auto text-neutral-100' />
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400 '>LinkedIn</p>
          </Link>
        </div>
        <div className='group relative text-center '>
          <Link href="https://github.com/ludvigdamberg/ludfolio">
            <FaCode className=' ease-in-out duration-200 m-auto' />
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-medium text-sm text-neutral-400'>Code</p>
          </Link>
        </div>
        
      </div>

      <div className=' text-center lg:grid hidden lg:grid-cols-4 items-center justify-end text-[14px] font-semilight'>

      </div>
      <div className='hidden lg:block'>
        {/* Filler Container */}
      </div>
      <div className='lg:font-extrabold lg:mx-20 text-xs lg:text-md z-20  flex flex-row justify-center text-neutral-400  my-auto font-poppins '>
       
        <Link className='  lg:tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 my-2 flex' href="/Projects">Projects <MdOutlineArrowOutward className=' mx-1'/></Link>
        <Link className='  lg:tracking-wider hover:text-neutral-100 ease-in-out duration-300 lg:mx-8 my-2 flex' href="/Contact">Contact <MdOutlineArrowOutward className=' mx-1'/></Link>
      </div>
    </div>
  )
}

export default Header