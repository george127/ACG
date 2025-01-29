import "./Css/details.css";
import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import { NavLink } from "react-router-dom";
import Image from "./images/Software/avt.frontend.png";
const FrontDetails = () => {
  const handleScrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = sectionPosition + offset; // Adjust with the offset value
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <div id="content">
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
          <span>FrontEnd </span>
        </div>
        <div className="details-page container">
          <div className="details-items">
            {/* == First Item == */}
            <div className="item">
              <div className="image-container">
                <img src={Image} alt="Front-end development course" />
              </div>
              <div className="accordian">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        items accordion body.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        items accordion body. Lets imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        items accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* == Second Item */}
            <div className="item">
              <div className="text">
                <h1>Front-End Development Course</h1>
                <p>
                  A comprehensive course on front-end development that covers
                  HTML, CSS, JavaScript, and various frameworks and libraries.
                  It covers topics like responsive design, accessibility, and
                  best practices. The course covers various online platforms and
                  provides step-by-step tutorials and practice exercises. The
                  course also offers a certificate of completion and valuable
                  resources to help you become a successful front-end developer.
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
                  The Front-End Development Certification (FED) is an official
                  certification by the World Wide Web Consortium (W3C) that
                  validates advanced skills in front-end development. It covers
                  topics like HTML, CSS, JavaScript, and various frameworks and
                  libraries. The certification is available for both individuals
                  and organizations.
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
                  The course is 12 weeks long, covering 25 hours of video and 15
                  hours of hands-on practice exercises. The course also includes
                  a 1-week project-based assessment.
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
                  Benefits of completing the Front-End Development Certification
                  include:
                  <ul>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Gain valuable experience in front-end development
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Become a certified professional in front-end development
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Become a valuable resource for your career
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Get a certificate of completion
                    </li>
                    <li>
                      <span className="material-symbols-outlined">
                        done_all
                      </span>
                      Expand your knowledge and skills
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
                  The course covers HTML, CSS, JavaScript, and various
                  frameworks and libraries such as React and others. It also
                  covers topics like responsive design, accessibility, and best
                  practices.
                </p>
              </div>
            </div>
            {/* == Third Item */}
            <div className="item">
              <div className="payment-details">
                <div className="info">Fee:</div>
                <div className="info">Ghc 5,920</div>
              </div>

              <div className="Radios">
                <h4>Mode Of Training</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  ></input>
                  <label className="form-check-label">
                    Physical Classroom Training
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  ></input>
                  <label className="form-check-label">
                    Synchronised Teaching Using Zoom
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  ></input>
                  <label className="form-check-label">
                    Synchronised Teaching Using Ms Teams
                  </label>
                </div>
              </div>

              <form className="modal-form">
                <div className="input-group">
                  <label htmlFor="course-date">Course Date</label>
                  <select id="course-date" name="course-date" required>
                    <option value="">Select Course Date</option>
                    <option value="2025-02-01">February 1, 2025</option>
                    <option value="2025-03-01">March 1, 2025</option>
                    <option value="2025-04-01">April 1, 2025</option>
                    <option value="2025-05-01">May 1, 2025</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="course-time">Course Time</label>
                  <select id="course-time" name="course-time" required>
                    <option value="">Select Course Time</option>
                    <option value="morning">
                      Morning (8:00 AM - 12:00 PM)
                    </option>
                    <option value="afternoon">
                      Afternoon (1:00 PM - 5:00 PM)
                    </option>
                    <option value="evening">Evening (6:00 PM - 9:00 PM)</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="no-participants">No. Participants</label>
                  <select id="no-participants" name="no-participants" required>
                    <option value="">Select Number of Participants</option>
                    <option value="1">1 Participant</option>
                    <option value="2">2 Participants</option>
                    <option value="3">3 Participants</option>
                    <option value="4">4 Participants</option>
                    <option value="5">5 Participants</option>
                    <option value="6">6 Participant</option>
                    <option value="7">7 Participants</option>
                    <option value="8">3 Participants</option>
                    <option value="9">9 Participants</option>
                    <option value="10">10 Participants</option>
                  </select>
                </div>
              </form>

              <div className="Radios">
                <h4>Sponsorship</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaultS"
                    id="flexRadioDefault"
                    checked
                  ></input>
                  <label className="form-check-label">Self-Sponsered</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaultS"
                    id="flexRadioDefault1"
                  ></input>
                  <label className="form-check-label">Employer-Sponsored</label>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Official Name For Certifications</label>
                <textarea type="text" placeholder="Enter your email" required />
              </div>

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
    </>
  );
};

export default FrontDetails;
