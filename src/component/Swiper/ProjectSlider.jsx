import React, { useState, useCallback, useMemo } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* STATIC DATA */
const PROJECTS = [
  {
    id: 1,
    title: "Vertex Script System",
    tag: "Localization",
    description:
      "A smart auto-writing system built using C++ and Arduino for precise and automated text writing functionality.",
    image: "./Project 1.jpg",
    link: "https://drive.google.com/drive/folders/1eh42IOxBdrcC3oUkQif9B-2GXf6Atxkd?usp=sharing",
  },
  {
    id: 2,
    title: "Visual Portfolio",
    tag: "UI/UX Design",
    description: "Advanced portfolio website with real-time features.",
    image: "./Project 2.jpg",
    link: "https://github.com/iamsaifaii/cryptonian_project-",
  },
  {
    id: 3,
    title: "Multilanguage website",
    tag: "UI/UX Design",
    description: "A showcase of high-end design principles and interactions.",
    image: "./Project 3.jpg",
    link: "https://aceverx.vercel.app/",
  },
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length
    );
  }, []);

  const currentProject = useMemo(
    () => PROJECTS[currentIndex],
    [currentIndex]
  );

  const progressWidth = useMemo(() => {
    return `${((currentIndex + 1) / PROJECTS.length) * 100}%`;
  }, [currentIndex]);

  return (
    <section
      id="projects"
      className="w-full bg-[#030303] py-16 md:py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-6">

              <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest border border-white/10 rounded-full bg-white/5 text-gray-300">
                {currentProject.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {currentProject.title}
              </h2>

              <p className="text-gray-400 text-base md:text-lg max-w-xl">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">

                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-semibold hover:text-emerald-400 transition-colors"
                >
                  View Project <FaExternalLinkAlt size={16} />
                </a>

                <div className="flex gap-3">

                  <NavButton onClick={prevSlide}>
                    <FaChevronLeft />
                  </NavButton>

                  <NavButton onClick={nextSlide}>
                    <FaChevronRight />
                  </NavButton>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">

              <img
                src={currentProject.image}
                alt={currentProject.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

            </div>
          </div>

        </div>

        {/* PROGRESS */}
        <div className="mt-12 w-full max-w-xs h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: progressWidth }}
          />
        </div>

      </div>
    </section>
  );
};

/* BUTTON */
const NavButton = React.memo(({ children, onClick }) => (
  <button
    onClick={onClick}
    className="p-3 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
  >
    {children}
  </button>
));

export default ProjectSlider;