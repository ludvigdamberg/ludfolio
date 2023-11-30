"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Loader() {
  const loader = useRef()
  useEffect(() => {

    gsap.to(loader.current, {
      scale: 0.8,
      duration: 0.5,
      delay: 1,
    })
    gsap.to(loader.current, {
      translateX: 2000,
      duration: 0.5,
      delay: 1.5,
      ease: "power1.out",
    })
  }, [])

  return (
    <div ref={loader} className=' h-screen w-screen bg-slate-100 text-slate-800 fixed top-0 left-0 z-50 text-5xl font-bold justify-center items-center flex overflow-hidden'>
      <div className=''>
        <h1>just a moment</h1>
      </div>
    </div>
  )
}

export default Loader