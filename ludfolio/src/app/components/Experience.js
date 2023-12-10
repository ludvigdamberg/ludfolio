"use client"
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import modules from '../../../public/assets/content'
import { MdOutlineArrowOutward } from "react-icons/md";

function Experience() {
  const effect1 = useRef(null);
  const effect2 = useRef(null);
  const effect3 = useRef(null);

  const names = ['WEKNOWIT', 'CPAC SYSTEMS', 'LITHEHACK'];
  const images = ['wkit.svg', 'cpac.svg', 'lithehack.svg'];
  const [index, setIndex] = useState(0);
  const [Loaded, setLoaded] = useState(false)


  useLayoutEffect(() => {
    setLoaded(true)
    gsap.registerPlugin(ScrollTrigger);


    setTimeout(() => {
      const timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: effect2.current,
          start: 'top center',

        },
      });

      timeline2.from(effect2.current, { y: 50, opacity: 0 }).to(effect2.current, { y: 0, opacity: 1 }, 0);

    }, 2000)

  }, []);


  function Change(index) {

    setIndex(index)

    const exp = gsap.timeline()

    exp.from(".experience", { opacity: 0, x: 15, duration: 0.3, stagger: 0.025, ease: "back.out" }).to(".experience", { opacity: 1, x: 0 })

  }

  return (

    <>
      {Loaded ? <div ref={effect2} className=' text-neutral-200 h-screen w-full p-20 flex flex-col'>


        <div className=' grid grid-cols-4 grid-rows-1 gap-1 p-1 w-full h-[40%] '>
          <div className='leading-tight h-full rounded-xl border-2 flex w-full items-center justify-center font-black bg-neutral-900 '>
            <p className=' text-5xl font-black z-40 bg-gradient-to-r bg-clip-text font-poppins text-indigo-500  '>EXPERIENCE</p>
          </div>
          {names.map((name, index) => (
            <div
              key={index}
              onMouseEnter={() => Change(index)}
              className='group rounded-xl border-2 flex items-center h-full w-full text-3xl justify-center font-black hover:bg-neutral-900 ease-in-out duration-100 hover:text-violet-600'>
              {name}<MdOutlineArrowOutward className='group-hover:rotate-45 ease-in-out duration-100 text-3xl ml-1' />
            </div>
          ))}
        </div>
        <div className=' grid grid-rows-2 grid-cols-3 h-full w-full grid-flow-col gap-1 p-1'>
          <div className=' experience  flex border-2 rounded-xl col-span-1 row-span-1 items-center justify-center'>
            < Image className='' src={`../../assets/${images[index]}`} alt='SVG Image' width={300} height={300} />
          </div>
          <div className=' experience flex border-2 rounded-xl col-span-1 row-span-1 justify-center items-center'>
            <p className=' font-light text-4xl flex flex-row'>{modules.icons[index].map((icon, i) => <p key={i} className=' mx-2 text-neutral-400 hover:text-sky-500 ease-in-out duration-200'>{icon}</p>)}</p>
          </div>
          <div className=' experience h-full flex flex-col row-span-2 col-span-1 border-2 rounded-xl p-10'>
            <p className=' font-extrabold tracking-widest leading-relaxed text-4xl text-sky-600  '>{modules.headlines[index]} </p>
            <p className=' font-normal tracking-wide leading-loose text-xl '>{modules.bigtext[index]} </p>
          </div>
          <div className=' experience flex h-full w-full border-2 rounded-xl col-span-1 row-span-2 p-10 items-center'>
           <p className=' font-normal tracking-wider leading-loose text-lg '>{modules.smalltext[index]}</p>
          </div>
        </div>

      </div > : <div className=' h-screen w-full z-50'></div>}
    </>
  )

}

export default Experience;
