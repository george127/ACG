import { useState, useEffect } from 'react';
import '../landingPage/NewsSection.css';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('technology'); 
  const [currentPage, setCurrentPage] = useState(0);

  const ARTICLES_PER_PAGE = 4;

  const categories = [
    'business', 'entertainment', 'general',
    'health', 'science', 'sports', 'technology',
  ];

  useEffect(() => {
const fetchNews = async () => {
  try {
    setLoading(true);
    setError(null);

    const response = await fetch(
      `https://acg-7euk.onrender.com/api/news?category=${category}`,
      {
        headers: { 'Accept': 'application/json' },
        credentials: 'include'
      }
    );

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: `HTTP error! status: ${response.status}` };
      }
      
      // Provide more specific error messages
      if (response.status === 502) {
        throw new Error('News service is currently unavailable. Please try again later.');
      } else if (response.status === 500) {
        throw new Error('Server configuration error');
      } else {
        throw new Error(
          errorData.message || 
          errorData.error ||
          `Error fetching news (${response.status})`
        );
      }
    }

    const data = await response.json();
    
    if (!data.articles) {
      throw new Error('Received invalid news data format');
    }

    setArticles(data.articles);
    setCurrentPage(0);
  } catch (err) {
    setError(err.message);
    setArticles([]);
    console.error('News fetch error:', err);
    
    // Optionally set some fallback articles
    if (articles.length === 0) {
      setArticles([{
        title: "News Service Temporarily Unavailable",
        description: "We're unable to fetch the latest news right now. Please check back later.",
        url: "#",
        urlToImage: "https://via.placeholder.com/300",
        publishedAt: new Date().toISOString(),
        source: { name: "System" }
      }]);
    }
  } finally {
    setLoading(false);
  }
};

    fetchNews();
  }, [category]);

  // Rest of your component remains the same...
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIdx = currentPage * ARTICLES_PER_PAGE;
  const visibleArticles = articles.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  if (loading) {
    return <div className="loading">Loading news...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="news-blog">
      <header className="blog-header">
        <h6>Latest News Blog</h6>
        <div className="category-selector-container">
          <div className="category-selector-wrapper">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="innovative-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <div className="selector-decoration">
              <span className="selector-label">Filter by:</span>
              <div className="animated-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="articles-container">
        {visibleArticles.map((article, index) => (
          <article key={index} className="news-article">
            {article.urlToImage && (
              <div className="article-image">
                <img src={article.urlToImage} alt={article.title} />
              </div>
            )}
            <div className="article-content">
              <h2>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
              <p className="article-meta">
                {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="article-description">
                <div>{article.description}</div>
                <div className="btn-container">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Read more
                    <span className="material-symbols-outlined">east</span>
                  </a></div></p>
            </div>
          </article>
        ))}
      </div>

      {articles.length > ARTICLES_PER_PAGE && (
        <div className="pagination-controls">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="page-indicator">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsSection;