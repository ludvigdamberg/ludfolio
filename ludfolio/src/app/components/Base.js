"use client"
import React, { useState } from 'react'
import Landing from './Landing'
import Experience from './Experience'
import Graph from './Graph'
import gsap from 'gsap'
import { MdArrowRightAlt } from 'react-icons/md'
function Base() {

    const cards = [<Landing key={1} />, <Graph key={2}/>, <Experience key={3}/>]
    const [Index, setIndex] = useState(0)

    const NextCard = () => {
        const tl = gsap.timeline();
        // Animate current card out
        tl.to(".card", { scale: 0.7, duration: 0.3,ease:"power2.out" });
        tl.to(".card", {
            x: -2000, duration: 0.8, ease: "power2.in(0.5)", onComplete: () => {
                setTimeout(() => {
                    const temp = Index
                    const tl2 = gsap.timeline();
                    if (temp == cards.length - 1) {
                        setIndex(0);
                    } else {
                        setIndex((prevIndex) => (prevIndex + 1));
                    }
                    tl2.fromTo(".card", { x: 2000, opacity: 1, delay: 0.1 }, { x: 0, duration: 0.8, ease: "power2.out(0.5)" })
                    tl2.to(".card", { scale:1,duration:0.2, ease:"power2.out" })

                }, 200)

            }
        })



    };


    return (
        <div className=' flex flex-col h-[94vh] w-full p-10 overflow-hidden relative text-neutral-100'>
            <div className='card w-[90%] mx-auto h-[90%] flex'>
                {cards[Index]}
            </div>
            <div className='flex flex-row items-center mx-auto my-auto'>
                <p className=' mx-5 font-light'>{Index + 1} / {cards.length}</p>
                <button onClick={() => NextCard()} className=' py-[0.5px] px-3 border rounded-2xl flex'><p className=' mx-1'>next</p> <MdArrowRightAlt className=' my-auto' /></button>
            </div>
        </div>
    )
}

export default Base