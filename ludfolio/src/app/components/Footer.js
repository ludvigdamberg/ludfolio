import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaArtstation, FaDownload } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { SiNextdotjs, SiSanity, SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <div className=' z-40 h-[55vh] w-full flex  items-center sm text-neutral-200  '>
      <div className=' z-40 bg-neutral-900 lg:px-20 px-5 py-5  grid grid-rows-3 w-full h-full'>
        <div className='flex flex-row h-full w-full border-t border-b bo border-opacity-50'>
          <p className=' text-xl tracking-wider text-center '>built with</p>
          <div className=' flex flex-col lg:flex-row ml-auto my-auto'>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-yellow-300 ease-in-out duration-150 items' href="/"><SiNextdotjs className=' mx-2' /> nextjs </Link>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-yellow-300 ease-in-out duration-150 items' href="/"><SiSanity className=' mx-2' /> sanity.io </Link>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-yellow-300 ease-in-out duration-150 items' href="/"><SiTailwindcss className=' mx-2' /> tailwind css </Link>
          </div>

        </div>
        <div className=' z-40 flex flex-row  w-full h-full border-b bo border-opacity-50'>
          <p className=' text-xl  tracking-wider text-center'>links</p>
          <div className=' flex flex-col lg:flex-row ml-auto my-auto'>
            <Link className=' lg:mx-5 group  tracking-wider mt-1 lg:mt-5  flex items-center hover:text-yellow-300 ease-in-out duration-150' href="/">home <MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></Link>
            <Link className=' lg:mx-5 group  tracking-wider mt-1 lg:mt-5  flex items-center hover:text-yellow-300 ease-in-out duration-150' href="/Contact">contact<MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></Link>
            <Link className=' lg:mx-5 group  tracking-wider mt-1 lg:mt-5  flex items-center hover:text-yellow-300 ease-in-out duration-150' href="/Projects">projects<MdOutlineArrowOutward className='group-hover:rotate-45 group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></Link>
            <a className=' lg:mx-5 group  tracking-wider mt-1 lg:mt-5 flex items-center hover:text-yellow-300 ease-in-out duration-150' href="/assets/CV_eng.pdf" download="your-portfolio.pdf" >my resume<FaDownload className=' group-hover:text-neutral-300 ease-in-out duration-100 mx-2' /></a>

          </div>

        </div>
        <div className=' z-40 flex flex-row  h-full w-full border-b border-opacity-50'>
          <p className=' text-xl  tracking-wider text-center '>social</p>
          <div className=' flex flex-col lg:flex-row ml-auto my-auto'>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-pink-500 ease-in-out duration-150' href="https://www.instagram.com/ludvigdamberg/"><FaInstagram className=' mx-2' /> Instagram</Link>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-sky-500 ease-in-out duration-150' href="https://www.artstation.com/ludvigdamberg"><FaLinkedin className=' mx-2' />LinkedIn</Link>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-violet-500 ease-in-out duration-150' href="https://github.com/ludvigdamberg"><FaGithub className=' mx-2' />Github</Link>
            <Link className=' lg:mx-5 tracking-wider mt-1 lg:mt-5  flex items-center hover:text-blue-500 ease-in-out duration-150' href="https://www.linkedin.com/in/ludvigdamberg/"><FaArtstation className=' mx-2' />ArtStation</Link></div>

        </div>
      </div>
    </div >
  )
}

export default Footer