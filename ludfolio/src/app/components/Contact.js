"use client"
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import Link from 'next/link'

function Contact() {

  const [mail, setMail] = useState(false)
  const form = useRef()
  const [content, setContent] = useState({ from_name: "", message: "", reply_to: "" })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
      .then((result) => {
       
        <div className=' w-40 h-40 absolute my-auto mx-auto z-50 bg-green-300'>{result.text}</div>
       
      }, (error) => {
        console.log(error.text);
      });
  };



  function option() {

    const mail = gsap.timeline()


    mail.to(".mail", {
      x: 1000, duration: 0.5, ease: "power1.out", opacity: 0, clear: true, onComplete: () => {
        setMail(true)
      }
    })



  }

  useEffect(() => {

    const mail2 = gsap.timeline()

    mail2.from(".form", { x: -20, opacity: 0, duration: 1, ease: "back.out", stagger:0.05})
    mail2.to(".form", { x: 0, opacity: 1 })

  }, [mail])

  return (
    <div className=' w-full h-[93vh] flex justify-center items-center bg-neutral-950'>
      {mail &&
        <div className=' w-full h-full flex flex-col z-50 p-52 text-neutral-200 items-center'>
          <h1 className=' form text-5xl font-black w-[50%] text-red-500 tracking-wider'>SEND A MESSAGE!</h1>
          <form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col h-full items-center'>
          <div className='form w-[50%] flex flex-row mt-10'>
            <label className=' text-xl font-bold'>NAME: </label>
            <input className=' bg-transparent outline-none ml-2 w-full ' type="text" name="user_name" />
          </div>
          <div className='form w-[50%] flex flex-row mt-10'>
            <label className=' text-xl font-bold'>EMAIL: </label>
            <input className=' bg-transparent outline-none ml-2 w-full ' type="email" name="user_email" />
          </div>
          <div className='form w-[50%] flex flex-row mt-10'>
            <label className='text-xl font-bold'>MESSAGE: </label>
            <textarea className=' bg-transparent outline-none ml-2 w-full h-[15vh]' name="message" />
          </div>
          <div className='form w-[50%] flex flex-row mt-10'>
          <input className=' outline-none py-4 w-36 rounded-full font-semibold border-2 ml-auto ease-in-out duration-200 hover:bg-red-500 ' type="submit" value="SEND" />
          </div>
          </form>
        </div>
      }

      <div className=' mail w-[700px] h-[700px] fixed mx-auto z-20 rounded-xl flex flex-col justify-center text-neutral-200'>
        <div className=' mx-auto w-full text-center tracking-wide text-2xl leading-loose pt-40 font-semibold'>
        Connect with me on LinkedIn
        </div>
        <div className=' mx-auto mt-10 flex flex-row w-full pt-40 pb-40'>
          <Link href="https://www.linkedin.com/in/ludvigdamberg/" className=' mx-10 ml-auto border-2 border-neutral-200 rounded-full w-[25%] h-[6vh] justify-center flex items-center hover:bg-green-500  ease-in-out duration-200 text-neutral-200'>LinkedIn</Link>
          <button onClick={() => option()} className=' mx-10 mr-auto border-2 border-neutral-200 rounded-full w-[25%] h-[6vh] justify-center flex items-center hover:bg-orange-500  ease-in-out duration-200 text-neutral-200'>Mail</button>
        </div>
      </div>

    </div>
  )
}

export default Contact