# TASKS.md - Havsan Grup Web Projesi Görev Listesi

**Proje:** Havsan Grup Kurumsal Web Platformu  
**Tarih:** 28 Kasım 2025  
**Durum:** Planlama Aşaması  
**Tech Stack:** Next.js 14+ (App Router), Tailwind CSS, Framer Motion/GSAP, Strapi CMS

---

## FAZ 1: Proje Kurulumu & Altyapı

### 1.1 Development Environment Setup
- [ ] `[30m]` Git repository oluşturma ve branch stratejisi belirleme (main, dev, feature/*)
- [ ] `[1h]` 🔴 CRITICAL: Next.js 14+ (App Router) projesi init (`npx create-next-app@latest --typescript --tailwind --app`)
- [ ] `[30m]` TypeScript konfigürasyonu (`tsconfig.json` - strict mode, path aliases @/components, @/lib)
- [ ] `[30m]` ESLint + Prettier setup (Airbnb/Next.js recommended config)
- [ ] `[20m]` `.env.local` template oluşturma (STRAPI_API_URL, STRAPI_API_TOKEN, SMTP_CONFIG)
- [ ] `[15m]` `.gitignore` güncelleme (node_modules, .env*, .next, build artifacts)
- [ ] `[20m]` README.md oluşturma (proje setup talimatları, tech stack, folder structure)

### 1.2 Dependencies Installation
- [ ] `[45m]` Tailwind CSS custom config (`tailwind.config.ts` - Google brand colors, custom fonts, breakpoints)
- [ ] `[30m]` Framer Motion kurulumu (animasyon kütüphanesi - GSAP alternatif olarak değerlendir)
- [ ] `[20m]` React Hook Form + Zod schema validation kurulumu
- [ ] `[15m]` Axios veya native fetch wrapper (API client for Strapi)
- [ ] `[15m]` clsx + tailwind-merge (className utilities)
- [ ] `[10m]` lucide-react veya react-icons (ikon paketi)
- [ ] `[15m]` next-seo kurulumu (SEO meta tags yönetimi)
- [ ] `[10m]` sharp (image optimization - Next.js built-in)

### 1.3 Folder Structure & Conventions
- [ ] `[1.5h]` Proje klasör yapısı oluşturma:
  ```
  /app
    /(root)
      page.tsx (Landing page)
    /robotik
      page.tsx
    /ai
      page.tsx
    /enerji
      page.tsx
    /api
      /form-submit
        route.ts
  /components
    /ui (Button, Card, Input, Modal)
    /sections (Hero, Preloader, ModuleCard)
    /forms (RobotikForm, ContactForm)
    /animations (SplitScreen, HoverExpand)
  /lib
    /utils.ts
    /constants.ts (colors, fonts, API endpoints)
    /types.ts (TypeScript interfaces)
    /strapi.ts (API client)
  /public
    /images
    /videos
    /documents
  /styles
    globals.css
  ```
- [ ] `[30m]` Code style conventions dokümantasyonu (naming, component structure, import order)

---

## FAZ 2: CMS & Backend Setup

### 2.1 Strapi (Headless CMS) Kurulumu
- [ ] `[2h]` 🔴 CRITICAL: Strapi projesi init (Railway veya DigitalOcean - PostgreSQL)
- [ ] `[1h]` PostgreSQL database kurulumu ve bağlantı (connection string config)
- [ ] `[30m]` Strapi admin paneli erişimi + super admin user oluşturma
- [ ] `[45m]` API token oluşturma ve permissions ayarları (Public read, Admin write)
- [ ] `[30m]` CORS configuration (Frontend domain whitelist)
- [ ] `[20m]` Media upload plugin config (dosya boyutu limitleri, allowed formats)

### 2.2 Content Types Oluşturma
- [ ] `[1h]` "Robotik" collection type (title, description, videoURLs[array], images[media], orderIndex)
- [ ] `[1h]` "AI Hizmetleri" collection type (serviceName, description, category, documentURL, icon)
- [ ] `[45m]` "Enerji Çözümleri" collection type (serviceType, technicalDetails, fieldImages[media], features[text])
- [ ] `[45m]` "Referanslar" collection type (companyName, logo[media], websiteURL, sector, orderIndex)
- [ ] `[30m]` "Sosyal Medya" collection type (platform, url, iconName, isActive)
- [ ] `[30m]` "İletişim Bilgileri" single type (phone, email, address, coordinates, mapEmbedURL)
- [ ] `[20m]` "Site Ayarları" single type (preloaderDuration, enableAnimations, maintenanceMode)

### 2.3 Media Library & Asset Management
- [ ] `[1h]` Strapi Media Library'ye initial assets yükleme (logolar, placeholder images)
- [ ] `[30m]` Image optimization ayarları (responsive formats, webp conversion)
- [ ] `[20m]` Video hosting stratejisi belirleme (YouTube embed vs self-hosted)

### 2.4 API Endpoints Testing
- [ ] `[1h]` Strapi REST API test (Postman/Insomnia collections oluşturma)
- [ ] `[30m]` Population & filtering test (nested relations, pagination)
- [ ] `[20m]` Rate limiting ve error handling test

---

## FAZ 3: Frontend API Integration

### 3.1 API Client & Data Fetching
- [ ] `[1.5h]` Strapi API client oluşturma (`lib/strapi.ts` - fetch helper functions)
- [ ] `[1h]` TypeScript types generation (Strapi response types -> `lib/types.ts`)
- [ ] `[45m]` Server-side data fetching fonksiyonları (Next.js 14 App Router patterns)
- [ ] `[30m]` Error handling ve fallback mekanizmaları
- [ ] `[30m]` Caching stratejisi (ISR - Incremental Static Regeneration, revalidate timings)

### 3.2 Form Handling & Email Service
- [ ] `[2h]` React Hook Form setup + Zod validation schemas (RobotikForm, ContactForm)
- [ ] `[1.5h]` 🔴 CRITICAL: Nodemailer SMTP configuration veya Formspree entegrasyonu
- [ ] `[1h]` `/api/form-submit` route handler (form data validation, email gönderimi)
- [ ] `[45m]` Form submission success/error states (toast notifications veya modal feedback)
- [ ] `[30m]` Spam protection (Honeypot field veya reCAPTCHA v3)
- [ ] `[30m]` Form data Strapi'ye kaydetme (optional - lead tracking için)

---

## FAZ 4: Design System & UI Components

### 4.1 Tailwind Custom Configuration
- [ ] `[1h]` 🔴 CRITICAL: Google Brand Colors + İştirak renkleri Tailwind config'e ekleme
  ```js
  colors: {
    google: { blue: '#4285F4', red: '#EA4335', yellow: '#FBBC05', green: '#34A853' },
    robotik: { primary: '#4285F4', accent: '#1A237E', bg: '#E3E5E8' },
    ai: { primary: '#4E85EB', secondary: '#D9666F', accent: '#8875D6' },
    enerji: { primary: '#F3C242', orange: '#F99F1B', emerald: '#00A786' }
  }
  ```
- [ ] `[45m]` Custom font family setup (Inter/SF Pro veya Roboto - Google Fonts)
- [ ] `[30m]` Custom breakpoints (mobile-first approach, tablet, desktop)
- [ ] `[30m]` Custom animations config (fade-in, slide-up, scale transitions)

### 4.2 Base UI Components (Atomic Design)
- [ ] `[1h]` Button component (variants: primary, secondary, ghost, sizes, loading state)
- [ ] `[1h]` Card component (hover effects, gradient overlays, responsive padding)
- [ ] `[45m]` Input component (text, tel, email - validation states, error messages)
- [ ] `[45m]` Modal component (backdrop, close button, focus trap, animation)
- [ ] `[30m]` Icon wrapper component (dynamic icon loading, size variants)
- [ ] `[30m]` Container/Section wrapper (max-width, responsive padding)

### 4.3 Layout Components
- [ ] `[1.5h]` Preloader component (HAVSAN + Grup animasyonu, progress indicator)
  - ⚠️ Depends on: Framer Motion kurulumu
- [ ] `[1h]` Footer component (iletişim bilgileri, sosyal medya linkleri, copyright)
- [ ] `[45m]` ModuleCard component (Robotik/AI/Enerji kartları - hover expand effect)
- [ ] `[30m]` SocialMediaBar component (WhatsApp, LinkedIn, Instagram icons)

---

## FAZ 5: Feature Development - Core Pages

### 5.1 Ana Sayfa (Landing Page)
- [ ] `[3h]` 🔴 CRITICAL: Split screen layout (3 kolon desktop, stacked mobile)
  - ⚠️ Depends on: ModuleCard component, Framer Motion setup
- [ ] `[2h]` Hover-to-expand animasyonu (Desktop - %33 -> %50+ genişleme)
- [ ] `[1.5h]` Mobile responsive behavior (Above the fold, 3 kart dikey stack)
- [ ] `[1h]` Background video/görsel integration (lazy loading, autoplay muted)
- [ ] `[1h]` Color saturation effect on hover (Google FX style - filter: saturate())
- [ ] `[45m]` Smooth scroll/transition to detail pages (Framer Motion page transitions)
- [ ] `[30m]` Preloader integration (ilk yüklemede göster, sessionStorage flag)

### 5.2 Modül 1: Robotik Kodlama Sayfası
- [ ] `[2h]` Video galeri komponenti (YouTube Shorts embed, 3-column grid)
  - ⚠️ Depends on: Strapi Robotik content type
- [ ] `[1.5h]` Hover-to-play video özelliği (intersection observer + autoplay)
- [ ] `[2h]` "Ücretsiz Deneme Dersi" formu (modal veya inline - ad, soyad, telefon, yaş)
  - ⚠️ Depends on: Form handling API route
- [ ] `[1.5h]` Google Maps embed (Elazığ Ataşehir lokasyonu - lazy load iframe)
- [ ] `[1h]` Responsive layout (video grid 3->2->1 column)
- [ ] `[45m]` Robotik brand colors integration (#4285F4, #1A237E, #E3E5E8)

### 5.3 Modül 2: Havsan AI & Yazılım Sayfası
- [ ] `[2.5h]` Carousel referanslar komponenti (infinite scroll logo band)
  - ⚠️ Depends on: Strapi Referanslar content type
- [ ] `[1.5h]` Logo hover colorization effect (grayscale -> full color transition)
- [ ] `[1h]` Eğitim takvimi section (PDF/Excel download links + custom icons)
- [ ] `[1.5h]` Google Workspace partner section (özel tasarım + badge)
- [ ] `[1h]` Hizmet kartları (ISO, KVKK, Yazılım Geliştirme - icon + description)
- [ ] `[45m]` Gradient backgrounds (AI brand colors - #4E85EB -> #D9666F)

### 5.4 Modül 3: Havsan Enerji Sayfası
- [ ] `[2h]` Hizmet kartları komponenti (GES Bakım, Drone Termal, Panel Temizliği)
  - ⚠️ Depends on: Strapi Enerji content type
- [ ] `[1.5h]` Teknik görsel overlay effects (Polisilikon sarısı + Zümrüt yeşili filters)
- [ ] `[1h]` Saha fotoğrafları galeri (lightbox/modal view)
- [ ] `[1h]` Teknik detaylar accordion/collapse component
- [ ] `[45m]` Enerji brand colors integration (#F3C242, #F99F1B, #00A786)

---

## FAZ 6: Performance Optimization

### 6.1 Image & Asset Optimization
- [ ] `[1.5h]` 🔴 CRITICAL: Next.js Image component implementation (tüm görseller)
- [ ] `[1h]` Lazy loading implementation (images, iframes - intersection observer)
- [ ] `[45m]` WebP/AVIF format conversion (Strapi media library + Next.js optimization)
- [ ] `[30m]` Image priority flags (above-the-fold images)
- [ ] `[30m]` Font optimization (font-display: swap, preload critical fonts)

### 6.2 Code Splitting & Bundle Optimization
- [ ] `[1h]` Dynamic imports (heavy components - video player, map, carousel)
- [ ] `[45m]` Bundle analyzer integration (next-bundle-analyzer)
- [ ] `[45m]` Tree shaking verification (unused code elimination)
- [ ] `[30m]` React Server Components usage (App Router best practices)

### 6.3 Performance Monitoring
- [ ] `[1h]` Lighthouse CI setup (LCP < 2.5s target)
- [ ] `[45m]` Web Vitals monitoring (useReportWebVitals hook)
- [ ] `[30m]` Performance budget definition (bundle size limits)
- [ ] `[1h]` Load testing (homepage, critical paths - Artillery/k6)

---

## FAZ 7: SEO & Accessibility

### 7.1 SEO Implementation
- [ ] `[1.5h]` Meta tags setup (next-seo - title, description, OG tags, Twitter cards)
- [ ] `[1h]` Structured data (JSON-LD - Organization, LocalBusiness schemas)
- [ ] `[45m]` Sitemap.xml generation (Next.js 14 sitemap.ts)
- [ ] `[45m]` Robots.txt configuration
- [ ] `[30m]` Canonical URLs setup
- [ ] `[30m]` Alt text için tüm görselleri kontrol

### 7.2 Accessibility (WCAG 2.1 AA)
- [ ] `[1h]` Semantic HTML audit (header, main, nav, section, article)
- [ ] `[1h]` Keyboard navigation test (focus states, tab order, modal traps)
- [ ] `[45m]` ARIA labels (buttons, links, form inputs, modal dialogs)
- [ ] `[45m]` Color contrast check (WCAG AA - 4.5:1 normal text, 3:1 large text)
- [ ] `[30m]` Screen reader testing (NVDA/JAWS - form labels, image alts)

---

## FAZ 8: Testing & QA

### 8.1 Unit Testing
- [ ] `[2h]` Jest + React Testing Library setup
- [ ] `[2h]` UI component tests (Button, Card, Input, Modal - props, events)
- [ ] `[1.5h]` Form validation tests (Zod schemas - success/error cases)
- [ ] `[1h]` API client tests (mocked Strapi responses)
- [ ] `[1h]` Utility function tests (utils.ts - edge cases)

### 8.2 Integration Testing
- [ ] `[2.5h]` Playwright veya Cypress setup
- [ ] `[2h]` E2E user flows (Ana sayfa -> Robotik -> Form submit)
- [ ] `[1.5h]` Form submission E2E (validation, success, error states)
- [ ] `[1h]` Cross-browser testing (Chrome, Safari, Firefox, Edge)

### 8.3 Manual QA
- [ ] `[3h]` Responsive testing (iPhone 13, iPad, Desktop 1920px, 4K)
- [ ] `[2h]` Animation smoothness testing (60fps target, no jank)
- [ ] `[1.5h]` Content review (typos, broken links, image quality)
- [ ] `[1h]` Form error handling scenarios (network errors, timeout)
- [ ] `[1h]` Video playback testing (YouTube embed, autoplay, mobile)

---

## FAZ 9: Deployment & DevOps

### 9.1 Hosting Setup
- [ ] `[1.5h]` 🔴 CRITICAL: Vercel deployment setup (Next.js frontend)
- [ ] `[1.5h]` 🔴 CRITICAL: Railway/DigitalOcean deployment (Strapi backend)
- [ ] `[1h]` Domain configuration (DNS, SSL certificates)
- [ ] `[45m]` Environment variables production setup (Vercel + Railway)
- [ ] `[30m]` Database backup strategy (automated PostgreSQL backups)

### 9.2 CI/CD Pipeline
- [ ] `[2h]` GitHub Actions workflow (lint, type-check, build, test on PR)
- [ ] `[1h]` Automated deployment (main branch -> production, dev -> staging)
- [ ] `[45m]` Preview deployments (Vercel PR previews)
- [ ] `[30m]` Build notifications (Slack/Discord webhooks)

### 9.3 Monitoring & Analytics
- [ ] `[1h]` Google Analytics 4 setup (pageviews, events, conversions)
- [ ] `[45m]` Vercel Analytics integration (Web Vitals dashboard)
- [ ] `[45m]` Error tracking (Sentry veya LogRocket integration)
- [ ] `[30m]` Uptime monitoring (UptimeRobot veya Pingdom)
- [ ] `[30m]` Performance monitoring dashboard (custom Web Vitals logging)

---

## FAZ 10: Post-Launch & Iteration

### 10.1 Launch Checklist
- [ ] `[1h]` Final content review (proofreading, image optimization)
- [ ] `[1h]` Security audit (HTTPS, CORS, API tokens, sensitive data)
- [ ] `[45m]` Performance final check (Lighthouse score > 90)
- [ ] `[30m]` Mobile UX final test (iOS Safari, Android Chrome)
- [ ] `[30m]` Analytics tracking verification (test events, conversions)

### 10.2 User Feedback & Analytics Review
- [ ] `[2h]` Week 1: Analytics review (bounce rate, popular pages, conversion funnel)
- [ ] `[1.5h]` Week 2: Heatmap analysis (Hotjar/Microsoft Clarity - user behavior)
- [ ] `[1h]` Form conversion optimization (drop-off points, field simplification)
- [ ] `[1h]` Performance monitoring (real user metrics - RUM)

### 10.3 Bug Fixes & Iterations
- [ ] `[TBD]` Bug triaging (priority: P0-Critical, P1-High, P2-Medium, P3-Low)
- [ ] `[TBD]` User-reported issues resolution
- [ ] `[TBD]` A/B testing (CTA buttons, form placement, color schemes)
- [ ] `[TBD]` Content updates (Strapi CMS - new references, videos, services)

### 10.4 Future Enhancements (Backlog)
- [ ] `[TBD]` Multi-language support (TR/EN - i18n integration)
- [ ] `[TBD]` Blog/News section (Strapi blog content type)
- [ ] `[TBD]` Admin dashboard (analytics, form submissions, content management)
- [ ] `[TBD]` WhatsApp Business API integration (direct chat button)
- [ ] `[TBD]` Interactive 3D animations (Three.js - hero section)

---

## Toplam Tahmini Süre
- **FAZ 1:** ~6 saat
- **FAZ 2:** ~9 saat
- **FAZ 3:** ~8 saat
- **FAZ 4:** ~10 saat
- **FAZ 5:** ~25 saat
- **FAZ 6:** ~7 saat
- **FAZ 7:** ~8 saat
- **FAZ 8:** ~15 saat
- **FAZ 9:** ~10 saat
- **FAZ 10:** ~8+ saat (iteratif)

**TOPLAM:** ~106+ saat (yaklaşık 3-4 hafta solo development)

---

## Notlar
- 🔴 CRITICAL: Bu görevler projenin omurgasını oluşturur, öncelikli tamamlanmalı
- ⚠️ Bağımlılıklar: Belirtilen görevler tamamlanmadan başlanmamalı
- Test coverage hedefi: %80+ (critical paths için %100)
- Code review: Her PR için en az 1 review (pair programming önerilir)
- Daily standups: Progress tracking ve blocker çözümü için
