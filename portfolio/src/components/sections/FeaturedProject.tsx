"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RESUME_DATA } from "@/data/resume";
import { ExternalLink, Zap } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export function FeaturedProject() {
  const project = RESUME_DATA.projects.find(p => p.featured);

  if (!project) return null;

  return (
    <section className="py-24 relative" id="work">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Work" subtitle="Deep dive into my flagship project." />

        <div className="glass-panel rounded-[2.5rem] p-6 md:p-12 overflow-hidden relative glow-border">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group rounded-2xl overflow-hidden aspect-video lg:aspect-square"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-accent" />
                  AI Pipeline Architecture
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {project.title}
              </h3>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button href={project.link.href} variant="primary" icon={Icons.Github}>
                  View Repository
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
