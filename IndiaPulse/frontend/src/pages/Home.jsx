import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsAPI } from '../services/api';
import NewsCard from '../components/NewsCard';
import './Home.css';

const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const states = [
    // South India
    'Karnataka',
    'Tamil Nadu',
    'Kerala',
    'Telangana',
    'Andhra Pradesh',
    'Puducherry',
    // Other Major States
    'Maharashtra',
    'Delhi',
    'Gujarat',
    'Punjab'
  ];

  useEffect(() => {
    fetchHeadlines();
  }, []);

  const fetchHeadlines = async () => {
    try {
      const response = await newsAPI.getHeadlines();
      setHeadlines(response.data.articles?.slice(0, 6) || []);
    } catch (error) {
      console.log('Error fetching headlines:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>📰 IndiaPulse News</h1>
          <p>Your Daily Source for India's Top Stories</p>
        </div>
      </div>

      {/* Top News Section */}
      <div className="container">
        <section className="news-section">
          <h2>📢 Top News Across India</h2>
          {loading ? (
            <div className="loading">Loading news...</div>
          ) : headlines.length > 0 ? (
            <div className="news-grid">
              {headlines.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div className="no-news">No news available</div>
          )}
        </section>

        {/* States Section */}
        <section className="states-section">
          <h2>🗺️ Select Your State</h2>
          <p className="section-subtitle">Choose a state to view news and filter by category</p>

          <div className="states-grid">
            {states.map((state) => (
              <Link to={`/state/${state}`} key={state} className="state-card">
                <div className="state-icon">📍</div>
                <h3>{state}</h3>
                <p>View news →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories Preview */}
        <section className="categories-section">
          <h2>📂 News Categories</h2>
          <div className="categories-preview">
            <div className="category-item">
              <span>📰</span>
              <h4>Headlines</h4>
            </div>
            <div className="category-item">
              <span>⚽</span>
              <h4>Sports</h4>
            </div>
            <div className="category-item">
              <span>💻</span>
              <h4>Technology</h4>
            </div>
            <div className="category-item">
              <span>🚨</span>
              <h4>Crime</h4>
            </div>
            <div className="category-item">
              <span>💼</span>
              <h4>Business</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
