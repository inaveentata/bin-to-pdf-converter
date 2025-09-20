# Deployment Guide

This project can be deployed to various platforms. Here are the recommended options:

## Option 1: Vercel (Recommended - Free)

### Steps:
1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository: `inaveentata/bin-to-pdf-converter`

2. **Configure Build Settings**:
   - Framework Preset: `Other`
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/build`
   - Install Command: `cd frontend && npm install && cd ../backend && pip install -r requirements.txt`

3. **Deploy**:
   - Click "Deploy"
   - Your app will be available at `https://your-project.vercel.app`

### Features:
- ✅ Free hosting
- ✅ Automatic deployments on git push
- ✅ Both frontend and backend supported
- ✅ Custom domain support

## Option 2: Railway (Alternative)

### Steps:
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub account
3. Deploy from GitHub repository
4. Railway will automatically detect and deploy both frontend and backend

## Option 3: Render (Alternative)

### Steps:
1. Go to [render.com](https://render.com)
2. Connect your GitHub account
3. Create a new Web Service
4. Connect your repository
5. Configure build settings:
   - Build Command: `cd frontend && npm run build`
   - Start Command: `cd backend && python app.py`

## Option 4: GitHub Codespaces (Development)

### Steps:
1. Go to your repository on GitHub
2. Click "Code" → "Codespaces" → "Create codespace"
3. Wait for the environment to load
4. Run both services:
   ```bash
   # Terminal 1 - Backend
   cd backend && source venv/bin/activate && python app.py
   
   # Terminal 2 - Frontend
   cd frontend && npm start
   ```

## Environment Variables

If you need to configure environment variables:
- **Vercel**: Project Settings → Environment Variables
- **Railway**: Project → Variables
- **Render**: Environment → Environment Variables

## Notes

- The backend will automatically run when deployed to these platforms
- File uploads are temporary and will be cleaned up automatically
- All platforms support the `/api/convert` endpoint for the backend
