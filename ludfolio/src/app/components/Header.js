import Link from 'next/link'
import React from 'react'
import About from './Experience'
import { FaGithub, FaLinkedin, FaCode, FaLink } from "react-icons/fa6";


function Header({ handleClick }) {
  return (
    <div className=' w-full h-[7vh] grid grid-cols-4 p-5 bg-transparent '>
      <div className='grid grid-cols-6 items-center font-extralight mx-3 text-xl z-20'>
        <div className='group relative text-center text-slate-800'>
          <Link href="https://github.com/ludvigdamberg">
            <FaGithub className='icon  ease-in-out duration-200 m-auto'></FaGithub>
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-light text-sm '>Github</p>
          </Link>

        </div>
        <p className=' m-auto'>/</p>
        <div className='group relative text-center text-slate-800'>
          <Link href="https://www.linkedin.com/in/ludvigdamberg">
            <FaLinkedin className='icon  ease-in-out duration-200 m-auto'/>
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-light text-sm '>LinkedIn</p>
          </Link>
        </div>
        <p className=' m-auto'>/</p>
        <div className='group relative text-center text-slate-800'>
          <Link href="https://github.com/ludvigdamberg/ludfolio">
            <FaCode className='icon  ease-in-out duration-200 m-auto'/>
            <p className=' opacity-0 group-hover:top-6 ease-in-out duration-200 group-hover:opacity-100 absolute top-2 left-0 right-0 font-light text-sm'>Code</p>
          </Link>
        </div>
      </div>

      <div className=' text-slate-800 text-center grid grid-cols-4 items-center justify-end text-[14px] font-semilight'>
     
      </div>
      <div>{/* Filler Container */}</div>
      <div className='grid grid-cols-3 items-center font-light mx-3 text-lg z-20'> 
      <Link href="">About</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header