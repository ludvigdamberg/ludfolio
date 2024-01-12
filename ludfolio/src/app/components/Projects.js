import React from 'react'
import { getProjects } from '../../../sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
async function Projects() {


  let Loaded = false
  const projects = await getProjects().then(Loaded = true)


  return (

    <div className=' w-screen h-auto flex flex-col text-sm font-light 2xl:p-20 p-5 bg-neutral-950 text-neutral-200'>
      <div className='hidden md:flex w-full h-auto 2xl:px-10 px-2'>
        <p className='  tracking-wider mr-2 '>ludfolio</p>
        <p className=' mx-2 my-auto'>/</p>
        <p className=' tracking-wide  ml-2 '>projects</p>
      </div>
      <div className=' h-auto w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 flex flex-col xl:grid-flow-row gap-2 2xl:p-10 mt-5 '>

        {
          Loaded ?
            projects.map((project) =>
              <Link href={`/project/${project.slug}`} key={project._id} className='  border border-neutral-600 rounded-xl p-3 md:grid md:grid-cols-3 flex flex-col hover:scale-[102%] ease-in-out duration-150'>
                <div className='md:col-span-2 flex flex-col '>
                  <p className=' text-base  text-center md:text-left '>{project.name}</p>
                  <p className='  mt-3 tracking-wide leading-relaxed text-xs text-neutral-400 md:flex hidden '>{project.description}</p>
                  <div className='  mt-auto mb-2 md:flex hidden text-xs '>{project.tech.map((t, index) => <p key={index} className='px-1 py-1 bg-neutral-700 rounded-lg mr-1'>{t} </p>)}</div>
                </div>
                <div className=' w-[100px] h-[100px] relative flex overflow-hidden md:mt-0  rounded-xl mx-auto md:mx-0 md:ml-auto '>
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