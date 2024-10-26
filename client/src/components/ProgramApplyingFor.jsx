import { useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitprogramApplyingFor } from "../redux/reducers/studentSlice";

function ProgramApplyingFor() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.student);

  const [formData, setLocalFormData] = useState({
    programName: "",
    courseDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Program validation
    if (!formData.programName) {
      newErrors.programName = "Please select a program.";
      isValid = false;
    }

    // Course details validation
    if (!formData.courseDetails) {
      newErrors.courseDetails = "Please provide details about your choice.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSub = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Dispatch action
        const res = await dispatch(submitprogramApplyingFor(formData));

        if (res.error) {
          // Display error message from Redux state if action fails
          setSubmitError("Failed to submit form. " + res.error.message);
        } else {
          setSuccessMessage("Form submitted successfully!");
          setSubmitError("");
          setShowNextButton(true);
          setFormSubmitted(true);
        }
      } catch (error) {
        console.error("Error Response from Backend:", error);
        setSubmitError(
          error.message || "An error occurred during form submission."
        );
      }
    } else {
      setSubmitError("Please correct the errors above.");
    }
  };

  const handleNextClick = () => {
    navigate("/Background");
  };

  return (
    <div className="layout">
      <Container className="form-container">
      <div className="icons-container">
        <div className="icons">
          <p>Personal Details</p>
          <span
            className="material-symbols-outlined"
            style={{ color: "green" }}
          >
            task_alt
          </span>
        </div>
        <div className="icons">
          <p>Program Applying For</p>
          <span
            className="material-symbols-outlined"
            style={{ color: formSubmitted ? "green" : "black" }}
          >
            {formSubmitted ? "task_alt" : "lock"}
          </span>
        </div>
        <div className="icons">
          <p>Educational Background</p>
          <span className="material-symbols-outlined">lock</span>
        </div>
        <div className="icons">
          <p>Guardian Details</p>
          <span className="material-symbols-outlined">lock</span>
        </div>
      </div>

      <h3>Program Applying For</h3>

      {/* Show success or error message */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <Form onSubmit={handleSub}>
        <Form.Group controlId="formProgram">
          <Form.Label>Select Program</Form.Label>
          <Form.Control
            as="select"
            name="programName"
            onChange={handleChange}
            isInvalid={!!errors.programName}
            value={formData.programName}
          >
            <option value="">Choose a program</option>
            <option value="software-engineering">Software Engineering</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="data-analytics">Data Analytics</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.programName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formCourseDetails">
          <Form.Label>Why do you want to join this program?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="courseDetails"
            placeholder="Tell us briefly why you chose this program"
            onChange={handleChange}
            isInvalid={!!errors.courseDetails}
            value={formData.courseDetails}
          />
          <Form.Control.Feedback type="invalid">
            {errors.courseDetails}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
            {loading ? "Submitting..." : "Submit" }
          </Button>
          
          {showNextButton && (
            <Button variant="success" onClick={handleNextClick}>
              Next
            </Button>
          )}
      </Form>
    </Container>
      {/* Conditional loading spinner */}
      {loading && <div className="loading-container"><div className="loading-spinner"></div></div>}
    </div>
  );
}

export default ProgramApplyingFor;
