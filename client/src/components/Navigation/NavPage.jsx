import { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for internal routing

import "./NavPage.css"; // Import your CSS file

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="container">
          <div className="navbar-toggle" onClick={toggleMobileMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <p>
              <Link to="/" data-text="Home">
                Home
              </Link>
            </p>
            <p>
              <Link to="/Software" data-text="Software Engineering">
                Software Engineering
              </Link>
            </p>
            <div className="Link-dropdown">
              <p className="drop-toggle" data-text="Cloud Engineering">Cloud Engineering</p>
              <div className="dropdown-menu">
                <Link to="/Aws" data-text="AWS">
                  AWS CErtifications
                </Link>
                <Link to="/azure" data-text="Azure">
                  Microsoft Azure Certifications
                </Link>
              </div>
            </div>

            <p>
              <Link to="/careers" data-text="Digital Marketing">
                Digital Marketing
              </Link>
            </p>
            <p>
              <Link to="/resources" data-text=" Data Analytics">
                Data Analytics
              </Link>
            </p>
            <p>
              <Link to="/resources" data-text=" cyber Security">
                cyber Security
              </Link>
            </p>
            <p>
              <Link to="/resources" data-text="Forex Trading">
                Forex Trading
              </Link>
            </p>
          </div>

          {/* Button to navigate to payment page */}
          <div className="btn-container">
            <Link className="btn" to="/payment">
              Apply Now
              <span className="material-symbols-outlined">east</span>
            </Link>
          </div>
        </div>
      </nav>

      <header className="grid-header">
        <div className="container">
          <p>
            <span className="material-symbols-outlined">calendar_today</span>{" "}
            Monday-Saturday - 7:30-20:00
          </p>
          <p>
            <span className="material-symbols-outlined">phone</span> +233
            598044825
          </p>
          <p>
            <span className="material-symbols-outlined">location_on</span>{" "}
            Mallam-Gbawe.
          </p>
        </div>
      </header>
    </>
  );
};

export default Navigation;
