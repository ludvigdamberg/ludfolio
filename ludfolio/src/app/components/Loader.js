"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

function Loader( {link}) {
  const loader = useRef()

  useLayoutEffect(() => {


    const tl2 = gsap.timeline()
    tl2.to(loader.current,{ height: "100vh", duration: 0.5,})
    tl2.fromTo(".load",{y:160}, { duration: 0.4, y: 0, ease: "power3.out" })
    tl2.to(".load", { duration: 0.4, delay:0.2, y: -160, ease: "power3.in" })
    tl2.to(loader.current,{ y: "100%",delay:0.3,  duration: 0.5 })
   
  }, [])

  return (
    <div ref={loader} className=' h-0 w-screen bg-neutral-900 text-neutral-200 fixed top-0 left-0 z-50 text-5xl  justify-center items-center flex overflow-hidden'>
      <div className='flex h-auto'>
        <div className='  flex flex-col md:text-9xl text-5xl text-center w-auto h-auto pb-10 overflow-hidden'>
          <p id='text' className='load h-auto tracking-tight text-center'>{link}</p>
        </div>
      </div>
    </div>
  )
}

export default Loader