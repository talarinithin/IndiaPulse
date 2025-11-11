# 🔗 IndiaPulse API Documentation

**Backend runs on: http://localhost:5000**  
**Base URL: http://localhost:5000/api**

---

## 🔐 Authentication Endpoints

### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## 📰 News Endpoints

### Get Global Headlines
```
GET /api/news/headlines
Authorization: Bearer your_token

Response (200):
{
  "success": true,
  "articles": [
    {
      "source": { "name": "Source Name" },
      "author": "Author Name",
      "title": "News Title",
      "description": "News description",
      "url": "https://...",
      "urlToImage": "https://...",
      "publishedAt": "2025-01-15T10:30:00Z",
      "content": "Full content..."
    },
    ... (more articles)
  ]
}
```

### Get Global Sports News
```
GET /api/news/sports
Authorization: Bearer your_token

Returns: Sports news (cricket, football, IPL, etc.)
```

### Get Global Tech News
```
GET /api/news/tech
Authorization: Bearer your_token

Returns: Technology news (startups, AI, software, etc.)
```

### Get Global Crime News
```
GET /api/news/crime
Authorization: Bearer your_token

Returns: Crime news (police, enforcement, etc.)
```

### Get Global Business News
```
GET /api/news/business
Authorization: Bearer your_token

Returns: Business news (markets, companies, economy, etc.)
```

### Get State Headlines
```
GET /api/news/state/:state
Authorization: Bearer your_token

Example: /api/news/state/Karnataka

Response: Headlines from Karnataka

Available States:
- Karnataka
- TamilNadu
- Kerala
- Telangana
- AndhraPradesh
- Puducherry
- Maharashtra
- Delhi
- Gujarat
- Punjab
```

### Get State + Category News
```
GET /api/news/state/:state/:category
Authorization: Bearer your_token

Example: /api/news/state/Karnataka/sports

Available Categories:
- headlines
- sports
- tech
- crime
- business

Response: News from Karnataka in Sports category
```

---

## 🔄 Sample Request (Using Fetch API)

```javascript
// Register
const registerResponse = await fetch('http://localhost:5000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com',
    password: 'pass123'
  })
});

// Get Token
const loginResponse = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'pass123'
  })
});
const { token } = await loginResponse.json();

// Fetch News
const newsResponse = await fetch('http://localhost:5000/api/news/state/Karnataka/sports', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
const newsData = await newsResponse.json();
```

---

## 🔄 Sample Request (Using Axios)

```javascript
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

// Register
const registerUser = async (name, email, password) => {
  return await axios.post(`${API_BASE}/auth/register`, {
    name, email, password
  });
};

// Login
const loginUser = async (email, password) => {
  return await axios.post(`${API_BASE}/auth/login`, {
    email, password
  });
};

// Get News with Token
const getNews = async (endpoint, token) => {
  return await axios.get(`${API_BASE}/${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

// Usage
const newsData = await getNews('news/state/Karnataka/sports', token);
```

---

## 📊 Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad request (missing fields) |
| 401 | Unauthorized (invalid token) |
| 404 | Not found |
| 500 | Server error |

---

## 🛡️ Error Responses

```json
{
  "success": false,
  "message": "Error description"
}
```

---

## 📌 Important Notes

1. **Token Required** - All news endpoints require `Authorization` header
2. **Token Format** - Use `Bearer token_here` (with space)
3. **Token Expiry** - Tokens expire based on JWT_SECRET settings
4. **Case Sensitive** - State names must match exactly
5. **Rate Limiting** - NewsAPI has rate limits (usually 100 requests/day free)

---

## 🧪 Test with Postman

1. Open Postman
2. Create new POST request to `http://localhost:5000/api/auth/login`
3. Add header: `Content-Type: application/json`
4. Body:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
5. Copy the `token` from response
6. Create new GET request to `http://localhost:5000/api/news/state/Karnataka/sports`
7. Add header: `Authorization: Bearer your_token_here`
8. Click Send!

---

**Made with ❤️ by Talari Nithin**  
📧 talarinithin0@gmail.com
