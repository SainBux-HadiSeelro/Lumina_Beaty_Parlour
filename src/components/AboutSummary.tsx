import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TESTIMONIALS } from "../constants";
import { GlassCard, Section } from "./UI";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] -z-10" />
      
      <div className="text-center mb-16">
        <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-2 block">Voices of Lumina</span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-text">What Our Guests Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col p-8">
              <Quote size={32} className="text-brand-accent/20 mb-6" />
              <p className="text-lg italic text-brand-text/80 mb-8 font-serif leading-relaxed">
                "{t.content}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-accent/20"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full border-2 border-brand-accent/20 flex items-center justify-center bg-white/5 text-[10px] font-bold text-brand-accent">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-brand-text">{t.name}</h4>
                  <p className="text-xs text-brand-text/40 font-semibold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function AboutSummary() {
  return (
    <Section className="bg-brand-dark text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden relative z-10 border-4 border-brand-accent/30">
             <img
                src="https://images.unsplash.com/photo-1512496011212-3234271505f7?auto=format&fit=crop&q=80"
                alt="About Lumina"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-brand-accent/20 rounded-[3rem] -z-10 hidden md:block" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif text-white/5 whitespace-nowrap pointer-events-none">
            SINCE 2012
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block">Our Philosophy</span>
          <h2 className="text-5xl font-serif leading-tight">Where Timeless Elegance <br/> Meets Modern Artistry.</h2>
          <p className="text-lg text-white/60 leading-relaxed font-inter">
            At Lumina Beauty Studio, we believe that beauty is an expression of your inner self. Founded over a decade ago, our parlour has become a haven for those seeking refined, bespoke treatments.
          </p>
          <div className="space-y-4">
            {[
              "Sustainable & Organic Products",
              "Expert Master Stylists",
              "Private & Serene Environment",
              "Bespoke Consultation Sessions"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span className="text-sm font-medium tracking-wide uppercase">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-block border border-white/20 hover:border-brand-accent hover:text-brand-accent px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all">
            Read Our Story
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
