import React from "react";
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";

const LinkBox = () => {
  return (
    <div className="w-full py-1 flex mt-2 justify-center items-center relative z-10">
      <div className="rounded-full px-6 py-2 flex items-center gap-6 border border-white/10 bg-white/5 backdrop-blur-md">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mesaifalee/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 text-xl transition-all duration-300 hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/iamsaifaii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-xl transition-all duration-300 hover:scale-110"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* Behance */}
        <a
          href="https://www.behance.net/mesaifalee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-xl transition-all duration-300 hover:scale-110"
          title="Behance"
        >
          <FaBehance />
        </a>

        {/* Instagram - Fixed: Removed the stray text and added consistent styling */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 text-xl transition-all duration-300 hover:scale-110"
          title="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default LinkBox;