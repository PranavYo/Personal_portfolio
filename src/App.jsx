import { Route, Routes } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {

  return (
    <>
      <div className="bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        {/* <div className="relative z-0"> */}
          <Contact/>
        {/* </div> */}
      </div>

      {/* <Routes>
        <Route path='/' element={ <Navbar/> } />
        <Route path='/hero' element={ <Hero /> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/experience' element={ <Experience/> } />
        <Route path='/tech' element={ <Tech/> } />
        <Route path='/work' element={ <Works/> } />
        <Route path='/feedbacks' element={ <Feedbacks/> } />
        <Route path='/contact' element={ <Contact/> } />
      </Routes> */}
    </>
  )
}

export default App