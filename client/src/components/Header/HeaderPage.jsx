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
        <Link to='/'>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div></Link>

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
         
            <div className="btn-container">
              <Link className="btn" to="/login">
                Login
                <span className="material-symbols-outlined">login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
