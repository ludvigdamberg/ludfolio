"use client"
import React, { useEffect, useState } from 'react'
import { MdWork } from "react-icons/md"
import gsap from 'gsap'
import Image from 'next/image'
import { PiFilePdf } from 'react-icons/pi'
import { FaGraduationCap } from 'react-icons/fa'
import Link from 'next/link'

function Landing() {

   


    useEffect(() => {

        const tl = gsap.timeline()

        tl.fromTo(".logo", { y: 20 }, { duration: 0.5, y: 0, delay: 2, ease: "back.out", opacity: 1, stagger: 0.05 })


    }, [])

    let time = new Date().toLocaleTimeString();
	let [ctime, setCTime] = useState();
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCTime(time);
	}
	setInterval(updateTime, 1000);


    return (
        <div className=' mx-auto h-full w-full  flex rounded-2xl p-3 bg-neutral-900 text-neutral-100 text-sm font-light'>
            <div className=' grid grid-cols-2 grid-rows-2 grid-flow-col w-full h-full'>
                <div className=' flex flex-col  p-5'>
                    {/* Grid container 1 */}
                    <div className=' w-[250px] h-[250px] my-auto rounded-full overflow-hidden relative'>
                        <Image src={"/assets/pb.jpeg"} fill={true} className=" object-cover" />
                    </div>

                </div>
                <div className=' flex flex-col  p-5 justify-center'>
                    {/* Grid container 2 */}
                    <p className='logo opacity-0 text-base underline my-2 tracking-tighter leading-relaxed flex'>Currently working on:</p>
                    <p className='logo opacity-0 text-4xl 2xl:text-xl my-2 tracking-tighter leading-relaxed flex'><FaGraduationCap className='  mr-2 my-auto' /> Final semester of masters in computer science</p>
                    <div className='logo opacity-0 text-4xl 2xl:text-xl my-2 tracking-tighter leading-relaxed flex'><MdWork className='  mr-2 my-auto' /> Fullstack developer <Link href={"https://www.weknowit.se/"} className=" mx-1 hover:underline ease-in-out duration-200">@weknowit</Link></div>
                    <div className='logo opacity-0 text-4xl 2xl:text-xl my-2 tracking-tighter leading-relaxed flex'><MdWork className='  mr-2 my-auto' /> Student helper <Link href={"https://liu.se/"} className=" mx-1 hover:underline ease-in-out duration-200">@lithehack</Link></div>
                </div>
                <div className=' w-full h-full  p-5'>
                    {/* Grid container 3 */}
                    <div className=' w-auto h-auto flex ml-auto'>
                        <div className=' ml-auto flex mx-2'><p className=' my-auto flex'>Norrköping, Sweden</p></div>
                        <div className=' flex mx-2 w-[10%]'><p className=' my-auto flex'>{ctime}</p></div>
                        <a href="assets/CV_eng.pdf" download="CV_eng.pdf" className=' py-[0.5px] px-3 mx-2 border rounded-2xl flex'><p className=' mx-1'>my resume</p> <PiFilePdf className=' my-auto' /></a>
                    </div>

                </div>
                <div className=' flex flex-col  p-5'>
                    {/* Grid container 4 */}
                    <p className='logo mt-auto ml-auto opacity-0 '>software engineer / media technology / data science</p>
                </div>

            </div>
        </div >
    )
}

export default Landing