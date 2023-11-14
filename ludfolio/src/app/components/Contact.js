"use client"
import React, { forwardRef, useRef } from 'react'

function Contact({text}, ref) {
  return (
    <div ref={ref} className=' w-full h-screen bg-black text-white p-20'>CONTACT</div>
  )
}

export default forwardRef(Contact)