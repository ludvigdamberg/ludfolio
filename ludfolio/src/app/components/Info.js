"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

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
          scrub:true,        }
      })

      gsap.to(".pinner2", {
        scrollTrigger: {
          trigger:".pinner2",
          start:"center center",
          end:"+=300px",
          pin:true,
          scrub:true,        }
      })


      gsap.to(".image", {
        y: '30%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(".image2", {
        y: '30%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image2",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(".image3", {
        y: '20%', // Adjust the percentage as per your desired parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: ".image3",
          start: 'top bottom',
          end: 'bottom top',

          scrub: true,
        },
      });
      gsap.to(".image4", {
        y: '30%', // Adjust the percentage as per your desired parallax effect
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
      <div className=' h-screen w-full grid grid-cols-2 p-14 z-40 bg-neutral-950 rounded-3xl '>
        <div className=' w-full h-full grid grid-cols-2 z-40 bg-lime-900'>
          <div className=' flex w-full h-full flex-col p-10'>
            <p className=' font-rubik font-black text-5xl mt-20 text-lime-500'>ABOUT ME</p>
            <div className=' flex flex-col w-[70%] h-[50%] mx-auto mt-20 text-sm tracking-widest leading-tight font-medium'>
              <p className=' font-poppins'>{me[0]}</p>
            </div>
            <Link href="/Projects" className=' group py-2 border-2 border-neutral-200 rounded-xl px-5 mr-auto text-center mt-auto bg-neutral-900 font-bold flex flex-row justify-center items-center hover:scale-105 ease-in-out duration-300 '>Recent Projects <MdOutlineArrowOutward className="group-hover:rotate-45 ease-in-out duration-300 mx-1 "/> </Link>
          </div>
          <div className=' flex w-full h-full flex-col p-10'>
            <p className=' font-rubik font-black text-5xl mt-52 text-indigo-500'>AND...</p>
            <div className=' flex w-[70%] h-[50%] mx-auto mt-auto mb-20 text-sm tracking-widest leading-tight font-medium'>
              <p className=' font-poppins'>{me[1]}</p>
            </div>
          </div>
        </div>


        <div className=' w-full h-full grid grid-cols-2 bg-indigo-900 '>
          <div className=' flex w-full h-full flex-col '>

            <div className='group w-[80%] h-[30%] relative rounded-sm overflow-hidden parallax-image mx-auto mt-20  '>
            <div className=' w-full h-full absolute z-50 flex text-neutral-200 rounded-sm opacity-0 group-hover:opacity-100 group-hover:backdrop-brightness-50 ease-in-out duration-150 '><p className=' mt-auto mr-auto ml-2 mb-2 text-xl font-black '>Fiskekyrka, Gothenburg</p></div>

              <Image src={"/../../assets/gbg2.jpg"} fill={true} objectFit='cover' className='image scale-[160%]' />
            </div>
            <div className='group w-[80%] h-[30%] relative rounded-sm overflow-hidden parallax-image mx-auto mt-24  '>
            <div className=' w-full h-full absolute z-50 flex text-neutral-200 rounded-sm opacity-0 group-hover:opacity-100 group-hover:backdrop-brightness-50 ease-in-out duration-150 '><p className=' mt-auto mr-auto ml-2 mb-2 text-xl font-black '>Poseidon, Gothenburg</p></div>

              <Image src={"/../../assets/gbg3.jpg"} fill={true} objectFit='cover' className='image2 translate-x-10 scale-[160%]' />
            </div>


          </div>
          <div className=' flex w-full h-[full] flex-col'>

            <div className='group w-[80%] h-[45%] relative rounded-sm overflow-hidden parallax-image mx-auto mt-10  '>
            <div className=' w-full h-full absolute z-50 flex text-neutral-200 rounded-sm opacity-0 group-hover:opacity-100 group-hover:backdrop-brightness-50 ease-in-out duration-150 '><p className=' mt-auto mr-auto ml-2 mb-2 text-xl font-black '>Me</p></div>

              <Image src={"/../../assets/pb.jpeg"} fill={true} objectFit='cover' className='image3 scale-[140%]' />
            </div>
            <div className='group w-[75%] h-[25%] relative rounded-sm overflow-hidden parallax-image mx-auto mt-20  '>
                <div className=' w-full h-full absolute z-50 flex text-neutral-200 rounded-sm opacity-0 group-hover:opacity-100 group-hover:backdrop-brightness-50 ease-in-out duration-150 '><p className=' mt-auto mr-auto ml-2 mb-2 text-xl font-black '>Vitamin D</p></div>
              <Image src={"/../../assets/3.jpg"} fill={true} objectFit='cover' className='image4 scale-[160%]' />
            </div>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Info