import React from 'react'
import { ArrowDown } from 'lucide-react'

// text-[#0f1729]
// text-[#7969C9]

function Home() {
  return (
    <div className='flex flex-col justify-end items-center lg:h-175 md:h-290 h-screen w-full'>
      <div className='flex flex-row'> 
        <h1 className='text-[#0f1729] font-bold lg:text-5xl md:text-6xl text-3xl mx-2'>Hi, I'm</h1>
        <h1 className='text-[#7969C9] font-bold lg:text-5xl md:text-6xl text-3xl mx-2'>Saumay</h1>
        <h1 className='text-[#0f1729] font-bold lg:text-5xl md:text-6xl text-3xl mx-2'>Gupta</h1>
      </div>
      <div className=' flex flex-col lg:py-10 md:py-10 py-10 items-center justify-center lg:w-140 md:w-130 w-100'>
        <p className='font-medium lg:text-xl md:text-2xl text-[#0f1729] text-center'>Passionate about full-stack development and enjoy turning ideas into functional and user-friendly applications.</p>
      </div>
      <div className=' flex flex-col lg:py-10 md:py-10 py-25 items-center justify-center'>
        <a href="#projects" className='bg-[#7969C9] lg:mb-0 md:mb-40 text-white w-40 text-center font-medium p-2 rounded-4xl shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_15px_4px_#887dbd]'>View My Work</a>
      </div>
      <div className='flex flex-col lg:pt-35 md:pt-35 pt-35 h-50 items-center justify-center animate-bounce'> 
        <p className='font-normal'>Scroll</p>
        <ArrowDown className='text-[#7969C9]'/>
      </div>
    </div>
  )
}

export default Home
