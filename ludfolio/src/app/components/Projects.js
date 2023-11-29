import React from 'react'
import { getProjects } from '../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
async function Projects() {


    let Loaded = false
    const projects = await getProjects().then(Loaded = true)
   
    

  return (

    <div className=' w-full h-full flex flex-col text-6xl font-black p-20'>
        <h1>My Projects</h1>
        <div className=' flex w-[50%] m-auto border h-full '>
            {
            Loaded?
            projects.map((project) => <div key={project._id}>{<PortableText value={project.content}/>}</div> ) : <></>
            }
        </div>
    </div>
  )
}

export default Projects