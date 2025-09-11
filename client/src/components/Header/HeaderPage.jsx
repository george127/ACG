import "./HeaderPage.css";
import logo from "./appcode.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/reducers/authSlice";


const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Check if user data exists in localStorage first
      const storedUser = localStorage.getItem('user');

      if (!storedUser) {
        setLoading(false);
        return;
      }

      const userData = JSON.parse(storedUser);

      // Verify with backend
      const response = await fetch('http://localhost:5000/api/auth/check-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userData.email }),
      });

      // Handle HTTP errors
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        // User not valid according to backend
        localStorage.removeItem('user');
        setUser(null);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      // On network errors, keep using localStorage data if available
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (parseError) {
          console.error('Error parsing stored user data:', parseError);
          localStorage.removeItem('user');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Dispatch logout action to update Redux state
    dispatch(logout());

    // Clear local storage and state
    localStorage.removeItem('user');
    setUser(null);
    setIsDropdownOpen(false);

    // Redirect to login page
    navigate("/login");
  };

  if (loading) {
    return (
      <header className="site-header">
        <div className="container">
          <div className="loading-placeholder">Loading...</div>
        </div>
      </header>
    );
  }

  return (
    <header className="site-header">
      <div className="container">
        <Link to='/'>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        <div className="header-contact">
          <div className="search-bar-container">
            {!isSearchVisible && (
              <button className="search-icon-button" onClick={toggleSearch}>
                <span className="material-symbols-outlined">search</span>
              </button>
            )}
            {isSearchVisible && (
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button className="close-icon-button" onClick={toggleSearch}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            )}
          </div>
          <div className="login-container">
            {user ? (
              <div className="profile-dropdown" ref={dropdownRef}>
                <div className="profile-tri" onClick={toggleDropdown}>
                  <img
                    src={user.profileImage}
                    alt={user.fullName}
                    className="profile-image"
                  />
                  <span className={`material-symbols-outlined arrow ${isDropdownOpen ? 'rotate' : ''}`}>
                    arrow_drop_down
                  </span>
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-Menu show">
                    <div className="dropdown-header">
                      <img
                        src={user.profileImage}
                        alt={user.fullName}
                        className="dropdown-profile-image"
                      />
                      <div className="dropdown-user-info">
                        <h4>{user.fullName}</h4>
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="item">
                      <Link
                        to="/StudentPortal?modal=profile"
                        className="dropdown-item"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="link">
                          <span className="nav-icon material-symbols-outlined">person</span>
                          Profile
                        </div>
                        <span className="material-symbols-outlined arrow-icon">south_east</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="/StudentPortal" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                        <div className="link">
                          <span className=" nav-icon material-symbols-outlined">
                            door_open
                          </span>
                          Student Portal
                        </div>
                        <span className="material-symbols-outlined arrow-icon">south_east</span>
                      </Link>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="item">
                      <button onClick={handleLogout} className="dropdown-item">
                        <div className="link">
                          <span className="nav-icon material-symbols-outlined">logout</span>
                          Logout
                        </div>
                        <span className="material-symbols-outlined arrow-icon">south_east</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="btn-container">
                <Link className="btn" to="/login">
                  Login
                  <span className="material-symbols-outlined">login</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;