import { motion } from "motion/react";
import { Section, SectionTitle, GlassCard } from "../components/UI";
import { Sparkles, Heart, Shield, Award, User } from "lucide-react";

export function AboutPage() {
  const values = [
    { icon: Sparkles, title: "Excellence", desc: "We strive for perfection in every treatment we offer." },
    { icon: Heart, title: "Kindness", desc: "Our team treats every guest with genuine warmth and care." },
    { icon: Shield, title: "Integrity", desc: "We use only safe, ethical, and high-quality products." },
    { icon: Award, title: "Expertise", desc: "Continuously training to bring you the latest in beauty." }
  ];

  return (
    <div className="pt-32">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
                 alt="Our Studio"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -right-10 glass dark:bg-brand-dark/80 p-8 rounded-2xl z-20 shadow-2xl border border-white/10">
                <p className="text-5xl font-serif text-brand-text mb-1">12+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Years of Experience</p>
             </div>
          </motion.div>

          <div className="space-y-8">
            <SectionTitle 
              subtitle="The Lumina Story"
              title="We believe that beauty is a journey, not a destination."
            />
            <div className="space-y-6 text-lg text-brand-text/60 font-inter leading-relaxed font-light">
              <p>
                Founded in 2012 by master aesthetician Sarah Jenkins, Lumina was born out of a desire to create a space that transcends the traditional salon experience. 
              </p>
              <p>
                We've combined the clinical precision of a med-spa with the sensory indulgence of a high-end retreat. Every detail, from our artisanal herbal teas to our bespoke scent profiles, is designed to transport you.
              </p>
            </div>
            
            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-brand-muted">
               <div className="flex flex-col">
                 <span className="text-2xl font-serif text-brand-dark">Our Mission</span>
                 <span className="text-sm text-brand-dark/50 mt-1">To empower through self-care and artistry.</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-2xl font-serif text-brand-dark">Our Vision</span>
                 <span className="text-sm text-brand-dark/50 mt-1">To be the global standard for boutique wellness.</span>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02] border-y border-white/5">
        <SectionTitle 
          subtitle="Our Core Values"
          title="The foundations of our studio"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center group hover:bg-white/[0.05] transition-all border-white/10">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                  <v.icon size={24} />
                </div>
                <h4 className="text-xl font-serif text-brand-text mb-4">{v.title}</h4>
                <p className="text-sm text-brand-text/60 font-inter">{v.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle 
          subtitle="Meet the Artisans"
          title="The experts behind your transformation"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[ 
             { name: "Sarah Jenkins", role: "Founder & Master Aesthetician", img: "https://images.unsplash.com/photo-1594744803329-e58b31de2184?auto=format&fit=crop&q=80" },
             { name: "Marcus Thorne", role: "Creative Director (Hair)", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80" },
             { name: "Yuki Tanaka", role: "Senior Color Specialist", img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&q=80" }
           ].map((member, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="group cursor-pointer"
             >
               <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                 <img 
                    src={member.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                    alt={member.name}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-inter italic">"Beauty is found in the smallest details."</p>
                 </div>
               </div>
               <h4 className="text-2xl font-serif text-brand-text">{member.name}</h4>
               <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mt-2">{member.role}</p>
             </motion.div>
           ))}
        </div>
      </Section>
    </div>
  );
}
