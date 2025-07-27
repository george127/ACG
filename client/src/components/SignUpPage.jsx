import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/reducers/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./style/Signup.css"
import Image from "../assets/signup.png";
import LogoImage from "../components/Header/appcode.png";
import Header from "./Header/HeaderPage";
import Navigation from "./Navigation/NavPage";
import Footer from "./footer/Footer";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // State for success message
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validations
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex validation

  // Function to validate strong password
  const isPasswordValid = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    ); // Min 8 characters with uppercase, lowercase, number, and special character
  // Submit handler function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic Validation
    if (!email || !password || !name || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    // Validate email
    if (!isEmailValid(email)) {
      setError("Invalid email format. Please provide a valid email.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate password
    if (!isPasswordValid(password)) {
      setError(
        "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }

    dispatch(loginStart());

    try {
      const response = await fetch("https://appcodeglobal-backend.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess(data.user));
        setSuccess("Sign-up successful! Redirecting to the login...");
        navigate("/login");
      } else {
        setError(data.message || "Sign-up failed.");
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      dispatch(loginFailure(error.message));
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
        <span>Sign Up</span>
      </div>
    <div className="signup-container container">
      <div className="image-container">
        <img
          src={Image}
          alt="Login Background"
          className="signup-image"
        />
      </div>
      <div className="signup-wrapper">
        <div className="signup-card">
          <div className="logo-container">
            <img
              src={LogoImage}
              alt="Logo" />
          </div>
          <h2 className="signup-title">Create a New Account</h2>

          {/* Error Alert */}
          {error && <div className="signup-alert error">{error}</div>}

          {/* Success Alert */}
          {success && <div className="signup-alert success">{success}</div>}

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
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
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
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

            <div className="form-group password-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="btn-container">
              <button type="submit" className="btn btn-submit">
                Sign Up
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>

          </form>

          <div className="login-link">
            Already have an account
            <Link to="/login">Login into Account</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SignUpPage;
