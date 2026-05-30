import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex flex-col items-center text-center bg-[#030303] ">
      <h2 className="text-white font-bold mt-10 text-3xl md:text-7xl">
        Personal Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
    </div>
  );
};

export default ProjectHeader;