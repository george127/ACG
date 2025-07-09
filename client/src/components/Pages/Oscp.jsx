import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import image1 from "./images/Cyber/image.png";
import Image from "./images/Cyber/oscp.png";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

import { useState, useEffect, useRef } from "react";

const Oscp = () => {
  const [sidebarTop, setSidebarTop] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 7);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sidebarLimit = 0;
      const maxOffset = 70;

      if (scrollY > sidebarLimit) {
        setSidebarTop(Math.min(maxOffset, scrollY - sidebarLimit));
      } else {
        setSidebarTop(0);
      }

      // Determine which section is in view
      const scrollPosition = window.scrollY + 100; // Adding some offset

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(`section${index + 1}`);
          }
        }
      });
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
      const scrollToPosition = sectionPosition + offset;
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
      setActiveSection(sectionId);
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
          <span>OSCP</span>
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
                <li onClick={() => handleScrollToSection("section1", -75)}
                  className={activeSection === "section1" ? "active" : ""}>
                  <div className="items-content">
                    <span className="material-symbols-outlined format">
                      format_indent_increase
                    </span>
                    OSCP
                  </div>
                  <span className="material-symbols-outlined arrow-icon">south_east</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-Content">
            <div className="Content">
              <div className="course-details">
                <h2 className="course-title">
                  Offensive Security Certified Professional
                </h2>
                <div className="image-container">
                  <img src={Image} alt="Offensive Security" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Learn the skills required to perform advanced penetration
                    testing and secure critical systems. This course includes:
                    <ul>
                      <li>
                        <strong>Penetration Testing:</strong> Gain hands-on
                        experience with network and application exploitation
                        techniques.
                      </li>
                      <li>
                        <strong>Vulnerability Assessment:</strong> Learn how to
                        identify and prioritize vulnerabilities in systems and
                        applications.
                      </li>
                      <li>
                        <strong>Privilege Escalation:</strong> Master techniques
                        to escalate user privileges after exploitation.
                      </li>
                      <li>
                        <strong>Buffer Overflows:</strong> Understand and
                        exploit buffer overflow vulnerabilities in software
                        applications.
                      </li>
                      <li>
                        <strong>Active Directory Attacks:</strong> Learn how to
                        target and compromise Active Directory environments
                        effectively.
                      </li>
                      <li>
                        <strong>Reporting and Documentation:</strong> Develop
                        skills to document findings and create professional
                        penetration testing reports.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section id="section1"
                className={`section ${activeSection === "section1" ? "section-active" : ""}`}
                ref={el => sectionRefs.current[0] = el}>
                <div className="image-container">
                  <img src={image1} alt="Cloud Data Analytics" />
                </div>
                <div className="text-container">
                  <h2>Offensive Security Certified Professional</h2>
                  <p>
                    The Offensive Security Certified Professional (OSCP) program
                    is designed to teach advanced penetration testing skills. It
                    emphasizes hands-on experience in areas such as
                    vulnerability assessment, exploitation, privilege
                    escalation, and network security. The program prepares
                    candidates to identify security weaknesses, exploit
                    vulnerabilities, and secure critical systems effectively.
                    Master ethical hacking techniques to uncover and mitigate
                    threats in real-world scenarios.
                  </p>
                </div>

                <div className="button-container">
                  <p className="amount">Ghc 18,000</p>
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
      <Footer />
    </>
  );
};

export default Oscp;
