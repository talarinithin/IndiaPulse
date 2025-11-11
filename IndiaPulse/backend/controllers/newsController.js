const axios = require('axios');

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2';

const fetchNews = async (query) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/everything`, {
      params: {
        q: query,
        language: 'en',
        sortBy: 'publishedAt',
        apiKey: NEWS_API_KEY,
        pageSize: 20
      }
    });
    return response.data.articles || [];
  } catch (error) {
    console.log('Error fetching news:', error.message);
    return [];
  }
};

exports.getHeadlines = async (req, res) => {
  try {
    const articles = await fetchNews('India news');
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching headlines' });
  }
};

exports.getSports = async (req, res) => {
  try {
    const articles = await fetchNews('Indian sports cricket IPL football hockey tennis badminton');
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching sports news' });
  }
};

exports.getTech = async (req, res) => {
  try {
    const articles = await fetchNews('India technology tech');
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching tech news' });
  }
};

exports.getCrime = async (req, res) => {
  try {
    const articles = await fetchNews('India crime');
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching crime news' });
  }
};

exports.getBusiness = async (req, res) => {
  try {
    const articles = await fetchNews('India business market economy');
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching business news' });
  }
};

exports.getStateNews = async (req, res) => {
  try {
    const { state } = req.params;
    // Fetch general news from the state
    const articles = await fetchNews(`${state} India news`);
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching state news' });
  }
};

exports.getStateCategoryNews = async (req, res) => {
  try {
    const { state, category } = req.params;
    
    // Map category to search query
    const categoryMap = {
      'headlines': `${state} India latest news`,
      'sports': `${state} sports cricket IPL football hockey tournaments`,
      'tech': `${state} technology tech IT software startups`,
      'crime': `${state} crime police law enforcement`,
      'business': `${state} business market economy trade companies`
    };

    const query = categoryMap[category] || `${state} ${category}`;
    const articles = await fetchNews(query);
    
    res.json({ success: true, articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching news' });
  }
};
