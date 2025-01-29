import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import image1 from "./images/Analytics/image1.png";
import image2 from "./images/Analytics/image3.png";
import Image from "./images/Analytics/Data.png";

import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

const DataAnalytics = () => {
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
            <span>Data Analytics</span>
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
                    Cloud Data Analytics
                    <div className="content">analyze large-scale data</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section2", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Traditional Data Analytics
                    <div className="content">Explore on-premise systems</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-Content">
            <div className="Content">
              <div className="course-details">
                <h2 className="course-title">Data Analytics</h2>
                <div className="image-container">
                  <img src={Image} alt="Data Analytics" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Learn how to analyze data and extract actionable insights to
                    drive decisions. This course includes:
                    <ul>
                      <li>
                        <strong>Data Collection:</strong> Understand how to
                        collect data from various sources, including databases
                        and APIs.
                      </li>
                      <li>
                        <strong>Data Cleaning:</strong> Learn techniques to
                        clean, preprocess, and organize raw data for analysis.
                      </li>
                      <li>
                        <strong>Data Visualization:</strong> Master tools like
                        Tableau, Power BI, or Python libraries to create visual
                        representations of data.
                      </li>
                      <li>
                        <strong>Statistical Analysis:</strong> Explore
                        statistical methods and techniques to interpret data
                        patterns and trends.
                      </li>
                      <li>
                        <strong>Machine Learning Basics:</strong> Get introduced
                        to predictive modeling and machine learning algorithms
                        to analyze complex datasets.
                      </li>
                      <li>
                        <strong>Data Interpretation:</strong> Learn how to draw
                        insights and communicate findings to stakeholders
                        effectively.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section id="section1" className="section">
                <div className="image-container">
                  <img src={image1} alt="Cloud Data Analytics" />
                </div>
                <div className="text-container">
                  <h2>Cloud Data Analytics</h2>
                  <p>
                    Cloud Data Analytics allows organizations to process and
                    analyze large-scale data efficiently using cloud platforms.
                    Learn how to leverage tools like Google BigQuery, AWS
                    Redshift, and Microsoft Azure for scalable data storage,
                    real-time analysis, and visualization to drive data-driven
                    decisions.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 5,920</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="section2" className="section">
                <div className="image-container">
                  <img src={image2} alt="Traditional Data Analytics" />
                </div>
                <div className="text-container">
                  <h2>Traditional Data Analytics</h2>
                  <p>
                    Traditional Data Analytics involves using on-premise systems
                    and methods to analyze data. Learn about fundamental
                    techniques such as descriptive statistics, data mining, and
                    reporting using tools like Excel, SQL, and SAS to uncover
                    actionable insights.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 5,920</p>
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

export default DataAnalytics;
