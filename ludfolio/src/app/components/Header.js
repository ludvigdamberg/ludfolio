import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import About from './About'


function Header({ handleClick }) {
  return (
    <div className=' w-full h-[5vh] grid grid-cols-3'>
      <div className='grid items-center font-black mx-3 text-3xl font-anton tracking-tighter'>
        <h1>ludvig</h1>
      </div>
      <div></div>
      <div className=' text-slate-600 text-center grid grid-cols-4 items-center justify-end text-[14px] font-semilight'>

        <button className=' hover:underline' onClick={() => handleClick('about')}>about</button>
        <button className=' hover:underline'>projects</button>
        <button className=' hover:underline' onClick={() => handleClick('contact')}>contact</button>

      </div>

    </div>
  )
}

export default Header