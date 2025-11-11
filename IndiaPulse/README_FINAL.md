# 📰 IndiaPulse News - Full Stack MERN Application

**Built with ❤️ by Talari Nithin**  
📧 **Contact:** talarinithin0@gmail.com

---

## 🌟 Overview

IndiaPulse is a **production-ready MERN stack** news application featuring **10 Indian states** with **5 news categories per state**. Get instant, state-specific news with beautiful responsive design.

---

## ✨ Features

### 📍 **10 States Available**
- **South India:** Karnataka, Tamil Nadu, Kerala, Telangana, Andhra Pradesh, Puducherry
- **Major States:** Maharashtra, Delhi, Gujarat, Punjab

### 📂 **5 News Categories**
- 📰 **Headlines** - Latest news
- ⚽ **Sports** - Cricket, football, IPL
- 💻 **Technology** - Startups, software, innovation
- 🚨 **Crime** - Police, enforcement
- 💼 **Business** - Markets, companies, economy

### ⚡ **Core Features**
- ✅ Secure JWT authentication
- ✅ Instant category filtering
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Real-time news from NewsAPI
- ✅ Beautiful purple-blue gradient UI
- ✅ Smooth animations and transitions

---

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB Atlas account
- NewsAPI key (free at newsapi.org)

### Installation

1. **Backend Setup**
```bash
cd backend
npm install
```

Create `backend/.env`:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEWS_API_KEY=your_newsapi_key
```

2. **Frontend Setup**
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Running

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

**Open:** http://localhost:3000

---

## 📖 How to Use

1. **Register** - Create account with email/password
2. **Login** - Sign in with your credentials
3. **Browse States** - See 10 state cards on home
4. **Select State** - Click any state card
5. **Choose Category** - Click category button (news updates instantly!)
6. **Read Articles** - View state-specific news

---

## 🏗️ Project Structure

```
IndiaPulse/
├── backend/
│   ├── server.js               # Express server
│   ├── package.json
│   ├── .env                    # Environment variables
│   ├── controllers/
│   │   ├── authController.js  # Login/Register logic
│   │   └── newsController.js  # News fetching logic
│   ├── models/
│   │   └── User.js             # User schema
│   ├── routes/
│   │   ├── auth.js             # Auth endpoints
│   │   └── news.js             # News endpoints
│   └── middleware/
│       └── auth.js             # JWT verification
│
├── frontend/
│   ├── public/
│   │   └── index.html          # Main HTML
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   ├── Footer.jsx      # Footer with contact
│   │   │   ├── NewsCard.jsx    # News article card
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Home with states
│   │   │   ├── StatePage.jsx   # State + categories
│   │   │   ├── Login.jsx       # Login page
│   │   │   └── Register.jsx    # Register page
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Auth state
│   │   ├── services/
│   │   │   └── api.js          # Axios setup
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
└── README_FINAL.md
```

---

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### News (All require JWT token)
- `GET /api/news/headlines` - Global headlines
- `GET /api/news/sports` - Global sports news
- `GET /api/news/tech` - Global tech news
- `GET /api/news/crime` - Global crime news
- `GET /api/news/business` - Global business news
- `GET /api/news/state/:state` - State headlines
- `GET /api/news/state/:state/:category` - State + category

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime
- **Express** - Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Axios** - HTTP client
- **NewsAPI** - News data

### Frontend
- **React 18** - UI framework
- **React Router v6** - Routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS3** - Styling (Flexbox, Grid)
- **Poppins Font** - Typography

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Primary Color | #667eea (Purple) |
| Secondary Color | #764ba2 (Blue) |
| Accent Color | #ff9800 (Orange) |
| Background | Dark gradient |
| Typography | Poppins font |
| Animations | 0.3s ease-in-out |

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Desktop | 1200px+ | 5 cols |
| Tablet | 768px-1024px | 3 cols |
| Mobile | 375px-768px | 2 cols |

---

## 🔒 Security

- ✅ JWT token-based authentication
- ✅ Password hashing with bcryptjs
- ✅ Protected frontend routes
- ✅ Protected backend routes
- ✅ CORS enabled
- ✅ Environment variables for secrets

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check MongoDB, NewsAPI key, port 5000 free |
| Frontend won't load | Clear cache, `npm install`, check backend running |
| News not showing | Verify API keys, check backend logs |
| Login fails | Ensure MongoDB connected, user exists |

---

## 📊 Performance

| Action | Time |
|--------|------|
| Initial load | 5-10 sec |
| State page load | 1-2 sec |
| Category switch | 1-2 sec |
| Search query | 1-2 sec |

---

## 🌐 Deployment

Deploy to Heroku, Vercel, or any Node.js hosting:

1. Set environment variables
2. Connect MongoDB Atlas
3. Deploy backend to Heroku
4. Deploy frontend to Vercel
5. Update API URL in frontend

---

## 📧 Contact & Support

**Founder:** Talari Nithin  
**Email:** talarinithin0@gmail.com  
**Created:** 2025

---

## 📄 License

Open source - MIT License

---

Made with ❤️ by **Talari Nithin**
