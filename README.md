# Sparkathon'26 - MERN Stack Event Website

This project is a modern, responsive event website built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure
- `/client`: React frontend (Vite)
- `/server`: Node.js Express backend (MongoDB)

## Prerequisites
- Node.js installed
- MongoDB installed and running locally (or provide a remote URI in `.env`)

## Setup Instructions

### 1. Server Setup
```bash
cd server
npm install
```
- Edit `server/.env` to configure your `MONGODB_URI` and `PORT`.

### 2. Client Setup
```bash
cd client
npm install
```

### 3. Running the Application
Open two terminals:

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

## Features
- ✨ **Modern UI**: Futuristic dark theme with glassmorphism and gradient backgrounds.
- ⏰ **Countdown Timer**: Real-time countdown to 12th Feb 2026.
- 📱 **Fully Responsive**: Optimized for all screen sizes.
- 🚀 **Smooth Animations**: Intersection Observer for scroll animations and typing effects.
- 📄 **MERN Integration**: Ready-to-use backend for registration storage.

## Contact Images
Place profile photos in `client/public/images/`:
- `vanitha.jpg`
- `riknesh.jpg`
- `pushparaj.jpg`

If an image is missing, a default avatar will be generated automatically.
