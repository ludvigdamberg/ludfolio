"use client"
import React, { useEffect } from 'react'
import { MdArrowRightAlt, MdWork } from "react-icons/md"
import gsap from 'gsap'
import { FaLocationPin } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaFilePdf } from 'react-icons/fa'
import { BiDownload } from 'react-icons/bi'
import { PiFilePdf } from 'react-icons/pi'
function Landing2() {

    useEffect(() => {

        const tl = gsap.timeline()

        tl.fromTo(".logo", { y: 20 }, { duration: 0.5, y: 0, delay: 2, ease: "back.out", opacity: 1, stagger: 0.05 })

        setTimeout(() => {

            const tl = gsap.timeline()

            tl.to(".icon", { opacity: 1 })
            tl.to(".icon", { y: 10, duration: 1, opacity: 0.5, ease: "power1.inOut", repeat: -1, yoyo: true })

        }, 2000)
    }, [])



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
                    <p className=' text-4xl 2xl:text-6xl my-2 tracking-tighter leading-relaxed flex'><FaLocationPin className='  mx-2 my-auto' /> Norrköping, Sweden</p>
                    <p className=' text-4xl 2xl:text-6xl my-2 tracking-tighter leading-relaxed flex'><MdWork className='  mx-2 my-auto' /> Last year studies</p>
                </div>
                <div className=' w-full h-full  p-5'>
                    {/* Grid container 3 */}
                    <div className=' w-auto h-auto flex ml-auto'>
                         <a href="assets/CV_eng.pdf" download="CV_eng.pdf" className=' py-[0.5px] px-3 mx-2 border rounded-2xl flex ml-auto'><p className=' mx-1'>my resume</p> <PiFilePdf className=' my-auto' /></a>
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

export default Landing2