import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import { SALON_INFO } from "../constants";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-text pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-10">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark shadow-lg">
              <Sparkles size={20} />
            </div>
            <span className="text-2xl font-serif font-semibold tracking-widest uppercase text-brand-text">
              Lumina
            </span>
          </Link>
          <p className="text-brand-text/60 text-xs leading-relaxed max-w-xs font-sans">
            Experience the harmony of nature and aesthetic science. We curate bespoke treatments designed to nourish your skin and elevate your natural grace.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Facebook, href: "https://facebook.com" },
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all"
              >
                <item.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent">Explore</h4>
          <ul className="space-y-2.5 text-brand-text/60 text-xs font-sans">
            <li>
              <Link to="/" className="hover:text-brand-accent transition-colors">Home Sanctuary</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-accent transition-colors">Salon Rituals &amp; Menu</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-accent transition-colors">About Our Aesthetics</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-brand-accent transition-colors">Masterpiece Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-accent transition-colors">Book Private Appointment</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent">Signature Rituals</h4>
          <ul className="space-y-2.5 text-brand-text/60 text-xs font-sans">
            <li>
              <Link to="/services" className="hover:text-brand-accent transition-colors">Radiance Glow Facial</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-accent transition-colors">Editorial Bridal Couture</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-accent transition-colors">Hydra-Silk Hair Treatment</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-accent transition-colors">Signature Aroma Body Massage</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-accent transition-colors">Luxury Gel Nail Art</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent">Sanctuary Concierge</h4>
          <ul className="space-y-3.5 text-brand-text/60 text-xs font-sans">
            <li className="flex gap-3">
              <MapPin size={16} className="text-brand-accent shrink-0 mt-0.5" />
              <span>{SALON_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-accent shrink-0" />
              <span>{SALON_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-accent shrink-0" />
              <span>{SALON_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text/40 text-[11px] font-sans tracking-wide">
        <p>© {new Date().getFullYear()} Lumina Beauty Parlour &amp; Aesthetics. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Engineered &amp; Designed with <Heart size={12} className="text-brand-accent fill-brand-accent" /> by{" "}
          <a 
            href="https://github.com/SainBux-HadiSeelro" 
            target="_blank" 
            rel="noreferrer" 
            className="text-brand-accent hover:underline font-semibold"
          >
            Sain Bux (Hadi Seelro)
          </a>
        </p>
      </div>
    </footer>
  );
}
