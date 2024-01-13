"use client"
import React, { useLayoutEffect } from 'react'
import Projects from '../components/Projects'
import Header from '../components/Header'
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
    <div className=' w-full flex flex-col bg-neutral-100 dark:bg-neutral-950 dark:text-neutral-100 text-neutral-950'>
    <Loader/>
    <Header/>
    <Projects/>
    <div className=' h-[20vh] hidden md:flex flex-col mx-auto my-5  items-center justify-center'>
      <p className=' text-xl  flex font-light'> <FaMagnifyingGlass className=' text-lg  mr-2 my-auto'/> Did you find what you were looking for?</p>
      <p className=' flex font-light mt-5'> I will update it soon with new projects</p>

    </div>
    <Footer/>    
    </div>
  )
}

export default Page