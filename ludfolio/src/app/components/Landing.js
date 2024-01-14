"use client"
import React, { useEffect, useState } from 'react'
import { MdWork } from "react-icons/md"
import gsap from 'gsap'
import Image from 'next/image'
import { PiFilePdf } from 'react-icons/pi'
import { FaGraduationCap } from 'react-icons/fa'
import Link from 'next/link'
import MagneticBig from './MagneticBig'
import { FaCode, FaInstagram, FaLinkedin, FaSquareGithub } from 'react-icons/fa6'

function Landing() {



    useEffect(() => {

        const tl = gsap.timeline()

        tl.fromTo(".logo", { y: 20 }, { duration: 0.5, y: 0, delay: 1.2, ease: "back.out", opacity: 1, stagger: 0.05 })


    }, [])

    let time = new Date().toLocaleTimeString();
    let [ctime, setCTime] = useState();
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);


    return (
        <MagneticBig>
            <div className='hidden mx-auto h-full w-full  lg:flex rounded-2xl p-3 shadow-2xl dark:shadow-none bg-slate-600 text-slate-100 dark:bg-neutral-900 dark:text-neutral-100 text-sm font-light'>
                <div className=' grid grid-cols-2 grid-rows-2 grid-flow-col w-full h-full '>
                    <div className=' flex flex-col p-5'>
                        {/* Grid container 1 */}
                        <div className=' w-[250px] h-[250px] my-auto rounded-full overflow-hidden relative'>
                            <Image src={"/assets/pb.jpeg"} alt='loading' fill={true} className=" object-cover" />
                        </div>



                    </div>
                    <div className=' flex flex-col text-base  p-5 justify-end'>
                        {/* Grid container 2 */}
                        <p className='logo opacity-0 underline my-2 tracking-tighter leading-relaxed flex'>Currently working on:</p>
                        <p className='logo opacity-0  my-2 tracking-tighter leading-relaxed flex'><FaGraduationCap className='  text-orange-500 dark:text-yellow-500  mr-2 my-auto' /> final semester of masters in data science</p>
                        <div className='logo opacity-0  my-2 tracking-tighter leading-relaxed flex'><MdWork className='  text-orange-500 dark:text-yellow-500  mr-2 my-auto' /> fullstack developer <Link href={"https://www.weknowit.se/"} className=" mx-1 hover:underline ease-in-out duration-200">@weknowit</Link></div>
                        <div className='logo opacity-0  my-2 tracking-tighter leading-relaxed flex'><MdWork className='  text-orange-500 dark:text-yellow-500  mr-2 my-auto' /> student help <Link href={"https://liu.se/"} className=" mx-1 hover:underline ease-in-out duration-200">@lithehack</Link></div>
                    </div>
                    <div className=' w-full h-full  p-5'>
                        {/* Grid container 3 */}
                        <div className=' w-auto h-auto flex '>
                            <div className='logo opacity-0 ml-auto flex '><p className=' my-auto flex'>norrköping, Sweden</p></div>
                            <div className='logo opacity-0 flex mx-2 xl:mr-0  w-[15%] justify-center'><p className=' my-auto flex'>{ctime}</p></div>
                            <a href="assets/CV_eng.pdf" download="CV_eng.pdf" className=' py-[0.5px] px-3  border rounded-2xl flex'><p className=' mx-1'>my resume</p> <PiFilePdf className=' my-auto' /></a>
                        </div>
                        <div className=' w-auto h-auto text-base flex ml-auto mt-5'>
                        
                                <Link className='logo opacity-0 ml-auto flex mx-3' href={"https://github.com/ludvigdamberg"}><FaSquareGithub className=' dark:hover:text-yellow-500 hover:text-orange-500' /></Link>
                                <Link className='logo opacity-0 flex mx-3' href={"https://www.artstation.com/ludvigdamberg"}><FaLinkedin className=' dark:hover:text-yellow-500 hover:text-orange-500' /></Link>
                                <Link className='logo opacity-0 flex mx-3' href={"https://github.com/ludvigdamberg/ludfolio"}><FaCode className=' dark:hover:text-yellow-500 hover:text-orange-500' /></Link>          
                                <Link className='logo opacity-0 flex mx-3' href={"https://www.instagram.com/ludvigdamberg/"}><FaInstagram className=' dark:hover:text-yellow-500 hover:text-orange-500' /></Link>
                        </div>
                    </div>
                    <div className=' flex flex-col  p-5'>
                        {/* Grid container 4 */}
                        <p className='logo mt-auto ml-auto opacity-0 '>software engineer / media technology / data science</p>
                    </div>

                </div>
            </div >
        </MagneticBig>
    )
}

export default Landing