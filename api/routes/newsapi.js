import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "forex",
        language: "en",
        sortBy: "publishedAt",
        apiKey: process.env.NEWSAPI_KEY,
      },
    });
    res.json(response.data.articles);
  } catch (err) {
    res.status(500).json({ error: "NewsAPI fetch failed" });
  }
});

export default router;
