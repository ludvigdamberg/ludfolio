"use client"
import React, { useLayoutEffect } from 'react'
import Projects from '../components/Projects'
import Header2 from '../components/Header2'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { FaMagnifyingGlass } from 'react-icons/fa6'


function Page() {

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        triggerRootMargin: '-1px -1px -1px -1px'
      })
    })()
  }, [])

  return (
    <div className=' w-full flex flex-col bg-neutral-950'>
    <Loader/>
    <Header2/>
    <Projects/>
    <div className=' h-[20vh] flex flex-col mx-auto my-10 px-10  items-center justify-center'>
      <p className=' text-4xl text-neutral-200 flex font-semibold'> <FaMagnifyingGlass className=' text-2xl mr-2 my-auto'/> Did you find what you were looking for?</p>
      <p className=' text-xl text-neutral-200 flex font-light mt-5'> I will update it soon with new projects</p>

    </div>
    <Footer/>    
    </div>
  )
}

export default Page