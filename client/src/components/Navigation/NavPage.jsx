import { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routing

import './NavPage.css'; // Import your CSS file

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="container">
      <div className="navbar-brand">
        <Link to="/">IT School</Link> {/* Use Link for the brand as well */}
      </div>

      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li> {/* Replace <a> with <Link> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li>
          <Link to="/resources" className="dropdown">Resources</Link>
          <ul className="dropdown-content">
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/tutorials">Tutorials</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>
        </li>
      </ul>

      {/* Button to navigate to payment page */}
      <Link className="Button-container" to="/payment"> 
        <button className="btn">Apply Now</button>
      </Link>
      
      </div>
    </nav>
  );
};

export default Navigation;
