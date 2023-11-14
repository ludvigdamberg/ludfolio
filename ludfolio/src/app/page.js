"use client"
import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'

function page() {

  const redirect1 = useRef(null)
  const redirect2 = useRef(null)



  function handleClick(id) {

    console.log(id)
    if (id == 'about') {
      redirect1.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (id == 'contact'){
       redirect2.current?.scrollIntoView({ behavior: 'smooth' })
    }
     

  }




  return (
    <div>
      <Header handleClick={handleClick} />
      <Landing />
      <About ref={redirect1} />
      <Contact ref={redirect2} />
    </div>
  )
}

export default page