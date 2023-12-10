"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import Image from 'next/image';

function Info() {

  const pinner = useRef(null)
  const me = ["Hey there! I’m a 25-year-old student from Gothenburg, Sweden. I earned my bachelor's degree in media technology, where my fascination for software engineering of technology and media truly took off. Currently, I'm in my final year of my master's in Data Science, with a particular focus on media tech. Balancing the academic studies with an interest for coding, I'm all about finding a combination of work and my other interests. When I'm not immersed in code, I’m usually doing something like training or hanging out with friends. There's something about experiencing different cultures that I find incredibly enriching.",
    "Speaking of coding, I'm not just a student; I'm also a part-time full stack developer. I like the dynamic challenge of working on both frontend and backend projects, and the real-world experience complements my studies in a nice way. My coding journey has led me to learn languages like JavaScript, C++, and Java, and I've even also dabbled into Python. Looking ahead, my eyes are set on working wherever i find the most exciting opportunity, wherever that might be. I've got an itch for new experiences, and I hope to work abroad in the future. The idea of trying out different work cultures new challenges excites me!"]


  useEffect(() => {


    gsap.registerPlugin(ScrollTrigger)

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: 'top+=300px center',
        end: "+=100px",
        scrub: true

      },
    });

    timeline2.from(".about", { y: 20, opacity: 0 }).to(".about", { y: 0, opacity: 1 }, 0);

  }, [])


  useLayoutEffect(() => {

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        smoothWheel: true,
      })


    })()

    let ctx = gsap.context(() => {

      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".pinner", {
        scrollTrigger: {
          trigger:".pinner",
          start:"center center",
          end:"+=300px",
          pin:true,
          scrub:true,
          markers:true,
        }
      })

      gsap.to(".pinner2", {
        scrollTrigger: {
          trigger:".pinner2",
          start:"center center",
          end:"+=300px",
          pin:true,
          scrub:true,
          markers:true,
        }
      })


      gsap.to(".image", {
        y: '20%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(".image2", {
        y: '20%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image2",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(".image3", {
        y: '10%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image3",
          start: 'top bottom',
          end: 'bottom top',

          scrub: true,
        },
      });
      gsap.to(".image4", {
        y: '20%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image4",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });


    })


    return () => ctx.revert();


  }, [])

  /*
    <div className="trigger flex rounded-xl overflow-hidden row-span-2 col-span-2">
              <img src="../../assets/gbg2.jpg" className="photo w-full h-full object-cover scale-[200%] " />
            </div>
  */

  return (
    <div className=' h-[100vh] w-full flex flex-col text-neutral-200 bg-neutral-950 '>
      <div className=' h-screen w-full grid grid-cols-2 p-14 z-40 '>
        <div className=' w-full h-full grid grid-cols-2'>
          <div className=' flex w-full h-full flex-col p-10'>
            <p className=' font-rubik font-black text-5xl mt-20 text-orange-500'>ABOUT ME</p>
            <div className=' flex w-[70%] h-[50%] mx-auto mt-20 text-sm tracking-widest leading-tight font-medium'>
              <p className=' font-poppins'>{me[0]}</p>
            </div>
          </div>
          <div className=' flex w-full h-full flex-col p-10'>
            <p className=' font-rubik font-black text-5xl mt-52 text-red-500'>AND...</p>
            <div className=' flex w-[70%] h-[50%] mx-auto mt-auto mb-20 text-sm tracking-widest leading-tight font-medium'>
              <p className=' font-poppins'>{me[1]}</p>
            </div>
          </div>
        </div>


        <div className=' w-full h-full grid grid-cols-2 '>
          <div className=' flex w-full h-full flex-col '>

            <div className='container w-[350px] h-[350px] relative rounded-xl overflow-hidden parallax-image mx-auto mt-20  '>
              <Image src={"/../../assets/gbg2.jpg"} fill={true} objectFit='cover' className='image scale-[140%]' />
            </div>
            <div className='container w-[350px] h-[250px] relative rounded-xl overflow-hidden parallax-image mx-auto mt-24  '>
              <Image src={"/../../assets/gbg3.jpg"} fill={true} objectFit='cover' className='image2 translate-x-10 scale-[140%]' />
            </div>


          </div>
          <div className=' flex w-full h-[full] flex-col'>

            <div className='container w-[300px] h-[350px] relative rounded-xl overflow-hidden parallax-image mx-auto mt-10  '>
              <Image src={"/../../assets/pb.jpeg"} fill={true} objectFit='cover' className='image3 scale-[120%]' />
            </div>
            <div className='container w-[350px] h-[250px] relative rounded-xl overflow-hidden parallax-image mx-auto mt-20 hover:brightness-50 ease-in-out duration-150  '>
              <Image src={"/../../assets/3.jpg"} fill={true} objectFit='cover' className='image4 scale-[140%]' />
            </div>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Info