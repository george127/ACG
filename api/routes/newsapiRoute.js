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
  
  // Better API key validation
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

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'YourApp/1.0'
      }
    });

    // Detailed response handling
    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      const text = await response.text();
      console.error('NewsAPI non-JSON response:', text.substring(0, 200));
      throw new Error(`NewsAPI responded with: ${response.status} ${response.statusText}`);
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error('NewsAPI error response:', errorData);
      throw new Error(errorData.message || `NewsAPI request failed (${response.status})`);
    }

    const data = await response.json();
    
    // Validate response structure
    if (!data?.articles) {
      throw new Error('Invalid response format from NewsAPI');
    }

    return res.json(data);
    
  } catch (err) {
    console.error('NewsAPI processing error:', err);
    return res.status(502).json({ 
      error: 'News service unavailable',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

export default router;