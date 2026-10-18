export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'Facial' | 'Hair' | 'Makeup' | 'Nails' | 'Body';
  highlight?: boolean;
}

export interface BeautyPackage {
  id: string;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  savings: string;
  includes: string[];
  recommendedFor: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    holidays: string;
  };
  socials: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
}

export const SALON_INFO: SalonInfo = {
  name: "Lumina Beauty Parlour & Aesthetics",
  tagline: "The Art of Bespoke Luxury Refinement",
  phone: "+1 (212) 555-0123",
  email: "hello@lumina.studio",
  address: "123 Beauty Lane, Luxury District, NY 10001",
  hours: {
    weekdays: "09:00 AM - 08:00 PM",
    saturday: "10:00 AM - 06:00 PM",
    sunday: "Closed (VIP Bridal Sessions by Pre-booking)",
    holidays: "By Special Appointment"
  },
  socials: {
    instagram: "@lumina.luxuryparlour",
    tiktok: "@luminaparlour",
    facebook: "LuminaBeautyStudio"
  }
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Radiance Glow Facial',
    description: 'Deep cleansing, gentle enzymatic exfoliation, and botanical hydration to reveal an illuminated, glass-skin complexion.',
    price: '$85',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
    category: 'Facial',
    highlight: true
  },
  {
    id: '2',
    title: 'Hydra-Silk Hair Treatment',
    description: 'Intensive keratin and botanical nourishing mask with steam therapy for silky, resilient, salon-grade hair.',
    price: '$65',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
    category: 'Hair',
    highlight: true
  },
  {
    id: '3',
    title: 'Editorial Bridal Makeup',
    description: 'High-definition couture makeup customized to your skin undertones, lighting, and wedding dress aesthetic. Includes lash extensions & touch-up kit.',
    price: '$150',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
    category: 'Makeup',
    highlight: true
  },
  {
    id: '4',
    title: 'Luxury Gel Manicure & Nail Art',
    description: 'Precision cuticle shaping, organic cuticle oil soak, gentle hand massage, and long-lasting Chip-Free Japanese gel polish.',
    price: '$45',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80',
    category: 'Nails'
  },
  {
    id: '5',
    title: 'Signature Aroma Massage',
    description: 'Deeply relaxing full-body tension relief therapy using heated organic botanical oils, lymphatic drainage, and acupressure.',
    price: '$120',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
    category: 'Body',
    highlight: true
  },
  {
    id: '6',
    title: '24K Gold Collagen Facial',
    description: 'Ultimate anti-aging indulgence featuring micronized 24K pure gold sheets, peptide lifting, and microcurrent toning.',
    price: '$140',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1512290900672-1f4142d10332?auto=format&fit=crop&q=80',
    category: 'Facial'
  },
  {
    id: '7',
    title: 'Balayage & Couture Silk Gloss',
    description: 'Hand-painted sun-kissed gradient highlights paired with an ammonia-free gloss toner and bond-repair treatment.',
    price: '$175',
    duration: '120 min',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80',
    category: 'Hair'
  },
  {
    id: '8',
    title: 'Moroccan Hammam & Body Polish',
    description: 'Traditional eucalyptus black soap wash, Kessa glove exfoliation, and warm shea butter body wrap.',
    price: '$135',
    duration: '80 min',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80',
    category: 'Body'
  },
  {
    id: '9',
    title: 'Advanced Peel & Sculpt',
    description: 'Non-invasive facial sculpting paired with gentle enzymatic peel and LED light rejuvenation for instant contouring.',
    price: '$110',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80',
    category: 'Facial'
  }
];

export const PACKAGES: BeautyPackage[] = [
  {
    id: 'pkg-1',
    title: 'The Royal Bridal Sanctuary',
    tagline: 'Complete bridal glow, couture makeup, hair styling & nail artistry',
    price: '$349',
    duration: '4.5 Hours',
    savings: 'Save $110',
    includes: [
      'Radiance Glow Pre-Bridal Facial',
      'Editorial HD Bridal Makeup with 3D Lashes',
      'Couture Hair Updo & Veil Setting',
      'Luxury Gel Manicure & Deluxe Pedicure',
      'Complimentary Champagne & Luxury Touch-up Kit'
    ],
    recommendedFor: 'Brides, Engagement Ceremonies & Red Carpet Events'
  },
  {
    id: 'pkg-2',
    title: 'Weekend Glow & Rejuvenation Retreat',
    tagline: 'Head-to-toe relaxation to reset your glow before Monday',
    price: '$189',
    duration: '2.5 Hours',
    savings: 'Save $65',
    includes: [
      'Radiance Glow Deep Cleansing Facial',
      'Signature Aromatherapy Hot Stone Massage (50 min)',
      'Hydra-Silk Hair Mask with Steam Spa',
      'Organic Herbal Tea & Wellness Infusion'
    ],
    recommendedFor: 'Self-care weekends, busy professionals & anniversaries'
  },
  {
    id: 'pkg-3',
    title: 'Express Glam & Style Makeover',
    tagline: 'Picture-perfect makeup and salon blowout in under 2 hours',
    price: '$99',
    duration: '75 min',
    savings: 'Save $35',
    includes: [
      'Evening Glam Party Makeup',
      'Signature Bouncy Blowout or Hollywood Waves',
      'Lash Application & Gloss Setting'
    ],
    recommendedFor: 'Party attendees, photoshoot sessions, dinner dates'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sophia Loren',
    role: 'Fashion Blogger & Creator',
    content: 'The most calming atmosphere I have ever experienced. My skin has never looked better than after the Radiance Glow facial. Lumina is pure luxury.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '2',
    name: 'Elena Gilbert',
    role: 'Frequent Client',
    content: 'Lumina is my sanctuary. The team is warm, attentive, and the bespoke attention to detail in every service is unparalleled in the city.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '3',
    name: 'Isabella Ross',
    role: 'Contemporary Artist',
    content: 'I came in for my bridal makeup package and stayed for monthly hair treatments. They truly understand modern aesthetic luxury.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1457974182554-a0d0ed80efb8?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1527799822394-465a6d396924?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfaf410911?auto=format&fit=crop&q=80'
];

export const FAQS = [
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our online reservation form on the Contact page, chat with our 24/7 AI Concierge, or call us directly at +1 (212) 555-0123."
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer: "We kindly request at least 24 hours notice for standard appointments, and 72 hours for bridal packages to allow us to accommodate other waiting guests."
  },
  {
    question: "Do you offer free skin and hair consultations?",
    answer: "Yes! We provide complimentary 15-minute diagnostic consultations with our master aesthetician to evaluate your skin or hair type before any service."
  },
  {
    question: "Can I customize a bridal or group package?",
    answer: "Absolutely! We create personalized bridal party packages including champagne service, bridesmaid styling, and pre-wedding skin preparation plans."
  }
];
