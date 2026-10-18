import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Section, SectionTitle } from "../components/UI";
import { GALLERY_IMAGES } from "../constants";
import { ArrowRight, Sparkles } from "lucide-react";

export function GalleryPage() {
  return (
    <div className="pt-32">
      <Section>
        <div className="text-center mb-20">
          <SectionTitle 
            subtitle="The Lookbook"
            title="A visual journal of beauty and transformations"
            centered
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src={img} 
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
                alt={`Transformation ${i + 1}`}
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                   <span className="text-2xl">+</span>
                 </div>
              </div>
            </motion.div>
          ))}
          {/* Additional gallery images */}
          {[
            'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1494433356613-8130a3a411a4?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1571290274554-e915daa1b724?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1512496011212-3234271505f7?auto=format&fit=crop&q=80'
          ].map((img, i) => (
             <motion.div
                key={i + 10}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src={img} 
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                  alt={`Transformation ${i + 10}`}
                />
             </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
           <span className="text-xs uppercase font-bold tracking-[0.3em] text-brand-accent">Inspiration to Reality</span>
           <h3 className="text-3xl md:text-4xl font-serif text-brand-text italic">Inspired by a transformation?</h3>
           <p className="text-sm text-brand-text/60 font-sans max-w-md mx-auto">
             Bring your favorite style or look to your consultation and let our master artists recreate it for you.
           </p>
           <div className="pt-2 flex flex-wrap justify-center gap-4">
             <Link
               to="/contact"
               className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
             >
               <span>Book This Look</span>
               <ArrowRight size={14} />
             </Link>
           </div>
        </div>
      </Section>
    </div>
  );
}
