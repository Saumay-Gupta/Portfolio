import React from 'react'
import ProjectCards from './Reuseable/projectCards'

// text-[#0f1729]
// text-[#7969C9]

const ProjectsDetails = [
    {
    pTitle: "Portofolio",
    pDes: "A simple landing page using React and Tailwind.",
    pImg: "src/images/portfolio.png",
    pGitLink:"https://github.com/Saumay-Gupta",
    ptech: ["React", "Tailwind CSS"]
    },
    {
    pTitle: "Chess Game",
    pDes: "A real-time chess game inspired by Chess.com",
    pImg: "src/images/chess.png",
    pGitLink:"https://github.com/Saumay-Gupta/CHESS_GAME",
    ptech: ["Javascript", "Node.js", "Socket.io"]
    },
    {
    pTitle: "Todo List",
    pDes: "Todo app with all basic functionality (i.e Add, Remove, Delete, Update).",
    pImg: "src/images/todo.png",
    pGitLink:"https://github.com/Saumay-Gupta",
    ptech: ["React", "Tailwind CSS", "CURD"]
    },
]

function Projects() {
  return (
    <div className='flex flex-col lg:h-150 md:h-270 md:mt-10 lg:mt-10 h-screen mt-30'>
      <div className='flex flex-row justify-center lg:mt-18 md:mt-30 mt-40'>
        <span className='text-[#0f1729] font-bold text-4xl'>Featured</span>
        <span className='text-[#7969C9] font-bold text-4xl mx-2'>Projects</span>
      </div>
      <div className='text-[#0f1729] flex justify-center mt-7'>
        <p className='w-170 text-center font-medium'>Here are some of the projects that have helped me strengthen my skills and deepen my understanding. Each project reflects my hands-on experience and continuous learning in real-world scenarios.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-10 mt-15'>
        {/* Projects Cards */}
        {ProjectsDetails.map( (project, key) => (
            <ProjectCards key={key} title={project.pTitle} des={project.pDes} img={project.pImg} gitLink={project.pGitLink} tech={project.ptech}/>
        ))}
      </div>
    </div>
  )
}

export default Projects
