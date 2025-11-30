## Performance Optimization

### Bundle Size Optimization
```bash
# Analyze bundle size
npm run analyze

# Check type errors
npm run type-check
```

### Image Optimization
- Use `OptimizedImage` component instead of `<img>`
- Supports AVIF and WebP formats with automatic fallback
- Lazy loading with intersection observer
- Blur placeholder for better UX

```tsx
import { OptimizedImage } from '@/components/ui';

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority={true} // For above-the-fold images
/>
```

### Video Optimization
- Use `LazyVideo` component for video content
- Intersection observer for lazy loading
- Manual play/pause controls
- Poster images for preview

```tsx
import { LazyVideo } from '@/components/ui';

<LazyVideo
  src="/videos/demo.mp4"
  poster="/images/poster.jpg"
  title="Demo Video"
  autoPlay={false}
  loop={true}
/>
```

### Animation Performance
- Use `FadeInWhenVisible` for scroll-triggered animations
- Intersection observer prevents unnecessary renders
- Hardware-accelerated transforms

```tsx
import { FadeInWhenVisible } from '@/components/animations';

<FadeInWhenVisible
  direction="up"
  delay={0.2}
  duration={0.6}
>
  <YourComponent />
</FadeInWhenVisible>
```

### Web Vitals Monitoring
- Automatic tracking of Core Web Vitals (CLS, FID, FCP, LCP, TTFB)
- Console logging in development
- Ready for analytics integration

### Code Splitting
- Automatic route-based code splitting via Next.js App Router
- Dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // If component is client-only
});
```

### Next.js Configuration
- Gzip compression enabled
- Optimized package imports for `lucide-react` and `framer-motion`
- Image optimization with AVIF/WebP
- Security headers via middleware
- Bundle analyzer integration

### Performance Checklist
- [ ] Use `priority` prop for above-the-fold images
- [ ] Lazy load below-the-fold images
- [ ] Use `loading="lazy"` for videos
- [ ] Implement dynamic imports for heavy components
- [ ] Minimize client-side JavaScript
- [ ] Use CSS animations instead of JS where possible
- [ ] Optimize font loading (FOIT/FOUT)
- [ ] Enable HTTP/2 server push
- [ ] Use CDN for static assets
- [ ] Implement service worker for offline support

### SEO Optimization
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- OpenGraph images: Auto-generated per route
- JSON-LD structured data: Organization schema
- Meta tags: Title, description, keywords
- Canonical URLs: Configured in metadata

### Security Headers
Applied via middleware:
- Strict-Transport-Security (HSTS)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Deployment Considerations
1. **Vercel (Recommended for Frontend)**
   - Automatic HTTPS
   - Global CDN
   - Edge functions
   - Analytics built-in

2. **Railway/DigitalOcean (Backend/Strapi)**
   - PostgreSQL database
   - Redis cache (optional)
   - Media library (S3/Cloudinary)

3. **Environment Variables**
   - NEXT_PUBLIC_SITE_URL
   - NEXT_PUBLIC_STRAPI_URL
   - SMTP credentials
   - Analytics keys
