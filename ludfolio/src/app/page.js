"use client"
import React, { useLayoutEffect, useState } from 'react'
import Header from './components/Header'
import { useSpring } from 'react-spring';
import Loader from './components/Loader'
import Base from './components/Base'
function Page() {


  const [Loaded, setLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useLayoutEffect(() => {

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        triggerRootMargin: '-1px -1px -1px -1px'
      })


    })()
    setLoaded(true)

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
    <div className=' h-screen w-full flex flex-col bg-neutral-950'>
      <Loader />
      <Header />
      <Base/>
    </div>
  )
}

export default Page