import React from 'react'
import { Github } from 'lucide-react'
// text-[#0f1729]
// text-[#7969C9]

const ProjectCards = (props) => {
    const tech = props.tech

  return (
    <div className='group flex flex-col rounded-xl bg-white w-80 overflow-hidden hover:shadow-2xl hover:-translate-x-px transition duration-300 '>
        <div className='w-full h-35'>
            <img src={props.img} alt="Project Img" className='w-full h-full object-cover transform transition duration-300 group-hover:scale-110'/>
        </div>
        <div className='flex flex-row p-4 mt-1'>
            {tech.map( (name,key) => (
                <span className='border border-[#9aa3b8] rounded-2xl text-[#404247] font-medium mx-0.5 text-xs px-2 py-1 text-center' key={key}>
                    {name}
                </span>
            ))}
        </div>
        <div className='flex flex-col justify-center'>
            <span className='text-[#0f1729] text-2xl font-bold text-center mt-1'>{props.title}</span>
            <p className='text-[#0f1729] font-medium text-center mt-2'>{props.des}</p>
        </div>
        <a href={props.gitLink} className='p-4'><Github /></a>
    </div>
  )
}

export default ProjectCards
