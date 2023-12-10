"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Loader() {
  const loader = useRef()

  useEffect(() => {


    gsap.to(loader.current, {
      height:0,
      duration: 0.2,
      ease:"power1.in",
      delay: 0.5,
    })
  }, [])

  return (
    <div ref={loader} className=' h-screen w-screen bg-neutral-950 text-neutral-200 fixed top-0 left-0 z-50 text-5xl font-bold justify-center items-center flex overflow-hidden'>
      <div className=''>
        <p>loading...</p>
      </div>
    </div>
  )
}

export default Loader