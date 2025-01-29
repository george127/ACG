import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import image0 from "./images/Marketing/fullprogram.png";
import image1 from "./images/Marketing/image1.png";
import image2 from "./images/Marketing/image2.png";
import image3 from "./images/Marketing/image3.png";
import image4 from "./images/Marketing/image4.png";
import image5 from "./images/Marketing/image5.png";
import image6 from "./images/Marketing/image6.png";
import image7 from "./images/Marketing/image7.png";
import image8 from "./images/Marketing/image8.png";
import Image from "./images/Marketing/Marketing.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const DigitalMarketing = () => {
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
            <span>Digital Marketing</span>
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
                <li onClick={() => handleScrollToSection("section0", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Full Program
                    <div className="content">Master all aspects</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section1", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Facebook
                    <div className="content">Leverage Facebook Ads</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section2", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Instagram
                    <div className="content">Create appealing campaigns</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section3", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    LinkedIn
                    <div className="content">Target professionals</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section4", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Twitter
                    <div className="content">
                      trending topics to boost brand
                    </div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section5", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    YouTube
                    <div className="content">
                      Create video ads to engage users
                    </div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section6", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Google Ads
                    <div className="content">Run ads on Google Search.</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section7", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Pinterest
                    <div className="content">
                      Inspire users with visual content
                    </div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section8", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    TikTok
                    <div className="content">Engage younger audiences.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-Content">
            <div className="Content">
              <div className="course-details">
                <h2 className="course-title">Digital Marketing</h2>
                <div className="image-container">
                  <img src={Image} alt="Digital Marketing" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Learn to create effective digital marketing strategies to
                    reach and engage audiences. This course includes:
                    <ul>
                      <li>
                        <strong>SEO Optimization:</strong> Master search engine
                        optimization techniques to improve website visibility
                        and rank higher in search engine results.
                      </li>
                      <li>
                        <strong>Social Media Marketing:</strong> Understand how
                        to create impactful campaigns on platforms like
                        Facebook, Instagram, LinkedIn, and Twitter.
                      </li>
                      <li>
                        <strong>Email Marketing:</strong> Learn how to build
                        effective email campaigns that convert leads into
                        customers.
                      </li>
                      <li>
                        <strong>Content Marketing:</strong> Discover how to
                        create and distribute valuable content to attract and
                        retain target audiences.
                      </li>
                      <li>
                        <strong>Analytics and Metrics:</strong> Analyze campaign
                        performance using tools like Google Analytics and
                        measure ROI effectively.
                      </li>
                      <li>
                        <strong>PPC and Advertising:</strong> Gain expertise in
                        Pay-Per-Click campaigns using platforms like Google Ads
                        and social media ads.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <section id="section0" className="section">
                <div className="image-container">
                  <img src={image0} alt="Facebook Marketing" />
                </div>
                <div className="text-container">
                  <h2>Full Digital Marketing Program</h2>
                  <p>
                    Dive into the world of digital marketing and learn key
                    strategies to enhance your online presence. This program
                    covers SEO, social media marketing, email campaigns, content
                    creation, and analytics to help you achieve measurable
                    results.
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
              <section id="section1" className="section">
                <div className="image-container">
                  <img src={image1} alt="Facebook Marketing" />
                </div>
                <div className="text-container">
                  <h2>Facebook</h2>
                  <p>
                    Facebook is a powerful platform for digital marketing,
                    allowing businesses to reach a wide audience through
                    targeted ads, engaging posts, and interactive content. Learn
                    how to create campaigns, manage business pages, and analyze
                    performance to drive engagement and conversions.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
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
                  <img src={image2} alt="Instagram Marketing" />
                </div>
                <div className="text-container">
                  <h2>Instagram</h2>
                  <p>
                    Instagram is essential for visual storytelling in digital
                    marketing. Learn how to use reels, stories, and posts to
                    showcase products, engage with followers, and build a strong
                    brand presence. Understand analytics to optimize your
                    strategy and maximize reach.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="section3" className="section">
                <div className="image-container">
                  <img src={image3} alt="LinkedIn Marketing" />
                </div>
                <div className="text-container">
                  <h2>LinkedIn</h2>
                  <p>
                    LinkedIn is the go-to platform for B2B digital marketing.
                    Learn how to connect with professionals, create impactful
                    content, and run targeted ad campaigns to generate leads and
                    drive business growth.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="section4" className="section">
                <div className="image-container">
                  <img src={image4} alt="Twitter Marketing" />
                </div>
                <div className="text-container">
                  <h2>Twitter</h2>
                  <p>
                    Twitter is ideal for real-time engagement in digital
                    marketing. Learn how to create viral tweets, participate in
                    trending discussions, and use Twitter ads to promote your
                    brand effectively to a global audience.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="section5" className="section">
                <div className="image-container">
                  <img src={image5} alt="YouTube Marketing" />
                </div>
                <div className="text-container">
                  <h2>YouTube</h2>
                  <p>
                    YouTube is a key platform for video marketing. Learn how to
                    create engaging video content, optimize your channel for
                    SEO, and use YouTube ads to reach your target audience and
                    drive conversions.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>
              <section id="section6" className="section">
                <div className="image-container">
                  <img src={image6} alt="Google Ads" />
                </div>
                <div className="text-container">
                  <h2>Google Ads</h2>
                  <p>
                    A platform for running ads across Google Search, Display
                    Network, YouTube, and more. Google Ads allows businesses to
                    target specific keywords and demographics, ensuring their
                    content reaches the right audience at the right time.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="section7" className="section">
                <div className="image-container">
                  <img src={image7} alt="Pinterest" />
                </div>
                <div className="text-container">
                  <h2>Pinterest</h2>
                  <p>
                    Ideal for businesses targeting audiences interested in
                    visual inspiration, such as fashion, home décor, and DIY
                    projects. Pinterest is a great platform for showcasing
                    products in a visually appealing manner to drive engagement
                    and sales.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
                  <div className="btn-container">
                    <button className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="section8" className="section">
                <div className="image-container">
                  <img src={image8} alt="TikTok" />
                </div>
                <div className="text-container">
                  <h2>TikTok</h2>
                  <p>
                    TikTok is a growing platform for video marketing, especially
                    popular among younger audiences. It allows businesses to
                    create engaging short-form videos, leverage trends, and
                    collaborate with influencers to reach a wider audience
                    effectively.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 2,040</p>
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

export default DigitalMarketing;
