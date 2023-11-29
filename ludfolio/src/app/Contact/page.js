import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import './contact.css'
function page() {
  return (
    <div className=' bg-white w-screen h-screen flex'>
      <Contact />
      <div className='flex flex-col w-[65%]'>
        <Header />
        <div className=' flex flex-col p20'>
          <div className="flex overflow-hidden select-none gap-4">
            <p className='marquee__content flex shrink-0 justify-around min-w-full gap-4 font-black text-9xl overflow-hidden '>SOFTWARE ENGINEER UX UI DATA STRUCTURES</p>
            <p className='marquee__content flex shrink-0 justify-around min-w-full gap-4 font-black text-9xl overflow-hidden '>SOFTWARE ENGINEER UX UI DATA STRUCTURES</p>
          </div>
          <div className="flex overflow-hidden select-none gap-4">
            <p className='marquee__content2 flex shrink-0 justify-around min-w-full gap-4 font-black text-9xl overflow-hidden '>SOFTWARE ENGINEER UX UI DATA STRUCTURES</p>
            <p className='marquee__content2 flex shrink-0 justify-around min-w-full gap-4 font-black text-9xl overflow-hidden '>SOFTWARE ENGINEER UX UI DATA STRUCTURES</p>
          </div>
          <div className="flex overflow-hidden select-none gap-4">
            <p className='marquee__content flex shrink-0 justify-around min-w-full gap-4 font-black text-9xl overflow-hidden '>SOFTWARE ENGINEER UX UI DATA STRUCTURES</p>
            <p className='marquee__content flex shrink-0 justify-around min-w-full gap-4 font-black text-9xl overflow-hidden '>SOFTWARE ENGINEER UX UI DATA STRUCTURES</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default page