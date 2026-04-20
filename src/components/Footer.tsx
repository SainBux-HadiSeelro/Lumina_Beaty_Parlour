import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-text pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-10">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark shadow-lg">
              <Sparkles size={20} />
            </div>
            <span className="text-2xl font-serif font-semibold tracking-tight text-brand-text">
              Lumina
            </span>
          </Link>
          <p className="text-brand-text/60 text-sm leading-relaxed max-w-xs font-light">
            Experience the harmony of nature and science. We provide high-end beauty treatments designed to enhance your natural grace.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Quick Links</h4>
          <ul className="space-y-3 text-brand-text/60 text-sm">
            {["Services", "About Us", "Gallery", "Reviews", "Privacy Policy"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-brand-accent transition-colors font-light tracking-wide">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Our Services</h4>
          <ul className="space-y-3 text-brand-text/60 text-sm">
            {["Facial Care", "Hair Styling", "Bridal Makeup", "Nail Art", "Aroma Therapy"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-brand-accent transition-colors font-light tracking-wide">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Reach Out</h4>
          <ul className="space-y-4 text-brand-text/60 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-accent shrink-0" />
              <span className="font-light">123 Beauty Lane, Luxury District,<br />New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent" />
              <span className="font-light">+1 (212) 555-0123</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent" />
              <span className="font-light">hello@lumina.studio</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text/40 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>© 2024 Lumina Beauty Studio. All rights reserved.</p>
        <p>Design by Lumina Creative Agency</p>
      </div>
    </footer>
  );
}
