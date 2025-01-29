import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import Frontend from "./images/Software/avt.frontend.png";
import Backend from "./images/Software/backend-development.jpg";
import Flutter from "./images/Software/unnamed.webp";
import NextJS from "./images/Software/next js.webp";
import TypeScript from "./images/Software/Typescript_logo.png";
import Javascript from "./images/Software/Javascript.png";
import MobileApp from "./images/Software/PngItem_256506.png";
import Image from "./images/Software/Software.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active links


const Software = () => {
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
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
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
            <span>Software</span>
          </div>
        <div className="software-page container">
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
                    Front End
                    <div className="content">
                      Learn about HTML, CSS, JavaScript
                    </div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section2", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Backend
                    <div className="content">server-side programming</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section3", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Mobile Development
                    <div className="content">
                      App creation with React Native.
                    </div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section4", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Next.js
                    <div className="content">Learn server-side rendering.</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section5", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    Flutter
                    <div className="content">Cross-platform applications.</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section6", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    JavaScript
                    <div className="content">
                    A versatile language for websites.                    </div>
                  </div>
                </li>
                
                <li onClick={() => handleScrollToSection("section7", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    TypeScript
                    <div className="content">
                      Robust and scalable applications.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-Content">
            <div className="Content">
              <div className="course-details">
                <h2 className="course-title">FullStack Development</h2>
                <div className="image-container">
                  <img src={Image} alt="Front-end Development" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Learn to build robust and scalable web applications using
                    modern technologies. This course covers everything from
                    front-end development to back-end architecture, database
                    integration, and deployment strategies. Gain the skills to
                    become a full-stack developer and create high-quality
                    software solutions. This course includes:
                    <ul>
                      <li>
                        <strong>Front-End Development:</strong> Dive into HTML,
                        CSS, JavaScript, React, and other frameworks to build
                        responsive and user-friendly web interfaces.
                      </li>
                      <li>
                        <strong>Back-End Development:</strong> Learn server-side
                        programming with Node.js, Express.js, and how to manage
                        APIs effectively.
                      </li>
                      <li>
                        <strong>Database Management:</strong> Understand how to
                        design, query, and manage databases using technologies
                        like MongoDB and MySQL.
                      </li>
                      <li>
                        <strong>Version Control:</strong> Master Git and GitHub
                        for collaborative development and efficient code
                        management.
                      </li>
                      <li>
                        <strong>Deployment:</strong> Learn how to deploy
                        applications on cloud platforms like AWS, Heroku, and
                        Vercel.
                      </li>
                      <li>
                        <strong>Best Practices:</strong> Follow industry
                        standards for coding, testing, and optimizing your
                        applications for scalability and performance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section id="section1" className="section">
                <div className="image-container">
                  <img src={Frontend} alt="Front End Development" />
                </div>
                <div className="text-container">
                  <h2>Front End Development</h2>
                  <p>
                    Front-end development focuses on creating the visual and
                    interactive elements of a website or web application. It
                    involves working with technologies like HTML, CSS, and
                    JavaScript to build user interfaces that are both functional
                    and aesthetically pleasing. A front-end developer ensures
                    that users have a seamless and engaging experience while
                    navigating a website, optimizing for performance,
                    accessibility, and responsiveness across different devices.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 5,920</p>
                  <div className="btn-container">
                    <NavLink to="/Software/frontDetails" className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </NavLink>
                  </div>
                </div>
              </section>

              <section id="section2" className="section">
                <div className="image-container">
                  <img src={Backend} alt="Backend Development" />
                </div>
                <div className="text-container">
                  <h2>Backend Development</h2>
                  <p>
                    Backend development is the backbone of web applications. It
                    focuses on server-side logic, database management, and APIs
                    to ensure that the front end communicates effectively with
                    the server. Backend developers work with technologies like
                    Node.js, Express, React js and databases like MongoDB to
                    handle data storage, retrieval, and business logic. A robust
                    backend ensures scalability, security, and smooth
                    application functionality.
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

              <section id="section3" className="section">
                <div className="image-container">
                  <img src={MobileApp} alt="Mobile App Development" />
                </div>
                <div className="text-container">
                  <h2>Mobile App Development</h2>
                  <p>
                    Mobile app development focuses on creating software
                    applications for mobile devices. It involves designing and
                    building intuitive, user-friendly, and feature-rich apps
                    using platforms like Android, iOS, or cross-platform
                    frameworks such as React Native and Flutter. Mobile apps
                    enhance user experiences, streamline services, and provide
                    businesses with a direct channel to their audiences.
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

              <section id="section4" className="section">
                <div className="image-container">
                  <img src={NextJS} alt="Next.js Development" />
                </div>
                <div className="text-container">
                  <h2>Next.js</h2>
                  <p>
                    Next.js is a powerful React framework for building
                    server-side rendered (SSR) and static websites. It provides
                    features like fast routing, API routes, and built-in support
                    for server-side rendering, making it a top choice for
                    developers aiming to build SEO-friendly and performant web
                    applications. With its flexibility, developers can create
                    scalable and efficient projects for any use case.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 3,500</p>
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
                  <img src={Flutter} alt="Flutter Development" />
                </div>
                <div className="text-container">
                  <h2>Flutter</h2>
                  <p>
                    Flutter is a popular UI toolkit for building natively
                    compiled applications for mobile, web, and desktop from a
                    single codebase. Created by Google, Flutter uses the Dart
                    programming language and provides a rich set of customizable
                    widgets to build stunning and performant apps. It’s ideal
                    for developers aiming to deliver a consistent user
                    experience across multiple platforms.
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
              <section id="section6" className="section">
                <div className="image-container">
                  <img src={Javascript} alt="TypeScript Development" />
                </div>
                <div className="text-container">
                  <h2>Javascript</h2>
                  <p>
                    TypeScript is a superset of JavaScript that adds static
                    typing to the language, allowing developers to catch errors
                    early during development. It enhances code quality,
                    maintainability, and scalability by providing features like
                    interfaces, type annotations, and advanced tooling support.
                    TypeScript is widely used in modern development frameworks
                    and libraries, making it an essential tool for building
                    large, robust applications.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 3,000</p>
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
                  <img src={TypeScript} alt="TypeScript Development" />
                </div>
                <div className="text-container">
                  <h2>TypeScript</h2>
                  <p>
                    TypeScript is a superset of JavaScript that adds static
                    typing to the language, allowing developers to catch errors
                    early during development. It enhances code quality,
                    maintainability, and scalability by providing features like
                    interfaces, type annotations, and advanced tooling support.
                    TypeScript is widely used in modern development frameworks
                    and libraries, making it an essential tool for building
                    large, robust applications.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 3,000</p>
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

export default Software;
