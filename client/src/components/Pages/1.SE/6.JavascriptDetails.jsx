import "../Css/details.css";
import Header from "../../Header/HeaderPage";
import Navigation from "../../Navigation/NavPage";
import { NavLink } from "react-router-dom";
import Image from "../images/Software/Javascript.png";
import { useState } from "react";
import axios from "axios";
import Footer from "../../footer/Footer";
const Details = () => {
  const [formData, setFormData] = useState({
    modeOfTraining: "Physical Classroom Training",
    courseDate: "",
    courseTime: "",
    participants: "",
    sponsorship: "Self-Sponsored",
    certificationName: "",
    email: "",
  });

  const [activeContent, setActiveContent] = useState(1);

  const handleScrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = sectionPosition + offset; // Adjust with the offset value
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://appcodeglobal-backend.onrender.com/api/details/Info",
        formData
      );
      console.log(response.data);
      setShowPopup(true); // Show the pop-up
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(true);
      } else {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <div id="content">
        {/* Pop-up Modal */}
        {showPopup && (
          <div className="details-pop">
            <div className="popup">
              <div className="popup-content">
                <span className="material-symbols-outlined check">check</span>
                <h2>Congratulations!</h2>
                <p>Your Details has been successful submitted. thank you!</p>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => {
                      setShowPopup(false);
                    }}
                  >
                    Close
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="details-pop">
            <div className="popup">
              <div className="popup-content">
                <span className="material-symbols-outlined error">
                  notification_important
                </span>{" "}
                <h2>Sorry!</h2>
                <p>Email already registered</p>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => {
                      setErrorMessage(false);
                    }}
                  >
                    Close
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Header />
        <Navigation />
        <div className="container navigate">
          <div className="items">
            <NavLink to="/">Home</NavLink>
            <span className="material-symbols-outlined">arrow_and_edge</span>
          </div>
          <div className="items">
            <NavLink to="/Software">Software</NavLink>
            <span className="material-symbols-outlined">arrow_and_edge</span>
          </div>
          <span>JavaScript</span>
        </div>
        <div className="details-page container">
          <div className="details-items">
            {/* == First Item == */}
            <div className="item">
              <div className="image-container">
                <img src={Image} alt="JavaScript Development Course" />
              </div>

              <div className="concept-container">
                {/* Buttons */}
                <div className="button-group">
                  <p
                    onClick={() => setActiveContent(1)}
                    className={`btn ${activeContent === 1 ? "active" : ""}`}
                  >
                    Course Details
                  </p>
                  <p
                    onClick={() => setActiveContent(2)}
                    className={`btn ${activeContent === 2 ? "active" : ""}`}
                  >
                    Course Info
                  </p>
                  <p
                    onClick={() => setActiveContent(3)}
                    className={`btn ${activeContent === 3 ? "active" : ""}`}
                  >
                    Job Role
                  </p>
                </div>

                {/* Content Section */}
                <div className="content-wrapper">
                  {/* Course Overview */}
                  <div
                    className={`content ${activeContent === 1 ? "show" : ""}`}
                  >
                    <div className="concept-data">
                      <h3>🚀 JavaScript Development Mastery</h3>
                      <p>
                        This course is designed to equip you with the skills
                        needed to master JavaScript:
                      </p>
                      <div className="data-item">
                        📌 1: Introduction to JavaScript
                      </div>
                      <div className="data-item">
                        📌 2: Understanding JavaScript Variables and Data Types
                      </div>
                      <div className="data-item">
                        📌 3: Functions and Scope in JavaScript
                      </div>
                      <div className="data-item">
                        📌 4: Asynchronous JavaScript with Promises and
                        Async/Await
                      </div>
                      <div className="data-item">
                        📌 5: JavaScript DOM Manipulation
                      </div>
                      <div className="data-item">
                        📌 6: Working with JavaScript Events
                      </div>
                      <div className="data-item">
                        📌 7: JavaScript Error Handling and Debugging
                      </div>
                      <div className="data-item">
                        📌 8: Modern JavaScript Features (ES6 and beyond)
                      </div>
                    </div>
                  </div>

                  {/* Learning Objectives */}
                  <div
                    className={`content ${activeContent === 2 ? "show" : ""}`}
                  >
                    <div className="course-data">
                      <h3>🎯 Learning Goals</h3>
                      <ul>
                        <li>
                          ✅ Master the fundamentals of JavaScript and its
                          syntax.
                        </li>
                        <li>
                          ✅ Understand how JavaScript variables, data types,
                          and operators work.
                        </li>
                        <li>
                          ✅ Learn how to handle asynchronous operations using
                          promises and async/await.
                        </li>
                        <li>
                          ✅ Gain proficiency in manipulating the DOM with
                          JavaScript.
                        </li>
                        <li>
                          ✅ Implement JavaScript error handling and debugging
                          techniques.
                        </li>
                        <li>
                          ✅ Keep up with modern JavaScript features, including
                          ES6 and newer updates.
                        </li>
                      </ul>

                      <h4>🔥 What You’ll Build:</h4>
                      <p>This course includes hands-on projects, such as:</p>
                      <ul>
                        <li>🌍 A JavaScript-based To-Do List Application</li>
                        <li>🛍️ A Shopping Cart with Dynamic Item Additions</li>
                        <li>
                          📊 A Weather Dashboard that fetches real-time data
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Career Paths */}
                  <div
                    className={`content ${activeContent === 3 ? "show" : ""}`}
                  >
                    <div className="Roles-container">
                      <h3>💼 Career Opportunities in JavaScript</h3>
                      <p>
                        After completing this course, you’ll be ready to work in
                        the following roles:
                      </p>
                      <ul>
                        <li>
                          🔹 <strong>Frontend Developer</strong> - Build
                          interactive websites using JavaScript.
                        </li>
                        <li>
                          🔹 <strong>JavaScript Developer</strong> - Specialize
                          in JavaScript to create efficient web applications.
                        </li>
                        <li>
                          🔹 <strong>Full-Stack Developer</strong> - Use
                          JavaScript in both the frontend and backend of web
                          applications.
                        </li>
                        <li>
                          🔹 <strong>Freelance Developer</strong> - Offer
                          JavaScript-based development services for various
                          clients.
                        </li>
                        <li>
                          🔹 <strong>Software Engineer</strong> - Create
                          scalable and high-performance JavaScript applications.
                        </li>
                      </ul>

                      <h4>🚀 Take Your Skills to the Next Level</h4>
                      <p>
                        By the end of this course, you’ll have a portfolio of
                        JavaScript projects and the confidence to build
                        production-ready applications!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* == Second Item == */}
            <div className="item">
              <div className="text">
                <h1>JavaScript Development Course</h1>
                <p>
                  A comprehensive course on mastering JavaScript, covering both
                  the fundamentals and advanced concepts. It includes topics
                  like asynchronous programming, DOM manipulation, error
                  handling, and modern JavaScript features (ES6+). Through
                  hands-on projects and real-world examples, you’ll gain the
                  skills necessary to become a proficient JavaScript developer.
                </p>
              </div>

              <div className="text">
                <h4>
                  <span className="material-symbols-outlined">
                    bottom_right_click
                  </span>
                  Certification
                </h4>
                <p>
                  The JavaScript Developer Certification validates your
                  expertise in mastering JavaScript. It covers both the basics
                  and advanced techniques, and demonstrates your ability to
                  build scalable, dynamic applications. This certification will
                  boost your resume and attract potential employers or clients.
                </p>
              </div>

              <div className="text">
                <h4>
                  <span className="material-symbols-outlined">
                    bottom_right_click
                  </span>
                  Duration
                </h4>
                <p>
                  The course is 13 weeks long, with video lessons, interactive
                  coding exercises, and project-based assignments to help you
                  practice what you’ve learned.
                </p>
              </div>

              <div className="text">
                <h4>
                  <span className="material-symbols-outlined">
                    bottom_right_click
                  </span>
                  Benefits
                </h4>
                <p>
                  Benefits of completing the JavaScript Development
                  Certification include:
                  <ul>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Build interactive, dynamic websites with JavaScript.
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Master modern JavaScript features and techniques.
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Gain real-world experience with JavaScript projects.
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Receive a certification to showcase your JavaScript
                      skills.
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Improve your job prospects and marketability as a
                      JavaScript developer.
                    </li>
                  </ul>
                </p>
              </div>

              <div className="text">
                <h4>
                  <span className="material-symbols-outlined">
                    bottom_right_click
                  </span>
                  Technologies Covered
                </h4>
                <p>
                  The course covers JavaScript, asynchronous programming
                  (Promises, async/await), DOM manipulation, error handling,
                  modern JavaScript features (ES6+), and debugging techniques.
                </p>
              </div>
            </div>

            {/* == Third Item */}
            <div className="item">
              <div className="payment-details">
                <div className="info">Fee:</div>
                <div className="info">Ghc 3,000</div>
              </div>

              <form className="modal-form" onSubmit={handleSubmit}>
                {/* Mode of Training */}
                <div className="Radios">
                  <h4>Mode Of Training</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="modeOfTraining"
                      value="Physical Classroom Training"
                      checked={
                        formData.modeOfTraining ===
                        "Physical Classroom Training"
                      }
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Physical Classroom Training
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="modeOfTraining"
                      value="Synchronised Teaching Using Zoom / Ms Teams"
                      checked={
                        formData.modeOfTraining ===
                        "Synchronised Teaching Using Zoom / Ms Teams"
                      }
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Zoom / MS Teams</label>
                  </div>
                </div>

                {/* Course Date */}
                <div className="input-group">
                  <label htmlFor="courseDate">Course Date</label>
                  <select
                    id="courseDate"
                    name="courseDate"
                    required
                    value={formData.courseDate}
                    onChange={handleChange}
                  >
                    <option value="">Select Course Date</option>
                    <option value="January 5">January 5</option>
                    <option value="February 5">February 5</option>
                    <option value="March 5">March 5</option>
                    <option value="April 5">April 5</option>
                    <option value="May 5">May 5</option>
                  </select>
                </div>

                {/* Course Time */}
                <div className="input-group">
                  <label htmlFor="courseTime">Course Time</label>
                  <select
                    id="courseTime"
                    name="courseTime"
                    required
                    value={formData.courseTime}
                    onChange={handleChange}
                  >
                    <option value="">Select Course Time</option>
                    <option value="Morning 8:00 AM - 11:00 PM">
                      Morning (8:00 AM - 11:00 PM)
                    </option>
                    <option value="Afternoon 1:00 PM - 3:00 PM">
                      Afternoon (1:00 PM - 3:00 PM)
                    </option>
                    <option value="Evening 4:00 PM - 7:00 PM">
                      Evening (4:00 PM - 7:00 PM)
                    </option>
                  </select>
                </div>

                {/* No. of Participants */}
                <div className="input-group">
                  <label htmlFor="participants">No. Participants</label>
                  <select
                    id="participants"
                    name="participants"
                    required
                    value={formData.participants}
                    onChange={handleChange}
                  >
                    <option value="">Select Number of Participants</option>
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1} Participant{num > 0 && "s"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sponsorship */}
                <div className="Radios">
                  <h4>Sponsorship</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sponsorship"
                      value="Self-Sponsored"
                      checked={formData.sponsorship === "Self-Sponsored"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Self-Sponsored</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sponsorship"
                      value="Employer-Sponsored"
                      checked={formData.sponsorship === "Employer-Sponsored"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Employer-Sponsored
                    </label>
                  </div>
                </div>

                {/* Official Name for Certification */}
                <div className="input-group">
                  <label htmlFor="certificationName">
                    Official Name for Certifications
                  </label>
                  <textarea
                    name="certificationName"
                    placeholder="Name"
                    required
                    value={formData.certificationName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="input-group">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="btn-container">
                  <button type="submit" className="btn">
                    Submit Your Interest
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </form>
              <div className="course-info">
                <h4>Course Information</h4>
                <p>
                  The course fee is Ghc 5,920. You will be required to pay Ghc
                  2,000 for the first installment and Ghc 1,960 for each
                  additional month.
                </p>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-schedule">
                      schedule
                    </span>
                  </div>
                  <p>
                    <b>Course duration:</b> 3 months, with classes held 3 days a
                    week (Monday to Wednesday). Students will work on a project
                    from Thursday to Sunday and submit it the following Monday.
                  </p>
                </div>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-language">
                      language
                    </span>
                  </div>
                  <p>
                    <b>Course language:</b> English
                  </p>
                </div>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-info">
                      info
                    </span>
                  </div>
                  <p>
                    <b>Additional Notes:</b> Students need to bring their own
                    laptop.
                  </p>
                </div>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-calendar">
                      calendar_today
                    </span>
                  </div>
                  <p>
                    <b>Class Days:</b> Monday to Wednesday (9 hours/week)
                  </p>
                </div>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-time">
                      schedule
                    </span>
                  </div>
                  <p>
                    <b>Class Time:</b> 8:00 AM - 11:00 PM (Morning Batch) or
                    12:00 PM - 3:00 PM (Afternoon Batch)
                  </p>
                </div>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-location">
                      location_on
                    </span>
                  </div>
                  <p>
                    <b>Location:</b> Accra, Mallam-Gbawe
                  </p>
                </div>

                <div className="info-text">
                  <div className="icons">
                    <span className="material-symbols-outlined icon-person">
                      person
                    </span>
                  </div>
                  <p>
                    <b>Instructor:</b> John Doe (Certified Frontend Developer
                    with 10 years of teaching experience)
                  </p>
                </div>
              </div>

              <div className="course-info">
                <h4>Course Cancellation/Reschedule Policy</h4>
                <p>
                  Once payment is made, it is **non-refundable**. Students are
                  expected to carefully review the course details before making
                  a payment.
                </p>
                <p>
                  In the event of unforeseen circumstances, we reserve the right
                  to reschedule the course. However, the course will still be
                  conducted at a later date, and enrolled students will be
                  notified in advance.
                </p>
                <p>A minimum of 3 students is required to start a class.</p>
              </div>
            </div>
          </div>
          <button
            className="back-to-top"
            onClick={() => handleScrollToSection("content")}
          >
            ↑ <br />
            Top
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
