"use client"
import React, { useState } from 'react'
import Landing from './Landing'
import Experience from './Experience'
import Graph from './Graph'
import gsap from 'gsap'
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

function Base() {

    const cards = [<Landing key={1} />, <Graph key={2} />, <Experience key={3} />]
    const [Index, setIndex] = useState(0)

    const NextCard = () => {
        const tl = gsap.timeline();
        // Animate current card out
        tl.to(".card", { scale: 0.7, duration: 0.3, ease: "power2.out" });
        tl.to(".card", {
            x: -2000, duration: 0.5, ease: "power2.in", onComplete: () => {
                setTimeout(() => {
                    const temp = Index
                    const tl2 = gsap.timeline();
                    if (temp == cards.length - 1) {
                        setIndex(0);
                    } else {
                        setIndex((prevIndex) => (prevIndex + 1));
                    }
                    tl2.fromTo(".card", { x: 2000, opacity: 1, delay: 0.1 }, { x: 0, duration: 0.8, ease: "power2.out" })
                    tl2.to(".card", { scale: 1, duration: 0.2, ease: "power2.out" })

                }, 200)

            }
        })



    };

    const PrevCard = () => {
        const tl = gsap.timeline();
        // Animate current card out
        tl.to(".card", { scale: 0.7, duration: 0.3, ease: "power2.out" });
        tl.to(".card", {
            x: -2000, duration: 0.5, ease: "power2.in", onComplete: () => {
                setTimeout(() => {
                    const temp = Index
                    const tl2 = gsap.timeline();
                    if (temp == 0) {
                        setIndex((cards.length - 1));
                    } else {
                        setIndex((prevIndex) => (prevIndex - 1));
                    }
                    tl2.fromTo(".card", { x: 2000, opacity: 1, delay: 0.1 }, { x: 0, duration: 0.8, ease: "power2.out" })
                    tl2.to(".card", { scale: 1, duration: 0.2, ease: "power2.out" })

                }, 200)

            }
        })



    };
    return (
        <div className=' hidden lg:flex flex-col h-[90vh] w-full p-5 overflow-hidden relative text-neutral-100  text-sm'>
            <div className='card w-[90%] mx-auto h-[90%] flex'>
                {cards[Index]}
            </div>
          
                <div className='lg:flex flex-row mx-auto my-auto hidden '>
                <button onClick={() => PrevCard()} className='group py-[0.5px] px-3 border rounded-full flex text-base'><LuMoveLeft className='group-hover:-translate-x-1 duration-100 my-auto my-auto' /></button>
                    <p className=' mx-5 font-light w-10 flex items-center justify-center'>{Index + 1} / {cards.length}</p>
                    <button onClick={() => NextCard()} className=' group py-[0.5px] px-3 border rounded-2xl flex text-base'><p className=' mx-1 my-auto'>next</p> <LuMoveRight className=' group-hover:translate-x-1 duration-100 my-auto' /></button>
                </div>
               

        </div>
    )
}

export default Base