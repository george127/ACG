import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'; 

dotenv.config(); 
const router = express.Router();

const NEWS_API_KEY = process.env.NEWS_API_KEY || '5d238b4fa6ec456fa88cacfc421ce48a';

router.get('/', async (req, res) => {
  try {
    const { category = 'technology' } = req.query;
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=100&country=us&apiKey=${NEWS_API_KEY}`;
    
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('News API error:', error.response?.data || error.message);
    res.status(500).json({
      message: 'Failed to fetch news',
      error: error.response?.data?.message || error.message
    });
  }
});

export default router; 