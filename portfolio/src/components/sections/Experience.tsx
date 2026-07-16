"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESUME_DATA } from "@/data/resume";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading title="Experience" subtitle="My professional journey." />

        <div className="relative border-l border-white/5 ml-6 md:ml-0 md:border-none">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent -translate-x-1/2" />
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/80 to-transparent -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {RESUME_DATA.work.map((job, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="mb-16 relative md:flex md:justify-between md:items-center w-full">
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -left-6 md:left-1/2 w-12 h-12 rounded-full bg-black border border-cyan-500/30 flex items-center justify-center -translate-x-1/2 z-10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <Briefcase className="w-5 h-5" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`pl-8 md:pl-0 md:w-[45%] ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                >
                  <div className="glass-panel p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden glow-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="inline-block px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full mb-6 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                      {job.start} — {job.end}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                    <h4 className="text-md text-zinc-400 font-medium mb-4">{job.company}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed text-left">
                      {job.description}
                    </p>
                    {job.badges.length > 0 && (
                      <div className={`mt-4 flex gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        {job.badges.map(badge => (
                          <span key={badge} className="px-2 py-1 text-xs rounded border border-white/10 bg-white/5 text-zinc-300">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
