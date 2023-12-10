import React from 'react'
import { getProjects } from '../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
async function Projects() {


    let Loaded = false
    const projects = await getProjects().then(Loaded = true)

    

  return (

    <div className=' w-full h-full flex flex-col font-black p-20 bg-neutral-950 text-neutral-200'>
        <p className=' font-oswald font-black text-5xl mx-10'>MY PROJECTS</p>
        <div className=' flex w-full m-auto h-full p-10 '>
            {
            Loaded?
            projects.map((project) => <div key={project._id} className=' h-[50%] w-auto  flex overflow-hidden'>
              {<Image src={project.image} alt={project.name} height={500} width={500} style={{objectFit: "cover"}} className=' brightness-50  '/>}
              </div> ) : <></>
            }
        </div>
    </div>
  )
}

export default Projects