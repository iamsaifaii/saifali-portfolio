// TechStack.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const techs = [
    { icon: <FaHtml5 className="text-orange-500" /> },
    {  icon: <FaCss3Alt className="text-blue-500" /> },
    {  icon: <FaJs className="text-yellow-400" /> },
    {  icon: <FaReact className="text-cyan-400" /> },
    {icon: <SiNextdotjs className="text-white" /> },
    {  icon: <SiTailwindcss className="text-blue-400" /> },
    {  icon: <FaNodeJs className="text-green-600" /> },
    {  icon: <FaGitAlt className="text-red-600" /> },
  ];

  return (
  <div 
  id="skills"
  className="p-6 sm:p-8 rounded-lg text-center pt-20 bg-[#030303]"
//   style={{
//     backgroundImage: `
//       linear-gradient(to right, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
//       linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)
//     `,
//     backgroundSize: "40px 40px",
//   }}
>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center w-20 sm:w-24 md:w-28"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce">
              {tech.icon}
            </div>
            <span className="text-white mt-2 text-xs sm:text-sm md:text-base">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;