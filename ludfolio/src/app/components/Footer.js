import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-speed="0.2" className=' h-[30vh] w-full bg-slate-800 text-slate-200 grid grid-cols-3 p-5 z-10'>
        <div className='flex flex-col'>
            <p className=' font-extralight text-xl tracking-wide'>Powered by</p>
        </div>
        <div className='flex flex-col'>
            <p className=' font-extralight text-xl tracking-wide'>Links</p>
        </div>
        <div className='flex flex-col'>
        <p className=' font-extralight text-xl tracking-wide'>Social</p>
        </div>
        
    </div>
  )
}

export default Footer