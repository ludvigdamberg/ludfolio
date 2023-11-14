import React, { forwardRef, useRef } from 'react'

function About({ text } , ref) {
  return (
    <div ref={ref} className=' w-full h-screen bg-slate-950 text-white p-20'>ABOUT</div>
  )
}

export default forwardRef(About)