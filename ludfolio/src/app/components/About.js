"use client"
import React, { forwardRef, useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';



function About({ text }, ref) {

  const effect1 = useRef(null)
  const effect2 = useRef(null)
  const effect3 = useRef(null)

  const names = ['weknowit', 'cpac cystems ab', 'lithehack']
  const images = ['wkit.svg', 'cpac.svg', 'liu.svg']
  const [image,setImage] = useState(0)
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: effect1.current,
        start: '400 bottom',
        end: '+=100px bottom',
        scrub: true,
        markers: true
      }
    })
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: effect2.current,
        start: '400px bottom',
        end: '+=100px bottom',
        scrub: true,
        markers: true
      }
    })
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: effect3.current,
        start: '300px bottom',
        end: '+=200px bottom',
        scrub: true,
        markers: true
      }
    })

    timeline.from(effect1.current, { y: 50, opacity: 0 }).to(effect1.current, { y: 0, opacity: 1 }, 0)
    timeline2.from(effect2.current, { y: 50, opacity: 0 }).to(effect2.current, { y: 0, opacity: 1 }, 0)
    timeline3.from(effect3.current, { clipPath: "inset(30%)" }).to(effect3.current, { clipPath: "inset(0%)" }, 0)




  }, [])

 
  return (
    <div ref={ref}>
      <div ref={effect3} className='grid grid-cols-2 h-[150vh] w-full gap-10 p-32 bg-white'>
        <div ref={effect2} className=' text-slate-800'>
          <h1 className='text-[60px] font-black  pt-28'>ABOUT</h1>
          <div className=' h-full flex flex-col justify-end border-black pb-60'>
            {names.map((name, index) => {
              return (
                <div onMouseOver={() => setImage(index)} key={index} className=' flex items-center px-5 text-[50px] font-medium hover:bg-slate-700 hover:text-white '>{name}</div>
              )
            })}
          </div>
        </div>
        <div ref={effect1} className=' h-[70vh] my-auto p-10 bg bg-slate-700 drop-shadow-lg rounded-md'>
          <Image  className=' text-white m-auto ' src={`../../assets/${images[image]}`} alt='SVG Image' width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);
