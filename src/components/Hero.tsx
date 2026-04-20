import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-primary">
      {/* Background Decor */}
      <div className="absolute top-[-100px] right-[-50px] w-[400px] h-[400px] rounded-full bg-brand-accent/10 blur-[80px] -z-10" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-0 py-2 text-brand-accent text-sm font-medium uppercase tracking-[0.4em]">
            <span className="w-1 h-1 rounded-full bg-brand-accent" />
            The Art of Refinement
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-brand-text leading-[0.95] tracking-tight">
            Enhance Your <br />
            <span className="italic text-brand-accent">Natural</span> Beauty
          </h1>
          
          <p className="text-lg text-brand-text/50 max-w-lg leading-relaxed font-light">
            Experience bespoke beauty treatments designed to nourish your skin and elevate your spirit in an atmosphere of pure luxury.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <Link
              to="/services"
              className="bg-brand-accent text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-brand-text transition-all shadow-xl hover:-translate-y-1"
            >
              Reserve Session
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover"
                    referrerPolicy="no-referrer"
                    alt={`Trusted Guest ${i + 1}`}
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-medium backdrop-blur-sm">
                  +2k
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-widest text-brand-text/40">Trusted by experts</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Hero Image */}
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-white/10 glass p-3">
             <div className="rounded-[1.5rem] overflow-hidden w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
                  alt="Luxury Beauty Parlour"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
          
          {/* Floaters */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass px-8 py-6 rounded-3xl shadow-xl z-20 hidden lg:block max-w-[220px]"
          >
             <div className="absolute top-0 right-0 p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            <p className="text-brand-accent font-serif text-2xl italic mb-4">Curated Service</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-2">
                 <div className="flex items-center gap-3">
                   <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=100" className="w-8 h-8 rounded-lg object-cover border border-white/10" referrerPolicy="no-referrer" alt="Radiance Facial" />
                   <div>
                     <p className="text-xs font-medium">Radiance Facial</p>
                     <p className="text-[9px] opacity-40 uppercase tracking-widest mt-1">60 MIN / $120</p>
                   </div>
                 </div>
                 <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>

              <div className="flex items-center justify-between group cursor-pointer">
                 <div className="flex items-center gap-3">
                   <img src="https://images.unsplash.com/photo-1560869713-7d0a294308d3?auto=format&fit=crop&q=80&w=100" className="w-8 h-8 rounded-lg object-cover border border-white/10" referrerPolicy="no-referrer" alt="Hydra-Silk Hair" />
                   <div>
                     <p className="text-xs font-medium">Hydra-Silk Hair</p>
                     <p className="text-[9px] opacity-40 uppercase tracking-widest mt-1">45 MIN / $65</p>
                   </div>
                 </div>
                 <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
