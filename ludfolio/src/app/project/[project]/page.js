import React from 'react'
import { getProject } from '../../../../sanity/sanity-utils'
import Loader from '@/app/components/Loader'


async function page({ params }) {

    const slug = params.project
    const project = await getProject(slug)

    return (
        <div className=' w-full h-screen bg-neutral-950 p-20'>
            <Loader/>
            <p className=' text-6xl text-center text-indigo-500 font-black tracking-wide mt-10'>{project.name}</p>
        </div>
    )
}

export default page