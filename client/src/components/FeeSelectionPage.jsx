import "./style/FeeSelectionPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import feeimage1 from "../assets/feeimage1.jpeg";
import feeimage2 from "../assets/feeimage2.jpeg";
import feeimage3 from "../assets/feeimage3.jpeg";
import feeimage4 from "../assets/feeimage4.jpeg";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/HeaderPage";
import Navigation from "../components/Navigation/NavPage";
function FeeSelectionPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");
  const [installment, setInstallment] = useState("");
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({});

  const paymentLinks = {
    2000: "https://paystack.shop/pay/7faz2q19tm",
    1920: "https://paystack.shop/pay/7faz2q19tm",
  };

  // Get user email and payment status
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user.email) {
          setEmail(user.email);
          fetchPaymentStatus(user.email);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const fetchPaymentStatus = async (userEmail) => {
    try {
      const response = await axios.get(
        `https://acg-7euk.onrender.com/api/fees/payment-status/${userEmail}`
      );
      console.log("Payment status received:", response.data);
      setPaymentStatus(response.data);
    } catch (error) {
      console.error("Error fetching payment status:", error);
    }
  };

  const handlePayment = (amount, semester, installment) => {
    setAmount(amount);
    setSemester(semester);
    setInstallment(installment);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const data = { email, semester, installment, amount };
      await axios.post("https://acg-7euk.onrender.com/api/fees/SaveFormData", data);

      const paymentLink = paymentLinks[amount];
      if (!paymentLink) {
        console.error(`No payment link for amount: ${amount}`);
        setIsLoading(false);
        return;
      }

      window.location.href = `${paymentLink}?metadata=${encodeURIComponent(
        JSON.stringify({ email, semester, installment, amount })
      )}`;
    } catch (error) {
      console.error("Payment initialization error:", error);
      setIsLoading(false);
    }
  };

  // Check if installment is paid
  const isInstallmentPaid = (semester, installment) => {
    return paymentStatus[semester] &&
      (paymentStatus[semester][installment] === "paid" ||
        paymentStatus[semester][installment] === "success");
  };

  // Check if ALL installments in a semester are paid
  const isSemesterCompleted = (semester) => {
    const installments = ["First Installment", "Second Installment", "Third Installment"];
    return installments.every(installment => isInstallmentPaid(semester, installment));
  };

  // Check if previous installment is paid (to enable next one)
  const isInstallmentAvailable = (semester, installment) => {
    const installments = ["First Installment", "Second Installment", "Third Installment"];
    const currentIndex = installments.indexOf(installment);

    if (currentIndex === 0) {
      // For first installment of Semester 1, always available
      if (semester === "First Semester") return true;

      // For first installment of other semesters, check if previous semester is completed
      const previousSemester = semester === "Second Semester" ? "First Semester" : "Second Semester";
      return isSemesterCompleted(previousSemester);
    }

    // For subsequent installments, check if previous installment is paid
    const previousInstallment = installments[currentIndex - 1];
    return isInstallmentPaid(semester, previousInstallment);
  };

  // Render payment button with appropriate status
  const renderPaymentButton = (amount, semester, installmentName) => {
    const isPaid = isInstallmentPaid(semester, installmentName);
    const isAvailable = isInstallmentAvailable(semester, installmentName);

    return (
      <button
        className={`btn ${isPaid ? "btn-paid" : !isAvailable ? "btn-disabled" : ""}`}
        onClick={() => handlePayment(amount, semester, installmentName)}
        disabled={isPaid || !isAvailable}
      >
        {isPaid ? "Paid" : "Pay Now"}
        <span className="material-symbols-outlined">east</span>
      </button>
    );
  };
  return (
    <>
      <Header />
      <Navigation />
      <div className="layout container">
        <div className="layout-container">
          {/* Left Section */}
          <div className="image-grid">
            <img src={feeimage1} alt="Placeholder 1" />
            <img src={feeimage2} alt="Placeholder 2" />
            <img src={feeimage3} alt="Placeholder 3" />
            <img src={feeimage4} alt="Placeholder 4" />
          </div>

          {/* Right Section */}
          <div className="text-content">
            <h1>Hey there, Welcome to Our First Installment Fees Structure</h1>
            <p>
              Fees cover internet services, learning materials, activities, and
              support services. AppCode&apos;s academic year consists of three
              semesters.
            </p>
            <div className="payment-options">
              <div className="payment-card">
                <div className="payment-item">
                  <i className="bi bi-book me-2"></i>
                  <span>Semester One</span>
                </div>
                <br />
                <div className="text">
                  This semester focuses on foundational concepts, and basic
                  skills development.
                </div>
              </div>
              <div className="payment-card">
                <div className="payment-item">
                  <i className="bi bi-journal-text me-2"></i>
                  <span>Semester Two</span>
                </div>
                <br />
                <div className="text">
                  Dive deeper into intermediate topics projects to build on your
                  knowledge.
                </div>
              </div>
              <div className="payment-card">
                <div className="payment-item">
                  <i className="bi bi-mortarboard me-2"></i>
                  <span>Semester Three</span>
                </div>
                <br />
                <div className="text">
                  Advanced subjects and capstone projects are the focus,
                  preparing you for opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fees-flip-cards">
          <h2>Tuition And Other Fees</h2>
          <br />
          <div className="cards-container">
            <div className="flip-card">
              <div className="card-front">
                <h3>1st Semester</h3>
              </div>
              <div className="card-back">
                <p>Gh¢ 5,920.00</p>
                <p>USD: $402.25</p>
              </div>
            </div>
            <div className="flip-card">
              <div className="card-front">
                <h3>2nd Semester</h3>
              </div>
              <div className="card-back">
                <p>Gh¢ 5,920.00</p>
                <p>USD: $402.25</p>
              </div>
            </div>
            <div className="flip-card">
              <div className="card-front">
                <h3>3rd Semester</h3>
              </div>
              <div className="card-back">
                <p>Gh¢ 5,920.00</p>
                <p>USD: $402.25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="price-field">
          <div className="pricing-item">
            <div className="item">
              <h2>First Installment</h2>
              <p>
                This initial payment includes admission processing fees,
                administrative costs, and other essential onboarding services.
              </p>
            </div>
          </div>
          <div className="pricing-item">
            <div className="item-list">
              <div className="list">
                <i className="bi bi-check-circle me-2"></i>
                Access to student portal
              </div>
              <div className="list">
                <i className="bi bi-check-circle me-2"></i>
                Campus development and maintenance fee
              </div>
              <div className="list">
                <i className="bi bi-check-circle me-2"></i>
                Library and ICT services subscription
              </div>
              <div className="list">
                <i className="bi bi-check-circle me-2"></i>
                learning resources
              </div>
            </div>
            <div className="price">
              <p>Gh¢ 3,000.00</p>
            </div>
            <div className="btn-container">
              {renderPaymentButton(2000, "First Semester", "First Installment")}
            </div>
          </div>
        </div>
      </div>
      {/* Your existing components */}

      {/* Modal Popup */}
      {/* Payment Confirmation Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="payment-summary">
              <div className="summary-header">
                <div className="summary-icon">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <h3>Payment Summary</h3>
              </div>

              <div className="summary-content">
                <div className="summary-item">
                  <div className="item-icon">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div className="item-details">
                    <span className="item-label">Semester</span>
                    <span className="item-value">{semester}</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="item-icon">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="item-details">
                    <span className="item-label">Installment Plan</span>
                    <span className="item-value">{installment}</span>
                  </div>
                </div>

                <div className="summary-total">
                  <div className="total-icon">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="total-details">
                    <span className="total-label">Total Amount Due</span>
                    <span className="total-amount">Ghc {amount?.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="summary-footer">
                <div className="secure-notice">
                  <span className="material-symbols-outlined">lock</span>
                  <span>Secure payment processed by Paystack</span>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button
                onClick={handleSubmit}
                className="btn btn-submit"
                disabled={isLoading || email}
              >
                {isLoading ? "Processing..." : "Payment"}
                <span className="material-symbols-outlined">east</span>
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-cancel"
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Your existing components */}
    </>
  );
}

export default FeeSelectionPage;
