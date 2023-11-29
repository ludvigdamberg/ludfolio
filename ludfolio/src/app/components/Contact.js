"use client"
import React, {useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'


function Contact() {

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
    <div className=' h-[100vh] w-[50%] bg-white p-10 text-slate-800 flex flex-col shadow-2xl z-10 border-2 '>
      <p className=' font-black text-7xl '> CONTACT ME</p>
      <p className=' text-3xl tracking-wider leading-relaxed text-slate-700 font-medium'>LET'S STAY IN CONTACT!</p>
      <p className=' text-xl tracking-wide leading-normal text-slate-600'>
        Send me a message about anything! Do you wonder anything about me, my career, this website, 
      or professional opportunities? Please feel free to contact me through this form and I will answer within a week!
      </p>
      <div className=' h-full w-full flex bg-white mt-20 '>
        <form className='flex flex-col w-[100%] ' ref={form} onSubmit={sendEmail}>
          <label className=' font-extrabold text-2xl'>NAME</label>
          <input className= ' border border-slate-400 outline-none bg-transparent h-8 p-2 mb-6 rounded-md w-[60%] bg-slate-100' type="text" name="from_name" />
          <label className=' font-extrabold text-2xl'>YOUR EMAIL</label>
          <input className= ' border border-slate-400 outline-none bg-transparent h-8 p-2 mb-6 rounded-md w-[60%] bg-slate-100' type="email" name="reply_to" />
          <label className=' font-extrabold text-2xl'>MESSAGE</label>
          <textarea className= ' border border-slate-400 outline-none bg-transparent h-48 p-2 rounded-md bg-slate-100' name="message" />
          <input className=' font-black text-2xl h-20 w-48 hover:scale-110 ease-in-out duration-75 mt-6 border border-orange-300 rounded-md ' type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact