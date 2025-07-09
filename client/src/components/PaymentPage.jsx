import "../components/style/PaymentPage.css";
import Paymentimage from "../assets/Payment.png";
import Header from "./Header/HeaderPage";
import Navigation from "./Navigation/NavPage";
import Footer from "./footer/Footer";
import { NavLink } from "react-router-dom";

const PaymentPage = () => {
  // Function to redirect user to Paystack payment page
  const handlePaystackPayment = () => {
    window.location.href = "https://paystack.shop/pay/5if--ehzfc";
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="container navigate">
        <div className="items">
          <NavLink to="/">Home</NavLink>
          <span className="material-symbols-outlined">arrow_and_edge</span>
        </div>
        <span>Apply Now</span>
      </div>
      <div className="payment-page container">
        <div className="image-container">
          <img src={Paymentimage} alt="ACG Logo" className="logo-image" />
        </div>

        <div className="payment-container">
          <h1 className="payment-title">💳 Pay for Form Access</h1>

          <p className="payment-description">
            💳 <strong>Payment Required:</strong> Please complete your payment to access the application form and continue with your registration process.
          </p>

          <p className="payment-info">
            📝 <strong>Full Access:</strong> This one-time payment grants you access to the complete form required to apply for your desired program at <strong>AppCode Academy</strong>.
          </p>

          <p className="payment-info">
            🔐 <strong>Secure Submission:</strong> Your information will be securely submitted and reviewed by our admissions team. Once your payment is confirmed, the form will be unlocked automatically.
          </p>

          <p className="payment-note">
            ⚠️ <strong>Note:</strong> All transactions are encrypted and processed securely through <span className="highlight-paystack">Paystack</span>.
          </p>


          <div className="btn-container">
            <button className="btn" onClick={handlePaystackPayment}>
              Pay Now
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default PaymentPage;