import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { GlassCard, Section, SectionTitle } from "../components/UI";
import { Clock, Star, ArrowRight } from "lucide-react";

export function ServicesPage() {
  return (
    <div className="pt-32">
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <SectionTitle 
            subtitle="The Salon Menu"
            title="Discover our range of premium beauty treatments"
            centered
          />
          <p className="text-lg text-brand-text/60 font-inter mt-6">
            We use only the finest organic products and the latest techniques to ensure you receive the most effective and luxurious results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group h-full flex flex-col p-4 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-4 pb-4 flex flex-col flex-grow">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-2 py-0.5 bg-brand-accent/10 rounded-full">
                       {service.category}
                     </span>
                     <div className="flex items-center gap-1 text-[11px] font-bold text-brand-text/40">
                        <Star size={12} className="text-brand-accent fill-brand-accent" />
                        4.9
                     </div>
                   </div>
                   <h3 className="text-2xl font-serif text-brand-text mb-3">
                     {service.title}
                   </h3>
                   <p className="text-sm text-brand-text/60 mb-6 flex-grow leading-relaxed font-inter">
                     {service.description}
                   </p>
                   <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                     <div>
                       <p className="text-xs text-brand-text/40 font-bold uppercase tracking-tighter">Investment</p>
                       <span className="text-2xl font-serif font-bold text-brand-text">
                         {service.price}
                       </span>
                     </div>
                     <button className="w-12 h-12 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center group-hover:bg-brand-text transition-colors shadow-lg">
                       <ArrowRight size={20} />
                     </button>
                   </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-5xl font-serif mb-8">Not sure what you need?</h2>
             <p className="text-lg text-white/60 mb-8 font-inter">
               Schedule a complimentary 15-minute diagnostic session with our head aesthetician to find the perfect ritual for your skin type.
             </p>
             <button className="bg-brand-accent text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all">
                Book Free Consultation
             </button>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <div className="h-40 bg-white/5 rounded-2xl p-6 flex flex-col justify-end">
                 <p className="text-brand-accent font-bold text-2xl">01</p>
                 <p className="text-sm font-semibold uppercase">Consultation</p>
               </div>
               <div className="h-60 bg-white/5 rounded-2xl p-6 flex flex-col justify-end overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1544161515-4af6b1d4640b?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                 <p className="text-brand-accent font-bold text-2xl relative">02</p>
                 <p className="text-sm font-semibold uppercase relative">Ritual</p>
               </div>
             </div>
             <div className="space-y-4 pt-12">
               <div className="h-60 bg-white/5 rounded-2xl p-6 flex flex-col justify-end">
                 <p className="text-brand-accent font-bold text-2xl">03</p>
                 <p className="text-sm font-semibold uppercase">Care Plan</p>
               </div>
               <div className="h-40 bg-white/5 rounded-2xl p-6 flex flex-col justify-end">
                 <p className="text-brand-accent font-bold text-2xl">04</p>
                 <p className="text-sm font-semibold uppercase">Follow-up</p>
               </div>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
}
