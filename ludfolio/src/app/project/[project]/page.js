"use client"
import React, { useEffect, useState } from 'react'
import { getProject } from '../../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Loader from '@/app/components/Loader'
import Header from '@/app/components/Header'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import gsap from 'gsap'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

function Page({ params }) {

    const [project, setProject] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [Index, setIndex] = useState(0);

    useEffect(() => {

        getProject(params.project).then((data) => setProject(data))


        setTimeout(() => {
            setLoaded(true)
        }, 500)

    }, [])

    const handlePrev = () => {
        const temp = Index
        if (temp == 0) {
            setIndex((prevIndex) => (prevIndex + project.images.length - 1));
        } else {
            setIndex((prevIndex) => (prevIndex - 1));

        }

    };


    const handleNext = () => {

        const temp = Index
        const tl = gsap.timeline()

        tl.to('.pic', { width: "0.1vw", duration: 0.5, ease: "power2.inOut" })

        setTimeout(() => {
            if (temp == project.images.length - 1) {
                setIndex(0);
            } else {
                setIndex((prevIndex) => (prevIndex + 1));
            }
        }, 500)

        tl.to('.pic', { width: "45vw", duration: 0.5, delay: 0.05, ease: "power2.inOut" });

    };

    return (<>
        {loaded &&
            <div className=' w-full h-auto flex flex-col bg-neutral-200 dark:bg-neutral-950 dark:text-neutral-200 text-neutral-950 font-light'>
                <Loader />
                <Header />
                <div className=' flex  h-auto mt-10 mx-auto text-xs '>
                    <p className=' mx-2'>ludfolio</p>
                    <p className=' mx-2'>/</p>
                    <p className=' mx-2'>projects</p>
                    <p className=' mx-2'>/</p>
                    <p className=' mx-2'>{project.name}</p>
                </div>
                <div className=' flex flex-col w-full h-auto p-5 md:p-20 mt-5 md:mt-0 '>
                    <div className='flex mx-auto'>
                        <button onClick={() => handlePrev()} className='  px-2 rounded-xl border border-neutral-950 dark:border-neutral-200  my-auto mx-2 md:mx-10 hover:scale-105 ease-in-out duration-200'>
                            <LuMoveLeft className='md:text-xl text-sm' />
                        </button>
                        <div className=' lg:w-[45vw] lg:h-[55vh] w-[50vw] h-[30vh] flex'>
                            <div className='pic flex overflow-hidden mx-auto w-full h-full rounded-xl relative '>

                                <Image src={project.images[Index]} fill={true} className=' object-cover' />

                            </div>
                        </div>
                        <button onClick={() => handleNext()} className='  px-2 rounded-xl border border-neutral-950 dark:border-neutral-200 my-auto mx-2 md:mx-10 hover:scale-105 ease-in-out duration-200'>
                            <LuMoveRight className='md:text-xl text-sm' />
                        </button>
                    </div>
                    <div className='flex flex-col w-full h-full p-5'>
                        <p className='  text-2xl md:text-4xl mx-auto tracking-wide mt-5'>{project.name}</p>
                        <p className=' md:text-xl mx-auto tracking-wide mt-5'>{project.description}</p>
                        <div className=' mt-5 text-sm tracking-wider leading-relaxed md:text-base lg:px-40 lg:mx-40 text-center'>
                            <PortableText value={project.content} />
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col p-5 px-10 md:px-2 items-center rounded-xl mx-auto mt-5 h-auto my-10'>
                        <div className=' md:text-xl text-sm mt-5 flex md:flex-row flex-col items-center '>Tech Stack: {project.tech.map((t,index) => <p key={index} className=' my-auto text-sm border border-neutral-950 dark:border-neutral-200 rounded-2xl mt-2 md:mt-0 px-1 md:px-4 py-1 mx-1'>{t} </p>)}</div>
                        <p className=' md:text-xl text-center tracking-wide mt-5'></p>
                        <Link href={project.url} className=' text-sm mt-auto flex items-center justify-center mx-2 rounded-2xl border border-neutral-950 dark:border-neutral-200 px-3 py-1 mb-3 md:mb-0'>Website  <MdOutlineArrowOutward /> </Link>
                    </div>

                </div>
            </div>
        }
    </>
    )
}

export default Page