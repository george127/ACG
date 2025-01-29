import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import image1 from "./images/Cyber/azure-security-engineer-associate.png";
import Image from "./images/Cyber/cyber.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const CyberSecurity = () => {
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
            <span>Microsoft Az 500</span>
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
                    Microsoft AZ-500
                    <div className="content">
                      Master Azure security.
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
                <h2 className="course-title">
                  Microsoft AZ-500 Security Training
                </h2>
                <div className="image-container">
                  <img src={Image} alt="Microsoft AZ-500 Security Training" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Learn the essential skills to implement, manage, and secure
                    Microsoft Azure environments. This course includes:
                    <ul>
                      <li>
                        <strong>Identity and Access Management:</strong>{" "}
                        Understand how to manage Azure Active Directory (Azure
                        AD) and secure identities with Multi-Factor
                        Authentication (MFA).
                      </li>
                      <li>
                        <strong>Platform Protection:</strong> Learn how to
                        implement advanced security configurations for virtual
                        machines, networks, and apps.
                      </li>
                      <li>
                        <strong>Data and Application Security:</strong> Explore
                        methods to secure Azure Storage, implement encryption,
                        and manage access policies for applications.
                      </li>
                      <li>
                        <strong>Security Operations:</strong> Gain expertise in
                        configuring Azure Security Center, Azure Sentinel, and
                        monitoring security events.
                      </li>
                      <li>
                        <strong>Threat Protection:</strong> Learn how to deploy
                        Azure Defender to protect workloads against threats and
                        vulnerabilities.
                      </li>
                      <li>
                        <strong>Compliance and Governance:</strong> Understand
                        Azure compliance tools and implement security policies
                        to align with organizational standards.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section id="section1" className="section">
                <div className="image-container">
                  <img src={image1} alt="Microsoft AZ-500 Security Training" />
                </div>
                <div className="text-container">
                  <h2>Microsoft AZ-500 Security Training</h2>
                  <p>
                    Learn to secure Microsoft Azure environments with advanced
                    security tools and techniques. This training covers identity
                    and access management, platform protection, data security,
                    and compliance. Gain expertise in using Azure Security
                    Center, Azure Sentinel, and Azure Defender to protect
                    workloads and respond to threats effectively.
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

export default CyberSecurity;
