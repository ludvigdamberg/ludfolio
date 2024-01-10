"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaHourglass } from 'react-icons/fa'

function Loader() {
  const loader = useRef()

  useLayoutEffect(() => {

    const tl = gsap.timeline()
    const tl2 = gsap.timeline()

    tl2.to(".heart", { duration:1, y:300 ,ease: "back.in"  })
    tl.fromTo(".load",{y:120}, { duration: 1, y: 0, ease: "back.out", opacity: 1, stagger: 0.1 })
    tl.to(loader.current,{ height: 0, duration: 0.4,ease: "power1.in"})
   
  }, [])

  return (
    <div ref={loader} className=' h-screen w-screen bg-neutral-950 text-neutral-200 fixed top-0 left-0 z-50 text-5xl font-bold justify-center items-center flex overflow-hidden'>
      <div className='flex h-auto'>
        <div className=' flex flex-col font-black md:text-9xl text-5xl font-poppins border md:h-[250px] md:w-[250px] overflow-hidden'>
          <p className='load opacity-0 h-auto overflow-hidden'>LUD</p>
          <p className='load tracking-wide opacity-0 h-auto overflow-hidden'>VIG</p>
        </div>
        <div className='  border border-neutral-50 md:w-[250px] text-5xl md:text-9xl md:h-[250px] overflow-hidden flex  '><FaHourglass className='heart my-auto md:mx-auto mx-6'/> </div>
      </div>
    </div>
  )
}

export default Loader