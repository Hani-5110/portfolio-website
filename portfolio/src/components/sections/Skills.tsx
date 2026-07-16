"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RESUME_DATA } from "@/data/resume";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 relative bg-zinc-950/50" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Expertise" subtitle="Technologies and tools I use to build scalable solutions." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(RESUME_DATA.skills).map(([category, skills], i) => (
            <GlassCard key={category} delay={i * 0.1} hoverEffect={true}>
              <h3 className="text-xl font-bold text-white capitalize mb-6 flex items-center gap-2">
                {category === "ai" ? "AI & APIs" : category}
              </h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.02] border border-white/[0.05] text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
