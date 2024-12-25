// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom'; // Use Link for internal routing

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//     // Password visibility states
//     const [showPassword, setShowPassword] = useState(false);

//   // Function to validate email format
//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Function to validate inputs
//   const validateInputs = () => {
//     if (!email) {
//       setErrorMessage('Email is required.');
//       return false;
//     }
//     if (!isValidEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return false;
//     }
//     if (!password) {
//       setErrorMessage('Password is required.');
//       return false;
//     }
//     if (password.length < 8) {
//       setErrorMessage('Password must be at least 8 characters long.');
//       return false;
//     }
//     setErrorMessage('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!validateInputs()) {
//       setSuccessMessage('');
//       return;
//     }
  
//     setLoading(true);
//     setErrorMessage('');
//     setSuccessMessage('');
  
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
  
//       let data;
//       const contentType = response.headers.get('Content-Type');
//       if (contentType && contentType.includes('application/json')) {
//         data = await response.json();
//       } else {
//         throw new Error('Invalid server response. Not JSON.');
//       }
  
//       if (response.ok) {
//         setSuccessMessage('Login successful! Redirecting...');
//         setTimeout(() => {
//           window.location.href = '/StudentPortal'; // Redirect to the portal
//         }, 1500);
//       } else {
//         setErrorMessage(data.message || 'Invalid email or password.');
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred. Please try again later.');
//       console.error('Error:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
  
  
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow p-4">
//             <h2 className="text-center mb-4">Login</h2>

//             {/* Alert for Success */}
//             {successMessage && (
//               <div className="alert alert-success" role="alert">
//                 {successMessage}
//               </div>
//             )}

//             {/* Alert for Errors */}
//             {errorMessage && (
//               <div className="alert alert-danger" role="alert">
//                 {errorMessage}
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               {/* Email Input */}
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label> 
//                 <input
//                   id="email"
//                   type="email"
//                   className="form-control"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                 type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   className="form-control"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span
//                   className="position-absolute top-50 end-0 translate-middle-y me-3"
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? '🙈' : '👁️'}
//                 </span>
//               </div>

//               {/* Submit Button with Loading Spinner */}
//               <div className="d-grid">
//                 <button
//                   type="submit"  
//                   className="btn btn-primary"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <>
//                       <span
//                         className="spinner-border spinner-border-sm me-2"
//                         role="status"
//                         aria-hidden="true"
//                       ></span>
//                       Logging in...
//                     </>
//                   ) : (
//                     'Login'
//                   )}
//                 </button>
//               </div>
//             </form>

//             {/* Additional Links */}
//             <div className="text-center mt-3">
//               <button className="btn btn-link">Forgot password?
//               </button>
//               <button className="btn btn-link">
//               <Link to="/signup">Create an account</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../redux/reducers/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

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
      const response = await fetch("http://localhost:5000/api/auth/login", {
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>

            {/* Success Message */}
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}

            {/* Error Message */}
            {(error || errorMessage) && (
              <div className="alert alert-danger" role="alert">
                {errorMessage || error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <Link to="/signup" className="btn btn-link">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
