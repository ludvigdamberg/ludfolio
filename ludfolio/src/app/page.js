"use client"
import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import Experience from './components/Experience'
import Footer from './components/Footer'
import { useSpring, animated } from 'react-spring';
import Loader from './components/Loader'
import About from './components/About'
import Info from './components/Info'
function page() {


  const [isLoading, setIsLoading] = useState(true)
  const [Loaded, setLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        smoothWheel: true,
        triggerRootMargin: '-1px -1px -1px -1px',
      })

    
    })() 
    
    setLoaded(true)
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = "default"
      }, 700)
      
  }, [])



  const parallax = useSpring({
    config: { friction: 50, tension: 70 },
    to: {
      top1: Loaded ? `${-35 + mousePosition.y / 500}%` : '0%',
      left1: Loaded ? `${-8 + mousePosition.x / 500}%` : '0%',
      top2: Loaded ? `${-20 + mousePosition.y / 150}%` : '0%',
      left2: Loaded ? `${40 + mousePosition.x / 150}%` : '0%',
      top3: Loaded ? `${50 + mousePosition.y / 500}%` : '0%',
      left3: Loaded ? `${60 + mousePosition.x / 500}%` : '0%',
    },
  });


  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };


  return (
    <div onMouseMove={handleMouseMove} className='  bg-neutral-950 -z-20'>
      {isLoading && <Loader />}
      <div className=' row-span-3 col-span-2 flex justify-center -z-20  '>

        <animated.div className=' rounded-full bg-indigo-600  w-[700px] h-[700px] blur-lg opacity-50' style={{
          position: 'fixed',
          top: parallax.top1,
          left: parallax.left1,
        }}></animated.div>

        <animated.div className=' rounded-full bg-indigo-600 w-[500px] h-[500px] blur-lg opacity-50 ' style={{
          position: 'fixed',
          top: parallax.top2,
          left: parallax.left2,
        }}></animated.div>

        <animated.div className=' rounded-full bg-indigo-600 w-[800px] h-[800px] blur-lg opacity-50' style={{
          position: 'fixed',
          top: parallax.top3,
          left: parallax.left3,
        }}></animated.div>

      </div>
      <Header />
      <Landing />
      <About/>
      <Experience />
      <Footer />
    </div>
  )
}

export default page