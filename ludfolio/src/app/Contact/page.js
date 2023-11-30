import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import './contact.css'
import Loader from '../components/Loader'
function page() {
  return (
    <div>
      <Loader/>
      <Header />
      <Contact />
    </div>
  )
}

export default page