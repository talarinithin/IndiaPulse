import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsAPI } from '../services/api';
import NewsCard from '../components/NewsCard';
import './StatePage.css';

const StatePage = () => {
  const { stateName } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('headlines');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'headlines', name: 'Headlines', icon: '📰' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'crime', name: 'Crime', icon: '🚨' },
    { id: 'business', name: 'Business', icon: '💼' }
  ];

  const getCategoryLabel = () => {
    const category = categories.find(c => c.id === selectedCategory);
    return category ? category.name : 'Headlines';
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory, stateName]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      let response;
      if (selectedCategory === 'headlines') {
        response = await newsAPI.getStateNews(stateName);
      } else {
        response = await newsAPI.getStateCategoryNews(stateName, selectedCategory);
      }
      setNews(response.data.articles?.slice(0, 12) || []);
    } catch (error) {
      console.log('Error fetching news:', error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="state-page">
      <div className="state-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <h1>📍 {stateName}</h1>
        <p>Latest news from {stateName}</p>
      </div>

      <div className="container">
        {/* Category Selection */}
        <div className="categories-section">
          <h2>Select Category</h2>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="news-section">
          <h2>{getCategoryLabel()} News - {stateName}</h2>
          {loading ? (
            <div className="loading">Loading {getCategoryLabel().toLowerCase()} news...</div>
          ) : news.length > 0 ? (
            <div className="news-grid">
              {news.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div className="no-news">No {getCategoryLabel().toLowerCase()} news available for {stateName}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatePage;
