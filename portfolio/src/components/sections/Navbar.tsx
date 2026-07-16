"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RESUME_DATA } from "@/data/resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          {RESUME_DATA.initials}<span className="text-accent">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Experience", "Work", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
}
