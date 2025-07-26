import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://api.mediastack.com/v1/news", {
      params: {
        access_key: process.env.MEDIASTACK_API_KEY,
        keywords: "cloud computing",
        languages: "en",
        sort: "published_desc",
      },
    });
    res.json(response.data.data); // Mediastack uses `data.data`
  } catch (err) {
    res.status(500).json({ error: "Mediastack fetch failed" });
  }
});

export default router;
