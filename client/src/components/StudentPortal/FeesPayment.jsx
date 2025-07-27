import "../style/FeesPayment.css"; // Import the CSS file
import { useState } from "react";
import logo from "./images/cybersecurity-analyst-ecommerce.avif";
import axios from "axios";
const FeesDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");
  const [installment, setInstallment] = useState("");
  const [amount, setAmount] = useState(null);

  const paymentLinks = {
    2000: "https://paystack.com/pay/q6-vi19w9o",
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
    <div className="fees-page">
      {/* Main Content */}
      <main className="fees-content">
        {/* Section 1: Overview */}
        <section className="fees-overview">
          <div className="overview-cards">
            <div className="header-container">
              <div className="header-text">
                <h2>Hey there, Welcome to Our Installment Fees Structure</h2>
                <p>
                  This initial payment includes admission processing fees,
                  administrative costs, and other essential onboarding
                  services. AppCode&apos;s academic year consists of three semesters.
                </p>
              </div>
              <img src={logo} alt="" />
            </div>
            <div className="overview-card">
              <div className="card-header">
                <div className="line"></div>
                <p className="header">Get Started</p>
                <div className="text">
                  <p>Semester One</p>
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <div className="installment-container">
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>First Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn" onClick={() => handlePayment(2000)}>
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>Second Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>Third Installment</p>
                      <span>Ghc 1,920.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div className="card-header">
                <div className="line"></div>
                <p className="header">Get Started</p>
                <div className="text">
                  <p>Semester Two</p>
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <div className="installment-container">
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>First Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>Second Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>Third Installment</p>
                      <span>Ghc 1,920.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div className="card-header">
                <div className="line"></div>
                <p className="header">Get Started</p>
                <div className="text">
                  <p>Semester Three</p>
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <div className="installment-container">
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>First Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>Second Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">
                      dialpad
                    </span>
                    <div className="text">
                      <p>Third Installment</p>
                      <span>Ghc 1,920.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn">
                      Pay Now
                      <span className="material-symbols-outlined">east</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">Payment Details</h2>
            <form className="modal-form">
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
    </div>
  );
};

export default FeesDetailsPage;
