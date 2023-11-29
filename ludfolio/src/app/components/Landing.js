"use client"
import React, { useEffect, useState } from 'react'

function Landing() {


  //This solution takes the screens size into account, before it used fixed pixel values

  return (

    <div  className=' h-[95vh] w-full p-20 flex '>
      <div className=' p-2 flex flex-col my-auto z-30'>
        <p className=' font-black text-9xl tracking-tighter text-slate-800'>HELLO IM</p>
        <h1 className=' font-black text-9xl tracking-tighter text-slate-800'>LUDVIG</h1>
        <p className=' text-[14px] font-light tracking-tighter mx-0.5 text-slate-500 '>software engineer / media technology / computer science</p>
      </div>
      <div className=' row-span-2 col-span-1'>
        <div  className=' font-Roboto font-extralight text-xs p-2'>
        </div>
        
      </div>

    </div>
  )
}

export default Landing