"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RESUME_DATA } from "@/data/resume";
import { Code2, Globe, Cpu } from "lucide-react";

export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="My professional journey and what drives me."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              {RESUME_DATA.about}
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              I specialize in bridging the gap between sophisticated AI integrations and flawless UI/UX. My approach is centered around writing clean, well-tested code within an Agile, Git-based SDLC, ensuring scalability and robust performance.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 relative z-10">2+</h4>
                <p className="text-sm text-zinc-400 font-medium relative z-10">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 mb-2 relative z-10">10+</h4>
                <p className="text-sm text-zinc-400 font-medium relative z-10">Projects Shipped</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: Globe,
                title: "Full Stack Mastery",
                desc: "End-to-end expertise in Next.js, React, Laravel, and PostgreSQL.",
              },
              {
                icon: Cpu,
                title: "AI Integration",
                desc: "Enhancing apps with NLP pipelines, semantic matching, and LLMs.",
              },
              {
                icon: Code2,
                title: "Clean Code",
                desc: "Committed to SOLID principles, testing, and modern architecture.",
              },
            ].map((item, i) => (
              <GlassCard key={i} delay={0.2 + i * 0.1} className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
