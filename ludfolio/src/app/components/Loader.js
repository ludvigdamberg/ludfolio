"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaHourglass } from 'react-icons/fa'

function Loader() {
  const loader = useRef()

  useLayoutEffect(() => {

    const tl = gsap.timeline()
    const tl2 = gsap.timeline()
    tl2.to(".heart", { delay:0.1, duration:0.5, y:300 ,ease: "back.in"  })
    tl.fromTo(".load",{y:-150}, {delay:0.1, duration: 0.7, y: 0, ease: "back.out", opacity: 1, stagger: 0.1 })
    tl.to(loader.current,{ height: 0, duration: 0.5,delay:0.2 ,ease: "power3.in"})
   
  }, [])

  return (
    <div ref={loader} className=' h-screen w-screen bg-neutral-950 text-neutral-200 fixed top-0 left-0 z-50 text-5xl  justify-center items-center flex overflow-hidden'>
      <div className='flex h-auto'>
        <div className=' border-t border-r flex flex-col md:text-9xl text-5xl text-center  md:h-[250px] md:w-[250px] overflow-hidden'>
          <p className='load opacity-0 h-auto tracking-tight overflow-hidden text-center'>LUD</p>
          <p className='load tracking-widest opacity-0 h-auto overflow-hidden text-center'>VIG</p>
        </div>
        <div className=' border-b  border-neutral-50 md:w-[250px] text-5xl md:text-9xl md:h-[250px] overflow-hidden flex  '><FaHourglass className='heart my-auto md:mx-auto mx-6'/> </div>
      </div>
    </div>
  )
}

export default Loader