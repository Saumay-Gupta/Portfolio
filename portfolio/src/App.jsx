import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-full w-full bg-[#f8fafc] scroll-smooth'>
      <Header/>
      <div id='home'>
        <Home/>
      </div>
      <div id='about' className='scroll-mt-10 md:scroll-mt-0'>
        <About/>
      </div>
      <div id="skills" className='scroll-mb-10 md:scroll-mb-0'>
        <Skills/>
      </div>
       <div id="projects" className='scroll-mt-1 md:scroll-mt-3'>
        <Projects/>
      </div>
      <div id="contact" className='scroll-mb-60 md:scroll-mb-0'>
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default App
