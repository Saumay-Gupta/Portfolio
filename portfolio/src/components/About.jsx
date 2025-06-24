import React from 'react'
import { Code , User ,BriefcaseBusiness} from 'lucide-react'
import AboutCards from './Reuseable/aboutCards'

// text-[#0f1729]
// text-[#7969C9]

function About() {
  return (
    <div className='flex flex-col justify-center items-center lg:h-200 md:h-200 h-screen'>
        <div className='flex flex-row lg:mt-0 md:mt-30 mt-120'>
            <span className='text-[#0f1729] text-4xl mx-2 font-bold'>About</span>
            <span className='text-[#7969C9] text-4xl font-bold'>Me</span>
        </div>
        <div className='flex flex-col lg:flex-row md:flex-row mt-10 lg:mx-20 md:mx-1'>
            <div className='flex flex-col justify-center items-center md:w-1/2 w-screen'>
                <p className='text-[#0f1729] text-3xl mx-2 font-bold lg:w-8/10 md:w-7/10 text-center'>Building and Learning</p>
                <p className='text-[#0f1729] mx-2 my-6 lg:w-7/10 md:w-10/10 text-center font-medium mt-10'>Hi, I'm Saumay Gupta, a 4th-year Computer Science student with a passion for building real-world software projects.
                I'm passionate about full-stack development and enjoy turning ideas into functional, user-friendly applications.
                </p>
                <p className='text-[#0f1729] lg:w-7/10 md:w-10/10 text-center font-medium'>I've gained hands-on experience with the MERN stack, Java, and MySQL through several personal projects. 
                I'm constantly exploring new technologies and refining my skills to become a better developer every day
                </p>
                <div className='mt-15'>
                <a href="https://drive.google.com/file/d/10CZgV6rmgT5w5SGJAyMcQ-bfBt5N6yHG/view?usp=sharing" target="_blank" className='bg-[#7969C9] text-white text-center font-medium py-3 px-7 rounded-4xl shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_15px_4px_#887dbd]'>Resume</a>
                </div>
            </div>
            <div className= 'flex flex-col justify-evenly h-180 md:h-130 lg:mx-0 md:mx-2'>
                <AboutCards name="My Coding Journey" des="Started my coding journey with Java. Over time, I explored full-stack development and built real-world projects." icon={<Code className='text-[#7969C9]'/>}/>
                <AboutCards name="What I'm Learning" des="I'm currently diving into Data Structure and Algorithms and  system design. I enjoy exploring new technologies." icon={<User className='text-[#7969C9]'/>}/>
                <AboutCards name="Beyond Tech" des="Overthinking the logic behind everyday things- like why my code works at 2 AM but not during the day." icon={<BriefcaseBusiness className='text-[#7969C9]'/>}/>
            </div>
        </div>
    </div>
  )
}

export default About