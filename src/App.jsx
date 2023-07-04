import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import AlertComponent from './components/AlertComponent'
import AlertState from './context/Alerts/AlertState'

function App() {

  return (
    <>
      <AlertState>
        <div className='fixed top-[4rem] left-[29rem] w-[33rem] z-20'>
          <AlertComponent />
        </div>
        <div className="bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Contact/>
        </div>
      </AlertState>
    </>
  )
}

export default App