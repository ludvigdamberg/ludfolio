import React from 'react'
import { getProjects } from '../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
async function Projects() {


  let Loaded = false
  const projects = await getProjects().then(Loaded = true)



  return (

    <div className=' w-screen h-auto flex flex-col font-black p-20 bg-neutral-950 text-neutral-200'>
      <p className=' font-oswald font-black text-5xl text-center mt-20 text-indigo-500  tracking-wider'>MY PROJECTS</p>
      <p className=' font-oswald font-medium text-xl text-center mt-5 text-neutral-500'>Here are some of my recent projects, more update coming soon!</p>

      <div className=' h-auto max-w-[100vw] flex flex-col p-10 mt-20 '>
        
        {
          Loaded ?
            projects.map((project) =>
              <Link href={`/project/${project.slug}`} className=' border border-indigo-400 rounded-xl my-3 p-5 flex mx-auto w-[40%] hover:scale-[102%] ease-in-out duration-150'>
                 <div className=' flex flex-col w-auto '>
                  <p className=' text-xl font-light mx-5'>{project.name}</p>
                </div>
                <div key={project._id} className=' h-[200px] w-[200px] flex overflow-hidden border rounded-xl ml-auto '>
                  <div className=' w-full h-full relative  '>
                    {<Image src={project.image} alt={project.name} fill={true} objectFit='cover' />}
                  </div>
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