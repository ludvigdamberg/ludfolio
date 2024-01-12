"use client"
import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import modules from '../../../public/assets/content'
import MagneticBig from './MagneticBig';

function Experience() {

  const effect2 = useRef(null);

  const names = ['weknowit', 'cpac systems', 'lithehack'];
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
      <MagneticBig>
        {Loaded ? <div ref={effect2} className=' text-neutral-100 text-sm h-full w-full lg:flex lg:flex-col hidden rounded-2xl font-light p-3 bg-neutral-900 '>


          <div className='flex w-full h-[5%] '>
            <p className=' ml-auto mx-3 my-auto'>Experience:</p>
            {names.map((name, index) => (
              <div key={index} onMouseEnter={() => Change(index)} className='group mx-2 rounded-sm flex px-1 justify-center my-auto hover:bg-yellow-500 ease-in-out duration-100'>
                <button>{name}</button>
              </div>
            ))}
          </div>
          <div className=' grid grid-rows-2 grid-cols-3 h-full w-full grid-flow-col p-1 gap-1'>
            <div className=' experience  flex border-b col-span-1 row-span-1 items-center justify-center'>
              <div className=' xl:w-[300px] xl:h-[300px] w-[200px] h-[200px] relative'>
                < Image className='' src={`../../assets/${images[index]}`} alt='SVG Image' fill={true} />
              </div>
            </div>
            <div className=' experience flex col-span-1 row-span-1 justify-center items-center'>
              <p className='  text-2xl xl:text-4xl flex flex-row'>{modules.icons[index].map((icon, i) => <p key={i} className=' mx-2 text-neutral-100 hover:text-yellow-500 ease-in-out duration-200'>{icon}</p>)}</p>
            </div>
            <div className=' experience h-full flex border-l flex-col row-span-2 col-span-2  p-10'>
              <p className='  tracking-widest leading-relaxed text-4xl underline  '>{modules.headlines[index]} </p>
              <p className='  tracking-widest leading-relaxed text-base xl:text-xl mt-10  '>{modules.bigtext[index]} </p>
              <p className='  xl:tracking-widest leading-loose text-sm my-auto  '>{modules.smalltext[index]}</p>
            </div>

          </div>


        </div > : <div className=' h-full w-full z-50'></div>}
      </MagneticBig>
    </>
  )

}

export default Experience;
