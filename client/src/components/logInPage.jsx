import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../redux/reducers/authSlice";
import { NavLink } from "react-router-dom";
import "./style/LogInPage.css"
import Image from "../assets/login.png";
import LogoImage from "../components/Header/appcode.png";
import Header from "./Header/HeaderPage";
import Navigation from "./Navigation/NavPage";
import Footer from "./footer/Footer";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate inputs before form submission
  const validateInputs = () => {
    if (!email) {
      setErrorMessage("Email is required.");
      return false;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    if (!password) {
      setErrorMessage("Password is required.");
      return false;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return false;
    }
    setErrorMessage(""); // Clear errors if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // Do not proceed if validation fails
    }

    dispatch(loginStart());
    try {
      const response = await fetch("https://appcodeglobal-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess(data.user));
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/StudentPortal"), 1500);
      } else {
        dispatch(loginFailure(data.message));
        setErrorMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      dispatch(loginFailure("An error occurred. Please try again later."));
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="container navigate">
        <div className="items">
          <NavLink to="/">Home</NavLink>
          <span className="material-symbols-outlined">arrow_and_edge</span>
        </div>
        <span>Log In</span>
      </div>
      <div className="login-container container">
        <div className="image-container">
          <img
            src={Image}
            alt="Login Background"
            className="login-image"
          />
        </div>
        <div className="login-wrapper">
          <div className="login-card">
            <div className="logo-container">
              <img
                src={LogoImage}
                alt="Logo" />
            </div>
            <h2 className="login-title">Login into Your Account</h2>

            {successMessage && (
              <div className="login-alert success">{successMessage}</div>
            )}

            {(error || errorMessage) && (
              <div className="login-alert error">
                {errorMessage || error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group password-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              <div className="btn-container">
                <button type="submit" className="btn btn-submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>

            </form>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <div className="signup-link">
              Don&apos;t have an account?
              <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
