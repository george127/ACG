import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Accessing user info from Redux store
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/Dashboard.css";
import DynamicDateTable from "./DynamicDateTable";


const Dashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.auth);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="dashboard-section">
      <div className="welcome-container">
        <div className="welcome-banner">
          <div className="text-container">
            <div className="welcome-greeting">
              <span role="img" aria-label="wave">👋</span> {greeting}, <span className="user-name">{user?.name}</span>
            </div>
            <h1>
              <div className="banner-item"></div>
              Welcome to AppCode Global Student Portal
            </h1>
            <p>
              <i className="fas fa-rocket"></i> We’re excited to have you here. Explore your courses,
              check out the latest updates, and make the most of your learning journey.
            </p>
          </div>
        </div>



        <div className="student-dashboard">
          <div className="dashboard-sections">
            {/* <!-- Section 1: Progress Tracker --> */}
            <div className="dashboard-tile progress-tracker">
              <div className="title">
                <i className="bi bi-bar-chart-fill"></i>
                <h4>Your Progress</h4>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
              <p>📚 75% of your courses completed this semester!</p>
            </div>

            {/* <!-- Section 2: Daily Schedule --> */}
            <div className="dashboard-tile daily-schedule">
              <div className="title">
                <i className="bi bi-calendar3"></i>
                <h4>Today&apos;s Schedule</h4>
              </div>
              <ul>
                <li>🕘 9:00 AM - Math Lecture</li>
                <li>🕒 2:00 PM - Science Lab</li>
                <li>🕔 5:00 PM - Assignment Review</li>
              </ul>
            </div>

            {/* <!-- Section 3: Motivational Quote --> */}
            <div className="dashboard-tile motivation">
              <div className="title">
                <i className="bi bi-emoji-smile"></i>
                <h4>Motivational Quote</h4>
              </div>
              <p>
                ✨ &apos; The beautiful thing about learning is that no one can take
                it away from you. &apos; - B.B. King
              </p>
            </div>

            {/* <!-- Section 4: Quick Actions --> */}
            <div className="dashboard-tile quick-actions">
              <div className="title">
                <i className="bi bi-lightning-fill"></i>
                <h4>Quick Actions</h4>
              </div>
              <div className="actions">
                <div className="btn-container">
                  <a href="/upload-assignment" className="btn btn-submit">
                    Upload Assignment
                    <span className="material-symbols-outlined">east</span>
                  </a>
                </div>
                <br />
                <div className="btn-container">
                  <a href="/exam-timetable" className="btn btn-submit">
                    View Exam Timetable
                    <span className="material-symbols-outlined">east</span>
                  </a>
                </div>
                <br />
                <div className="btn-container">
                  <a href="/library-resources" className="btn btn-submit">
                    Library Resources
                    <span className="material-symbols-outlined">east</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-header">
            <img
              className="profile-image"
              src={studentData.personalDetails.profileImage}
              alt="Profile Icon"
            />
            <div className="student-profile-header">
              <h2 className="student-name">
                <i className="fas fa-user-graduate"></i> {studentData.personalDetails.fullName}
              </h2>
              <p className="student-id">
                <i className="fas fa-id-badge"></i> Student ID: {user?.studentId}
              </p>
            </div>

          </div>
          <div className="profile-body">
            <p className="profile-admission">
              Admission Status:
              <span className="status-label review">Review</span>
            </p>
            <div className="detail-item">
              <div className="icon-wrapper"><i className="bi bi-envelope-fill"></i></div>
              <div className="info-text">
                <strong>Email</strong>
                <p>{studentData.personalDetails.email}</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon-wrapper"><i className="bi bi-mortarboard-fill"></i></div>
              <div className="info-text">
                <strong>Program Name</strong>
                <p>{studentData?.programApplyingFor?.programName}</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="icon-wrapper"><i className="bi bi-telephone-fill"></i></div>
              <div className="info-text">
                <strong>PhoneNumber</strong>
                <p>{studentData.personalDetails.phone}</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="icon-wrapper"><i className="bi bi-geo-alt-fill"></i></div>
              {/* Nationality Icon */}
              <div className="info-text">
                <strong>Country</strong>
                <p>{studentData.personalDetails.nationality}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="announcement-date">
          <div className="announcement-banner">
            <div className="announcement-header">
              <h3>📣 Announcements</h3>
            </div>

            <div className="announcement-content">
              <ul className="announcement-list">
                <li>
                  <span className="icon">📌</span>
                  <div>
                    <strong>Upcoming:</strong> Midterm exams start on <span className="highlight">March 10th</span>.
                  </div>
                </li>
                <li>
                  <span className="icon">🚀</span>
                  <div>
                    <strong>New:</strong> Advanced Web Development course <span className="highlight">launched now!</span>.
                  </div>
                </li>
                <li>
                  <span className="icon">🎓</span>
                  <div>
                    <strong>Event:</strong> Career Counseling Workshop - <span className="highlight">March 15th</span>.
                  </div>
                </li>
              </ul>

              <div className="announcement-footer">
                <p>🔔 Stay updated! Check your portal for more details.</p>
              </div>
            </div>
          </div>

          <DynamicDateTable />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
