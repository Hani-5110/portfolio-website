"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] glow-border",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
    outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className={cn("w-5 h-5", size === "sm" && "w-4 h-4")} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className={cn("w-5 h-5", size === "sm" && "w-4 h-4")} />}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10 animate-pulse" />
      )}
    </>
  );

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className={buttonClasses}
        {...(props as any)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}
