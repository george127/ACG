import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import image1 from "./images/Cyber/banner.jpg";
import Image from "./images/Cyber/forexTrading.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const ForexTrading = () => {
  const [sidebarTop, setSidebarTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sidebarLimit = 0; // Adjust this value as needed
      const maxOffset = 70; // Maximum offset for the sidebar

      if (scrollY > sidebarLimit) {
        setSidebarTop(Math.min(maxOffset, scrollY - sidebarLimit));
      } else {
        setSidebarTop(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = sectionPosition + offset; // Adjust with the offset value
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <div id="content">
        <Header />
        <Navigation />
        <div className="container navigate">
            <div className="items">
              <NavLink to="/">Home</NavLink>
              <span className="material-symbols-outlined">arrow_and_edge</span>
            </div>
            <span>Forex Trading</span>
          </div>
        <div className="software-page container">
          {/* Sidebar */}
          <div className="sideBar-container">
            <div
              className="Sidebar"
              style={{
                top: `${sidebarTop}px`,
                transition: "top 0.3s ease",
              }}
            >
              <ul>
                <li onClick={() => handleScrollToSection("section1", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Forex Trading
                    <div className="content">Lorem ipsum dolor sit amet.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-Content">
            <div className="Content">
              <div className="course-details">
                <h2 className="course-title">
                  Fullstack Forex Trading Program
                </h2>
                <div className="image-container">
                  <img src={Image} alt="Forex Trading" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Master the skills required to excel in forex trading and
                    manage financial markets effectively. This course includes:
                    <ul>
                      <li>
                        <strong>Forex Basics:</strong> Understand currency
                        pairs, pips, and the fundamentals of forex trading.
                      </li>
                      <li>
                        <strong>Technical Analysis:</strong> Learn how to
                        analyze charts, identify trends, and use technical
                        indicators.
                      </li>
                      <li>
                        <strong>Risk Management:</strong> Master strategies to
                        manage risk, set stop-loss orders, and protect your
                        capital.
                      </li>
                      <li>
                        <strong>Trading Psychology:</strong> Develop the mindset
                        needed for consistent and disciplined trading.
                      </li>
                      <li>
                        <strong>Fundamental Analysis:</strong> Learn to evaluate
                        economic indicators, news, and events that impact
                        currency prices.
                      </li>
                      <li>
                        <strong>Advanced Strategies:</strong> Gain insights into
                        algorithmic trading, hedging techniques, and
                        high-frequency trading.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section id="section1" className="section">
                <div className="image-container">
                  <img src={image1} alt="Forex Trading" />
                </div>
                <div className="text-container">
                  <h2>Forex Trading</h2>
                  <p>
                    The Fullstack Forex Trading Program is designed to teach
                    essential skills for success in the financial markets. It
                    emphasizes practical experience in areas such as currency
                    trading, technical and fundamental analysis, risk
                    management, and trading psychology. The program prepares
                    candidates to analyze market trends, make informed trading
                    decisions, and effectively manage their portfolios. Master
                    trading strategies to thrive in the fast-paced world of
                    forex trading.
                  </p>
                </div>

                <div className="button-container">
                  <p className="amount">Ghc 24,000</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            className="back-to-top"
            onClick={() => handleScrollToSection("content")}
          >
            ↑ <br />
            Top
          </button>
        </div>
      </div>
    </>
  );
};

export default ForexTrading;
