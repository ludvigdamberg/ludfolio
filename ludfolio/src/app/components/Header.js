"use client"
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArtstation, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = ({ onLinkChange }) => {

    const [expanded, setExpanded] = useState(false)
    const [theme, setTheme] = useState(false)

    const [currentLink, setCurrentLink] = useState('');

    const handleLinkChange = (newLink) => {
        if (newLink != currentLink) {
            setCurrentLink(newLink)
            onLinkChange(newLink)
            setCurrentLink(newLink)
        }

    };


    const themeCheck = () => {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme(true)
            gsap.to(".switch", { x: 18, duration: 0.1, ease: "power3.out" })
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {

        themeCheck()
    }, [])



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
    }

    const switchTheme = () => {


        if (theme == false) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setTheme(true)
            gsap.to(".switch", { x: 18, duration: 0.1, ease: "power3.out" })
            return
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setTheme(false)
            gsap.to(".switch", { x: 0, duration: 0.1, ease: "power3.out" })
            return
        }

    }


    return (

        <div className='  w-[90%] mx-auto h-[10vh] flex text-sm font-light px-5'>
            <div className='animat h-0 w-[90%] fixed z-40 mx-auto overflow-hidden flex-col rounded-b-2xl text-neutral-950 dark:text-neutral-200 dark:bg-black '>
                <div className=' h-full flex flex-col '>
                    <Link className='group links opacity-0 mt-16 border-t  flex mx-10' href={"/Projects"}><p className='  mx-2 '> Projects</p> </Link>
                    <button onClick={() => handleContactClick()} className='group links opacity-0 mt-16 border-t  flex mx-10'> <p className='  mx-2 '> Contact</p> </button>
                    <Link className='group links opacity-0 mt-16 border-t  flex mx-10' href={"/"}> <p className='  mx-2 '> Home</p></Link>
                    <p className='group links opacity-0 mt-16 border-t flex mx-10'>created by: Ludvig Damberg</p>
                </div>
            </div>
            <div className='  w-full h-full hidden lg:flex '>
                <div className=' w-auto mx-2 my-auto  flex rounded-md border border-neutral-950 dark:border-neutral-200 px-3'>
                    <p className=' '>Links</p>
                </div>
                <div className=' w-auto mx-2 my-auto flex  '>
                    <a onClick={() => handleLinkChange("home")} className=' mx-3 px-1 rounded-md my-auto dark:hover:bg-yellow-500 hover:bg-orange-500 ease-in-out duration-100  z-20 ' >Home </a>
                    <a onClick={() => handleLinkChange("projects")} className=' mx-3 px-1 rounded-md my-auto dark:hover:bg-yellow-500 hover:bg-orange-500 ease-in-out duration-100 z-20 '> Projects </a>
                    <button onClick={() => handleContactClick()} className=' mx-3 px-1 rounded-md my-auto dark:hover:bg-yellow-500 hover:bg-orange-500 ease-in-out duration-100 ' href="/Contact">Contact </button>
                </div>
                <div className=' w-auto mx-2 my-auto flex'>
                    <p className=' my-auto  '>|</p>
                </div>
                <div className=' w-auto mx-2 my-auto flex  '>
                    <Link className=' mx-3 py-1 rounded-md my-auto dark:hover:text-purple-500 hover:text-blue-500 ease-in-out duration-100 z-20 border border-neutral-950 dark:border-neutral-200 ' href="https://www.instagram.com/ludvigdamberg/"><FaInstagram className=' mx-1' /> </Link>
                    <Link className=' mx-3 py-1 rounded-md my-auto dark:hover:text-purple-500 hover:text-blue-500 ease-in-out duration-100 z-20 border border-neutral-950 dark:border-neutral-200' href="https://www.artstation.com/ludvigdamberg"><FaLinkedin className=' mx-1' /></Link>
                    <Link className=' mx-3 py-1 rounded-md my-auto dark:hover:text-purple-500 hover:text-blue-500 ease-in-out duration-100 z-20 border border-neutral-950 dark:border-neutral-200 ' href="https://github.com/ludvigdamberg"><FaGithub className=' mx-1' /></Link>
                    <Link className=' mx-3 py-1 rounded-md my-auto dark:hover:text-purple-500 hover:text-blue-500 ease-in-out duration-100 z-20 border border-neutral-950 dark:border-neutral-200 ' href="https://www.linkedin.com/in/ludvigdamberg/"><FaArtstation className=' mx-1' /></Link>

                </div>
                <div className=' flex ml-auto'><button onClick={() => switchTheme()} className=' my-auto flex rounded-full border border-bg-950 dark:border-bg-100 border-neutral-950 dark:border-neutral-100 w-10 '><div className='switch h-5 w-5 rounded-full dark:bg-neutral-100 bg-neutral-900'></div></button></div>
            </div>
            <div className=' flex-col flex w-full lg:hidden px-10 '>
                <button onClick={() => {
                    if (expanded) {
                        CollapseMenu()
                    } else
                        expandMenu()
                }} className=' menu z-50 ml-auto my-auto lg:hidden border rounded-full px-2 py-[0.5px]' >{expanded ? <p>close menu </p> : <p>expand menu</p>}</button>

            </div>
        </div>
    )
}

export default Header