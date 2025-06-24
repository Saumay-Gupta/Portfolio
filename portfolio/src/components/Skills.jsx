import React from 'react'
import SkillsCards from './Reuseable/skillsCards'
import { useState } from 'react'
// text-[#0f1729]
// text-[#7969C9]

const skills = [
    // FrontEnd
    {name: "HTML",  imgSrc: "/html.png", category: "Frontend"},
    {name: "Tailwind CSS", imgSrc: "/tailwind.png", category: "Frontend"},
    {name: "React", imgSrc: "/react.png", category: "Frontend"},
    {name: "JavaScript", imgSrc: "/javascript.png", category: "Frontend"},
    // BackEnd
    {name: "Node.js", imgSrc: "/nodejs.png", category: "Backend"},
    {name: "Express.js", imgSrc: "/express.png", category: "Backend"},
    {name: "MongoDB", imgSrc: "/mongo.png", category: "Backend"}, 
    // Tools
    {name: "Git/GitHub", imgSrc: "/github.png", category: "Tools"},
    {name: "VS Code", imgSrc: "/vscode.png", category: "Tools"},
]

const categories = ["All","Frontend","Backend","Tools"]

function Skills() {
    const [activeCategory, setActiveCategory] = useState("All"); 

    const filteredSkill = skills.filter((skill) => activeCategory == "All" || skill.category == activeCategory)  

  return (
    <div className='flex flex-col lg:h-250 md:h-250 h-screen'>
      <div className='flex flex-row justify-center lg:mt-20 md:mt-30 mt-120'>
        <span className='text-[#0f1729] font-bold text-4xl'>My</span>
        <span className='text-[#7969C9] font-bold text-4xl mx-2'>Skills</span>
      </div>
      <div className='flex flex-row justify-center mt-15'>
            {categories.map( (cat,key) => (
                <button key={key}
                 className={`w-20 transition duration-400 font-medium h-8 md:mx-8 mx-4 rounded-2xl ${activeCategory == cat ? "text-white bg-[#7969C9]" : "text-[#0f1729]"}`}
                 onClick={() => setActiveCategory(cat)}
                > {cat} </button>
            )
            )}
      </div>
      {/* change md:grid to 3 */}
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-1 mt-15'>
        {filteredSkill.map( (skill , key) => <SkillsCards skillName={skill.name} key={key} imgLink={skill.imgSrc}/>)}
      </div>
    </div>
  )
}

export default Skills
