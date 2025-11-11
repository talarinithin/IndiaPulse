const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  getHeadlines,
  getSports,
  getTech,
  getCrime,
  getBusiness,
  getStateNews,
  getStateCategoryNews
} = require('../controllers/newsController');

// Protect all news routes with auth middleware
router.get('/headlines', authMiddleware, getHeadlines);
router.get('/sports', authMiddleware, getSports);
router.get('/tech', authMiddleware, getTech);
router.get('/crime', authMiddleware, getCrime);
router.get('/business', authMiddleware, getBusiness);
router.get('/state/:state', authMiddleware, getStateNews);
router.get('/state/:state/:category', authMiddleware, getStateCategoryNews);

module.exports = router;
