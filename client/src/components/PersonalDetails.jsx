import { useState } from "react";
import { Form, Row, Col, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitPersonalDetails } from "../redux/reducers/studentSlice";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase"; // Import your Firebase Storage
import "./style/PersonalDetails.css";

function PersonalDetails() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.student);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    nationality: "",
    address: "",
    profileImage: "", // Store the uploaded image URL
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Gender selection is required.";
      isValid = false;
    }
    if (!formData.nationality) {
      newErrors.nationality = "Nationality is required.";
      isValid = false;
    }
    if (!formData.address) {
      newErrors.address = "Address is required.";
      isValid = false;
    }
    if (!formData.profileImage) {
      newErrors.profileImage = "Profile image is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSub = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await dispatch(submitPersonalDetails(formData));

        if (res.error) {
          setSubmitError(`Failed to submit form. ${res.error.message}`);
        } else {
          setSuccessMessage("Form submitted successfully!");
          setSubmitError("");
          setShowNextButton(true);
          setFormSubmitted(true);
        }
      } catch (error) {
        console.error("Error Response from Backend:", error);
        setSubmitError(error.message || "An error occurred during form submission.");
      }
    } else {
      setSubmitError("Please correct the errors above.");
    }
  };

  const handleNextClick = () => {
    navigate("/Program");
  };

  const handleProfileImageUpload = (file) => {
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      setSubmitError("Invalid file type. Only JPEG, PNG, and JPG are allowed.");
      return;
    }

    // Create a reference in Firebase storage
    const storageRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed", error);
        setSubmitError("Failed to upload profile image.");
      },
      async () => {
        // Get the download URL after the upload is complete
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setFormData((prev) => ({ ...prev, profileImage: downloadURL }));
        setSuccessMessage("Profile image uploaded successfully!");
      }
    );
  };



  return (
    <div className="layout">
      <div className="icons-container">
        <div className="icons">
          <p>Personal Details</p>
          <span
            className="material-symbols-outlined"
            style={{ color: formSubmitted ? "green" : "black" }}
          >
            {formSubmitted ? "task_alt" : "lock"}
          </span>
        </div>
        <div className="icons">
          <p>Program Applying For</p>
          <span className="material-symbols-outlined">lock</span>
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
      <Container className="form-container">
        <h3>Personal Details</h3>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {submitError && <Alert variant="danger">{submitError}</Alert>}
        {/* Display error if there’s an error message */}
        {error && <p className="error-message">{error}</p>}
        <Form onSubmit={handleSub}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFullName" className="form-group">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formBasicEmail" className="form-group">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formAddress" className="form-group">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPhoneNumber" className="form-group">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formDateOfBirth" className="form-group">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  isInvalid={!!errors.dob}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dob}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGender" className="form-group">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  isInvalid={!!errors.gender}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formNationality" className="form-group">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  type="text"
                  name="nationality"
                  placeholder="Enter your nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  isInvalid={!!errors.nationality}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nationality}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formProfileImage" className="form-group">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      handleProfileImageUpload(file); // Call your upload handler here
                    }
                  }}
                  isInvalid={!!errors.profileImage}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="btn-container">
            <button type="submit" className="btn">
              {loading ? "Submitting..." : "Submit"}
              <span className="material-symbols-outlined">east</span>
            </button>
            {showNextButton && (
              <button
                onClick={handleNextClick}
                className="btn"
              >
                Next
                <span className="material-symbols-outlined">east</span>
              </button>
            )}
          </div>
        </Form>
      </Container>

      {/* Conditional loading spinner */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default PersonalDetails;
