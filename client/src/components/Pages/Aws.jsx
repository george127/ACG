import "./Css/style.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import AWS1 from "./images/Cloud/AWS-Certified-Architect-Professional.png";
import AWS2 from "./images/Cloud/AWS-Certified-Architect-Associate.png";
import AWS3 from "./images/Cloud/AWS-Certified-Administrator-Associate.webp";
import AWS4 from "./images/Cloud/AWS-Certified-DevOps-Engineer-Professional.png";
import AWS5 from "./images/Cloud/AWS-Developer-Associate.png";
import AWS6 from "./images/Cloud/AWS-Security-Specialty.webp";
import AWS7 from "./images/Cloud/AWS-Certified-Advanced-Networking-Specialty.png";
import AWS8 from "./images/Cloud/AWS-Big-Data-Logo.png";
import { useState, useEffect } from "react";
import Image from "./images/Cloud/Cloud.png";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

const Aws = () => {
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
          <span>Aws</span>
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
                    AWS Certified Solutions
                    <div className="content">Archtect Professional</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section2", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified solutions
                    <div className="content">Archtect Associate</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section3", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified SysOps
                    <div className="content">Administrator Associate.</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section4", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified DeveOps
                    <div className="content">Engineer Professional</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section5", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified Developer
                    <div className="content">Developer Associate.</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section6", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified Security
                    <div className="content">Specialty</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section7", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified advanced
                    <div className="content">Networking Specialty</div>
                  </div>
                </li>
                <li onClick={() => handleScrollToSection("section8", -75)}>
                  <span className="material-symbols-outlined format">
                    format_indent_increase
                  </span>
                  <div className="items-content">
                    AWS Certified Big
                    <div className="content">Data Specialty</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-Content">
            <div className="Content">
              <div className="course-details">
                <h2 className="course-title">Amazon Web Services</h2>
                <div className="image-container">
                  <img src={Image} alt="Front-end Development" />
                </div>
                <div className="course-description">
                  <div className="text">
                    Learn to build robust and scalable applications using Amazon
                    Web Services (AWS). This course covers everything from cloud
                    computing fundamentals to advanced AWS services, database
                    integration, and deployment strategies. Gain the skills to
                    become an AWS expert and create secure, scalable cloud
                    solutions. This course includes:
                    <ul>
                      <li>
                        <strong>AWS Cloud Fundamentals:</strong> Understand core
                        AWS services like EC2, S3, RDS, and Lambda to build and
                        deploy applications on the cloud.
                      </li>
                      <li>
                        <strong>Serverless Architectures:</strong> Learn to
                        design and implement serverless applications using AWS
                        Lambda, API Gateway, and DynamoDB.
                      </li>
                      <li>
                        <strong>Database Management:</strong> Master AWS
                        database services such as RDS, DynamoDB, and Aurora for
                        scalable and secure data management.
                      </li>
                      <li>
                        <strong>Security and Identity Management:</strong>{" "}
                        Explore IAM (Identity and Access Management), AWS WAF,
                        and other tools to ensure secure applications.
                      </li>
                      <li>
                        <strong>Deployment Strategies:</strong> Learn to deploy
                        applications on AWS using Elastic Beanstalk,
                        CloudFormation, and AWS CLI.
                      </li>
                      <li>
                        <strong>Monitoring and Optimization:</strong> Utilize
                        AWS CloudWatch and Trusted Advisor to monitor,
                        troubleshoot, and optimize your applications.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section id="section1" className="section">
                <div className="image-container">
                  <img
                    src={AWS1}
                    alt="AWS Certified Solutions Architect Professional"
                  />
                </div>
                <div className="text-container">
                  <h2>AWS Certified Solutions Architect Professional</h2>
                  <p>
                    The AWS Certified Solutions Architect Professional
                    certification validates advanced skills in designing and
                    deploying cloud architecture on AWS. It focuses on building
                    secure, scalable, and cost-optimized solutions for various
                    use cases, ensuring high performance and reliability. This
                    certification is ideal for professionals who architect
                    advanced cloud-based solutions and manage end-to-end
                    projects.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 5,920</p>
                  <div className="btn-container">
                    <NavLink to="/Aws/AWS-SA-Pro-Details" className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </NavLink>
                  </div>
                </div>
              </section>

              <section id="section2" className="section">
                <div className="image-container">
                  <img
                    src={AWS2}
                    alt="AWS Certified Solutions Architect Associate"
                  />
                </div>
                <div className="text-container">
                  <h2>AWS Certified Solutions Architect Associate</h2>
                  <p>
                    The AWS Certified Solutions Architect Associate
                    certification is designed for individuals who design
                    distributed systems on AWS. It focuses on the fundamentals
                    of cloud architecture, covering topics such as networking,
                    storage, and compute services, as well as best practices for
                    security and scalability.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 5,920</p>
                  <div className="btn-container">
                  <NavLink to="/Aws/AWS-SA-Associate-Details" className="btn">
                      Learn More
                      <span className="material-symbols-outlined">east</span>
                    </NavLink>
                  </div>
                </div>
              </section>

              <section id="section3" className="section">
                <div className="image-container">
                  <img
                    src={AWS3}
                    alt="AWS Certified SysOps Administrator Associate"
                  />
                </div>
                <div className="text-container">
                  <h2>AWS Certified SysOps Administrator Associate</h2>
                  <p>
                    The AWS Certified SysOps Administrator Associate
                    certification focuses on the deployment, management, and
                    operations of AWS solutions. It validates expertise in
                    monitoring systems, managing costs, and optimizing resource
                    utilization, making it ideal for system administrators and
                    operations professionals.
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
                  <img
                    src={AWS4}
                    alt="AWS Certified DevOps Engineer Professional"
                  />
                </div>
                <div className="text-container">
                  <h2>AWS Certified DevOps Engineer Professional</h2>
                  <p>
                    The AWS Certified DevOps Engineer Professional certification
                    focuses on automating the deployment of applications and
                    infrastructure on AWS. It covers key DevOps practices like
                    CI/CD, infrastructure as code, and monitoring, enabling
                    professionals to manage complex cloud environments.
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

              <section id="section5" className="section">
                <div className="image-container">
                  <img src={AWS5} alt="AWS Certified Developer Associate" />
                </div>
                <div className="text-container">
                  <h2>AWS Certified Developer Associate</h2>
                  <p>
                    The AWS Certified Developer Associate certification is ideal
                    for developers who build and maintain applications on AWS.
                    It emphasizes core AWS services, application development,
                    and debugging tools, empowering professionals to design
                    secure and scalable cloud applications.
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
                  <img src={AWS6} alt="AWS Certified Security Specialty" />
                </div>
                <div className="text-container">
                  <h2>AWS Certified Security Specialty</h2>
                  <p>
                    The AWS Certified Security Specialty certification focuses
                    on advanced security practices for protecting cloud
                    environments. It covers topics such as data encryption,
                    secure network architecture, and compliance management,
                    ensuring professionals can secure sensitive data and
                    applications on AWS.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 7,020</p>
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
                  <img
                    src={AWS7}
                    alt="AWS Certified Advanced Networking Specialty"
                  />
                </div>
                <div className="text-container">
                  <h2>AWS Certified Advanced Networking Specialty</h2>
                  <p>
                    The AWS Certified Advanced Networking Specialty
                    certification validates expertise in designing and
                    implementing AWS and hybrid IT network architectures. It
                    covers topics like secure connectivity, routing, and
                    advanced troubleshooting, making it ideal for network
                    engineers and architects.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 7,020</p>
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
                  <img src={AWS8} alt="AWS Certified Big Data Specialty" />
                </div>
                <div className="text-container">
                  <h2>AWS Certified Big Data Specialty</h2>
                  <p>
                    The AWS Certified Big Data Specialty certification focuses
                    on data analytics and architecture on AWS. It covers
                    services like Redshift, EMR, and Kinesis, validating skills
                    in data collection, processing, and visualization for
                    scalable and efficient big data solutions.
                  </p>
                </div>
                <div className="button-container">
                  <p className="amount">Ghc 7,020</p>
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

export default Aws;
