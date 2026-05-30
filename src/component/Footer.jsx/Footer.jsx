// Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-gray-800 py-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2026 <span className="text-white font-semibold">Saif Ali</span>. All rights reserved.
        </p>

        {/* Middle - Email */}
        <a
          href="mailto:mesaifalee@gmail.com"
          className="text-sm hover:text-blue-400 transition"
        >
          mesaifalee@gmail.com
        </a>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter size={18} />
          </a>

          <a
            href="mailto:mesaifalee@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;