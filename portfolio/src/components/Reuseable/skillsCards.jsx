import React from 'react'
import { CodeXml } from 'lucide-react'

// text-[#0f1729]
// text-[#7969C9]

// #f8fafc
const SkillsCards = (props) => {
  return (
    <div className='flex flex-col lg:w-40 md:h-50 my-5 justify-center mx-auto rounded-2xl overflow-hidden'>
        <img src={props.imgLink} alt="html img" className='lg:h-38 md:h-30 h-25 object-cover transition duration-300 transform hover:scale-105' />
        <span className='md:text-xl font-medium text-[#0f1729] text-center my-2'>{props.skillName}</span>
    </div>

  )
}

export default SkillsCards
