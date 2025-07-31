import "./style/FeeSelectionPage.css";
import { useState } from "react";
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
  const [amount, setAmount] = useState(null);

  const paymentLinks = {
    3000: "https://paystack.shop/pay/86-n0m8di8",
    1900: "https://paystack.com/pay/ue-vftvmsa",
    1650: "https://paystack.com/pay/jmh--7kpot",
    1000: "https://paystack.com/pay/zo3jo3-xob",
    400: "https://paystack.com/pay/xty2dr4b3n",
  };

  const handlePayment = async (amount) => {
    setAmount(amount);
    setShowModal(true); // Show the modal to collect email and semester/installment details
  };

  const handleSubmit = async () => {
    // Send the data to the backend and store it in the database
    try {
      const data = {
        email,
        semester,
        installment,
      };
      await axios.post("https://appcodeglobal-backend.onrender.com/api/fees/SaveFormData", data);

      // Redirect to Paystack payment link
      const paymentLink = paymentLinks[amount];
      if (!paymentLink) {
        console.error(`No payment link found for the amount: ${amount}`);
        return;
      }

      window.location.href = `${paymentLink}?metadata=${encodeURIComponent(
        JSON.stringify({ email, semester, installment })
      )}`;
    } catch (error) {
      console.error("Error during payment initialization:", error);
    }
  };

  return (
    <>
    <Header/>
    <Navigation/>
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
              <p>Gh¢ 2,000.00</p>
            </div>
            <div className="btn-container">
              <button onClick={() => handlePayment(2000)} className="btn">
                Payment
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Your existing components */}

      {/* Modal Popup */}
      {showModal && (
  <div className="modal">
    <div className="modal-content">
      <h2 className="modal-title">Payment Details</h2>
      <form  className="modal-form">
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="semester">Semester</label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            required
          >
            <option value="">Select Semester</option>
            <option value="First Semester">First Semester</option>
            <option value="Second Semester">Second Semester</option>
            <option value="Third Semester">Third Semester</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="installment">Installment</label>
          <select
            value={installment}
            onChange={(e) => setInstallment(e.target.value)}
            required
          >
            <option value="">Select Installment</option>
            <option value="First Installment">First Installment</option>
            <option value="Second Installment">Second Installment</option>
            <option value="Third Installment">Third Installment</option>
          </select>
        </div>
      </form>
      <br />
      <div className="btn-container">
          <button onClick={handleSubmit} className="btn btn-submit">
            Submit 
            <span className="material-symbols-outlined">east</span>
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-cancel"
          >
            Cancel
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
    </div>
  </div>
  
)}

<Footer/>

      {/* Your existing components */}
    </>
  );
}

export default FeeSelectionPage;
