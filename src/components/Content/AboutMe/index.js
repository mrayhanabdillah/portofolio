"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  FaBrain,
  FaDatabase,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaGitAlt,
  FaLaravel,
  FaLinkedin,
  FaLinux,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiOdoo,
  SiPostgresql,
} from "react-icons/si";
import { MdApi, MdAutoAwesome, MdBugReport, MdWeb } from "react-icons/md";
import "./style.css";

const roles = [
  "Odoo Developer",
  "Laravel Web Developer",
  "ERP Automation Enthusiast",
  "AI & LLM Explorer",
];

const aboutItems = [
  "Odoo Developer focused on customization, module development, and ERP implementation",
  "Web Developer experienced in building web applications using Laravel",
  "Experienced in building custom Odoo modules for business workflows",
  "Working with Python, XML, JavaScript, PostgreSQL, PHP, Laravel, and Linux",
  "Interested in ERP automation, API integration, and AI-powered business tools",
  "Enthusiastic about the development of Artificial Intelligence and its impact on business automation",
  "Always learning and improving my skills in Odoo, web development, and AI technologies",
];

const techStacks = [
  {
    category: "ERP & Backend",
    items: [
      { name: "Odoo", icon: SiOdoo },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Frontend & Web",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "XML", icon: MdWeb },
      { name: "QWeb", icon: MdWeb },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "Artificial Intelligence", icon: FaBrain },
      { name: "LLM", icon: MdAutoAwesome },
      { name: "Automation", icon: MdAutoAwesome },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
      { name: "Docker", icon: FaDocker },
    ],
  },
];

const services = [
  { title: "Custom Odoo Module Development", icon: SiOdoo },
  { title: "Odoo Business Workflow Customization", icon: FaDatabase },
  { title: "QWeb Report Development", icon: MdWeb },
  { title: "Laravel Web Application Development", icon: FaLaravel },
  { title: "REST API & Third-Party Integration", icon: MdApi },
  { title: "Odoo Website & Backend Customization", icon: SiOdoo },
  { title: "ERP Automation", icon: MdAutoAwesome },
  { title: "Bug Fixing & Performance Improvement", icon: MdBugReport },
  { title: "AI Integration for ERP & Business Automation", icon: FaBrain },
];

const currentWork = [
  "Odoo custom module development",
  "Laravel web application development",
  "ERP automation and business process optimization",
  "Odoo integration with external services",
  "AI integration with Odoo, MCP, and LLM tools",
  "Modern AI tools for software development",
];

const githubStats = [
  "https://github-readme-stats.vercel.app/api?username=mrayhanabdillah&show_icons=true&theme=tokyonight&hide_border=true",
  "https://github-readme-stats.vercel.app/api/top-langs?username=mrayhanabdillah&layout=compact&theme=tokyonight&hide_border=true",
  "https://streak-stats.demolab.com?user=mrayhanabdillah&theme=tokyonight&hide_border=true",
];

const contacts = [
  {
    label: "GitHub",
    value: "@mrayhanabdillah",
    href: "https://github.com/mrayhanabdillah",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Muhammad Rayhan Abdillah",
    href: "https://linkedin.com/in/mrayhanabdillahh",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    value: "mrayhanabdillahh@gmail.com",
    href: "mailto:mrayhanabdillahh@gmail.com",
    icon: FaEnvelope,
  },
];

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="reveal mb-8 max-w-3xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a6cb]">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
    {description ? (
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    ) : null}
  </div>
);

const AboutMe = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080a12] text-slate-100">
      <section
        id="home"
        className="relative flex min-h-screen items-center pt-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(113,75,103,0.42),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(77,120,155,0.22),transparent_30%),linear-gradient(135deg,#080a12_0%,#111827_54%,#1a1220_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080a12] to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#714B67]/50 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c9e6]">
              Odoo • Laravel • AI Automation
            </div>
            <h1 className="max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              Muhammad Rayhan Abdillah
            </h1>
            <p className="mt-5 text-lg font-semibold text-[#f0c9e6] md:text-2xl">
              Odoo Developer • Laravel Web Developer • AI Enthusiast
            </p>
            <div className="mt-5 h-8 text-base font-semibold text-slate-200 md:text-xl">
              <span className="text-slate-400">Focused on </span>
              <span className="typing-role text-[#d7a6cb]" key={roleIndex}>
                {roles[roleIndex]}
              </span>
            </div>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I build ERP customizations, business workflows, web applications,
              and automation tools using Odoo, Laravel, and modern
              technologies.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/mrayhanabdillah"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#714B67] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#714B67]/25 transition hover:-translate-y-1 hover:bg-[#845978]"
              >
                <FaGithub className="h-5 w-5" />
                View GitHub
              </a>
              <a
                href="https://linkedin.com/in/mrayhanabdillahh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-[#d7a6cb]/70 hover:bg-white/10"
              >
                <FaLinkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
              <a
                href="mailto:mrayhanabdillahh@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-[#d7a6cb]/70 hover:bg-white/10"
              >
                <FaEnvelope className="h-5 w-5" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="reveal lg:justify-self-end">
            <div className="relative mx-auto max-w-sm rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="absolute -right-4 -top-4 rounded-md bg-[#714B67] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                ERP Builder
              </div>
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-[#714B67]/70 bg-slate-900 md:h-64 md:w-64">
                <Image
                  src="/img/profpic.jpg"
                  alt="Muhammad Rayhan Abdillah"
                  fill
                  priority
                  sizes="(max-width: 768px) 224px, 256px"
                  className="profile-image object-cover object-top"
                />
              </div>
              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <div className="rounded-md border border-white/10 bg-[#080a12]/70 p-4">
                  <p className="font-bold text-white">Main Stack</p>
                  <p className="mt-1">Odoo, Laravel, PostgreSQL, Python</p>
                </div>
                <div className="rounded-md border border-white/10 bg-[#080a12]/70 p-4">
                  <p className="font-bold text-white">Current Focus</p>
                  <p className="mt-1">ERP automation, APIs, AI-powered tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Developer focused on practical business systems"
          description="I'm an Odoo Developer and Web Developer passionate about building business solutions, ERP customizations, web applications, and automation tools."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {aboutItems.map((item) => (
            <div
              className="reveal rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300 shadow-lg shadow-black/10"
              key={item}
            >
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#d7a6cb]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="bg-[#0d111b] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools I use to build ERP and web solutions"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techStacks.map((stack) => (
              <div
                className="reveal card-hover rounded-lg border border-white/10 bg-[#111827] p-6"
                key={stack.category}
              >
                <h3 className="text-lg font-bold text-white">
                  {stack.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {stack.items.map(({ name, icon: Icon }) => (
                    <span
                      className="inline-flex items-center gap-2 rounded-md border border-[#714B67]/40 bg-[#714B67]/15 px-3 py-2 text-sm text-slate-100"
                      key={name}
                    >
                      <Icon className="h-4 w-4 text-[#f0c9e6]" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Services for ERP customization, web apps, and automation"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon }) => (
            <div
              className="reveal card-hover rounded-lg border border-white/10 bg-white/[0.04] p-6"
              key={title}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#714B67]/25 text-[#f0c9e6]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold leading-7 text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="current" className="bg-[#0d111b] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Currently Working On"
            title="Learning, building, and integrating smarter business tools"
          />
          <div className="reveal rounded-lg border border-white/10 bg-[#111827] p-5 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {currentWork.map((item, index) => (
                <div className="flex gap-4" key={item}>
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#714B67] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    {index < currentWork.length - 1 ? (
                      <span className="mt-2 hidden h-full w-px bg-white/10 md:block" />
                    ) : null}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-slate-300 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="github" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="GitHub Stats"
          title="Development activity and language overview"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {githubStats.map((src, index) => (
            <div
              className={`reveal rounded-lg border border-white/10 bg-white/[0.04] p-3 ${
                index === 2 ? "lg:col-span-2" : ""
              }`}
              key={src}
            >
              <img
                src={src}
                alt={`GitHub statistics ${index + 1}`}
                className="github-stat-image mx-auto h-auto w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#0d111b] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect and build something useful"
            description="I enjoy turning complex business processes into simple and efficient Odoo workflows, and I'm always excited to explore how AI can make software and business systems smarter."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="reveal card-hover rounded-lg border border-white/10 bg-[#111827] p-6"
                key={label}
              >
                <Icon className="h-8 w-8 text-[#f0c9e6]" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 break-words text-base font-bold text-white">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#080a12] px-5 py-8 text-center text-sm text-slate-400">
        © {currentYear} Muhammad Rayhan Abdillah. Odoo Developer & Web
        Developer.
      </footer>
    </main>
  );
};

export default AboutMe;
