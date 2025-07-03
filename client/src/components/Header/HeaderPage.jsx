import "./HeaderPage.css";
import logo from "./appcode.png";
import { Link } from "react-router-dom"; // Use Link for internal routing
import { useState } from "react";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="header-contact">
        <div className="search-bar-container">
          {!isSearchVisible && (
            <button className="search-icon-button" onClick={toggleSearch}>
              <span className="material-symbols-outlined">search</span>
            </button>
          )}
          {isSearchVisible && (
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="close-icon-button" onClick={toggleSearch}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          )}
        </div>
          <div className="social-media-container">
            <a
              href="https://facebook.com"
              className="social-icon twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://github.com"
              className="social-icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <div className="Btn-container">
            <Link className="Btn" to="/login">
              Login
            </Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
