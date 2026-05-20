"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuAlt1Icon, XCircleIcon } from "@heroicons/react/outline";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto max-w-6xl rounded-lg border px-4 transition duration-200 md:px-6 ${
          isScrolled
            ? "border-white/10 bg-[#080a12]/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border-white/10 bg-white/[0.06] backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="text-lg font-black tracking-[0.18em] text-white"
            onClick={() => setIsOpen(false)}
          >
            MRA
          </Link>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XCircleIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen ? (
          <div className="grid gap-1 border-t border-white/10 py-3 md:hidden">
            {navItems.map((item) => (
              <Link
                href={item.href}
                className="rounded-md px-3 py-3 text-center text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
