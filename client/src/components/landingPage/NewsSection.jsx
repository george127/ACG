

import { useEffect, useState } from "react";
import axios from "axios";
import "./NewsSection.css";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFromNewsAPI = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: "forex trading",
          apiKey: "5d238b4fa6ec456fa88cacfc421ce48a",
          language: "en",
          sortBy: "publishedAt",
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error("NewsAPI Error:", error);
      return [];
    }
  };

  const fetchFromGNewsAPI = async () => {
    try {
      const response = await axios.get("https://gnews.io/api/v4/search", {
        params: {
          q: "cloud engineering",
          token: "0a5a1464da4cc284267e685b570fa055",
          lang: "en",
        },
      });
      return response.data.articles.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.image,
      }));
    } catch (error) {
      console.error("GNewsAPI Error:", error);
      return [];
    }
  };

  const fetchFromMediaStack = async () => {
    try {
      const response = await axios.get("http://api.mediastack.com/v1/news", {
        params: {
          access_key: "52e6401ba26279d03666a865cce2a1dc",
          keywords: "Software Engineering",
          languages: "en",
        },
      });
      return response.data.data.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.image,
      }));
    } catch (error) {
      console.error("MediaStack Error:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      // Fetch news from all sources
      const [newsAPI, gNews, mediaStack] = await Promise.all([
        fetchFromNewsAPI(),
        fetchFromGNewsAPI(),
        fetchFromMediaStack(),
      ]);

      // Combine and shuffle the results
      const combinedNews = [...newsAPI, ...gNews, ...mediaStack];
      setNews(combinedNews);
      setDisplayedNews(combinedNews.slice(0, 4)); // Display initial articles
      setLoading(false);
    };

    fetchNews();
  }, []);

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        const shuffledNews = shuffleArray(news);
        setDisplayedNews(shuffledNews.slice(0, 4));
      }, 20000);

      return () => clearInterval(interval);
    }
  }, [news]);

  const truncateText = (text, length = 100) =>
    text && text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <div className="news-section">
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="news-container">
          {displayedNews.map((article, index) => (
            <div className="news-item" key={index}>
              <div className="image-container">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/300"}
                  alt={article.title}
                  className="news-image"
                />
                <span className="title">
                  {truncateText(article.title, 22)}
                </span>
              </div>
              <p>{truncateText(article.description, 50)}</p>
              <div className="btn-container">
                <a
                  href={article.url}
                  target="_blank"
                  className="btn"
                  rel="noopener noreferrer"
                >
                  Read
                  <span className="material-symbols-outlined">east</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsSection;
