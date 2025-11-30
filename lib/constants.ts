// Site Configuration
export const SITE_CONFIG = {
  name: 'Havsan Grup',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://havsangrup.com',
  description:
    'Robotik Kodlama, Yapay Zeka & Yazılım, Enerji Çözümleri - Havsan Grup',
  locale: 'tr-TR',
  defaultImage: '/images/og-image.jpg',
} as const;

// Business Units
export const BUSINESS_UNITS = {
  robotik: {
    id: 'robotik',
    name: 'Robotik Kodlama',
    slug: 'robotik',
    description: 'STEM ve robotik kodlama eğitimleri',
    color: '#4285F4',
    bgColor: '#E3E5E8',
  },
  ai: {
    id: 'ai',
    name: 'AI & Yazılım',
    slug: 'ai',
    description: 'Yapay zeka ve yazılım geliştirme çözümleri',
    color: '#4E85EB',
    gradient: 'linear-gradient(135deg, #4E85EB 0%, #D9666F 100%)',
  },
  enerji: {
    id: 'enerji',
    name: 'Enerji Çözümleri',
    slug: 'enerji',
    description: 'Yenilenebilir enerji ve endüstriyel çözümler',
    color: '#F3C242',
    colors: [
      '#F3C242',
      '#F99F1B',
      '#E57025',
      '#00A786',
      '#00A58F',
      '#00A398',
      '#009CC9',
    ],
  },
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/robotik', label: 'Robotik Kodlama' },
  { href: '/ai', label: 'AI & Yazılım' },
  { href: '/enerji', label: 'Enerji' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

// Contact Information
export const CONTACT_INFO = {
  email: 'bilgi@havsanrobotik.com.tr',
  phone: '+90 534 785 59 57',
  address: 'Ankara, Yenimahalle',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/havsan-grup',
    twitter: 'https://twitter.com/havsangrup',
    instagram: 'https://instagram.com/havsangrup',
  },
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  strapi: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
  formSubmit: '/api/form-submit',
} as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

// Form Validation Messages (Turkish)
export const VALIDATION_MESSAGES = {
  required: 'Bu alan zorunludur',
  email: 'Geçerli bir e-posta adresi giriniz',
  phone: 'Geçerli bir telefon numarası giriniz',
  minLength: (min: number) => `En az ${min} karakter olmalıdır`,
  maxLength: (max: number) => `En fazla ${max} karakter olmalıdır`,
} as const;
