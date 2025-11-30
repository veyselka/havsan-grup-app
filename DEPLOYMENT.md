# Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- GitHub repository connected
- Environment variables configured

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://havsangrup.com
NEXT_PUBLIC_STRAPI_URL=https://api.havsangrup.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_TO_EMAIL=info@havsangrup.com
```

### Deployment Steps

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login
   vercel login
   
   # Link project
   vercel link
   ```

2. **Configure Project**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   vercel env add NEXT_PUBLIC_STRAPI_URL
   vercel env add SMTP_HOST
   vercel env add SMTP_PORT
   vercel env add SMTP_USER
   vercel env add SMTP_PASS
   vercel env add SMTP_TO_EMAIL
   ```

4. **Deploy**
   ```bash
   # Preview deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

### Custom Domain
1. Go to Vercel Project Settings → Domains
2. Add `havsangrup.com` and `www.havsangrup.com`
3. Update DNS records:
   ```
   A     @       76.76.21.21
   CNAME www     cname.vercel-dns.com
   ```

### Performance Settings
- Enable Edge Functions
- Enable Image Optimization
- Enable Incremental Static Regeneration (ISR)
- Configure caching headers

---

## Backend Deployment (Railway/DigitalOcean)

### Option 1: Railway (Recommended)

#### Prerequisites
- Railway account
- PostgreSQL database

#### Deployment Steps

1. **Create New Project**
   ```bash
   # Install Railway CLI
   npm i -g @railway/cli
   
   # Login
   railway login
   
   # Initialize
   railway init
   ```

2. **Add PostgreSQL**
   - Go to Railway dashboard
   - Add PostgreSQL plugin
   - Note connection string

3. **Deploy Strapi**
   ```bash
   # Clone Strapi starter
   npx create-strapi-app@latest strapi-backend --quickstart
   
   # Configure database (config/database.js)
   # Use Railway PostgreSQL connection string
   
   # Deploy
   railway up
   ```

4. **Environment Variables**
   ```bash
   DATABASE_URL=postgresql://user:pass@host:5432/db
   NODE_ENV=production
   APP_KEYS=key1,key2,key3,key4
   API_TOKEN_SALT=random-string
   ADMIN_JWT_SECRET=random-string
   JWT_SECRET=random-string
   ```

#### Custom Domain
```bash
railway domain
# Add custom domain: api.havsangrup.com
```

### Option 2: DigitalOcean App Platform

1. **Create App**
   - Connect GitHub repository
   - Select Strapi branch
   - Configure build settings

2. **Add Database**
   - Create PostgreSQL cluster
   - Note connection details
   - Update environment variables

3. **Configure Resources**
   - Basic: 1 vCPU, 512MB RAM ($5/mo)
   - Professional: 1 vCPU, 1GB RAM ($12/mo)

4. **Deploy**
   - Automatic deploys on git push
   - Custom domain: api.havsangrup.com

---

## Database Setup

### PostgreSQL Configuration

```sql
-- Create database
CREATE DATABASE havsan_db;

-- Create user
CREATE USER havsan_user WITH PASSWORD 'secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE havsan_db TO havsan_user;
```

### Backup Strategy

```bash
# Automated daily backups
# Railway: Automatic backups included
# DigitalOcean: Enable daily backups in cluster settings

# Manual backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql

# Restore
psql $DATABASE_URL < backup_20250129.sql
```

---

## CDN & Media Storage

### Option 1: Cloudinary (Recommended)

```bash
# Install Strapi Cloudinary plugin
npm install @strapi/provider-upload-cloudinary

# Configure (config/plugins.js)
module.exports = {
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
    },
  },
};
```

### Option 2: AWS S3

```bash
# Install S3 plugin
npm install @strapi/provider-upload-aws-s3

# Configure
# Similar to Cloudinary with AWS credentials
```

---

## SSL/HTTPS

### Vercel
- Automatic SSL with Let's Encrypt
- No configuration needed

### Railway
- Automatic SSL for custom domains
- Enable HTTPS redirect

### DigitalOcean
- Automatic SSL with Let's Encrypt
- Configure in App settings

---

## Monitoring

### Vercel Analytics
```javascript
// Already integrated via Next.js
// View in Vercel dashboard
```

### Sentry Error Tracking

```bash
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
```

### Uptime Monitoring
- UptimeRobot: Free tier (5 min intervals)
- Pingdom: Comprehensive monitoring
- Railway/Vercel: Built-in metrics

---

## Post-Deployment Checklist

### Frontend
- [ ] Verify all pages load correctly
- [ ] Test forms submission
- [ ] Check SEO meta tags
- [ ] Verify sitemap.xml accessible
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (>90 score)
- [ ] Verify SSL certificate
- [ ] Test email delivery

### Backend
- [ ] Strapi admin panel accessible
- [ ] Database connection working
- [ ] Media uploads functional
- [ ] API endpoints responding
- [ ] CORS configured correctly
- [ ] Admin user created
- [ ] API tokens generated

### DNS
- [ ] Domain propagated (24-48 hours)
- [ ] WWW redirect working
- [ ] SSL certificate valid
- [ ] Email forwarding (if applicable)

### Performance
- [ ] CDN enabled
- [ ] Image optimization working
- [ ] Caching headers configured
- [ ] Gzip/Brotli compression enabled

### Security
- [ ] Environment variables secured
- [ ] API tokens rotated
- [ ] Database credentials strong
- [ ] HTTPS enforced
- [ ] Security headers configured

---

## Rollback Procedure

### Vercel
```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote <deployment-url>
```

### Railway
```bash
# Rollback via dashboard
# Or redeploy previous commit
railway up --service <service-id>
```

---

## Troubleshooting

### Build Failures
```bash
# Check build logs
vercel logs

# Local build test
npm run build
```

### Database Connection Issues
```bash
# Test connection
psql $DATABASE_URL

# Check firewall rules
# Verify IP whitelist
```

### Domain Not Resolving
```bash
# Check DNS propagation
nslookup havsangrup.com

# Verify DNS records
dig havsangrup.com
```
