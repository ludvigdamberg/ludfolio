import React, { useEffect } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function About() {

    const me = ['Im a 25 years old student at Linköping University, Finishing my Masters thesis in computer science at the end of spring 2024. Im originally from Gothenburg. Im Open and interested in Onsite and remote opportunities both in Sweden and elseware. A Goal of mine is to work in abroad.',
    "My main areas of expertise are Backend and fullstack coding. I've spent most of my time coding in JavaScripit, C++, and Java. But I have also touched upon other languages like python and I'm always interested in expanding my knowledge when it comes to coding and using new frameworks."]

  useEffect(() => {


    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: '200px bottom',
        end: '+=300px bottom',
        scrub: true,
        markers: true
      },
    });

    timeline.from(".about", { width: "0%" }).to(".about", { width: "100%" }, 0);

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont",
        start: '500px bottom',
        end: '+=300px bottom',
        ease: "linear",
        scrub: true,
        markers: true
      },
    });

    timeline2.from(".cont", { y: -100, opacity: 0 }).to(".cont", { y: 0, opacity: 1 });




  }, [])

    return (
        <div>
            <div className=' h-[100vh] w-full flex flex-col z-20'>

                <div className='flex h-full w-full text-slate-800'>
                    <div className=' about w-full h-[35vh] flex flex-col z-40 my-20  border-b border-slate-800 mx-4 '>
                        <h1 className=' text-5xl font-black tracking-loose my-4 italic border-t border-b border-slate-800 overflow-hidden ' >WHO AM I</h1>
                        <div className=' cont flex flex-row'>
                            <p className='  tracking-wider mx-4 font-semilight '>{me[0]}</p>
                            <p className='  tracking-wider mx-4 font-semilight '>{me[1]}</p>
                            <Image src={"/../../assets/pb.jpeg"} width={220} height={220} className=' content mx-5' />
                        </div>

                    </div>
                </div>
                <div className='flex h-full w-full z-20'>
                    <div className=' about w-full h-[35vh] flex flex-col z-40 mt-auto my-20 border-b border-slate-800 mx-4 overflow-hidden'></div>

                </div>

            </div>
        </div>
    )
}

export default About