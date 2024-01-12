"use client"
import gsap from 'gsap';
import Link from 'next/link'
import React, {useState } from 'react'

function Header() {

    const [expanded, setExpanded] = useState(false)


    const expandMenu = () => {

        const tl = gsap.timeline()
        tl.to(".animat", { height: "40vh", duration: 0.2, display: "flex", ease: "power3.out" })
        tl.to(".menu", { y: 257, duration: 0.2, display: "flex", ease: "power3.out" })
        tl.to(".links", { opacity: 1, duration: 0.25 })

        setExpanded(true)

    }

    const CollapseMenu = () => {

        const tl = gsap.timeline()
        tl.to(".links", { opacity: 0, duration: 0.2 })
        tl.to(".menu", { y: 0, duration: 0.2, display: "flex", ease: "power3.out" })
        tl.to(".animat", { height: 0, duration: 0.25, display: "hidden", ease: "power2.in", delay: 0.2 })

        setExpanded(false)
    }


    const handleContactClick = () => {
        window.location.href = 'mailto:ludvig.damberg@outlook.com';
    };


    return (

        <div className='  w-[90%] mx-auto h-[10vh] flex font-light text-sm'>
            <div className='animat h-0 w-[90%] fixed z-40 bg-neutral-900 mx-auto overflow-hidden flex-col rounded-b-2xl '>
                <div className=' h-full flex flex-col text-neutral-100'>
                    <Link className='group links opacity-0 mt-16 border-t  flex mx-10' href={"/Projects"}><p className='  mx-2 '> Projects</p> </Link>
                    <button onClick={() => handleContactClick()} className='group links opacity-0 mt-16 border-t  flex mx-10'> <p className='  mx-2 '> Contact</p> </button>
                    <Link className='group links opacity-0 mt-16 border-t  flex mx-10' href={"/"}> <p className='  mx-2 '> Home</p></Link>
                    <p className='group links opacity-0 mt-16 border-t flex mx-10'>created by: Ludvig Damberg</p>
                </div>
            </div>
            <div className=' text-neutral-300 w-full h-full hidden lg:flex border-neutral-400 lg:px-5'>
                <div className=' w-auto mx-2 my-auto   flex rounded-md border px-3 '>
                    <p className=' '>Links</p>
                </div>
                <div className=' w-auto mx-2 my-auto flex px-3 font-normal  '>
                    <Link className=' mx-3 px-1 rounded-sm my-auto hover:bg-yellow-500 ease-in-out duration-100 z-20 ' href="/Projects">Projects </Link>
                    <Link className=' mx-3 px-1 rounded-sm my-auto hover:bg-yellow-500 ease-in-out duration-100 z-20 ' href="https://www.linkedin.com/in/ludvigdamberg/">LinkedIn </Link>
                    <button onClick={() => handleContactClick()} className=' mx-3 px-1 rounded-sm my-auto hover:bg-yellow-500 ease-in-out duration-100 ' href="/Contact">Contact </button>
                    <Link className=' mx-3 px-1 rounded-sm my-auto hover:bg-yellow-500 ease-in-out duration-100  z-20 ' href="/">Home </Link>
                </div>
            </div>
            <div className='text-neutral-300 flex-col flex w-full lg:hidden px-10 '>
            <button onClick={() => {
                if(expanded){
                CollapseMenu()
                }else
                expandMenu()}} className=' menu z-50 ml-auto my-auto lg:hidden border rounded-full px-2 py-[0.5px]' >{expanded ? <p>close menu </p> : <p>expand menu</p>}</button>

            </div>
        </div>
    )
}

export default Header