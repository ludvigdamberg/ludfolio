import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaArtstation, FaDownload } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { SiNextdotjs, SiSanity, SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <div className=' z-40 h-[55vh] w-full flex  text-neutral-400 items-center font-poppins text-md xl:text-3xl  '>
      <div className=' z-40 bg-indigo-900 lg:px-20 px-5 py-5  grid grid-rows-3 w-full h-full'>
        <div className='flex flex-row h-full w-full border-t border-b border-neutral-500 border-opacity-50'>
          <p className=' text-4xl lg:text-7xl font-black font-rubik tracking-wider text-center text-blue-600'>Built With</p>
          <div className=' flex flex-col lg:flex-row ml-auto my-auto'>
            <Link className=' lg:mx-5 font-poppins font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150 items' href="/"><SiNextdotjs className=' mx-2' /> NextJs </Link>
            <Link className=' lg:mx-5 font-poppins font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150 items' href="/"><SiSanity className=' mx-2' /> Sanity.io </Link>
            <Link className=' lg:mx-5 font-poppins font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150 items' href="/"><SiTailwindcss className=' mx-2' /> TailWind CSS </Link>
          </div>

        </div>
        <div className=' z-40 flex flex-row  w-full h-full border-b border-neutral-500 border-opacity-50'>
          <p className=' text-4xl lg:text-7xl font-black font-rubik tracking-wider text-center text-blue-600'>Links</p>
          <div className=' flex flex-col lg:flex-row ml-auto my-auto'>
            <Link className=' lg:mx-5 group font-rubik font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150' href="/">Home <MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></Link>
            <Link className=' lg:mx-5 group font-rubik font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150' href="/Contact">Contact<MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></Link>
            <Link className=' lg:mx-5 group font-rubik font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150' href="/Projects">Projects<MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></Link>
            <a className=' lg:mx-5 group font-rubik font-regular tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:text-neutral-300 ease-in-out duration-150' href="/assets/CV_eng.pdf" download="your-portfolio.pdf" >My Resume<FaDownload className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></a>

          </div>

        </div>
        <div className=' z-40 flex flex-row  h-full w-full border-b border-neutral-500 border-opacity-50'>
          <p className=' text-4xl lg:text-7xl font-black font-rubik tracking-wider text-center text-blue-600'>Social</p>
          <div className=' flex flex-col lg:flex-row ml-auto my-auto'>
            <Link className=' lg:mx-5 font-extrabold tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-pink-500 ease-in-out duration-150' href="https://www.instagram.com/ludvigdamberg/"><FaInstagram className=' mx-2' /> Instagram</Link>
            <Link className=' lg:mx-5 font-extrabold tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-sky-500 ease-in-out duration-150' href="https://www.artstation.com/ludvigdamberg"><FaLinkedin className=' mx-2' />LinkedIn</Link>
            <Link className=' lg:mx-5 font-extrabold tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-violet-500 ease-in-out duration-150' href="https://github.com/ludvigdamberg"><FaGithub className=' mx-2' />Github</Link>
            <Link className=' lg:mx-5 font-extrabold tracking-wider mt-1 lg:mt-5 text-neutral-500 flex items-center hover:scale-105 hover:text-blue-500 ease-in-out duration-150' href="https://www.linkedin.com/in/ludvigdamberg/"><FaArtstation className=' mx-2' />ArtStation</Link></div>

        </div>
      </div>
    </div >
  )
}

export default Footer