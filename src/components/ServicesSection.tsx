import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { GlassCard, Section, SectionTitle } from "./UI";
import { Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const featuredServices = SERVICES; // Show all services to include user-requested ones

  return (
    <Section className="bg-white/[0.02] border-y border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <SectionTitle 
          subtitle="Treat Yourself"
          title="Curated Beauty Experiences"
        />
        <Link to="/services" className="text-brand-accent font-semibold flex items-center gap-2 hover:gap-4 transition-all mb-4">
          View All Services <span className="text-xl">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <GlassCard className="group h-full flex flex-col p-0 overflow-hidden hover:translate-y-[-10px] transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-text flex items-center gap-1 border border-white/10">
                  <Star size={12} className="text-brand-accent fill-brand-accent" />
                  4.9
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-2">
                  {service.category}
                </p>
                <h3 className="text-2xl font-serif text-brand-text mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-text/60 mb-6 flex-grow font-inter leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-2xl font-serif font-semibold text-brand-text">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text/40 font-semibold uppercase tracking-tighter">
                    <Clock size={14} />
                    {service.duration}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
