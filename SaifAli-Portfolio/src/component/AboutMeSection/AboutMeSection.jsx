import React, { memo, useCallback, useMemo, useState } from "react";
import {
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaStar,
} from "react-icons/fa";

/* =========================
   STATIC DATA
========================= */

const HIGHLIGHTS = [
  {
    title: "5+ Projects",
    text: "Built full-stack apps with React, Node, MySQL.",
  },
  {
    title: "UI/UX Focus",
    text: "Clean, accessible interfaces with micro-interactions.",
  },
  {
    title: "Performance",
    text: "Fast, Lighthouse-friendly experiences.",
  },
  {
    title: "Team Player",
    text: "Love code reviews & pair programming.",
  },
  {
    title: "Learner",
    text: "Exploring new tools and best practices.",
  },
];

const SKILLS = [
  { name: "Javascript", level: 90 },
  { name: "Tailwind", level: 90 },
  { name: "React", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "Framer Motion", level: 90 },
];

const EXPERIENCES = [
  {
    role: "Front-End Engineer",
    org: "NRTC",
    when: "Aug 2025 — Present",
    desc: "Building responsive, user-friendly interfaces with modern web technologies and seamless UX.",
  },
  {
    role: "Frontend Developer",
    org: "Giant Tech Solution",
    when: "Jan 2025 — Feb 2025",
    desc: "Delivered responsive, animated UI sections and landing pages using React.",
  },
];

const TABS = ["experience", "skills"];

/* =========================
   REUSABLE COMPONENTS
========================= */

const Chip = memo(({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10">
    {Icon && <Icon className="h-3.5 w-3.5" />}
    {children}
  </div>
));

const StatCard = memo(({ value, label }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
    <div className="text-3xl font-bold sm:text-4xl">{value}</div>

    <div className="mt-1 text-xs uppercase tracking-wider text-white/40">
      {label}
    </div>
  </div>
));

const SkillBar = memo(({ name, level }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs uppercase tracking-wider text-white/60">
      <span>{name}</span>
      <span>{level}%</span>
    </div>

    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-white"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
));

const ExperienceCard = memo(({ role, org, when, desc }) => (
  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-white/10">
    <div className="flex flex-wrap justify-between gap-2">
      <h4 className="font-semibold">{role}</h4>
      <span className="text-xs text-white/40">{when}</span>
    </div>

    <div className="text-sm text-white/50">{org}</div>

    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
));

const IconBtn = memo(({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white hover:text-black"
  >
    {children}
  </a>
));

/* =========================
   MAIN COMPONENT
========================= */

export default function AboutSection() {
  const [tab, setTab] = useState("experience");

  const handleTab = useCallback((value) => {
    setTab(value);
  }, []);

  const renderTabContent = useMemo(() => {
    if (tab === "experience") {
      return (
        <div className="space-y-4">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.role} {...item} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    );
  }, [tab]);

  return (
    <section id="about" className="relative w-full bg-[#030303] py-1 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-3 lg:items-end">

          <div className="lg:col-span-2">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <FaStar className="h-3.5 w-3.5" />
              About Me
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Crafting digital experiences with{" "}
              <span className="text-white/50">precision.</span>
            </h2>

            <p className="mt-6 max-w-xl text-white/60">
              Frontend Developer, Graphic Designer, and Video Editor with 3+ years of experience.
              I build fast, budget-friendly, visually strong web apps.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Chip icon={FaMapMarkerAlt}>Pakistan</Chip>

              <Chip icon={FaEnvelope}>
                mesaifalee@gmail.com
              </Chip>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="50+" label="Projects" />
            <StatCard value="3+" label="Years Exp" />
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-12">

          {/* PROFILE */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:col-span-5 lg:col-span-4">
            <div>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <img
                    src="/Profile.jpg"
                    alt="Saif Ali"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Saif Ali</h3>
                  <p className="text-sm text-white/50">
                    Designer & Front-End Developer
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-white/70">
                You can download my frontend development resume here and scroll
                down to explore my design portfolio and creative work.
              </p>
            </div>

            <div className="mt-8 flex gap-3">

              <IconBtn href="https://github.com/iamsaifaii">
                <FaGithub />
              </IconBtn>

              <IconBtn href="https://www.linkedin.com/in/mesaifalee/">
                <FaLinkedin />
              </IconBtn>

              <a
                href="https://drive.google.com/file/d/1QFzWj3K5jqJEbqhQH9b4usKlg0ukmnM9/view?usp=sharing"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-black"
              >
                <FaDownload />
                Resume
              </a>
            </div>
          </div>

          {/* TABS */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:col-span-7 lg:col-span-8">

            <div className="flex border-b border-white/10">
              {TABS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleTab(item)}
                  className={`px-4 pb-4 text-sm capitalize transition ${
                    tab === item ? "text-white" : "text-white/40"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {renderTabContent}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}