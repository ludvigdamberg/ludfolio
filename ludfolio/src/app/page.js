
import Loader from './components/Loader'
import Base from './components/Base'
import Header from './components/Header'
import Mobile from './components/Mobile'
import Projects from './components/Projects'

function Page() {

  return (
    <div className=' h-auto w-full flex flex-col bg-neutral-200 dark:bg-neutral-950 dark:text-neutral-200 text-neutral-950 '>
      <Loader />
      <Header />
      <Base />
      <Mobile />
      <Projects/>
      
    </div>
  )
}

export default Page