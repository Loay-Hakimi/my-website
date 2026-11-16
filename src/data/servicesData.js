import { Mic, Code2, TrendingUp } from 'lucide-react';

// Update pricing, descriptions, and features as needed.
export const servicesData = [
  {
    id: 'voice-over',
    icon: Mic,
    title: 'Voice Over',
    tagline: 'Studio-quality voice for every brand.',
    features: [
      'Commercials & ads',
      'Corporate narration',
      'IVR & on-hold messaging',
      'Explainer & e-learning',
      '24-48hr turnaround',
      'Unlimited revisions on script',
    ],
    pricing: {
      monthly: { price: 75, label: '/ project' },
      yearly: { price: 60, label: '/ project (5+ pack)' },
    },
  },
  {
    id: 'full-stack',
    icon: Code2,
    title: 'Full-Stack Development',
    tagline: 'From idea to production-ready product.',
    features: [
      'React / Go / Python apps',
      'API design & integration',
      'Database architecture',
      'Security-first development',
      'CI/CD & deployment',
      'Ongoing maintenance',
    ],
    pricing: {
      monthly: { price: 800, label: '/ month retainer' },
      yearly: { price: 650, label: '/ month (annual)' },
    },
  },
  {
    id: 'social-media',
    icon: TrendingUp,
    title: 'Social Media Management',
    tagline: 'Consistent growth, on-brand content.',
    features: [
      'Content calendar & strategy',
      'Post design & copywriting',
      'Community management',
      'Analytics & reporting',
      'Paid campaign support',
      'Monthly strategy call',
    ],
    pricing: {
      monthly: { price: 400, label: '/ month' },
      yearly: { price: 320, label: '/ month (annual)' },
    },
  },
];
