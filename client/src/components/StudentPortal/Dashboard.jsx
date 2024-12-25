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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="dashboard-section">
      <div className="welcome-container">
        <div className="welcome-banner">
          <div className="text-container">
            <span>{greeting}</span>, <span>{user?.name}!</span>
            <h1>Welcome To AppCode Acadamy Student Portal</h1>
            <br />
            <p>
              We’re excited to have you here. Explore your courses, check out
              the latest updates, and make the most of your learning journey.
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
                ✨ 'The beautiful thing about learning is that no one can take
                it away from you.' - B.B. King
              </p>
            </div>

            {/* <!-- Section 4: Quick Actions --> */}
            <div className="dashboard-tile quick-actions">
              <div className="title">
                <i className="bi bi-lightning-fill"></i>
                <h4>Quick Actions</h4>
              </div>
              <div className="actions">
                <a href="/upload-assignment">
                  <i className="bi bi-upload"></i> Upload Assignment
                </a>
                <br />
                <a href="/exam-timetable">
                  <i className="bi bi-clock"></i> View Exam Timetable
                </a>
                <br />
                <a href="/library-resources">
                  <i className="bi bi-book"></i> Library Resources
                </a>
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
            <h2 className="profile-name">
              {studentData.personalDetails.fullName}
            </h2>
            <p className="profile-id">Student ID: {user?.studentId}</p>
          </div>
          <div className="profile-body">
            <p className="profile-admission">Admission Status:<span>Review</span></p>
            <p>
              <i className="bi bi-envelope-fill icon"></i> {/* Email Icon */}
              <div className="profile-data">
                <strong>Email</strong>
                {studentData.personalDetails.email}
              </div>
            </p>
            <p>
              <i className="bi bi-mortarboard-fill icon"></i>{" "}
              {/* Program Icon */}
              <div className="profile-data">
                <strong>Program Name</strong>
                {studentData.programApplyingFor.programName}
              </div>
            </p>
            <p>
              <i className="bi bi-telephone-fill icon"></i> {/* Phone Icon */}
              <div className="profile-data">
                <strong>PhoneNumber</strong>
                {studentData.personalDetails.phone}
              </div>
            </p>
            <p>
              <i className="bi bi-geo-alt-fill icon"></i>{" "}
              {/* Nationality Icon */}
              <div className="profile-data">
                <strong>Country</strong>
                {studentData.personalDetails.nationality}
              </div>
            </p>
          </div>
        </div>

        <div className="announcement-Date">
        <div className="announcement-banner">
          <div className="announcement-header">
            <h3>🎉 Announcements</h3>
          </div>
          <div className="announcement-content">
            <ul>
              <li>
                <span className="icon">📌</span>
                <div>
                  <strong>Upcoming:</strong> Midterm exams start on{" "}
                  <span className="highlight">March 10th</span>.
                </div>
              </li>
              <li>
                <span className="icon">🚀</span>
                <div>
                  <strong>New:</strong> Advanced Web Development course{" "}
                  <span className="highlight">launched now!</span>.
                </div>
              </li>
              <li>
                <span className="icon">🎓</span>
                <div>
                  <strong>Event:</strong> Career Counseling Workshop -{" "}
                  <span className="highlight">March 15th</span>.
                </div>
              </li>
            </ul>
            <div className="announcement-footer">
              <p>Stay updated! Check your portal for more details.</p>
            </div>
          </div>
        </div>

        <DynamicDateTable/>
        </div>
        

      </div>

      {/* <div className="dashboard-card personal-details">
        <h2 className="section-title">Personal Details</h2>
        <p>
          Full Name: <span>{studentData.personalDetails.fullName}</span>
        </p>
        <p>
          Email: <span>{studentData.personalDetails.email}</span>
        </p>
        <p>
          Phone: <span>{studentData.personalDetails.phone}</span>
        </p>
        <p>
          Address: <span>{studentData.personalDetails.address}</span>
        </p>
        <p>
          Nationality: <span>{studentData.personalDetails.nationality}</span>
        </p>
        <p>
          Date of Birth:{" "}
          <span>
            {new Date(studentData.personalDetails.dob).toLocaleDateString()}
          </span>
        </p>
        <p>
          Gender: <span>{studentData.personalDetails.gender}</span>
        </p>
        <p>
          Profile Image:
          <img
            src={studentData.personalDetails.profileImage}
            alt="Profile"
            className="profile-image"
          />
        </p>
      </div>

      <div className="dashboard-card program-details">
        <h2 className="section-title">Program Applying For</h2>
        <p>
          Program Name:{" "}
          <span>{studentData.programApplyingFor.programName}</span>
        </p>
        <p>
          Course Details:{" "}
          <span>{studentData.programApplyingFor.courseDetails}</span>
        </p>
      </div>

      <div className="dashboard-card educational-background">
        <h2 className="section-title">Educational Background</h2>
        <p>
          Qualification:{" "}
          <span>{studentData.educationalBackground.qualification}</span>
        </p>
        <p>
          Institution:{" "}
          <span>{studentData.educationalBackground.institution}</span>
        </p>
        <p>
          Graduation Year:{" "}
          <span>{studentData.educationalBackground.graduationYear}</span>
        </p>
        <p>
          Study Area: <span>{studentData.educationalBackground.studyArea}</span>
        </p>
        <p>
          Certifications:{" "}
          <span>{studentData.educationalBackground.certifications}</span>
        </p>
      </div>

      <div className="dashboard-card guardian-details">
        <h2 className="section-title">Guardian Details</h2>
        <p>
          Full Name: <span>{studentData.guardianDetails.guardianFullName}</span>
        </p>
        <p>
          Relationship: <span>{studentData.guardianDetails.relationship}</span>
        </p>
        <p>
          Phone: <span>{studentData.guardianDetails.guardianPhone}</span>
        </p>
        <p>
          Email: <span>{studentData.guardianDetails.guardianEmail}</span>
        </p>
        <p>
          Occupation:{" "}
          <span>{studentData.guardianDetails.guardianOccupation}</span>
        </p>
      </div>

      <div className="dashboard-card submission-date">
        <h2 className="section-title">Submission Date</h2>
        <p>{studentData.date}</p>
      </div> */}
    </div>
  );
};

export default Dashboard;
