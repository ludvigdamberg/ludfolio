"use client"
import React, { useEffect, useState } from 'react'
import { useSpring, animated, config } from 'react-spring';

function Landing() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };


  //This solution takes the screens size into account, before it used fixed pixel values
  const parallax = useSpring({
    config: config.default,
    to: {
      top1: Loaded ? `${15 + mousePosition.y / 500}%` : '0%',
      left1: Loaded ? `${43 + mousePosition.x / 500}%` : '0%',
      top2: Loaded ? `${30 + mousePosition.y / 200}%` : '0%',
      left2: Loaded ? `${50 + mousePosition.x / 200}%` : '0%',
      top3: Loaded ? `${40 + mousePosition.y / 60}%` : '0%',
      left3: Loaded ? `${52 + mousePosition.x / 60}%` : '0%',
    },
  });




  return (

    <div  className=' h-[95vh] w-full grid grid-cols-3 grid-rows-3 gap-0.5 p-20 ' onMouseMove={handleMouseMove}>
      <div className=' row-span-2 col-span-1 p-2 flex flex-col'>
        <h1 className=' font-black text-6xl tracking-tighter text-black mt-auto'>HELLO I'M LUDVIG</h1>
        <p className=' text-[14px] font-light tracking-tighter my-1 mx-0.5 text-slate-500 '>software engineer / media technology / computer science</p>
      </div>
      <div className=' row-span-3 col-span-2 flex justify-center  '>


        <animated.div className=' rounded-full bg-red-400  w-36 h-36 blur-lg' style={{
          position: 'absolute',
          top: parallax.top1,
          left: parallax.left1,
        }}></animated.div>

        <animated.div className=' rounded-full bg-orange-400 opacity-80 w-40 h-40 blur-md ' style={{
          position: 'absolute',
          top: parallax.top2,
          left: parallax.left2,
        }}></animated.div>

        <animated.div className=' rounded-full bg-yellow-200 w-64 h-64 blur-md' style={{
          position: 'absolute',
          top: parallax.top3,
          left: parallax.left3,
        }}></animated.div>



      </div>
      <div className=' row-span-2 col-span-1'>
        <div  className=' font-Roboto font-extralight text-xs p-2'>
        </div>
        
      </div>

    </div>
  )
}

export default Landing