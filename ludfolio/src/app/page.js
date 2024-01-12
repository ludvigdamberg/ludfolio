"use client"
import React, { useLayoutEffect, useState } from 'react'
import Loader from './components/Loader'
import Base from './components/Base'
import Header from './components/Header'
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