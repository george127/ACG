import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Accessing user info from Redux store
import { useNavigate } from "react-router-dom"; // UseNavigate hook for navigation in v6
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/StudentPortal.css";
// import profileImage from "../assets/profile-icon.png"; // Default profile image
import Logo from "./images/appcode.png";
import { logout } from "../../redux/reducers/authSlice"; // Import logout action
import PaymentInfo from "./PaymentInfo";
import Dashboard from "./Dashboard";

const StudentPortal = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userEmail = user?.email;

  useEffect(() => {
    if (!user?.email) return; // Ensure email is present

    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/students/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }

        const data = await response.json();
        setStudentData(data.student);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [user?.email]);

  // Fetch user data and authentication status from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate(); // UseNavigate hook for navigation

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Navigate to login page
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login after logout
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-flex">
      <>
        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile-container">
            <img
              src={studentData.personalDetails.profileImage}
              alt="Profile Icon"
              className="profile-image"
            />
            <p className="name">
              {studentData.personalDetails.fullName || "Guest"}
            </p>
          </div>
          <ul className="nav flex-column p-3">
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "dashboard" ? "active" : ""
                }`}
                onClick={() => setActiveSection("dashboard")}
              >
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "paymentInfo" ? "active" : ""
                }`}
                onClick={() => setActiveSection("paymentInfo")}
              >
                <i className="bi bi-card-list me-2"></i>
                Payment Info
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "profile" ? "active" : ""
                }`}
                onClick={() => setActiveSection("profile")}
              >
                <i className="bi bi-person-circle me-2"></i>
                Profile
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "courses" ? "active" : ""
                }`}
                onClick={() => setActiveSection("courses")}
              >
                <i className="bi bi-book me-2"></i>
                Courses
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "grades" ? "active" : ""
                }`}
                onClick={() => setActiveSection("grades")}
              >
                <i className="bi bi-bar-chart me-2"></i>
                Grades
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "settings" ? "active" : ""
                }`}
                onClick={() => setActiveSection("settings")}
              >
                <i className="bi bi-gear me-2"></i>
                Settings
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`nav-link ${
                  activeSection === "logout" ? "active" : ""
                }`}
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Log Out
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="nav-container">
            <div className="navba">
              <div className="navbar-left">
                <img src={Logo} alt="" className="logo"/>
              </div>
              <div className="navbar-center">
                <div className="search-bar">
                  <i className="bi bi-search search-icon"></i>
                  <input type="text" placeholder="Search..." />
                </div>
              </div>
              <div className="navbar-right">
                <i className="bi bi-envelope message-icon" title="Messages"></i>
                <i
                  className="bi bi-bell notification-icon"
                  title="Notifications"
                ></i>
                <button className="logout-btn">
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </div>
            </div>
          </div>
          {activeSection === "dashboard" && (
            <div className="section md-4">
              <Dashboard />
            </div>
          )}
          {activeSection === "paymentInfo" && (
            <div className="section mb-4">
              <h2>Payment Info</h2>
              <PaymentInfo email={userEmail} />
            </div>
          )}
          {activeSection === "profile" && (
            <div className="section mb-4">
              <h2>Profile</h2>
              <p>View and edit your personal information here.</p>
            </div>
          )}
          {activeSection === "courses" && (
            <div className="section mb-4">
              <h2>Courses</h2>
              <p>View your enrolled courses and manage your schedule.</p>
            </div>
          )}
          {activeSection === "grades" && (
            <div className="section mb-4">
              <h2>Grades</h2>
              <p>Check your grades and academic progress.</p>
            </div>
          )}
          {activeSection === "settings" && (
            <div className="section mb-4">
              <h2>Settings</h2>
              <p>Manage your account settings and preferences.</p>
            </div>
          )}
          {/* Footer */}
          <div className="footer text-center text-white p-3">
            Copyright &copy; 2023 Your Website. All rights reserved.
          </div>
        </div>
      </>
    </div>
  );
};

export default StudentPortal;
