import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Enhanced CORS configuration
router.use(cors({
  origin: ['https://acg-7euk.onrender.com', 'http://localhost:5000'], // Add your actual frontend URLs
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

router.use(express.json());

router.get('/', async (req, res) => {
  const { category = 'technology' } = req.query;
  
  console.log('Attempting to fetch news for category:', category);

  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    console.error('NEWS_API_KEY is missing in environment variables');
    return res.status(500).json({ 
      error: 'Server configuration error',
      message: 'News API service unavailable'
    });
  }

  try {
    const apiUrl = new URL('https://newsapi.org/v2/top-headlines');
    apiUrl.searchParams.set('country', 'us');
    apiUrl.searchParams.set('category', category);
    apiUrl.searchParams.set('apiKey', apiKey);

    console.log('Constructed NewsAPI URL (without key):', 
      `${apiUrl.origin}${apiUrl.pathname}?${apiUrl.searchParams.toString().replace(/apiKey=[^&]*/, 'apiKey=REDACTED')}`);

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'YourApp/1.0'
      }
    });

    console.log('NewsAPI response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('NewsAPI error details:', {
        status: response.status,
        statusText: response.statusText,
        errorData
      });
      throw new Error(errorData.message || `NewsAPI request failed (${response.status})`);
    }

    // ... rest of your existing code ...

  } catch (err) {
    console.error('Full error details:', {
      message: err.message,
      stack: err.stack
    });
    return res.status(502).json({ 
      error: 'News service unavailable',
      details: process.env.NODE_ENV === 'development' ? {
        message: err.message,
        stack: err.stack
      } : undefined
    });
  }
});

export default router;