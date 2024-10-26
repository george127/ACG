import { useState } from 'react';
import { Form, Container, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { submitEducationalBackground } from "../redux/reducers/studentSlice";

function EducationalBackground() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.student);
  
  const [formData, setLocalFormData] = useState({
    qualification: '',
    institution: '',
    graduationYear: '',
    studyArea: '',
    certifications: ''
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showNextButton, setShowNextButton] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setSubmitError('');
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.qualification) {
      newErrors.qualification = 'Please enter your highest qualification.';
      isValid = false;
    }
    if (!formData.institution) {
      newErrors.institution = 'Please enter the institution name.';
      isValid = false;
    }
    if (!formData.graduationYear) {
      newErrors.graduationYear = 'Please enter your year of graduation.';
      isValid = false;
    } else if (formData.graduationYear < 1900 || formData.graduationYear > new Date().getFullYear()) {
      newErrors.graduationYear = 'Please enter a valid year of graduation.';
      isValid = false;
    }
    if (!formData.studyArea) {
      newErrors.studyArea = 'Please enter your area of study.';
      isValid = false;
    }
    if (!formData.certifications) {
      newErrors.certifications = 'Please list any additional courses or certifications.';
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
        const res = await dispatch(submitEducationalBackground(formData));

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
    navigate('/guardian'); // Navigate to the next form
  };

  return (
   <div className="layout">
     <Container className="form-container">
       <div className="icons-container">
        <div className="icons">
          <p>Personal Details</p>
          <span className="material-symbols-outlined" style={{ color: 'green' }}>
           task_alt
          </span>
        </div>
        <div className="icons">
          <p>Program Applying For</p>
          <span className="material-symbols-outlined" style={{ color: 'green' }}>
           task_alt
          </span>
        </div>
        <div className="icons">
          <p>Educational Background</p>
          <span className="material-symbols-outlined" style={{ color: formSubmitted ? 'green' : 'black' }}>
            {formSubmitted ? 'task_alt' : 'lock'}
          </span>
        </div>
        <div className="icons">
          <p>Guardian Details</p>
          <span className="material-symbols-outlined">
            lock
          </span>
        </div>
      </div>
      <h3>Educational Background</h3>

      {/* Show success or error message */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <Form onSubmit={handleSub}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formQualification">
              <Form.Label>Highest Qualification</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                placeholder="Enter your highest qualification"
                value={formData.qualification}
                onChange={handleChange}
                isInvalid={!!errors.qualification}
              />
              <Form.Control.Feedback type="invalid">{errors.qualification}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formInstitution">
              <Form.Label>Institution Name</Form.Label>
              <Form.Control
                type="text"
                name="institution"
                placeholder="Enter the institution name"
                value={formData.institution}
                onChange={handleChange}
                isInvalid={!!errors.institution}
              />
              <Form.Control.Feedback type="invalid">{errors.institution}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGraduationYear">
              <Form.Label>Year of Graduation</Form.Label>
              <Form.Control
                type="number"
                name="graduationYear"
                placeholder="Enter your year of graduation"
                value={formData.graduationYear}
                onChange={handleChange}
                isInvalid={!!errors.graduationYear}
              />
              <Form.Control.Feedback type="invalid">{errors.graduationYear}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formStudyArea">
              <Form.Label>Area of Study</Form.Label>
              <Form.Control
                type="text"
                name="studyArea"
                placeholder="Enter your area of study"
                value={formData.studyArea}
                onChange={handleChange}
                isInvalid={!!errors.studyArea}
              />
              <Form.Control.Feedback type="invalid">{errors.studyArea}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="formCertifications">
              <Form.Label>Additional Courses or Certifications</Form.Label>
              <Form.Control
                as="textarea"
                name="certifications"
                rows={3}
                placeholder="List any additional courses or certifications"
                value={formData.certifications}
                onChange={handleChange}
                isInvalid={!!errors.certifications}
              />
              <Form.Control.Feedback type="invalid">{errors.certifications}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
            {loading ? "Submitting..." : "Submit" }
          </Button>

        {/* Conditionally render the Next button */}
        {showNextButton && (
          <Button variant="primary" onClick={handleNextClick} className="mt-3">
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

export default EducationalBackground;
