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
import FeesPayment from "./FeesPayment";
import ProfilePage from "./ProfilePage";

const StudentPortal = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userEmail = user?.email;
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const togglePaymentDropdown = () => {
    setIsPaymentDropdownOpen(!isPaymentDropdownOpen);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  useEffect(() => {
    if (!user?.email) return; // Ensure email is present

    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `https://acg1.onrender.com/api/students/${user?.email}`
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
              <div className="sidebar-item">
                <div
                  className="dropdown-header"
                  onClick={togglePaymentDropdown}
                >
                  <button
                    className={`nav-link ${
                      isPaymentDropdownOpen ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-card-list me-2"></i>
                    Payment Info
                    <span
                      className={`arrow-icon ${
                        isPaymentDropdownOpen ? "open" : ""
                      }`}
                    >
                      &#9662;
                    </span>
                  </button>
                </div>
                {isPaymentDropdownOpen && (
                  <div className="dropdown-list">
                    <div
                      className={`dropdown-item ${
                        activeSection === "feespayment" ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("feespayment")}
                    >
                      Fees Payment
                    </div>
                    <div
                      className={`dropdown-item ${
                        activeSection === "paymentdetails" ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("paymentdetails")}
                    >
                      Payment Details
                    </div>
                  </div>
                )}
              </div>
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
              <div className="sidebar-item">
                <div
                  className="dropdown-header"
                  onClick={toggleCoursesDropdown}
                >
                  <button
                    className={`nav-link ${
                      isCoursesDropdownOpen ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-book me-2"></i>
                    Courses
                    <span
                      className={`arrow-icon ${
                        isCoursesDropdownOpen ? "open" : ""
                      }`}
                    >
                      &#9662;
                    </span>
                  </button>
                </div>
                {isCoursesDropdownOpen && (
                  <div className="dropdown-list">
                    <div
                      className={`dropdown-item ${
                        activeSection === "course Module" ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("course Module")}
                    >
                      course Module
                    </div>
                    <div
                      className={`dropdown-item ${
                        activeSection === "course material" ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("course material")}
                    >
                      course material
                    </div>
                    <div
                      className={`dropdown-item ${
                        activeSection === "Performance " ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("Performance")}
                    >
                      Performance
                    </div>
                    <div
                      className={`dropdown-item ${
                        activeSection === "Grade " ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("Grade")}
                    >
                      Grade
                    </div>
                    <div
                      className={`dropdown-item ${
                        activeSection === "Assignment " ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("Assignment")}
                    >
                      Assignment
                    </div>
                    <div
                      className={`dropdown-item ${
                        activeSection === "quiz " ? "active" : ""
                      }`}
                      onClick={() => setActiveSection("quiz")}
                    >
                      quiz
                    </div>
                  </div>
                )}
              </div>
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
                <img src={Logo} alt="" className="logo" />
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
              </div>
            </div>
          </div>
          {activeSection === "dashboard" && (
            <div className=" md-4">
              <Dashboard />
            </div>
          )}
          {activeSection === "paymentdetails" && (
            <div className=" mb-4">
              <PaymentInfo email={userEmail} />
            </div>
          )}
          {activeSection === "feespayment" && (
            <div className=" mb-4">
              <FeesPayment />
            </div>
          )}
          {activeSection === "profile" && (
            <div className=" mb-4">
              <h2>Profile</h2>
              <ProfilePage />
            </div>
          )}

          {activeSection === "course Module" && (
            <div className="section">
              <h2>Enrolled Courses</h2>
              <p>Here are your enrolled courses...</p>
            </div>
          )}

          {activeSection === "course material" && (
            <div className="section">
              <h2>Available Courses</h2>
              <p>Here are the courses available for enrollment...</p>
            </div>
          )}

          {activeSection === "Performance" && (
            <div className="section">
              <h2>Completed Courses</h2>
              <p>Here are the courses you have completed...</p>
            </div>
          )}

          {activeSection === "Grade" && (
            <div className="section">
              <h2>Completed Courses</h2>
              <p>Here are the courses you have completed...</p>
            </div>
          )}

          {activeSection === "Assignment" && (
            <div className="section">
              <h2>Completed Courses</h2>
              <p>Here are the courses you have completed...</p>
            </div>
          )}

          {activeSection === "quiz" && (
            <div className="section">
              <h2>Completed Courses</h2>
              <p>Here are the courses you have completed...</p>
            </div>
          )}

          {activeSection === "settings" && (
            <div className="section mb-4">
              <h2>Settings</h2>
              <p>Manage your account settings and preferences.</p>
            </div>
          )}
          {/* Footer */}
          <div className="footer">
            <p>&copy; {new Date().getFullYear()} AppCode Student Portal. All rights reserved.</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default StudentPortal;
