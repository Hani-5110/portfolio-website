"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { RESUME_DATA } from "@/data/resume";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative bg-zinc-950/50" id="contact">
      <div className="container mx-auto px-6">
        <SectionHeading title="Let's Talk" subtitle="Interested in working together? Drop me a message." />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <GlassCard>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-32 resize-none" placeholder="How can I help you?" />
              </div>
              <Button variant="primary" className="w-full" icon={Send} iconPosition="right">
                Send Message
              </Button>
            </form>
          </GlassCard>

          <div className="flex flex-col justify-center gap-8">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-accent group-hover:border-accent/50 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Email</p>
                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">{RESUME_DATA.contact.email}</p>
              </div>
            </a>

            <a href={`tel:${RESUME_DATA.contact.tel}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-accent group-hover:border-accent/50 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Phone</p>
                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">{RESUME_DATA.contact.tel}</p>
              </div>
            </a>

            <a href={RESUME_DATA.locationLink} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-accent group-hover:border-accent/50 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Location</p>
                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">{RESUME_DATA.location}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {RESUME_DATA.contact.social.map(s => (
            <a key={s.name} href={s.url} className="text-zinc-500 hover:text-white transition-colors text-sm">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
