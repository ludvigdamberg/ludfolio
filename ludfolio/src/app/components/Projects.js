"use client"
import React, { useEffect, useState } from 'react'
import { getProjects } from '../../../sanity/sanity-utils'
import Image from 'next/image'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Footer from './Footer'
import Project from './Project'
import Loader from './Loader'
function Projects() {


  const [projects, setProjects] = useState();
  const [project, setProject] = useState();
  const [showProject, setShowProject] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const [loader, setLoader] = useState(false);

  useEffect(() => {

    getProjects().then((data) => setProjects(data))

    if (projects) {
      setLoader(true)
    }
  }, [])


  const handleClick = (project) => {
    setProject(project)


    setShowLoader(true)

    setTimeout(() => {
      setShowProject(true)

    }, 600)
  }

  useEffect(() => {

    if (projects) {
      setLoader(true)
    }

  }, [projects])

  const handleClose = () => {
    setShowProject(false)
    setShowLoader(false)
  }

  return (

    <div className=' text-sm font-light flex flex-col '>
      {
        showProject && <Project project={project} onClose={handleClose} />
      }
      {
        showLoader && <Loader link={project.name}/>
      }
      <div className=' flex flex-col w-[90%] h-auto mt-10 py-10 px-20 mx-auto text-sm font-light'>
        <p className=' text-5xl tracking-wide '>projects</p>
        <p className='  mt-2'>ludfolio / projects</p>
      </div>

      <div className=' mx-auto h-auto w-[90%] lg:grid lg:grid-cols-2 xl:grid-cols-3 flex flex-col xl:grid-flow-row gap-2 2xl:p-20 p-5 mt-20 '>

        {
          loader ?
            projects.map((project) =>
              <a onClick={() => handleClick(project)} key={project._id} className='  dark:bg-neutral-900 text-neutral-200 bg-slate-500 rounded-xl p-3 md:grid md:grid-cols-3 flex flex-col hover:scale-[102%] ease-in-out duration-150'>
                <div className='md:col-span-2 flex flex-col '>
                  <p className=' text-base  text-center md:text-left '>{project.name}</p>
                  <p className='  mt-3 tracking-wide leading-relaxed text-xs md:flex hidden '>{project.description}</p>
                  <div className='  mt-auto mb-2 md:flex hidden text-xs '>{project.tech.map((t, index) => <p key={index} className='px-1 py-1 bg-slate-400 dark:bg-neutral-700 rounded-lg mr-1'>{t} </p>)}</div>
                </div>
                <div className=' w-[100px] h-[100px] relative flex overflow-hidden md:mt-0  rounded-xl mx-auto md:mx-0 md:ml-auto '>
                  {<Image src={project.image} alt={project.name} fill={true} className=' object-cover' />}
                </div>
              </a>
            )
            :
            <></>
        }
      </div>
      <div className=' hidden h-[20vh] md:flex flex-col mx-auto mt-20 mb-20 items-center justify-center'>
        <p className=' text-xl  flex font-light mt-5' cd> <FaMagnifyingGlass className=' text-lg  mr-2 my-auto' /> Did you find what you were looking for?</p>
        <p className=' flex font-light mt-5'> I will update it soon with new projects</p>
      </div>
      {
        !showProject && <Footer />
      }
    </div >
  )
}

export default Projects