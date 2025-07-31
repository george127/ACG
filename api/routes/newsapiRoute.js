import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

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
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'News API request failed');
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('News API Error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;