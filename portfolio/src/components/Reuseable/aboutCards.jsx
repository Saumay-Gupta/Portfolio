import React from 'react'
import { Code } from 'lucide-react'

// text-[#0f1729]
// text-[#7969C9]
{/* <Code className='text-[#7969C9]'/> */}

const AboutCards = function aboutCards(props) {
  return (
    <div className='flex flex-row mx-auto lg:mx-0 md:mx-2 rounded-xl bg-white p-5 my-2 h-40 w-90 lg:h-35 md:h-40 lg:w-120 md:w-100 hover:shadow-2xl hover:-translate-x-px transition duration-300'>
        <div className='bg-[#e1e7ef] w-6 h-6 lg:w-10 lg:h-10 md:w-6 md:h-6 lg:p-0 md:p-1 p-1 rounded-full flex justify-center items-center'>
            {props.icon}
        </div>
        <div className='flex flex-col ml-5'>
                <span className='text-[#0f1729] font-bold text-xl'>{props.name}</span>
                <p className='text-[#404147] my-2 lg:w-95 font-medium'>{props.des}</p>
        </div>
    </div>
  )
}

export default AboutCards
