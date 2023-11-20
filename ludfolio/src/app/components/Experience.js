import React, { forwardRef } from 'react'
import Image from 'next/image'
function Experience({ text }, ref) {
    return (
        <div ref={ref} className=' w-full h-screen p-20'>
            <h1 className=' font-light text-[35px]'>EXPERIENCE</h1>
            <div className=' grid grid-rows-3 w-full h-full'>
                <div className=' font-extralight text-xs pt-4 pr-36'>
                    With about one year of working experience in the programming world, I've had the privilege of gaining skills and knowledge through an array of different tasks.

                    At my previous workplaces, some of the work I've done includes developing a demo for a potential new version of a productivity optimization tool used by VOLVO, among others. We used Angular, TypeScript, and Python to bring simulated use-cases to life. At another company, I continued the development of a website project using NextJs, Firebase, Bootstrap, and Stripe to enhance its functionality and update it according to our clients wishes.

                    My work at companies like WeKnowIt and CPAC provided me with hands-on experience in version control and quality assurance. I faced the challenge of joining ongoing projects, understanding their intricacies, and contributing to their growth.

                    In my professional endeavors, as well as my years as a student, I’ve explored different languages and frameworks like: C++, Java, JavaScript/TypeScript, Python, React, React Native, NextJs, Angular, Express, Sanity, MongoDB, Git and Firebase to name a couple.

                    I've also dabbled in creative tools such as Adobe Suite, Blender, Unreal Engine 4/5, Substance Painter and Figma.

                    Throughout my academic journey, I've developed a strong foundation in JavaScript and full-stack development, making it my main focus the last years.
                </div>
                <div className=' grid grid-cols-3 gap-2'>
                    <div className=' p-4'>
                        <Image src="../../assets/cpac.svg" alt='SVG Image' width={200} height={200} />
                    </div>
                    <div className='flex p-4 '>
                        <Image src="../../assets/wkit.svg" alt='SVG Image' width={200} height={200} />

                    </div>

                    <div className='flex p-4'>
                        <Image src="../../assets/liu.svg" alt='SVG Image' width={200} height={200} />

                    </div>
                    <div></div>

                </div>
            </div>
        </div>
    )
}
export default forwardRef(Experience)