"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

function Mobile() {

    let time = new Date().toLocaleTimeString();
    let [ctime, setCTime] = useState();
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);

    return (
        <div className=' w-full h-auto px-3 pt-3 min-h-screen text-sm lg:hidden text-slate-100 dark:text-neutral-100 '>
            <div className=' flex flex-col h-auto w-full mt-10 '>
                <div className=' h-[30vh] w-full flex flex-col rounded-2xl p-3 mt-5 bg-slate-600 dark:bg-neutral-900'>
                    <div className=' h-[5%] w-full flex'> <p className=' text-xs'>software engineer / media technology / data science</p></div>
                    <div className=' grid grid-cols-2 h-full'>
                        <div className=' w-[150px] h-[150px] my-auto mx-auto rounded-full overflow-hidden relative'>
                            <Image src={"/assets/pb.jpeg"} alt='loading' fill={true} className=" object-cover" />
                        </div>
                        <div className=' w-full h-full flex flex-col ml-auto justify-center'>
                            <div className=' mt-1 '><p className=' '>Norrköping, Sweden</p></div>
                            <div className=' mt-1 '><p className=' '>{ctime}</p></div>
                            <a href="assets/CV_eng.pdf" download="CV_eng.pdf" className=' mt-1 w-24  border rounded-2xl flex justify-center'><p className=''>my resume</p></a>
                        </div>
                    </div>
                </div>
                <div className=' h-[30vh] w-full flex flex-col rounded-2xl bg-slate-600 dark:bg-neutral-900 p-3 mt-5'>
                    <p className=' underline my-2 tracking-tighter leading-relaxed flex'>Currently working on:</p>
                    <div className=' flex flex-col my-auto'>
                        <p className=' my-2  tracking-tighter leading-relaxed flex'><FaGraduationCap className=' text-yellow-500  mr-2 my-auto' /> Final semester of masters in data science</p>
                        <div className=' my-2  tracking-tighter leading-relaxed flex'><MdWork className=' text-yellow-500  mr-2 my-auto' /> Fullstack developer <Link href={"https://www.weknowit.se/"} className=" mx-1 hover:underline ease-in-out duration-200">@weknowit</Link></div>
                        <div className=' my-2  tracking-tighter leading-relaxed flex'><MdWork className=' text-yellow-500  mr-2 my-auto' /> Student helper <Link href={"https://liu.se/"} className=" mx-1 hover:underline ease-in-out duration-200">@lithehack</Link></div>
                    </div>
                </div>
                <div className=' h-[30vh] w-full flex rounded-2xl bg-slate-600 dark:bg-neutral-900 p-3 mt-5'>
                    asdasd
                </div>
                <div className=' h-[30vh] w-full flex rounded-2xl bg-slate-600 dark:bg-neutral-900 p-3 mt-5'>
                    asdasd
                </div>
            </div>

        </div>
    )
}

export default Mobile