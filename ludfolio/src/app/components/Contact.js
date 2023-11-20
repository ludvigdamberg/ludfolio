import React, { forwardRef, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'


function Contact({ text }, ref) {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <div ref={ref} className=' w-full h-screen bg-black text-white p-20'>
      <h1 className=' font-extralight text-4xl '> CONTACT</h1>
      <div className=' h-full w-full flex '>
        <form className='flex flex-col w-[50%] m-auto' ref={form} onSubmit={sendEmail}>
          <label className=' font-extralight text-2xl'>Name</label>
          <input className= ' border border-white outline-none bg-transparent h-10 p-2 mb-6' type="text" name="from_name" />
          <label className=' font-extralight text-2xl'>Email</label>
          <input className= ' border border-white outline-none bg-transparent h-10 p-2 mb-6' type="email" name="reply_to" />
          <label className=' font-extralight text-2xl'>Message</label>
          <textarea className= ' border border-white outline-none bg-transparent h-36 p-2' name="message" />
          <input className=' font-black text-2xl h-20 w-48 hover:bg-white hover:text-black mt-6 border border-white' type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default forwardRef(Contact)