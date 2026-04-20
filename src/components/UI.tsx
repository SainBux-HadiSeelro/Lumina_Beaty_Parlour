import { ReactNode } from "react";
import { cn } from "../lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionTitle({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {subtitle && (
        <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-brand-text leading-tight">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-brand-accent mt-4", centered && "mx-auto")} />
    </div>
  );
}
