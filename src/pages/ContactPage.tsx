import { motion } from "motion/react";
import { Section, SectionTitle, GlassCard } from "../components/UI";
import { Mail, Phone, MapPin, Calendar, Clock, User, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SERVICES, PACKAGES, SALON_INFO } from "../constants";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (09:00 - 12:00)');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1200);
  };

  return (
    <div className="pt-32">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <SectionTitle 
                subtitle="Book Your Experience"
                title="Let's find the perfect time for your self-care ritual."
              />
              <p className="text-lg text-brand-text/60 font-light leading-relaxed mt-4">
                Whether you desire radiant bridal styling, anti-aging rejuvenation, or customized hair therapy, our master aestheticians are devoted to your luxury sanctuary experience.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Direct Concierge", value: SALON_INFO.phone, href: `tel:${SALON_INFO.phone.replace(/[^0-9+]/g, '')}` },
                { icon: Mail, title: "Email Enquiries", value: SALON_INFO.email, href: `mailto:${SALON_INFO.email}` },
                { icon: MapPin, title: "Sanctuary Location", value: SALON_INFO.address, href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-start gap-6 group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-accent uppercase tracking-widest text-[10px] mb-1">{item.title}</h4>
                    <p className="text-lg font-serif text-brand-text/90 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5">
               <h4 className="font-bold text-brand-text uppercase tracking-widest text-[11px] mb-6 flex items-center gap-2">
                 <Clock size={14} className="text-brand-accent" />
                 Sanctuary Hours
               </h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { day: "Mon - Fri", time: SALON_INFO.hours.weekdays },
                    { day: "Saturday", time: SALON_INFO.hours.saturday },
                    { day: "Sunday", time: SALON_INFO.hours.sunday },
                    { day: "Public Holidays", time: SALON_INFO.hours.holidays }
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-white/5 pb-2 text-xs">
                      <span className="font-medium text-brand-text/50">{h.day}</span>
                      <span className="font-semibold text-brand-text">{h.time}</span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <GlassCard className="p-8 lg:p-12 shadow-2xl relative border-white/10">
              {formState === 'success' ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-brand-accent/15 text-brand-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                    <CheckCircle2 size={44} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-[0.3em] text-brand-accent">Reservation Received</span>
                    <h3 className="text-3xl font-serif text-brand-text mt-1">Thank You, {name || 'Valued Guest'}!</h3>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3 font-sans text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-brand-text/50">Requested Ritual:</span>
                      <span className="font-semibold text-white">{selectedService || 'Bespoke Consultation'}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-brand-text/50">Preferred Slot:</span>
                      <span className="font-semibold text-white">{date || 'Upcoming'} • {timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text/50">Confirmation Email:</span>
                      <span className="font-semibold text-brand-accent">{email || 'On file'}</span>
                    </div>
                  </div>
                  <p className="text-brand-text/60 font-sans text-xs max-w-md mx-auto leading-relaxed">
                    Our concierge desk will review specialist availability and contact you within 2 hours to confirm your private sanctuary suite.
                  </p>
                  <button 
                    onClick={() => {
                      setFormState('idle');
                      setName('');
                      setEmail('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    Reserve Another Session
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">Direct Reservation</span>
                      <h3 className="text-3xl font-serif text-brand-text">Sanctuary Booking</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                      <Sparkles size={18} />
                    </div>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 ml-3">Full Name</label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/30" />
                          <input 
                            required
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all font-sans text-sm text-brand-text placeholder:text-brand-text/20" 
                            placeholder="Lady / Gentleman Name" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 ml-3">Email Address</label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/30" />
                          <input 
                            required
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all font-sans text-sm text-brand-text placeholder:text-brand-text/20" 
                            placeholder="concierge@guest.com" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 ml-3">Preferred Service or Package</label>
                      <select 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#141416] border border-white/10 focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all font-sans text-sm text-brand-text"
                      >
                        <option value="">Select a ritual or package</option>
                        <optgroup label="✨ Exclusive Luxury Packages">
                          {PACKAGES.map(pkg => (
                            <option key={pkg.id} value={pkg.title}>
                              {pkg.title} ({pkg.price} • {pkg.duration})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="💆 Bespoke Salon Services">
                          {SERVICES.map(svc => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title} — {svc.category} ({svc.price} • {svc.duration})
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 ml-3">Desired Date</label>
                        <div className="relative">
                          <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/30" />
                          <input 
                            required
                            type="date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all font-sans text-sm text-brand-text" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 ml-3">Time Slot</label>
                        <div className="relative">
                          <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/30" />
                          <select 
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#141416] border border-white/10 focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all font-sans text-sm text-brand-text"
                          >
                            <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                            <option value="Afternoon (12:00 - 17:00)">Afternoon (12:00 - 17:00)</option>
                            <option value="Evening (17:00 - 20:00)">Evening (17:00 - 20:00)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 ml-3">Special Requests & Skin/Hair Notes (Optional)</label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Mention any skin sensitivity, allergies, or bridal themes..."
                        className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all font-sans text-sm text-brand-text placeholder:text-brand-text/20 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full bg-brand-accent text-brand-dark py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-brand-dark transition-all shadow-xl disabled:opacity-50"
                    >
                      {formState === 'loading' ? (
                        <span>Securing Slot...</span>
                      ) : (
                        <>
                          <span>Request Private Appointment</span>
                          <ChevronRight size={16} />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-brand-text/40 font-medium px-4 italic">
                      *Complimentary consultations included. No upfront charge required for booking request.
                    </p>
                  </form>
                </>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
