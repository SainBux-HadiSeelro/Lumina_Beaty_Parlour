import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSummary, Testimonials } from "../components/AboutSummary";
import { motion } from "motion/react";
import { Section, SectionTitle } from "../components/UI";
import { Link } from "react-router-dom";
import { GALLERY_IMAGES } from "../constants";

export function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      <ServicesSection />
      
      <AboutSummary />

      <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            alt="Luxury Beauty Parlour Interior"
          />
          <div className="absolute inset-0 bg-brand-dark/75 backdrop-blur-[1px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3">
                 <div className="w-12 h-[1px] bg-brand-accent" />
                 <span className="text-brand-accent text-sm font-bold uppercase tracking-[0.5em]">The Atmosphere</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-white leading-none">The Luxury <br/> <span className="italic">Parlour</span></h2>
              <p className="text-xl text-white/70 font-light leading-relaxed max-w-lg">
                Step into a realm where architectural elegance meets ultimate serenity. Our studio is designed to be your private sanctuary of refinement.
              </p>
              <div className="pt-8">
                 <Link to="/about" className="border border-white/20 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all inline-block">
                    Explore the studio
                 </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
               <div className="aspect-[3/4] w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative z-10 ml-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    alt="Luxury Detail"
                  />
               </div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-brand-accent/30 rounded-2xl -z-10" />
            </motion.div>
        </div>
      </Section>
      
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle 
            subtitle="The result"
            title="Our Masterpieces"
          />
          <Link to="/gallery" className="text-brand-accent font-semibold flex items-center gap-2 hover:gap-4 transition-all mb-4">
            See the Magic <span className="text-xl">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {GALLERY_IMAGES.slice(0, 4).map((img, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={i === 1 ? "md:pb-12" : i === 2 ? "md:pt-12" : ""}
             >
               <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                 <img 
                   src={img} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                   referrerPolicy="no-referrer"
                 />
               </div>
             </motion.div>
           ))}
        </div>
      </Section>

      <Testimonials />

      <Section className="bg-brand-gold-muted border-t border-white/5">
        <div className="max-w-4xl mx-auto glass dark:bg-brand-dark p-12 rounded-[3.5rem] text-center shadow-2xl border border-white/10">
          <h2 className="text-5xl font-serif text-brand-text mb-6">Ready to Glow?</h2>
          <p className="text-xl text-brand-text/60 mb-10 max-w-2xl mx-auto font-light">
            Join our mailing list for exclusive offers, beauty tips, and early access to new rituals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-4 rounded-full border-none focus:ring-1 focus:ring-brand-accent bg-white/5 text-white shadow-inner"
            />
            <button className="bg-brand-accent text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-text transition-all shadow-xl">
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}
