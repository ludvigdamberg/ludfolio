import React from 'react'
import Contact from '../components/Contact'
import Header2 from '../components/Header2'
import Loader from '../components/Loader'
function Page() {
  return (
    <div className=' flex flex-col'>
      <Loader/>
      <Header2 />
      <Contact />
    </div>
  )
}

export default Page