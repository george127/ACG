import { useState } from "react";
import {
  Form,
  Container,
  Button,
  Alert,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitGuardianDetails } from "../redux/reducers/studentSlice";

function GuardianDetails() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.student);

  const [formData, setFormData] = useState({
    guardianFullName: "", // Updated state field name for consistency
    relationship: "",
    guardianPhone: "", // Updated state field name for consistency
    guardianEmail: "",
    guardianOccupation: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // Handle input changes and reset errors
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear field errors on input change
    setSubmitError(""); // Clear any submit error
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.guardianFullName) {
      newErrors.guardianFullName = "Please enter the guardian's full name.";
      isValid = false;
    }

    if (!formData.relationship) {
      newErrors.relationship =
        "Please enter the relationship with the guardian.";
      isValid = false;
    }

    if (!formData.guardianPhone) {
      newErrors.guardianPhone = "Please enter the guardian's phone number.";
      isValid = false;
    }

    if (!formData.guardianEmail) {
      newErrors.guardianEmail = "Please enter the guardian's email address.";
      isValid = false;
    }

    if (!formData.guardianOccupation) {
      newErrors.guardianOccupation = "Please enter the guardian's occupation.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSub = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Dispatch action
        const res = await dispatch(submitGuardianDetails(formData));

        if (res.error) {
          // Display error message from Redux state if action fails
          setSubmitError("Failed to submit form. " + res.error.message);
        } else {
          setSuccessMessage("Form submitted successfully!");
          setSubmitError("");
          setFormSubmitted(true);
        }
        // Show modal after 4 seconds
        setTimeout(() => {
          setShowModal(true);
        }, 4000);
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

  // Redirect to fees payment
  const handlePaymentClick = () => {
    navigate("/fees-payment");
  };

  // Redirect to home page
  const handleHomeClick = () => {
    navigate("/home");
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
            style={{ color: "green" }}
          >
            task_alt
          </span>
        </div>
        <div className="icons">
          <p>Educational Background</p>
          <span
            className="material-symbols-outlined"
            style={{ color: "green" }}
          >
            task_alt
          </span>
        </div>
        <div className="icons">
          <p>Guardian Details</p>
          <span
            className="material-symbols-outlined"
            style={{ color: formSubmitted ? "green" : "black" }}
          >
            {formSubmitted ? "task_alt" : "lock"}
          </span>
        </div>
      </div>

      <h3>Guardian Details</h3>

      {/* Show success or error message */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <Form onSubmit={handleSub}>
        <Row>
          {/* Guardian Full Name */}
          <Col md={6}>
            <Form.Group controlId="formGuardianFullName">
              <Form.Label>Guardian&apos;s Full Name</Form.Label>
              <Form.Control
                type="text"
                name="guardianFullName"
                placeholder="Enter guardian's full name"
                value={formData.guardianFullName}
                onChange={handleChange}
                isInvalid={!!errors.guardianFullName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.guardianFullName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Relationship to Student */}
          <Col md={6}>
            <Form.Group controlId="formRelationship">
              <Form.Label>Relationship to Student</Form.Label>
              <Form.Control
                type="text"
                name="relationship"
                placeholder="Enter relationship (e.g. Father, Mother, Uncle)"
                value={formData.relationship}
                onChange={handleChange}
                isInvalid={!!errors.relationship}
              />
              <Form.Control.Feedback type="invalid">
                {errors.relationship}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* Guardian Phone Number */}
          <Col md={6}>
            <Form.Group controlId="formGuardianPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="guardianPhone"
                placeholder="Enter guardian's phone number"
                value={formData.guardianPhone}
                onChange={handleChange}
                isInvalid={!!errors.guardianPhone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.guardianPhone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Guardian Email Address */}
          <Col md={6}>
            <Form.Group controlId="formGuardianEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="guardianEmail"
                placeholder="Enter guardian's email address"
                value={formData.guardianEmail}
                onChange={handleChange}
                isInvalid={!!errors.guardianEmail}
              />
              <Form.Control.Feedback type="invalid">
                {errors.guardianEmail}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* Guardian Occupation */}
          <Col md={12}>
            <Form.Group controlId="formGuardianOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                name="guardianOccupation"
                placeholder="Enter guardian's occupation"
                value={formData.guardianOccupation}
                onChange={handleChange}
                isInvalid={!!errors.guardianOccupation}
              />
              <Form.Control.Feedback type="invalid">
                {errors.guardianOccupation}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
            {loading ? "Submitting..." : "Submit" }
          </Button>
      </Form>

      {/* Modal congratulating the user */}
      <Modal show={showModal} centered>
        <Modal.Header>
          <Modal.Title centered>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your guardian details have been successfully submitted!</p>
          <p>
            Would you like to proceed to make your fees payment, or return to
            the homepage?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHomeClick}>
            Go to Homepage
          </Button>
          <Button variant="primary" onClick={handlePaymentClick}>
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

    {/* Conditional loading spinner */}
    {loading && <div className="loading-container"><div className="loading-spinner"></div></div>}
   </div>
  );
}

export default GuardianDetails;
