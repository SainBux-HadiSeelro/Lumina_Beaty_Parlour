import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { SERVICES, PACKAGES, FAQS } from "../constants";
import { GlassCard, Section, SectionTitle } from "../components/UI";
import { Clock, Star, ArrowRight, Sparkles, Check, ChevronDown, ChevronUp } from "lucide-react";

const CATEGORIES = ['All', 'Facial', 'Hair', 'Makeup', 'Nails', 'Body'] as const;

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32">
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <SectionTitle 
            subtitle="The Salon Menu"
            title="Discover our range of premium beauty treatments"
            centered
          />
          <p className="text-lg text-brand-text/60 font-sans mt-6 leading-relaxed">
            Every ritual is conducted using botanical, cruelty-free formulas and elevated aesthetic artistry tailored precisely to your skin and hair tone.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-brand-accent text-brand-dark shadow-[0_0_15px_rgba(197,160,89,0.4)]"
                    : "bg-white/5 text-brand-text/60 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlassCard className="group h-full flex flex-col p-4 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 border-white/10 hover:border-brand-accent/40">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-brand-accent uppercase tracking-wider flex items-center gap-1 border border-white/10">
                      <Clock size={11} />
                      {service.duration}
                    </div>
                  </div>
                  <div className="px-3 pb-3 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-2.5 py-0.5 bg-brand-accent/10 rounded-full border border-brand-accent/20">
                        {service.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-brand-text/60">
                        <Star size={12} className="text-brand-accent fill-brand-accent" />
                        5.0
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif text-brand-text mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-text/60 mb-6 flex-grow leading-relaxed font-sans">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                      <div>
                        <p className="text-[10px] text-brand-text/40 font-bold uppercase tracking-widest">Investment</p>
                        <span className="text-2xl font-serif font-bold text-brand-text">
                          {service.price}
                        </span>
                      </div>
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="px-5 py-2.5 rounded-full bg-brand-accent text-brand-dark font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-all shadow-md group-hover:translate-x-1"
                      >
                        Book Ritual
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Signature Packages Section */}
      <Section className="bg-gradient-to-b from-brand-primary via-[#111113] to-brand-primary border-y border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle 
            subtitle="Signature Curations"
            title="Exclusive Luxury Ritual Packages"
            centered
          />
          <p className="text-base text-brand-text/60 font-sans mt-4">
            Harmonized combinations designed for brides, milestone occasions, and restorative weekend pampering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <GlassCard className={`p-8 h-full flex flex-col rounded-3xl border transition-all duration-300 ${
                i === 0 
                  ? "border-brand-accent/50 shadow-[0_0_30px_rgba(197,160,89,0.15)] bg-white/[0.03]" 
                  : "border-white/10 hover:border-white/20"
              }`}>
                {i === 0 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Sparkles size={11} />
                    Most Coveted Package
                  </div>
                )}

                <div className="mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent px-2 py-0.5 rounded-full bg-brand-accent/10">
                    {pkg.savings}
                  </span>
                  <h3 className="text-3xl font-serif text-brand-text mt-3 mb-1">{pkg.title}</h3>
                  <p className="text-xs text-brand-text/50 font-sans italic">{pkg.tagline}</p>
                </div>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-serif font-bold text-white">{pkg.price}</span>
                  <span className="text-xs text-brand-text/40 uppercase tracking-widest">/ {pkg.duration}</span>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-text/40">Includes:</p>
                  {pkg.includes.map((inc, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-brand-text/80">
                      <Check size={14} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={`/contact?service=${encodeURIComponent(pkg.title)}`}
                    className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${
                      i === 0
                        ? "bg-brand-accent text-brand-dark hover:bg-white"
                        : "bg-white/10 text-white hover:bg-brand-accent hover:text-brand-dark"
                    }`}
                  >
                    <span>Reserve Package</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Complimentary Consultation Banner */}
      <Section className="bg-brand-dark text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <div className="inline-flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">
               <Sparkles size={14} />
               Complimentary Diagnostic
             </div>
             <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
               Unsure which ritual suits your skin?
             </h2>
             <p className="text-base text-white/60 mb-8 font-sans leading-relaxed">
               Reserve a complimentary 15-minute diagnostic session with our head aesthetician. We will evaluate your skin barrier, hydration levels, and undertones to craft your custom self-care regimen.
             </p>
             <Link 
               to="/contact?service=Complimentary%20Diagnostic%20Consultation" 
               className="bg-brand-accent text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs inline-flex items-center gap-3 shadow-lg hover:bg-white transition-all"
             >
                Book Free Consultation
                <ArrowRight size={14} />
             </Link>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <div className="h-40 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-end">
                 <p className="text-brand-accent font-bold text-2xl font-serif">01</p>
                 <p className="text-xs font-semibold uppercase tracking-wider text-white">Diagnostic</p>
               </div>
               <div className="h-60 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-end overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1544161515-4af6b1d4640b?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Consultation" />
                 <p className="text-brand-accent font-bold text-2xl font-serif relative">02</p>
                 <p className="text-xs font-semibold uppercase tracking-wider text-white relative">Bespoke Ritual</p>
               </div>
             </div>
             <div className="space-y-4 pt-12">
               <div className="h-60 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-end">
                 <p className="text-brand-accent font-bold text-2xl font-serif">03</p>
                 <p className="text-xs font-semibold uppercase tracking-wider text-white">Skin Care Plan</p>
               </div>
               <div className="h-40 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-end">
                 <p className="text-brand-accent font-bold text-2xl font-serif">04</p>
                 <p className="text-xs font-semibold uppercase tracking-wider text-white">Follow-up</p>
               </div>
             </div>
           </div>
        </div>
      </Section>

      {/* Frequently Asked Questions */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Client Inquiries"
            title="Frequently Asked Questions"
            centered
          />
          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                >
                  <span className="font-serif text-lg text-brand-text">{faq.question}</span>
                  {expandedFaq === i ? (
                    <ChevronUp size={18} className="text-brand-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-brand-text/40 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-5 text-sm text-brand-text/60 font-sans leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
