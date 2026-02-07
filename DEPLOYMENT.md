# 🚀 Vercel Deployment Guide for Sparkathon'26

## Quick Deploy Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Confirm project settings
   - Your site will be live in seconds!

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Restructured for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site is live 🎉

### Method 3: Drag & Drop

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to https://vercel.com/new
3. Drag and drop the `dist` folder
4. Your site is deployed!

## 🔧 Project Settings (Auto-configured)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## 🌐 Custom Domain (Optional)

1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration steps

## 📊 Environment Variables

This project doesn't require any environment variables for basic deployment.

## ✅ Verification

After deployment:
- Check the countdown timer works
- Test navigation links
- Verify registration button opens Google Form
- Test on mobile devices

## 🔄 Automatic Deployments

Every push to your main branch will automatically deploy to Vercel!

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/

---

**Your Sparkathon'26 website is ready to go live! 🚀**
