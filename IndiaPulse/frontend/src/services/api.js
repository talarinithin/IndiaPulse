import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data)
};

export const newsAPI = {
  getHeadlines: () => api.get('/news/headlines'),
  getSports: () => api.get('/news/sports'),
  getTech: () => api.get('/news/tech'),
  getCrime: () => api.get('/news/crime'),
  getBusiness: () => api.get('/news/business'),
  getStateNews: (state) => api.get(`/news/state/${state}`),
  getStateCategoryNews: (state, category) => api.get(`/news/state/${state}/${category}`)
};

export default api;
