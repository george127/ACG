import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: "cyber security",
        lang: "en",
        token: process.env.GNEWS_API_KEY,
      },
    });
    res.json(response.data.articles);
  } catch (err) {
    res.status(500).json({ error: "GNews fetch failed" });
  }
});

export default router;
