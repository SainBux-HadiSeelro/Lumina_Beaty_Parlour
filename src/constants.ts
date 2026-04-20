export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'Facial' | 'Hair' | 'Makeup' | 'Nails' | 'Body';
}

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Radiance Glow Facial',
    description: 'Deep cleansing and hydration to bring out your skin\'s natural glow.',
    price: '$85',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
    category: 'Facial'
  },
  {
    id: '2',
    title: 'Hydra-Silk Hair Treatment',
    description: 'Intensive nourishing treatment for silky, strong, and healthy hair.',
    price: '$65',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
    category: 'Hair'
  },
  {
    id: '3',
    title: 'Editorial Bridal Makeup',
    description: 'Bespoke makeup application for your special day, tailored to your style.',
    price: '$150',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
    category: 'Makeup'
  },
  {
    id: '4',
    title: 'Luxury Gel Manicure',
    description: 'Precision nail shaping and long-lasting gel polish with a relaxing hand massage.',
    price: '$45',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80',
    category: 'Nails'
  },
  {
    id: '5',
    title: 'Signature Aroma Massage',
    description: 'A deeply relaxing full-body massage using premium essential oils.',
    price: '$120',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
    category: 'Body'
  },
  {
    id: '6',
    title: 'Advanced Peel & Sculpt',
    description: 'Non-invasive facial sculpting paired with a gentle enzymatic peel.',
    price: '$110',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80',
    category: 'Facial'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sophia Loren',
    role: 'Fashion Blogger',
    content: 'The most calming atmosphere I\'ve ever experienced. My skin has never looked better than after the Radiance Glow facial.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Elena Gilbert',
    role: 'Frequent Client',
    content: 'Lumina is my sanctuary. The team is professional, and the attention to detail in every service is unparalleled.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Isabella Ross',
    role: 'Artist',
    content: 'I came in for bridal makeup and stayed for the hair treatments. They truly understand what luxury means.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150'
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
