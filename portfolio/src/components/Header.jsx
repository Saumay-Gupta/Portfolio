import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';
// text-[#0f1729]
// text-[#7969C9]

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toogleHeader = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='bg-[#f8fafc] flex md:flex-row p-5 lg:min-w-screen md:w-full w-full fixed z-50'>
        <h1 className='mx-2 text-2xl text-[#0f1729] font-bold'>Saumay</h1>
        <h1 className='text-2xl text-[#7969C9] font-bold'>Portfolio</h1>

        <div className='hidden w-full md:flex justify-end'>
            <a href="#home" className='mx-5 font-normal hover:text-[#7969C9]'>Home</a>
            <a href="#about" className='mx-5 font-normal hover:text-[#7969C9]'>About</a>
            <a href="#skills" className='mx-5 font-normal hover:text-[#7969C9]'>Skills</a>
            <a href="#projects" className='mx-5 font-normal hover:text-[#7969C9]'>Projects</a>
            <a href="#contact" className='mx-5 font-normal hover:text-[#7969C9]'>Contact</a>
        </div>
        <div className='flex w-full justify-end md:hidden'>
          <button onClick={toogleHeader}>
              {isOpen ? <X/> : <Menu/>}
          </button>
        </div>
        {isOpen && (
          <div className='flex flex-col justify-end'>
            <span className='text-[#0f1729] w-30 font-medium'>Psst... I look way cooler on a bigger screen. Just saying.</span>
          </div>
        )}
    </div>
  )
}

export default Header
