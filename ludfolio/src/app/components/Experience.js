"use client"
import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import modules from '../../../public/assets/content'
import { MdOutlineArrowOutward } from "react-icons/md";

function Experience() {

  const effect2 = useRef(null);

  const names = ['WEKNOWIT', 'CPAC SYSTEMS', 'LITHEHACK'];
  const images = ['wkit.svg', 'cpac.svg', 'lithehack.svg'];
  const [index, setIndex] = useState(0);
  const [Loaded, setLoaded] = useState(false)


  useLayoutEffect(() => {
    setLoaded(true)
    

  }, []);


  function Change(index) {

    setIndex(index)

    const exp = gsap.timeline()

    exp.from(".experience", { opacity: 0, x: 15, duration: 0.3, stagger: 0.025, ease: "back.out" }).to(".experience", { opacity: 1, x: 0 })

  }

  return (

    <>
      {Loaded ? <div ref={effect2} className=' text-neutral-100 h-full w-full xl:flex xl:flex-col hidden rounded-2xl font-light p-3 bg-neutral-900 '>


        <div className=' grid grid-cols-4 grid-rows-1 gap-1 p-1 w-full h-[40%] '>
          <div className='leading-tight h-full border rounded-2xl flex w-full items-center justify-center  '>
            <p className=' text-4xl 2xl:text-5xl  z-40 bg-gradient-to-r bg-clip-text  '>Experience</p>
          </div>
          {names.map((name, index) => (
            <div
              key={index}
              onMouseEnter={() => Change(index)}
              className='group rounded-2xl border flex items-center h-full w-full text-3xl justify-center  hover:bg-neutral-100 ease-in-out duration-100 hover:text-neutral-900'>
              {name}<MdOutlineArrowOutward className='group-hover:rotate-45 ease-in-out duration-100 text-3xl ml-1' />
            </div>
          ))}
        </div>
        <div className=' grid grid-rows-2 grid-cols-3 h-full w-full grid-flow-col gap-1 p-1'>
          <div className=' experience  flex border rounded-2xl col-span-1 row-span-1 items-center justify-center'>
            < Image className='' src={`../../assets/${images[index]}`} alt='SVG Image' width={300} height={300} />
          </div>
          <div className=' experience flex border rounded-2xl col-span-1 row-span-1 justify-center items-center'>
            <p className='  text-4xl flex flex-row'>{modules.icons[index].map((icon, i) => <p key={i} className=' mx-2 text-neutral-100 hover:text-orange-600 ease-in-out duration-200'>{icon}</p>)}</p>
          </div>
          <div className=' experience h-full border flex flex-col row-span-2 col-span-1 rounded-2xl p-10'>
            <div className=' my-auto'>
              <p className='  tracking-widest leading-relaxed text-4xl  '>{modules.headlines[index]} </p>
              <p className='  tracking-wide leading-relaxed text-md  '>{modules.bigtext[index]} </p>
            </div>
          </div>
          <div className=' experience flex h-full w-full border rounded-2xl col-span-1 row-span-2 p-10 items-center'>
            <p className='  tracking-widest leading-relaxed text-sm text-neutral-100   '>{modules.smalltext[index]}</p>
          </div>
        </div>

      </div > : <div className=' h-full w-full z-50'></div>}
    </>
  )

}

export default Experience;
