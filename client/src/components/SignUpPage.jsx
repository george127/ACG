// import { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Password visibility states
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // Validations
//   const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex validation

//   // Function to validate strong password
//   const isPasswordValid = (password) =>
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//       password
//     ); // Min 8 characters with uppercase, lowercase, number, and special character
//   // Submit handler function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(""); // Clear any existing message

//     // Validate email
//     if (!isEmailValid(email)) {
//       setMessage("Invalid email format. Please provide a valid email.");
//       return;
//     }

//     // Validate password
//     if (!isPasswordValid(password)) {
//       setMessage(
//         "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character."
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

//     if (password.length < 8) {
//       setMessage('Password must be at least 8 characters long.');
//       return false;
//     }

//     setLoading(true); // Show spinner
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/SignUp",
//         {
//           name,
//           email,
//           password,
//         }
//       );

//       setMessage(response.data.message || "User signed up successfully");
//     } catch (error) {
//       setMessage(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow p-4">
//             <h2 className="text-center mb-4">Sign Up</h2>

//             {/* Bootstrap Alerts */}
//             {message && (
//               <div
//                 className={`alert ${
//                   message.includes("successfully")
//                     ? "alert-success"
//                     : "alert-danger"
//                 }`}
//                 role="alert"
//               >
//                 {message}
//               </div>
//             )}

//             {/* Sign Up Form */}
//             <form onSubmit={handleSubmit}>
//               {/* Name Input */}
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="form-control"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="form-control"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 {/* Dynamic Validation Message */}
//                 {!isEmailValid(email) && email && (
//                   <div className="text-danger mt-1">
//                     Please enter a valid email address.
//                   </div>
//                 )}
//               </div>

//               {/* Password Input */}
//               <div className="mb-3 position-relative">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   className="form-control"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <span
//                   className="position-absolute top-50 end-0 translate-middle-y me-3"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "🙈" : "👁️"}
//                 </span>
//                 {/* Dynamic Validation Message */}
//                 {!isPasswordValid(password) && password && (
//                   <div className="text-danger mt-1">
//                     Password must have at least one uppercase letter, one
//                     lowercase letter, one number, and one special character.{" "}
//                   </div>
//                 )}
//               </div>

//               {/* Confirm Password Input */}
//               <div className="mb-3 position-relative">
//                 <label htmlFor="confirmPassword" className="form-label">
//                   Confirm Password
//                 </label>
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   className="form-control"
//                   placeholder="Confirm your password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//                 <span
//                   className="position-absolute top-50 end-0 translate-middle-y me-3"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? "🙈" : "👁️"}
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
//                       Signing Up...
//                     </>
//                   ) : (
//                     "Sign Up"
//                   )}
//                 </button>
//               </div>
//             </form>

//             {/* Footer */}
//             <div className="text-center mt-3">
//               <p>
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-primary text-decoration-none">
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/reducers/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

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
      const response = await fetch("http://localhost:5000/api/auth/signup", {
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Sign Up</h2>

            {/* Alert for Errors */}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {/* Alert for Success */}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
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
                type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <Link to="/login" className="btn btn-link">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
