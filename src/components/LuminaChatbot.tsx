import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Tag, 
  CheckCircle2, 
  RotateCcw,
  Volume2,
  VolumeX,
  ExternalLink
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SERVICES, PACKAGES, SALON_INFO, FAQS, Service } from "../constants";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  suggestedServices?: Service[];
  showBookingAction?: boolean;
}

const QUICK_PROMPTS = [
  { label: "👰 Bridal Packages", query: "Tell me about your bridal packages and pricing." },
  { label: "💆 Glowing Skin Facials", query: "Which facial is best for glowing glass skin?" },
  { label: "💇 Hair Treatments", query: "What hair smoothing and repair treatments do you offer?" },
  { label: "📅 Book an Appointment", query: "How can I book an appointment?" },
  { label: "🕒 Timings & Location", query: "Where are you located and what are your opening hours?" },
  { label: "💰 Price List", query: "Can you provide the full price list for your services?" },
];

export function LuminaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Play subtle feedback audio
  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // AudioContext unavailable or blocked by autoplay
    }
  };

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome-1",
          sender: "bot",
          text: `Welcome to **Lumina Luxury Beauty Parlour & Aesthetics**! ✨\n\nI am your **24/7 AI Beauty Concierge**. I can assist you with:\n• Browsing bespoke beauty rituals & pricing\n• Bridal packages & personalized styling\n• Skin & hair diagnostics\n• Reserving your private appointment\n\n*Aap English ya Roman Urdu main bhi baat kar sakte hain!* How may I pamper you today?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [messages.length]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Intelligent Beauty Advisor Knowledge Engine (Natural Language Understanding)
  const generateIntelligentResponse = (userInput: string): { text: string; services?: Service[]; showBooking?: boolean } => {
    const q = userInput.toLowerCase();

    // 1. Bridal & Weddings
    if (q.includes("bridal") || q.includes("dulhan") || q.includes("wedding") || q.includes("shaadi") || q.includes("marriage")) {
      const bridalServices = SERVICES.filter(s => s.category === 'Makeup' || s.title.includes('Bridal'));
      return {
        text: `💍 **The Royal Bridal Sanctuary** is our signature couture experience!\n\n**Package Overview ($349, 4.5 Hours):**\n• Editorial HD Bridal Makeup with 3D Lashes\n• Radiance Glow Pre-Bridal Facial & Skin Prep\n• Couture Hair Updo & Veil Setting\n• Luxury Gel Manicure & Deluxe Pedicure\n• Complimentary Champagne & Touch-up Kit\n\nWe also offer standalone **Editorial Bridal Makeup for $150** (90 min).\n\nWould you like to reserve a bridal consultation?`,
        services: bridalServices,
        showBooking: true
      };
    }

    // 2. Facials & Skin Glow
    if (q.includes("facial") || q.includes("skin") || q.includes("glow") || q.includes("jild") || q.includes("acne") || q.includes("face")) {
      const facials = SERVICES.filter(s => s.category === 'Facial');
      return {
        text: `✨ **Curated Facial Rituals for Radiant Skin:**\n\n1. **Radiance Glow Facial ($85 / 60 min)**: Our #1 requested treatment for instant glass-skin radiance and deep hydration.\n2. **24K Gold Collagen Facial ($140 / 75 min)**: Ultimate anti-aging luxury with pure gold leaves & peptide lifting.\n3. **Advanced Peel & Sculpt ($110 / 60 min)**: Non-invasive sculpting with enzymatic peel & LED contouring.\n\nAll facials use 100% organic, medical-grade botanical formulas.`,
        services: facials,
        showBooking: true
      };
    }

    // 3. Hair Treatments & Styling
    if (q.includes("hair") || q.includes("baal") || q.includes("keratin") || q.includes("color") || q.includes("cut") || q.includes("balayage") || q.includes("silk")) {
      const hairServices = SERVICES.filter(s => s.category === 'Hair');
      return {
        text: `💇 **Bespoke Hair Transformations & Therapy:**\n\n• **Hydra-Silk Hair Treatment ($65 / 45 min)**: Deep restorative steam infusion for silky, frizz-free hair.\n• **Balayage & Couture Silk Gloss ($175 / 120 min)**: Hand-painted dimensional highlights with gloss glaze.\n\nOur master stylists use ammonia-free bond-restoring elixirs.`,
        services: hairServices,
        showBooking: true
      };
    }

    // 4. Massage & Body Care
    if (q.includes("massage") || q.includes("body") || q.includes("spa") || q.includes("hammam") || q.includes("relax")) {
      const bodyServices = SERVICES.filter(s => s.category === 'Body');
      return {
        text: `🌿 **Body Sanctuary & Stress Relief Rituals:**\n\n• **Signature Aroma Massage ($120 / 75 min)**: Full-body heated botanical oil massage with acupressure & lymphatic drainage.\n• **Moroccan Hammam & Body Polish ($135 / 80 min)**: Eucalyptus black soap cleanse, Kessa glove exfoliation, and warm shea butter wrap.`,
        services: bodyServices,
        showBooking: true
      };
    }

    // 5. Nails & Manicure / Pedicure
    if (q.includes("nail") || q.includes("manicure") || q.includes("pedicure") || q.includes("gel")) {
      const nailServices = SERVICES.filter(s => s.category === 'Nails');
      return {
        text: `💅 **Lumina Nail Bar:**\n\n• **Luxury Gel Manicure & Nail Art ($45 / 45 min)**: Precision shaping, Japanese non-toxic chip-resistant gel, and nourishing cuticle massage.\n• We also offer Deluxe Spa Pedicures with organic sea salt scrubs and reflexology massage.`,
        services: nailServices,
        showBooking: true
      };
    }

    // 6. Pricing / Menu / Cost
    if (q.includes("price") || q.includes("rate") || q.includes("cost") || q.includes("menu") || q.includes("kitna") || q.includes("charges") || q.includes("paisa")) {
      return {
        text: `📋 **Lumina Signature Investment Menu:**\n\n• **Facials**: $85 - $140\n• **Hair Care & Styling**: $65 - $175\n• **Makeup & Bridal**: $99 - $349\n• **Nails & Gel Art**: $45\n• **Massages & Body Care**: $120 - $135\n\nAll treatments include complimentary herbal tea and custom skin consultation.`,
        services: SERVICES.slice(0, 3),
        showBooking: true
      };
    }

    // 7. Booking / Reservation / Appointment
    if (q.includes("book") || q.includes("appointment") || q.includes("reserve") || q.includes("schedule") || q.includes("slot") || q.includes("karna")) {
      return {
        text: `📅 **Reserving Your Appointment is Simple:**\n\n1. Visit our **Contact & Booking** page\n2. Select your preferred ritual, date, and time slot\n3. Our concierge desk will confirm your appointment within 2 hours!\n\nOr call us directly at **${SALON_INFO.phone}**.\n\nClick below to proceed to the reservation desk:`,
        showBooking: true
      };
    }

    // 8. Timings & Working Hours
    if (q.includes("time") || q.includes("timing") || q.includes("hour") || q.includes("open") || q.includes("close") || q.includes("kab") || q.includes("sunday")) {
      return {
        text: `🕒 **Lumina Operating Hours:**\n\n• **Monday - Friday**: ${SALON_INFO.hours.weekdays}\n• **Saturday**: ${SALON_INFO.hours.saturday}\n• **Sunday**: ${SALON_INFO.hours.sunday}\n• **Public Holidays**: ${SALON_INFO.hours.holidays}\n\nWe recommend booking 24-48 hours in advance for peak weekend slots.`
      };
    }

    // 9. Location & Contact
    if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("kahan") || q.includes("phone") || q.includes("contact") || q.includes("number")) {
      return {
        text: `📍 **Visit Our Sanctuary:**\n\n**Address**: ${SALON_INFO.address}\n**Phone**: ${SALON_INFO.phone}\n**Email**: ${SALON_INFO.email}\n\nValet parking is available for all guests. We look forward to welcoming you!`
      };
    }

    // 10. Discounts / Offers / Promo
    if (q.includes("discount") || q.includes("offer") || q.includes("promo") || q.includes("coupon") || q.includes("deal") || q.includes("bachat")) {
      return {
        text: `🎁 **Current Exclusive Privileges:**\n\n• **First-time Guest Privilege**: Enjoy **15% OFF** your first bespoke ritual! Mention code **GLOW15** during your booking.\n• **Bridal Bundle**: Save **$110** on The Royal Bridal Sanctuary package.\n• **Complimentary Diagnostic**: 15-minute skin analysis with our master aesthetician.`
      };
    }

    // 11. Roman Urdu queries (specific handlers)
    if (q.includes("kese ho") || q.includes("kaise ho") || q.includes("salam") || q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return {
        text: `Walaykum Assalam & Hello! ✨ Hum bilkul theek hain aur aapki khidmat ke liye 24/7 live hazir hain. Aap Lumina Beauty Parlour ke kisi bhi service, bridal package, ya appointment ke bare me pooch sakte hain!`
      };
    }

    // Fallback response with helpful salon context
    return {
      text: `Thank you for reaching out! At Lumina Beauty Parlour, we specialize in luxury facials, hair couture, bridal transformations, and relaxing body massages.\n\nCould you please let me know which area you would like guidance on?\n• **Bridal Makeup & Styling**\n• **Facials & Skin Glow**\n• **Hair Care & Treatments**\n• **Prices & Booking**\n\nYou can also contact our concierge desk directly at **${SALON_INFO.phone}**.`,
      showBooking: true
    };
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    playChime();

    // Check if Gemini API key exists
    const metaEnv = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
    const geminiApiKey = (typeof process !== "undefined" && process.env?.GEMINI_API_KEY) || 
                         metaEnv?.VITE_GEMINI_API_KEY || 
                         metaEnv?.GEMINI_API_KEY;

    let replyData: { text: string; services?: Service[]; showBooking?: boolean } | null = null;

    if (geminiApiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `You are the 24/7 AI Luxury Beauty Concierge for "Lumina Beauty Parlour & Aesthetics Studio" (Owner/Lead Designer: Sain Bux Hadi Seelro).
Website Knowledge Base:
- Services & Prices:
  * Radiance Glow Facial: $85 (60 min)
  * 24K Gold Collagen Facial: $140 (75 min)
  * Advanced Peel & Sculpt: $110 (60 min)
  * Hydra-Silk Hair Treatment: $65 (45 min)
  * Balayage & Couture Silk Gloss: $175 (120 min)
  * Editorial Bridal Makeup: $150 (90 min)
  * Luxury Gel Manicure & Nail Art: $45 (45 min)
  * Signature Aroma Massage: $120 (75 min)
  * Moroccan Hammam & Body Polish: $135 (80 min)
- Packages:
  * The Royal Bridal Sanctuary: $349 (Save $110, 4.5 hrs, complete bridal experience)
  * Weekend Glow & Rejuvenation Retreat: $189 (2.5 hrs)
  * Express Glam & Style Makeover: $99 (75 min)
- Location: 123 Beauty Lane, Luxury District, NY 10001
- Phone: +1 (212) 555-0123, Email: hello@lumina.studio
- Operating Hours: Mon-Fri 09:00 - 20:00, Sat 10:00 - 18:00, Sun Closed (Bridal by appointment)
- First-time client discount code: GLOW15 (15% off)
- Tone: Elegant, warm, prestigious, helpful.
- Support English, Urdu, and Roman Urdu seamlessly according to the user's language.
- Keep answers concise, formatted nicely with markdown bullet points.

User prompt: ${text}`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generatedText) {
            replyData = {
              text: generatedText,
              showBooking: true
            };
          }
        }
      } catch {
        // Fall back gracefully to local engine
      }
    }

    // Fallback or primary local intelligent engine
    if (!replyData) {
      replyData = generateIntelligentResponse(text);
    }

    // Simulate natural typing delay
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: replyData?.text || "I am here to assist with all your beauty and booking needs at Lumina.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedServices: replyData?.services,
        showBookingAction: replyData?.showBooking
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      playChime();
    }, 600);
  };

  const handleBookService = (serviceTitle: string) => {
    setIsOpen(false);
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: `Conversation refreshed. How may our concierge team assist your beauty journey today? ✨`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && hasUnread && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-2 bg-brand-dark/95 border border-brand-accent/40 text-brand-text px-4 py-2 rounded-full shadow-2xl backdrop-blur-md cursor-pointer hover:border-brand-accent transition-all"
            onClick={() => { setIsOpen(true); setHasUnread(false); }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-medium tracking-wide">
              24/7 AI Concierge Online
            </span>
            <span className="text-brand-accent text-xs font-serif italic">Ask anything</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setHasUnread(false);
          }}
          className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-brand-accent via-[#e2c17c] to-brand-accent text-brand-dark shadow-[0_0_25px_rgba(197,160,89,0.5)] flex items-center justify-center border-2 border-white/20 transition-all group"
          aria-label="Open 24/7 AI Beauty Concierge"
        >
          {isOpen ? (
            <X size={26} className="text-brand-dark group-hover:rotate-90 transition-transform" />
          ) : (
            <>
              <Sparkles size={26} className="text-brand-dark animate-pulse" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-brand-dark rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-bounce">
                  1
                </span>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[580px] max-h-[80vh] z-50 bg-[#0f0f10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden text-brand-text"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-brand-dark via-[#1a1712] to-brand-dark border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 border border-brand-accent/50 flex items-center justify-center text-brand-accent">
                    <Sparkles size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-brand-text flex items-center gap-2">
                    Lumina Concierge
                    <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand-accent/15 text-brand-accent font-sans font-bold">
                      24/7 Live
                    </span>
                  </h3>
                  <p className="text-[11px] text-brand-text/50 font-sans">
                    Bespoke Beauty &amp; Booking Advisor
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-brand-text/50">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? "Mute chimes" : "Enable chimes"}
                  className="p-1.5 hover:text-brand-accent transition-colors rounded-lg hover:bg-white/5"
                >
                  {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <button
                  onClick={resetChat}
                  title="Reset Conversation"
                  className="p-1.5 hover:text-brand-accent transition-colors rounded-lg hover:bg-white/5"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Concierge"
                  className="p-1.5 hover:text-brand-accent transition-colors rounded-lg hover:bg-white/5"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Prompt Pills */}
            <div className="px-4 py-2.5 bg-black/30 border-b border-white/5 overflow-x-auto no-scrollbar flex items-center gap-2">
              {QUICK_PROMPTS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(p.query)}
                  className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] bg-white/5 hover:bg-brand-accent/20 border border-white/10 hover:border-brand-accent/40 text-brand-text/80 transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent flex-shrink-0 mt-1">
                      <Sparkles size={13} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                      m.sender === "user"
                        ? "bg-brand-accent text-brand-dark font-medium rounded-tr-none shadow-md"
                        : "bg-white/5 border border-white/10 text-brand-text/90 rounded-tl-none shadow-sm"
                    }`}
                  >
                    <div className="whitespace-pre-line text-[13px]">
                      {m.text}
                    </div>

                    {/* Suggested Services Embedded Cards */}
                    {m.suggestedServices && m.suggestedServices.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-brand-accent">
                          Recommended Rituals:
                        </p>
                        {m.suggestedServices.map((svc) => (
                          <div
                            key={svc.id}
                            className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3 hover:border-brand-accent/40 transition-colors"
                          >
                            <div className="min-w-0">
                              <p className="text-xs font-medium text-white truncate">{svc.title}</p>
                              <p className="text-[10px] text-brand-text/50">{svc.duration} • <span className="text-brand-accent font-semibold">{svc.price}</span></p>
                            </div>
                            <button
                              onClick={() => handleBookService(svc.title)}
                              className="px-2.5 py-1 rounded-lg bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors flex-shrink-0"
                            >
                              Book
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Quick Book Now Button */}
                    {m.showBookingAction && (
                      <div className="mt-3 pt-2">
                        <Link
                          to="/contact"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-accent/20 hover:bg-brand-accent text-brand-accent hover:text-brand-dark border border-brand-accent/40 text-xs font-semibold uppercase tracking-wider transition-all"
                        >
                          <Calendar size={13} />
                          Go to Reservation Form
                        </Link>
                      </div>
                    )}

                    <div
                      className={`text-[9px] mt-1.5 ${
                        m.sender === "user" ? "text-brand-dark/70 text-right" : "text-brand-text/40"
                      }`}
                    >
                      {m.timestamp}
                    </div>
                  </div>

                  {m.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-brand-dark border border-white/20 flex items-center justify-center text-brand-accent flex-shrink-0 mt-1">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Sparkles size={13} />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about facials, bridal packages, prices..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:border-brand-accent/60 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 rounded-2xl bg-brand-accent text-brand-dark flex items-center justify-center hover:bg-brand-text disabled:opacity-40 transition-all shadow-md flex-shrink-0"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
