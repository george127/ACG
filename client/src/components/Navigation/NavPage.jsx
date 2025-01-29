import { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active links

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
              <NavLink
                to="/Software"
                activeClassName="active"
                data-text="Software Engineering"
              >
                Software Engineering
              </NavLink>
            </p>
            <div className="Link-dropdown">
              <p className="drop-toggle" data-text="Cloud Engineering">
                Cloud Engineering
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </p>
              <div className="dropdown-menu">
                <NavLink to="/Aws" activeClassName="active" data-text="AWS">
                  AWS Certifications
                </NavLink>
                <NavLink to="/Azure" activeClassName="active" data-text="Azure">
                  Microsoft Azure Certifications
                </NavLink>
              </div>
            </div>

            <p>
              <NavLink
                to="/marketing"
                activeClassName="active"
                data-text="Digital Marketing"
              >
                Digital Marketing
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/DataAnalytics"
                activeClassName="active"
                data-text="Data Analytics"
              >
                Data Analytics
              </NavLink>
            </p>
            <div className="Link-dropdown">
              <p className="drop-toggle" data-text="Cyber Security">
                Cyber Security
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </p>
              <div className="dropdown-menu">
                <NavLink to="/MicrosoftAz" activeClassName="active" data-text="AWS">
                  Microsoft AZ 500
                </NavLink>
                <NavLink to="/Oscp" activeClassName="active" data-text="Azure">
                  OSCP
                </NavLink>
              </div>
            </div>
            <p>
              <NavLink
                to="/forexTrading"
                activeClassName="active"
                data-text="Forex Trading"
              >
                Forex Trading
              </NavLink>
            </p>
          </div>

          {/* Button to navigate to payment page */}
          <div className="btn-container">
            <NavLink className="btn" to="/payment" activeClassName="active">
              Apply Now
              <span className="material-symbols-outlined">east</span>
            </NavLink>
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
