import React from 'react'
import Projects from '../components/Projects'
import Header from '../components/Header'
import Loader from '../components/Loader'

function page() {
  return (
    <div className=' w-full h-screen flex flex-col'>
    <Loader/>
    <Header/>
    <Projects/>    
    </div>
  )
}

export default page