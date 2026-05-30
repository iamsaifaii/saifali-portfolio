import React, { memo } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";

const LIST_ITEMS = [
  { title: "Completed 100+", desc: " projects delivering real results" },
  { title: "Worked with", desc: "UAE and international clients." },
  {
    title: "UI UX design",
    desc: "focused on clean user experience and modern interfaces.",
  },
];

const MeasDesigner = () => {
  return (
    <section className="bg-[#030303] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 z-10 relative">

            {/* BADGE */}
            <button className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-sm font-medium mb-8 hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-sm">

              <span className="text-white/80">Visit Portfolio</span>

              <FaChevronRight size={12} className="text-white/60" />

            </button>

            {/* TITLE */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-10 leading-tight">
              Me as Graphics <br />
              <span className="text-gray-500 italic font-medium">
                UI/UX Designer
              </span>
            </h1>

            {/* LIST */}
            <ul className="space-y-6 mb-12">
              {LIST_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-4">

                  <div className="mt-1 bg-white/10 rounded p-1 shrink-0">
                    <FaCheck size={14} />
                  </div>

                  <p className="text-lg leading-snug">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-white/60 ml-1">{item.desc}</span>
                  </p>

                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-3">

              <a
                href="https://www.behance.net/mesaifalee"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto text-center"
              >
                Visit Portfolio
              </a>

              <a
                href="https://drive.google.com/file/d/1QFzWj3K5jqJEbqhQH9b4usKlg0ukmnM9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                CV/Resume
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[450px] lg:min-h-[650px] overflow-hidden group">

            <img
              src="/design.png"
              alt="Design Showcase"
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />

            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />

          </div>

          {/* MOBILE UI IMAGE */}
          <div className="block sm:hidden lg:col-span-5 relative w-full h-full min-h-[450px] overflow-hidden group">

            <img
              src="/UIUX.jpg"
              alt="Design Showcase"
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />

            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />

          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(MeasDesigner);