"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RESUME_DATA } from "@/data/resume";

export function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-6">
        <SectionHeading title="Services" subtitle="How I can help your business grow." />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {RESUME_DATA.services.map((service, i) => (
            <GlassCard key={i} delay={i * 0.1} className="group hover:border-accent/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
