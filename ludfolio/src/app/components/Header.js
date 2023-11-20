import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import About from './About'
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";


function Header({ handleClick }) {
  return (
    <div className=' w-full h-[5vh] grid grid-cols-3 p-5'>
      <div className='grid grid-cols-5 items-center font-extralight mx-3 text-xl tracking-tighter'>
        <FaGithub className=' hover:text-2xl ease-in-out duration-100 m-auto' />
        <p className=' m-auto'>/</p>
        <FaLinkedin className=' hover:text-2xl ease-in-out duration-75 m-auto'/>
        <p className=' m-auto'>/</p>

        <FaCode className=' hover:text-2xl ease-in-out duration-75 m-auto'/>
      </div>
      <div></div>
      <div className=' text-slate-600 text-center grid grid-cols-4 items-center justify-end text-[14px] font-semilight'>
        <div> <button className=' hover:underline' onClick={() => handleClick('about')}>about</button></div>
       <div><button className=' hover:underline' onClick={() => handleClick('experience')}>Experience</button></div>
       <div><button className=' hover:underline' onClick={() => handleClick('contact')}>contact</button></div>
        
      

      </div>

    </div>
  )
}

export default Header