"use client"
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import modules from '../../../public/assets/content'

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
          start: '70% bottom',
          end: '+=200px bottom',
          scrub: true,
        },
      });

      timeline2.from(effect2.current, { y: 50, opacity: 0 }).to(effect2.current, { y: 0, opacity: 1 }, 0);

    }, 2000)

  }, []);


  function Change(index) {

    setIndex(index)

    const exp = gsap.timeline()

    exp.from(".experience", {opacity:0, x:30,}).to(".experience", {opacity:1, x:0, ease:"power1.out"})

  }

  return (

    <> {Loaded ? <div ref={effect2} className=' text-slate-800 h-screen w-full p-10 flex flex-col '>

      <div className='grid grid-cols-2 gap-5 h-full z-40'>
        <div className='border-slate-800 flex flex-col w-[70%]'> 
             <h1 className=' mt-20 text-6xl font-black leading-tight z-40 border-b border-slate-800 italic'>EXPERIENCE</h1>

          {names.map((name, index) => (
            <div
              key={index}
              onMouseOver={() => Change(index)}
              className=' leading-tight border-b border-slate-800 flex items-center px-2 text-[50px] font-black hover:bg-slate-800 ease-in-out duration-100 hover:text-white'
            >
              {name}
            </div>
          ))}
          <div className=' h-full my-5'>

          </div>
        </div>
        <div className='experience flex flex-col w-[80%]'>
          <div className=' pb-2  h-[35%] flex pl-16'>
            < Image className='' src={`../../assets/${images[index]}`} alt='SVG Image' width={300} height={300} />
          </div>
          <div className=' text-slate-800 h-full flex flex-col px-14'>
            <p className=' font-bold tracking-widest leading-relaxed text-2xl my-2'>{modules.headlines[index]} </p>
            <p className=' font-normal tracking-wider leading-relaxed text-xl my-2'>{modules.bigtext[index]} </p>
            <p className=' font-light text-base my-2'>{modules.smalltext[index]}</p>
            <p className=' font-light text-3xl my-2 flex flex-row'>{modules.icons[index].map((icon, i) => <p key={i} className=' mx-2'>{icon}</p>)}</p>

          </div>
        </div>
      </div>
    </div> : <div className=' h-screen w-full z-50'></div>}
    </>
  );

}

export default Experience;
