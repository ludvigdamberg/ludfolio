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


  const parallax = useSpring({
    config: config.default,
    to: {
      top1: Loaded ? 200 + (mousePosition.y) / 50 : 0,
      left1: Loaded ? 960 - (mousePosition.x) / 50 : 0,
      top2: Loaded ? 280 + (mousePosition.y) / 15 : 0,
      left2: Loaded ? 1100 + (mousePosition.x) / 15 : 0,
      top3: Loaded ? 400 + (mousePosition.y) / 25 : 0,
      left3: Loaded ? 1160 + (mousePosition.x) / 25 : 0,
      top4: Loaded ? 200 - (mousePosition.y) / 50 : 0,
      left4: Loaded ? 1020 - (mousePosition.x) / 50 : 0,
    },
  });


  return (

    <div className=' h-[95vh] w-full grid grid-cols-3 grid-rows-3 gap-0.5 p-16 ' onMouseMove={handleMouseMove}>
      <div className=' row-span-1 col-span-1 border border-black p-2'>
        <h1 className=' font-extrabold font-anton text-4xl tracking-tighter'>HELLO I'M LUDVIG</h1>
        <p className=' text-[14px] font-light tracking-tighter'>software engineer / media technology / computer science</p>
      </div>
      <div className=' row-span-3 col-span-2 border border-black flex justify-center '>

        <animated.div className=' rounded-full bg-orange-500 opacity-80 w-80 h-80' style={{
          position: 'absolute',
          top: parallax.top1,
          left: parallax.left1,
        }}></animated.div>

        <animated.div className=' rounded-full bg-blue-300 opacity-80 w-80 h-80 ' style={{
          position: 'absolute',
          top: parallax.top2,
          left: parallax.left2,
        }}></animated.div>

        <animated.div className=' rounded-full bg-yellow-300 opacity-80 w-80 h-80 ' style={{
          position: 'absolute',
          top: parallax.top3,
          left: parallax.left3,
        }}></animated.div>

        <animated.div className=' w-96 h-96 opacity-95 justify-center' style={{
          position: 'absolute',
          top: parallax.top4,
          left: parallax.left4,
        }}> <img src='../../assets/profile.png'/></animated.div>

      </div>
      <div className=' row-span-2 col-span-1 border border-black'></div>

    </div>
  )
}

export default Landing