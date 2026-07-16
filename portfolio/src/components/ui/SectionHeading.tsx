"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className={cn("flex flex-col gap-4 mb-20", centered && "items-center text-center", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-4"
      >
        {!centered && <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {title.split(" ").map((word, i) => (
            <motion.span variants={item} key={i} className={cn("inline-block mr-2", i % 2 !== 0 ? "text-gradient" : "text-white")}>
              {word}
            </motion.span>
          ))}
        </h2>
        {!centered && <div className="h-[2px] flex-1 bg-gradient-to-r from-violet-500/50 to-transparent opacity-50" />}
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 max-w-2xl text-lg md:text-xl font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
