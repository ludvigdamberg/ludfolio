import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Loader from '../components/Loader'
function Page() {
  return (
    <div className=' flex flex-col'>
      <Loader/>
      <Header />
      <Contact />
    </div>
  )
}

export default Page