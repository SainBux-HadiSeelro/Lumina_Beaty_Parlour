import { motion } from "motion/react";
import { Section, SectionTitle } from "../components/UI";
import { GALLERY_IMAGES } from "../constants";

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
        <div className="max-w-4xl mx-auto text-center">
           <h3 className="text-3xl font-serif text-brand-text mb-6 italic">Follow our daily stories</h3>
           <a href="#" className="inline-flex items-center gap-4 text-brand-text font-bold text-xl hover:text-brand-accent transition-colors">
             @lumina.beauty.studio <span className="text-2xl">↗</span>
           </a>
        </div>
      </Section>
    </div>
  );
}
