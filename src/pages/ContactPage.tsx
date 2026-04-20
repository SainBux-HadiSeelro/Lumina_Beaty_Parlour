import { motion } from "motion/react";
import { Section, SectionTitle, GlassCard } from "../components/UI";
import { Mail, Phone, MapPin, Calendar, Clock, User, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export function ContactPage() {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
              <p className="text-lg text-brand-text/60 font-light leading-relaxed">
                Whether you have a question about our services or are ready to schedule your next appointment, our team is here to assist you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", value: "+1 (212) 555-0123" },
                { icon: Mail, title: "Email Us", value: "hello@lumina.studio" },
                { icon: MapPin, title: "Find Us", value: "123 Beauty Lane, Luxury District, NY 10001" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text/40 uppercase tracking-widest text-[10px] mb-1">{item.title}</h4>
                    <p className="text-xl font-serif text-brand-text/80 group-hover:text-brand-accent transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
               <h4 className="font-bold text-brand-text uppercase tracking-widest text-[10px] mb-6">Operating Hours</h4>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { day: "Mon - Fri", time: "09:00 - 20:00" },
                    { day: "Saturday", time: "10:00 - 18:00" },
                    { day: "Sunday", time: "Closed" },
                    { day: "Holidays", time: "By Appointment" }
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-white/5 pb-2 text-sm">
                      <span className="font-semibold text-brand-text/40">{h.day}</span>
                      <span className="font-medium text-brand-text">{h.time}</span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-8 lg:p-12 shadow-2xl relative border-white/10">
              {formState === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar size={40} />
                  </div>
                  <h3 className="text-3xl font-serif text-brand-text mb-4">Request Sent!</h3>
                  <p className="text-brand-text/60 font-inter mb-8">
                    Thank you for your interest. A member of our team will contact you within 2 hours to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-brand-accent font-bold uppercase tracking-widest text-sm"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-serif text-brand-text mb-8">Reservation Details</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 ml-4">Full Name</label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/20" />
                          <input 
                            required
                            type="text" 
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent outline-none transition-all font-inter text-brand-text" 
                            placeholder="Enter your name" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 ml-4">Email Address</label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/20" />
                          <input 
                            required
                            type="email" 
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent outline-none transition-all font-inter text-brand-text" 
                            placeholder="hello@world.com" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 ml-4">Preferred Service</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent outline-none transition-all font-inter appearance-none text-brand-text">
                        <option className="bg-brand-dark">Choose a service</option>
                        <option className="bg-brand-dark">Radiance Glow Facial</option>
                        <option className="bg-brand-dark">Hair Styling & Treatment</option>
                        <option className="bg-brand-dark">Bridal Makeup Package</option>
                        <option className="bg-brand-dark">Luxury Gel Nails</option>
                        <option className="bg-brand-dark">Body Rituals</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 ml-4">Desired Date</label>
                        <div className="relative">
                          <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/20" />
                          <input 
                            required
                            type="date" 
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent outline-none transition-all font-inter text-brand-text" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 ml-4">Time Slot</label>
                        <div className="relative">
                          <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/20" />
                          <select className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-1 focus:ring-brand-accent outline-none transition-all font-inter appearance-none text-brand-text">
                            <option className="bg-brand-dark">Any Time</option>
                            <option className="bg-brand-dark">Morning (09:00 - 12:00)</option>
                            <option className="bg-brand-dark">Afternoon (12:00 - 17:00)</option>
                            <option className="bg-brand-dark">Evening (17:00 - 20:00)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button 
                      disabled={formState === 'loading'}
                      className="w-full bg-brand-accent text-brand-dark py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-text transition-all shadow-xl disabled:opacity-50"
                    >
                      {formState === 'loading' ? 'Confirming...' : (
                        <>
                          Request Booking
                          <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-brand-text/40 font-medium px-8 italic">
                      *By submitting this form, you request a booking. We will contact you shortly to confirm the exact time and specialist.
                    </p>
                  </form>
                </>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      <div className="h-96 w-full grayscale opacity-30 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            alt="Luxury District"
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center text-white/40 text-4xl font-serif tracking-[0.5em] uppercase">
             Luxury District
          </div>
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-primary to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-primary to-transparent" />
      </div>
    </div>
  );
}
