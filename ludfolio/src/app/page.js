"use client"
import React, { useLayoutEffect, useState } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Base from './components/Base'
function Page() {


  return (
    <div className=' h-screen w-full flex flex-col bg-neutral-950'>
      <Loader />
      <Header />
      <Base/>
    </div>
  )
}

export default Page