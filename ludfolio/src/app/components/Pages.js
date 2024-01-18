"use client"
import React, { useEffect, useState } from 'react'
import Base from './Base'
import Projects from './Projects'
import Header from './Header'
import Loader from './Loader'


function Pages() {

    const [Index, setIndex] = useState(0)
    const [page, setPage] = useState("home")
    const pages = [<Base key={"base"} />, <Projects key={"projects"} />]

    const [renderLoader, setRenderLoader] = useState(false)
    const [direction, setDirection] = useState('');

    const handlePageLinkChange = (newLink) => {
        setDirection(newLink)
        setRenderLoader(true)
        setTimeout(() => {
            setPage(newLink)
        }, 800)
        setTimeout(() => {
            setRenderLoader(false)
            
        }, 2300)
    }

    useEffect(() => {

        if (page === "home") {
            setIndex(0)
        } else {
            setIndex(1)
        }

    }, [page])

    return (
        <div className=' flex flex-col h-auto w-full'>
            {
                renderLoader && <Loader link={direction} />

            }
            <Header onLinkChange={handlePageLinkChange} />
            {
                pages[Index]
            }
        </div>
    )
}

export default Pages