# Sparkathon'26 - Event Website

A modern, responsive event website built with **React + Vite** for the Sparkathon'26 hackathon event.

## 🚀 Features

- ✨ **Modern UI**: Futuristic dark theme with glassmorphism and gradient backgrounds
- ⏰ **Countdown Timer**: Real-time countdown to 12th Feb 2026
- 📱 **Fully Responsive**: Optimized for all screen sizes
- 🚀 **Smooth Animations**: Intersection Observer for scroll animations and typing effects
- 📝 **Google Forms Integration**: Direct registration via Google Forms

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure settings
6. Click "Deploy"

### Option 3: Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

## 📁 Project Structure

```
CSI Events/
├── public/
│   ├── images/          # Contact person images
│   │   ├── vanitha.jpg
│   │   ├── riknesh.jpg
│   │   └── pushparaj.jpg
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   ├── main.jsx         # Application entry point
│   └── assets/
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
└── README.md
```

## 🎨 Customization

### Update Event Details
Edit `src/App.jsx`:
- Event date: Line 26 (`new Date('2026-02-12T00:00:00')`)
- Registration link: Line 11
- Contact information: Lines 230-232

### Update Styling
- Global styles: `src/index.css`
- Component styles: `src/App.css`

### Add Contact Images
Place profile photos in `public/images/`:
- `vanitha.jpg`
- `riknesh.jpg`
- `pushparaj.jpg`

If an image is missing, a default avatar will be generated automatically.

## 📞 Contact

**IFET COLLEGE OF ENGINEERING - CSI Computer Society of India**

- Mrs. Vanitha (Staff Incharge) - 9952531421
- Mr. Riknesh (Student Representative) - 9488936779
- Mr. Pushparaj (Student Representative) - 7695965434

## 📄 License

© 2026 Sparkathon. All rights reserved.
