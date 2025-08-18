// import "../style/FeesPayment.css"; // Import the CSS file
// import { useState } from "react";
// import logo from "./images/cybersecurity-analyst-ecommerce.avif";
// import axios from "axios";
// const FeesDetailsPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState("");
//   const [semester, setSemester] = useState("");
//   const [installment, setInstallment] = useState("");
//   const [amount, setAmount] = useState(null);

//   const paymentLinks = {
//     2000: "https://paystack.shop/pay/7faz2q19tm",
//   };

//   const handlePayment = async (amount) => {
//     setAmount(amount);
//     setShowModal(true); // Show the modal to collect email and semester/installment details
//   };

//   const handleSubmit = async () => {
//     // Send the data to the backend and store it in the database
//     try {
//       const data = {
//         email,
//         semester,
//         installment,
//       };
//       await axios.post("https://acg-7euk.onrender.com/api/fees/SaveFormData", data);

//       // Redirect to Paystack payment link
//       const paymentLink = paymentLinks[amount];
//       if (!paymentLink) {
//         console.error(`No payment link found for the amount: ${amount}`);
//         return;
//       }

//       window.location.href = `${paymentLink}?metadata=${encodeURIComponent(
//         JSON.stringify({ email, semester, installment })
//       )}`;
//     } catch (error) {
//       console.error("Error during payment initialization:", error);
//     }
//   };

//   return (
//     <div className="fees-page">
//       {/* Main Content */}
//       <main className="fees-content">
//         {/* Section 1: Overview */}
//         <section className="fees-overview">
//           <div className="overview-cards">
//             <div className="header-container">
//               <div className="header-text">
//                 <h2>Hey there, Welcome to Our Installment Fees Structure</h2>
//                 <p>
//                   This initial payment includes admission processing fees,
//                   administrative costs, and other essential onboarding
//                   services. AppCode&apos;s academic year consists of three semesters.
//                 </p>
//               </div>
//               <img src={logo} alt="" />
//             </div>
//             <div className="overview-card">
//               <div className="card-header">
//                 <div className="line"></div>
//                 <p className="header">Get Started</p>
//                 <div className="text">
//                   <p>Semester One</p>
//                   <span className="material-symbols-outlined">bolt</span>
//                 </div>
//               </div>
//               <div className="installment-container">
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>First Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>Second Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>Third Installment</p>
//                       <span>Ghc 1,920.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="overview-card">
//               <div className="card-header">
//                 <div className="line"></div>
//                 <p className="header">Get Started</p>
//                 <div className="text">
//                   <p>Semester Two</p>
//                   <span className="material-symbols-outlined">bolt</span>
//                 </div>
//               </div>
//               <div className="installment-container">
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>First Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>Second Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>Third Installment</p>
//                       <span>Ghc 1,920.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="overview-card">
//               <div className="card-header">
//                 <div className="line"></div>
//                 <p className="header">Get Started</p>
//                 <div className="text">
//                   <p>Semester Three</p>
//                   <span className="material-symbols-outlined">bolt</span>
//                 </div>
//               </div>
//               <div className="installment-container">
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>First Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>Second Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">
//                       dialpad
//                     </span>
//                     <div className="text">
//                       <p>Third Installment</p>
//                       <span>Ghc 1,920.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button className="btn" onClick={() => handlePayment(2000)}>
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Modal Popup */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2 className="modal-title">Payment Details</h2>
//             <form className="modal-form">
//               <div className="input-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="semester">Semester</label>
//                 <select
//                   value={semester}
//                   onChange={(e) => setSemester(e.target.value)}
//                   required
//                 >
                  
//                   <option value="First Semester">First Semester</option>
//                   <option value="Second Semester">Second Semester</option>
//                   <option value="Third Semester">Third Semester</option>
//                 </select>
//               </div>

//               <div className="input-group">
//                 <label htmlFor="installment">Installment</label>
//                 <select
//                   value={installment}
//                   onChange={(e) => setInstallment(e.target.value)}
//                   required
//                 >
                  
//                   <option value="First Installment">First Installment</option>
//                   <option value="Second Installment">Second Installment</option>
//                   <option value="Third Installment">Third Installment</option>
//                 </select>
//               </div>
//             </form>
//             <br />
//             <div className="btn-container">
//               <button onClick={handleSubmit} className="btn btn-submit">
//                 Submit
//                 <span className="material-symbols-outlined">east</span>
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="btn btn-cancel"
//               >
//                 Cancel
//                 <span className="material-symbols-outlined">east</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeesDetailsPage;


import "../style/FeesPayment.css";
import { useState, useEffect } from "react";
import logo from "./images/cybersecurity-analyst-ecommerce.avif";
import axios from "axios";

const FeesDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");
  const [installment, setInstallment] = useState("");
  const [amount, setAmount] = useState(null);
  const [paidInstallments, setPaidInstallments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const initializePaymentData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData?.email) {
        throw new Error("No user email found in localStorage");
      }

      setEmail(userData.email);
      
      // Always fetch from API (no localStorage fallback for payments)
      const localStorageData = JSON.stringify({
        user: userData,
        lastLogin: localStorage.getItem("lastLogin")
      });

      const response = await axios.get(
        "https://acg-7euk.onrender.com/api/fees/payment-status",
        {
          params: { email: userData.email },
          headers: { 'X-LocalStorage': localStorageData }
        }
      );

      setPaidInstallments(response.data.paymentStatus || {});
      
      // Optional: Cache in localStorage (but not critical)
      localStorage.setItem('paymentStatus', JSON.stringify(response.data.paymentStatus || {}));
    } catch (error) {
      console.error("Initialization error:", error);
      // Show error message (don't fall back to localStorage)
      alert("Could not fetch payment status. Please refresh or check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  initializePaymentData();
}, []);

  const paymentLinks = {
    2000: "https://paystack.shop/pay/7faz2q19tm",
    1920: "https://paystack.shop/pay/third-installment"
  };

  const handlePayment = (amount, semester, installment) => {
    setAmount(amount);
    setSemester(semester);
    setInstallment(installment);
    setShowModal(true);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const paymentData = {
        email,
        semester,
        installment,
        amount,
        localUserData: JSON.parse(localStorage.getItem("user"))
      };

      // Save to database
      await axios.post(
        "https://acg-7euk.onrender.com/api/fees/SaveFormData",
        paymentData
      );

      // Update local state
      const paymentKey = `${semester}-${installment}`;
      const newPaymentStatus = {
        ...paidInstallments,
        [paymentKey]: {
          paid: true,
          paidAt: new Date().toISOString()
        }
      };

      setPaidInstallments(newPaymentStatus);
      localStorage.setItem('paymentStatus', JSON.stringify(newPaymentStatus));

      // Redirect to payment
      window.location.href = `${paymentLinks[amount]}?metadata=${encodeURIComponent(
        JSON.stringify(paymentData)
      )}`;
    } catch (error) {
      console.error("Payment processing failed:", error);
      alert("Payment initialization failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isInstallmentPaid = (semester, installment) => {
    const key = `${semester}-${installment}`;
    return paidInstallments[key]?.paid || false;
  };

  const PaymentButton = ({ amount, semester, installment }) => {
    const paid = isInstallmentPaid(semester, installment);
    
    return (
      <button
        className={`btn ${paid ? "btn-paid" : ""}`}
        onClick={() => !paid && handlePayment(amount, semester, installment)}
        disabled={paid || isLoading}
      >
        {isLoading ? (
          "Loading..."
        ) : paid ? (
          <>
            Paid <span className="checkmark">✔</span>
          </>
        ) : (
          <>
            Pay Now <span className="material-symbols-outlined">east</span>
          </>
        )}
      </button>
    );
  };

  if (isLoading && !email) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading payment information...</p>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="error-container">
        <h2>User not identified</h2>
        <p>Please log in to view payment options</p>
      </div>
    );
  }

  return (
    <div className="fees-page">
      <main className="fees-content">
        <section className="fees-overview">
          <div className="overview-cards">
            <div className="header-container">
              <div className="header-text">
                <h2>Hey there, Welcome to Our Installment Fees Structure</h2>
                <p>
                  This initial payment includes admission processing fees,
                  administrative costs, and other essential onboarding
                  services. AppCode's academic year consists of three semesters.
                </p>
              </div>
              <img src={logo} alt="Cybersecurity Analyst" />
            </div>

            {/* Semester 1 */}
            <div className="overview-card">
              <div className="card-header">
                <div className="line"></div>
                <p className="header">Semester One</p>
                <div className="text">
                  <p>First Semester</p>
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <div className="installment-container">
                <InstallmentRow 
                  amount={2000}
                  semester="First Semester"
                  installment="First Installment"
                  PaymentButton={PaymentButton}
                />
                <InstallmentRow 
                  amount={2000}
                  semester="First Semester"
                  installment="Second Installment"
                  PaymentButton={PaymentButton}
                />
                <InstallmentRow 
                  amount={1920}
                  semester="First Semester"
                  installment="Third Installment"
                  PaymentButton={PaymentButton}
                />
              </div>
            </div>

            {/* Semester 2 */}
            <div className="overview-card">
              <div className="card-header">
                <div className="line"></div>
                <p className="header">Semester Two</p>
                <div className="text">
                  <p>Second Semester</p>
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <div className="installment-container">
                <InstallmentRow 
                  amount={2000}
                  semester="Second Semester"
                  installment="First Installment"
                  PaymentButton={PaymentButton}
                />
                <InstallmentRow 
                  amount={2000}
                  semester="Second Semester"
                  installment="Second Installment"
                  PaymentButton={PaymentButton}
                />
                <InstallmentRow 
                  amount={1920}
                  semester="Second Semester"
                  installment="Third Installment"
                  PaymentButton={PaymentButton}
                />
              </div>
            </div>

            {/* Semester 3 */}
            <div className="overview-card">
              <div className="card-header">
                <div className="line"></div>
                <p className="header">Semester Three</p>
                <div className="text">
                  <p>Third Semester</p>
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
              <div className="installment-container">
                <InstallmentRow 
                  amount={2000}
                  semester="Third Semester"
                  installment="First Installment"
                  PaymentButton={PaymentButton}
                />
                <InstallmentRow 
                  amount={2000}
                  semester="Third Semester"
                  installment="Second Installment"
                  PaymentButton={PaymentButton}
                />
                <InstallmentRow 
                  amount={1920}
                  semester="Third Semester"
                  installment="Third Installment"
                  PaymentButton={PaymentButton}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Payment Confirmation Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">Confirm Payment Details</h2>
            <div className="payment-summary">
              <div className="summary-row">
                <span>Email:</span>
                <strong>{email}</strong>
              </div>
              <div className="summary-row">
                <span>Semester:</span>
                <strong>{semester}</strong>
              </div>
              <div className="summary-row">
                <span>Installment:</span>
                <strong>{installment}</strong>
              </div>
              <div className="summary-row total">
                <span>Amount Due:</span>
                <strong>Ghc {amount?.toLocaleString()}</strong>
              </div>
            </div>
            <div className="btn-container">
              <button 
                onClick={handleSubmit} 
                className="btn btn-submit"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Proceed to Payment"}
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
    </div>
  );
};

// Reusable Installment Row Component
const InstallmentRow = ({ amount, semester, installment, PaymentButton }) => (
  <div className="installment">
    <div className="text-container">
      <span className="material-symbols-outlined icon-text">dialpad</span>
      <div className="text">
        <p>{installment}</p>
        <span>Ghc {amount.toLocaleString()}</span>
      </div>
    </div>
    <div className="btn-container">
      <PaymentButton 
        amount={amount}
        semester={semester}
        installment={installment}
      />
    </div>
  </div>
);

export default FeesDetailsPage;