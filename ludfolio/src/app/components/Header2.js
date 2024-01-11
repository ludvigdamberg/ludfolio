"use client"
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaCode, FaHouse } from "react-icons/fa6";


function Header() {

    const [home, setHome] = useState(false)

    useEffect(() => {

        const isHomePage = window.location.pathname === '/';

        if (!isHomePage) { setHome(true) }



    }, [])


    const expandMenu = () => {

        const tl = gsap.timeline()
        const tl2 = gsap.timeline()

        tl2.to(".bars", { rotate: -90, duration: 0.4, ease: "back.out" })
        tl.to(".animat", { height: "40vh", duration: 0.4, display: "block", ease: "power3.out" })
        tl.to(".links", { opacity: 1, duration: 0.25 })


    }

    const CollapseMenu = () => {

        const tl = gsap.timeline()

        tl.to(".links", { opacity: 0, duration: 0.2 })
        tl.to(".animat", { height: 0, duration: 0.25, display: "hidden", ease: "power2.in", delay: 0.2 })
        tl.to(".bars", { rotate: 0, duration: 0.4, ease: "back.out" })

    }

    return (

        <div className=' w-full h-[10vh] flex font-light text-sm justify-center text-neutral-300 bg-neutral-950'>
            <div className=' w-auto mx-2 my-auto py-2 bg-neutral-900  flex rounded-full px-10 '>
                <p className=' text-neutral-100'>Links</p>
            </div>
            <div className=' w-auto mx-2 my-auto py-2 bg-neutral-900  flex rounded-full px-10 '>
                <Link className=' mx-10 my-auto hover:underline ease-in-out duration-100 ' href="/Projects">Projects </Link>
                <Link className=' mx-10 my-auto hover:underline ease-in-out duration-100 ' href="/Contact">Contact </Link>
                <Link className=' mx-10 my-auto hover:underline ease-in-out duration-100  ' href="/">Home </Link>
            </div>
        </div>
    )
}

export default Header