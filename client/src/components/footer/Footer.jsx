import "./Footer.css";
import logo from "../Header/appcode.png";
import { NavLink } from "react-router-dom"; // Use NavLink for active links
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo container">
          <img src={logo} alt="AppCode logo" />
        </div>
        <div className="footer-container container">
          <div className="footer-items">
            <div className="items">
              <ul className="links">
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                  <NavLink>Bootcamps</NavLink>
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Events</NavLink>
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Pre-Session</NavLink>
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Workshops</NavLink>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>About Us</NavLink>
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Contact</NavLink>
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Blog</NavLink>
                </li>

                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Services</NavLink>
                </li>
              </ul>

              <ul className="links">
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Privacy Policy</NavLink>
                </li>
                <li>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>

                  <NavLink>Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
            <div className="about-us">
              <h2>About AppCode</h2>
              <p>
                Our Courses are for Anyone wishing to start a
                career in Software Engineering, Cyber Security etc, or the
                working class looking forward to upgrade their skill or
                knowledge. Come and experience Appcode Lecturing
              </p>
            </div>
          </div>
          <div className="footer-items">
            <div className="learn-more">
              <h6>Learn More</h6>
              <ul>
                <li>
                  <NavLink>Our Platform</NavLink>
                </li>
                <li>
                  <NavLink>Pricing</NavLink>
                </li>
                <li>
                  <NavLink>FAQ</NavLink>
                </li>
              </ul>
            </div>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} AppCode. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
