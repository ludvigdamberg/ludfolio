
"use client"
import { useLayoutEffect } from 'react'
import Mobile from './components/Mobile'
import Pages from './components/Pages'

function Page() {

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll({
        triggerRootMargin: '-1px -1px -1px -1px'
      })
    })()
  }, [])

  return (
    <div className=' h-auto w-full flex flex-col bg-neutral-200 dark:bg-neutral-950 dark:text-neutral-200 text-neutral-950 '>
      <Pages />
      <Mobile />

    </div>
  )
}

export default Page