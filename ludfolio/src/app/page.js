"use client"
import React, { useLayoutEffect, useState } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Base from './components/Base'
import Header2 from './components/Header2'
function Page() {


  return (
    <div className=' h-screen w-full flex flex-col bg-neutral-950'>
      <Loader />
      <Header2 />
      <Base/>
    </div>
  )
}

export default Page