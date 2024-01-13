
import Loader from './components/Loader'
import Base from './components/Base'
import Header from './components/Header'
import Mobile from './components/Mobile'

function Page() {


  return (
    <div className=' h-auto w-full flex flex-col bg-neutral-100 dark:bg-neutral-950 dark:text-neutral-100 text-neutral-950 '>
      <Loader />
      <Header />
      <Base />
      <Mobile />
    </div>
  )
}

export default Page