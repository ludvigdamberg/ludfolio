import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaArtstation } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { SiNextdotjs, SiSanity, SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <div data-scroll data-scroll-speed="0.2" className=' h-[55vh] w-full bg-indigo-950 px-20 pb-20 pt-5 text-neutral-400 z-10 items-center font-poppins text-3xl'>
      
      <div className=' grid grid-rows-3 w-full h-full'>
        <div className='flex flex-row h-full w-full border-t border-b border-neutral-300 border-opacity-50'>
          <p className=' text-7xl font-black font-rubik tracking-wider text-center text-blue-600'>Built With</p>
          <div className=' flex ml-auto my-auto'>
            <Link className=' mx-5 font-poppins font-regular tracking-wider mt-5 text-neutral-500 flex justify-center hover:text-neutral-300 ease-in-out duration-150 items' href="/"><SiNextdotjs className=' mx-2' /> NextJs </Link>
            <Link className=' mx-5 font-poppins font-regular tracking-wider mt-5 text-neutral-500 flex justify-center hover:text-neutral-300 ease-in-out duration-150 items' href="/"><SiSanity className=' mx-2' /> Sanity.io </Link>
            <Link className=' mx-5 font-poppins font-regular tracking-wider mt-5 text-neutral-500 flex justify-center hover:text-neutral-300 ease-in-out duration-150 items' href="/"><SiTailwindcss className=' mx-2' /> TailWind CSS </Link>
          </div>

        </div>
        <div className='flex flex-row  w-full h-full border-b border-neutral-300 border-opacity-50'>
          <p className=' text-7xl font-black font-rubik tracking-wider text-center text-blue-600'>Links</p>
          <div className=' flex ml-auto my-auto'>
            <Link className=' mx-5 group font-rubik font-regular tracking-wider mt-5 text-neutral-500 flex justify-center hover:text-neutral-300 ease-in-out duration-150' href="/">Home <MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 text-3xl ml-1' /></Link>
            <Link className=' mx-5 group font-rubik font-regular tracking-wider mt-5 text-neutral-500 flex justify-center hover:text-neutral-300 ease-in-out duration-150' href="/Contact">Contact<MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 text-3xl ml-1' /></Link>
            <Link className=' mx-5 group font-rubik font-regular tracking-wider mt-5 text-neutral-500 flex justify-center hover:text-neutral-300 ease-in-out duration-150' href="/Projects">Projects<MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 text-3xl ml-1' /></Link>
          </div>

        </div>
        <div className='flex flex-row  h-full w-full border-b border-neutral-300 border-opacity-50'>
          <p className=' text-7xl font-black font-rubik tracking-wider text-center text-blue-600'>Social</p>
          <div className=' flex ml-auto my-auto'>
            <Link className=' mx-5 font-extrabold tracking-wider mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-pink-500 ease-in-out duration-150' href="https://www.instagram.com/ludvigdamberg/"><FaInstagram className=' mx-2' /> Instagram</Link>
            <Link className=' mx-5 font-extrabold tracking-wider mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-sky-500 ease-in-out duration-150' href="https://www.artstation.com/ludvigdamberg"><FaLinkedin className=' mx-2' />LinkedIn</Link>
            <Link className=' mx-5 font-extrabold tracking-wider mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-violet-500 ease-in-out duration-150' href="https://github.com/ludvigdamberg"><FaGithub className=' mx-2' />Github</Link>
            <Link className=' mx-5 font-extrabold tracking-wider mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-blue-500 ease-in-out duration-150' href="https://www.linkedin.com/in/ludvigdamberg/"><FaArtstation className=' mx-2' />ArtStation</Link></div>

        </div>
      </div>
    </div >
  )
}

export default Footer