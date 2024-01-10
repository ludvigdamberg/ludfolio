import React from 'react'
import { getProjects } from '../../../sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
async function Projects() {


  let Loaded = false
  const projects = await getProjects().then(Loaded = true)


  return (

    <div className=' w-screen h-auto flex flex-col font-black 2xl:p-20 p-5 bg-neutral-950 text-neutral-200'>
      <p className=' font-oswald font-black text-5xl text-center mt-20  tracking-wider'>MY PROJECTS</p>
      <p className=' font-oswald font-medium text-xl tracking-wide text-center mt-5 text-neutral-400'>Here are some of my recent projects, more update coming soon!</p>

      <div className=' h-auto w-full xl:grid xl:grid-cols-2 flex flex-col xl:grid-flow-row gap-5 2xl:p-10 mt-20 '>
        
        {
          Loaded ?
            projects.map((project) =>
              <Link href={`/project/${project.slug}`} key={project._id} className='font-poppins  border border-neutral-600 rounded-xl my-3 p-5 md:grid md:grid-cols-3 flex flex-col hover:scale-[102%] ease-in-out duration-150'>
                 <div className='md:col-span-2 flex flex-col '>
                  <p className=' text-xl font-bold text-center md:text-left '>{project.name}</p>
                  <p className=' font-rubik text-md font-normal mt-5 tracking-wide leading-relaxed text-neutral-400 md:flex hidden '>{project.description}</p>
                  <div className=' text-sm font-bold mt-auto md:flex hidden '>Tech Stack: {project.tech.map((t) => <p className='font-poppins font-light text-orange-500 mx-1'>{t}, </p>)}</div>
                </div>
                <div className=' w-[200px] h-[200px]  relative flex overflow-hidden mt-5 md:mt-0  rounded-xl mx-auto md:mx-0 md:ml-auto my-auto '>
                    {<Image src={project.image} alt={project.name} fill={true} className=' object-cover' />}
                </div>
               
              </Link>
            )
            :
            <></>
        }
      </div>
    </div >
  )
}

export default Projects