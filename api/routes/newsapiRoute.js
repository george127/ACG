import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

// Middleware
router.use(cors());
router.use(express.json());

router.get('/', async (req, res) => {
  const { category = 'technology' } = req.query;
  
  if (!process.env.NEWS_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
    
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'YourApp/1.0'
      }
    });

    // First check content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response:', text.substring(0, 200));
      throw new Error('News API returned non-JSON response');
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `News API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('News API Error:', err.message);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

export default router;