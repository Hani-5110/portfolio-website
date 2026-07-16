"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RESUME_DATA } from "@/data/resume";
import { ExternalLink } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export function Projects() {
  const otherProjects = RESUME_DATA.projects.filter(p => !p.featured);

  return (
    <section className="py-24 relative bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="More Projects" subtitle="Other notable works and storefronts." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col h-full p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-zinc-300">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-zinc-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.link.href !== "#" && (
                    <a href={project.link.href} className="text-sm flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      {project.link.label.toLowerCase().includes("github") ? <Icons.Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {project.link.label}
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
