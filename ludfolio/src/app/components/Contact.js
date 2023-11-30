"use client"
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import Link from 'next/link'

function Contact() {

  const [mail, setMail] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }



  function option() {

    const mail = gsap.timeline()


    mail.to(".mail", {
      y: -1000, duration: 0.5, ease: "power1.out", opacity: 0, onComplete: () => {
        setMail(true)
      }
    })

   
  }

  useEffect(() => {

    const mail2 = gsap.timeline()

    mail2.from(".form", { y: 20 })
    mail2.to(".form", {opacity:0 , duration: 0.5, y: 0, ease: "back.out", opacity: 1, stagger: 0.075 })

  },[mail])

  return (
    <div className=' w-full h-[90vh] flex justify-center items-center'>
      {mail &&
        <div className=' w-full h-full flex flex-col z-50 p-40 text-slate-800 border-slate-800 items-center'>
          <h1 className=' form text-5xl italic font-black border-b border-t w-[50%]'>SEND A MAIL</h1>
          <div className='form w-[50%] flex flex-row mt-10'> 
          <label className=' font-bold italic text-xl my-auto '>NAME: </label>
            <input className=' w-full h-10 outline-none ml-5 border-b' type='text' name='name' />
          </div>
          <div className='form w-[50%] flex flex-row items-center mt-10'> 
          <label className=' font-bold italic text-xl '>EMAIL: </label>
            <input className=' w-full  h-10 outline-none ml-5 border-b' type='text' name='name' />
          </div>
          <div className='form  w-[50%] flex flex-row  mt-10'> 
          <label className=' font-bold italic text-xl '>MESSAGE: </label>
            <textarea className=' w-full  h-[20vh] outline-none ml-5' type='text' name='name' > </textarea>
          </div>
        </div>
      }

      <div className=' mail w-[700px] h-[700px] absolute mx-auto z-20 bg-green-300 rounded-full flex flex-col justify-center text-slate-600'>
        <div className=' mx-auto'>
          Connect with me on LinkedIn
        </div>
        <div className=' mx-auto mt-10 flex flex-row w-full'>
          <Link href="https://www.linkedin.com/in/ludvigdamberg/" className=' mx-10 ml-auto border border-slate-600 rounded-xl w-[20%] h-[5vh] justify-center flex items-center hover:shadow-xl ease-in-out duration-200 text-slate-600'>LinkedIn</Link>
          <button onClick={() => option()} className=' mx-10 mr-auto border border-slate-600 rounded-xl w-[20%] h-[5vh] justify-center flex items-center hover:shadow-xl ease-in-out duration-200 text-slate-600'>Mail</button>
        </div>
      </div>

    </div>
  )
}

export default Contact