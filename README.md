# Havsan Grup Web Projesi

**Modern, Headerless Kurumsal Web Platformu**

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Language:** TypeScript
- **CMS:** Strapi (Headless)
- **Database:** PostgreSQL
- **Hosting:** Vercel (Frontend) + Railway (Backend)

## 📁 Folder Structure

```
├── app/
│   ├── (root)/
│   │   └── page.tsx          # Landing page
│   ├── robotik/
│   │   └── page.tsx          # Robotik kodlama sayfası
│   ├── ai/
│   │   └── page.tsx          # AI & Yazılım sayfası
│   ├── enerji/
│   │   └── page.tsx          # Enerji sayfası
│   ├── api/
│   │   └── form-submit/
│   │       └── route.ts      # Form submission endpoint
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # Base UI components
│   ├── sections/             # Page sections
│   ├── forms/                # Form components
│   └── animations/           # Animation components
├── lib/
│   ├── utils.ts              # Utility functions
│   ├── constants.ts          # Constants & configs
│   ├── types.ts              # TypeScript types
│   └── strapi.ts             # Strapi API client
├── public/
│   ├── images/
│   ├── videos/
│   └── documents/
└── prd/                      # Project documentation
```

## 🎨 Design System

### Renk Paleti

**Google Brand Colors:**
- Blue: `#4285F4`
- Red: `#EA4335`
- Yellow: `#FBBC05`
- Green: `#34A853`

**İştirak Renkleri:**

**Robotik:**
- Primary: `#4285F4`
- Accent: `#1A237E`
- Background: `#E3E5E8`
- CTA: `#FBBC05`

**AI & Yazılım:**
- Primary: `#4E85EB`
- Secondary: `#D9666F`
- Accent: `#8875D6`

**Enerji:**
- Primary: `#F3C242`
- Orange: `#F99F1B`
- Emerald: `#00A786`
- Cerulean: `#009CC9`

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm veya yarn
- Git

### Installation

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Build for production
npm run build

# Production server başlat
npm start
```

### Environment Variables

`.env.local` dosyası oluştur:

```env
# Strapi CMS
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here

# Email Service
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
SMTP_FROM=noreply@havsangrup.com

# Next.js
NEXT_PUBLIC_SITE_URL=https://havsangrup.com
```

## 📝 Development Guidelines

### Code Style

- **TypeScript:** Strict mode enabled
- **ESLint:** Next.js recommended config
- **Prettier:** Auto-formatting on save
- **Commits:** Conventional commits format

### Naming Conventions

- **Components:** PascalCase (`Button.tsx`)
- **Utils:** camelCase (`formatDate.ts`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces:** PascalCase with `I` prefix for interfaces

### Component Structure

```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg font-semibold transition-colors',
        {
          'bg-google-blue text-white hover:bg-google-blue/90': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

## 🧪 Testing

```bash
# Unit tests (Jest + React Testing Library)
npm test                    # Watch mode
npm run test:ci            # CI mode

# E2E tests (Playwright)
npm run test:e2e           # Headless mode
npm run test:e2e:ui        # UI mode
npm run test:e2e:headed    # Headed mode

# Linting & Type checking
npm run lint               # ESLint
npm run type-check        # TypeScript
npm run format            # Prettier

# Bundle analysis
npm run analyze           # Analyze bundle size
```

### Test Coverage
- UI Components: Button, Input, Card, Modal
- Form Validation: Zod schemas
- E2E Flows: Navigation, Forms, User journeys
- Utilities: cn(), constants

## 📦 Deployment

### Vercel (Frontend)

```bash
# Vercel CLI ile deploy
vercel --prod
```

### Railway (Strapi Backend)

1. Railway project oluştur
2. PostgreSQL database ekle
3. Strapi repository'i bağla
4. Environment variables ayarla
5. Deploy

## 📄 License

Private - Havsan Grup © 2025

## 👥 Team

- **Product Manager:** [TBD]
- **Tech Lead:** [TBD]
- **Designer:** [TBD]
- **Developers:** [TBD]

## 📚 Documentation

- [PRD (Product Requirements Document)](./prd/PRD.md)
- [TASKS (Development Tasks)](./prd/TASKS.md)
- [Müşteri İsterleri](./prd/Müşteri%20İsterleri.md)
- [DEPLOYMENT Guide](./DEPLOYMENT.md)
- [PERFORMANCE Optimization](./PERFORMANCE.md)
- [ACCESSIBILITY Checklist](./ACCESSIBILITY.md)

## 🔗 Links

- **Production:** [TBD]
- **Staging:** [TBD]
- **Strapi Admin:** [TBD]
- **Figma:** [TBD]
