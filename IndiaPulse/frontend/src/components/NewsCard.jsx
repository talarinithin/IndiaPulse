import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  const imageUrl = article.urlToImage || 'https://images.unsplash.com/photo-1495457876923-ae5b0b5b1122?w=500&h=300&fit=crop';

  return (
    <div className="news-card">
      <div className="news-image-container">
        <img 
          src={imageUrl} 
          alt={article.title}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1495457876923-ae5b0b5b1122?w=500&h=300&fit=crop';
          }}
        />
      </div>

      <div className="news-content">
        <div className="news-source">
          {article.source?.name || 'News'} • {new Date(article.publishedAt).toLocaleDateString()}
        </div>

        <h3 className="news-title">{article.title}</h3>

        <p className="news-description">
          {article.description?.slice(0, 100)}...
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
