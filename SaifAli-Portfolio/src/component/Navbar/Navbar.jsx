import React, { useState, useEffect } from "react";
import { animate, stagger } from "motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      animate(
        ".mobile-item",
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.08), duration: 0.4 }
      );
    }
  }, [isOpen]);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
              scrolled
                ? "bg-black/60 border-white/10 shadow-lg"
                : "bg-black/20 border-white/5"
            }`}
          >
            {/* LOGO */}
            <img
              src="/logo .png"
              alt="Logo"
              className="h-8 w-auto hover:scale-105 transition"
            />

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/+923279986176"
              target="_blank"
              className="hidden md:block px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition active:scale-95"
            >
              LET'S TALK
            </a>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-black/90 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-8 text-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="mobile-item opacity-0 translate-y-5 text-3xl font-bold text-white hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          <p className="absolute bottom-10 text-gray-500 text-xs">
            Based in Pakistan — Available Worldwide
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;