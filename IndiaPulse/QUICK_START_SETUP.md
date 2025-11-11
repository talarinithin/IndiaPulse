# 🚀 IndiaPulse - Quick Start Guide

**Get running in 5 minutes!**

---

## 📦 What You Need

1. **Node.js** - Download from nodejs.org
2. **MongoDB Atlas** - Free account at mongodb.com
3. **NewsAPI Key** - Free from newsapi.org

---

## ⚡ Setup (Copy-Paste Commands)

### Step 1: Backend Setup
```powershell
cd backend
npm install
```

### Step 2: Create backend/.env
```
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/indiapulse
JWT_SECRET=your_secret_key_here
NEWS_API_KEY=your_newsapi_key_here
```

### Step 3: Frontend Setup
```powershell
cd ../frontend
npm install
```

### Step 4: Create frontend/.env
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## ▶️ Run the App

**Terminal 1 - Backend (port 5000):**
```powershell
cd backend
node server.js
```

**Terminal 2 - Frontend (port 3000):**
```powershell
cd frontend
npm start
```

**Browser:** Open http://localhost:3000

---

## 🎯 First Steps

1. **Register** - Create new account
2. **Login** - Use your credentials
3. **Select State** - Click "Karnataka", "Mumbai", etc.
4. **Pick Category** - Click Sports, Tech, Crime, etc.
5. **Read News** - Scroll and enjoy!

---

## ✅ Verify Setup

- ✅ Backend running? Check terminal shows "Server running on port 5000"
- ✅ Frontend running? Browser opens to http://localhost:3000
- ✅ Can register? Create test account
- ✅ Can see news? Login and select a state + category

---

## 📍 10 Available States

**South India:**
- Karnataka
- Tamil Nadu
- Kerala
- Telangana
- Andhra Pradesh
- Puducherry

**Other Major:**
- Maharashtra
- Delhi
- Gujarat
- Punjab

---

## 📂 5 Categories Per State

- 📰 Headlines
- ⚽ Sports
- 💻 Technology
- 🚨 Crime
- 💼 Business

---

## 🆘 Quick Troubleshooting

**Backend won't start:**
- Is MongoDB connection string correct?
- Is NewsAPI key valid?
- Is port 5000 free?

**Frontend shows error:**
- Is backend running?
- Clear browser cache
- Run `npm install` again

**No news showing:**
- Try different state/category
- Check browser console for errors
- Verify API keys are correct

---

## 📧 Need Help?

**Contact:** talarinithin0@gmail.com

---

**Enjoy IndiaPulse!** 📰✨
