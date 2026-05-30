import LinkBox from "../LinkBox/LinkBox.jsx";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#030303] overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-33 md:pt-40 pb-16">

        {/* ================= TOP SECTION ================= */}
        <div className="text-center mb-10">
          <span className="block text-gray-500 text-lg md:text-2xl font-medium mb-2">
            Hello, I am
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-[100px] lg:text-[120px] font-black leading-none tracking-tighter text-white">
            SAIF <span className="italic text-blue-400">ALI</span>
          </h1>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">

          {/* BOX 1 */}
          <div className="h-full p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-all">
            <span className="text-white text-sm font-bold uppercase tracking-widest">
              Expertise
            </span>
            <p className="text-white text-lg md:text-xl mt-4 font-light leading-snug">
              Front-End Developer & Graphic Designer | 3+ year experience
            </p>
          </div>

          {/* BOX 2 */}
          <div className="h-full p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center">
            <LinkBox />
            <p className="text-gray-400 text-xs mt-4">
              Let's build something extraordinary together.
            </p>
          </div>

          {/* BOX 3 */}
          <div className="h-full p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-all text-left lg:text-right">
            <span className="text-white text-sm font-bold uppercase tracking-widest">
              Why Choose Me
            </span>
            <p className="text-white text-lg md:text-xl mt-4 font-light leading-snug">
              I Offer Budget Friendly Fast Delivery Quality Work
            </p>
          </div>

        </div>

        {/* ================= TECH STACK ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 border-t border-white/10 pt-6 text-gray-600">

          {/* LEFT */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 grayscale opacity-50">
            <span className="font-black text-lg md:text-2xl tracking-tighter">REACT</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter">TAILWIND</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter">FIGMA</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter">NEXTJS</span>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-end">
            <p className="text-sm font-mono tracking-tighter">
              DESIGNED TO SCALE_
            </p>
          </div>

        </div>

      </div>

      {/* DECORATIVE NUMBER */}
      <div className="absolute bottom-10 left-10 text-[80px] font-black text-white/[0.02] select-none leading-none hidden lg:block">
        01
      </div>

    </section>
  );
};

export default Hero;