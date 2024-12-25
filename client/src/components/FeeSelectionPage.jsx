import "./style/FeeSelectionPage.css";
import HeaderPage from "./Header/HeaderPage";
import Navigation from "./Navigation/NavPage";
import payImage from "../assets/money-payment.png";
import { useState } from 'react';
import axios from 'axios';
function FeeSelectionPage() {


  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [semester, setSemester] = useState('');
  const [installment, setInstallment] = useState('');
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
      await axios.post('http://localhost:5000/api/fees/SaveFormData', data);

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
      console.error('Error during payment initialization:', error);
    }
  };

  
  return (
    <>
      <HeaderPage />
      <Navigation />
      <div className="layout">
        <div className="header">
          <h1 className="text">
            <p>Fees Structure</p>
          </h1>
          <p className="description">
            AppCode&apos;s academic year consists of four semesters:
            January-March, April-June, July-September, October-December. Fees
            cover internet services, learning materials, activities, and support
            services.
          </p>
        </div>
        <div className="container">
          <div className="fees-table">
            <h2>Tuition And Other Fees</h2>
            <table>
              <thead>
                <tr>
                  <th>Fees</th>
                  <th>Amount In ghana cedis (¢)</th>
                  <th>Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuition for 1st semester</td>
                  <td>¢5,800.00</td>
                  <td>$750.24</td>
                </tr>
                <tr>
                  <td>Tuition for 2nd semester</td>
                  <td>¢5,300.00</td>
                  <td>$700.41</td>
                </tr>
                <tr>
                  <td>Tuition for 3rd semester</td>
                  <td>¢5,300.00</td>
                  <td>$700.41</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="first-semester">
            <h3>First Semester</h3>
            <div className="pricing-container">
              <div className="pricing-field">
                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>First installment</span>
                      <p className="flash">Ghc 2,000</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          2000,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>Second installment</span>
                      <p className="flash">Ghc 1,900</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          1900,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>Third installment</span>
                      <p className="flash">Ghc 1,900</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          1900,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="second-semester">
            <h3>Second Semester</h3>
            <div className="pricing-container">
              <div className="pricing-field">
                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>First installment</span>
                      <p className="flash">Ghc 2,000</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          2000,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>Second installment</span>
                      <p className="flash">Ghc 1,650</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          1650,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>Third installment</span>
                      <p className="flash">Ghc 1,650</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          1650,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Third-semester">
            <h3>Third Semester</h3>
            <div className="pricing-container">
              <div className="pricing-field">
                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>First installment</span>
                      <p className="flash">Ghc 2,000</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          2000,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>Second installment</span>
                      <p className="flash">Ghc 1,650</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          1650,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>

                <div className="pricing-item">
                  <div className="price">
                    <div className="item">
                      <span>Third installment</span>
                      <p className="flash">Ghc 1,650</p>
                    </div>
                  </div>
                  <p className="price-description">
                    <div className="img-container">
                      <img src={payImage} alt="" />
                    </div>
                    This initial payment covers admission fees and
                    administrative costs.
                  </p>
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handlePayment(
                          1650,
                        )
                      }
                      className="btn"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>Exclusive Payment Option</h3>
          <div className="pricing-container">
            <div className="pricing-field">
              <div className="pricing-item">
                <div className="price">
                  <div className="item">
                    <span>Second installment</span>
                    <p className="flash">Ghc 1,000</p>
                  </div>
                </div>
                <p className="price-description">
                  <div className="img-container">
                    <img src={payImage} alt="" />
                  </div>
                  This initial payment covers admission fees and administrative
                  costs.
                </p>
                <div className="btn-container">
                  <button
                    onClick={() =>
                      handlePayment(1000, "Exclusive", "Second installment")
                    }
                    className="btn"
                  >
                    Make Payment
                  </button>
                </div>
              </div>

              <div className="pricing-item">
                <div className="price">
                  <div className="item">
                    <span>Third installment</span>
                    <p className="flash">Ghc 400</p>
                  </div>
                </div>
                <p className="price-description">
                  <div className="img-container">
                    <img src={payImage} alt="" />
                  </div>
                  This initial payment covers admission fees and administrative
                  costs.
                </p>
                <div className="btn-container">
                  <button
                    onClick={() =>
                      handlePayment(400, "Exclusive", "Third installment")
                    }
                    className="btn"
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your existing components */}
      
      {/* Modal Popup */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Payment Details</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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

            <div className="btn-container">
              <button onClick={handleSubmit} className="btn">
                Submit and Proceed to Payment
              </button>
              <button onClick={() => setShowModal(false)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Your existing components */}
    </>
  );
}

export default FeeSelectionPage;
