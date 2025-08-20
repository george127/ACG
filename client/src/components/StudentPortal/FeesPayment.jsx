import "../style/FeesPayment.css";
import { useState, useEffect } from "react";
import logo from "./images/cybersecurity-analyst-ecommerce.avif";
import axios from "axios";

const FeesDetailsPage = () => {
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
                  services. AppCode academic year consists of three semesters.
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
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>First Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(2000, "First Semester", "First Installment")}
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>Second Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(2000, "First Semester", "Second Installment")}
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>Third Installment</p>
                      <span>Ghc 1,920.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(1920, "First Semester", "Third Installment")}
                  </div>
                </div>
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
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>First Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(2000, "Second Semester", "First Installment")}
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>Second Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(2000, "Second Semester", "Second Installment")}
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>Third Installment</p>
                      <span>Ghc 1,920.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(1920, "Second Semester", "Third Installment")}
                  </div>
                </div>
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
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>First Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(2000, "Third Semester", "First Installment")}
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>Second Installment</p>
                      <span>Ghc 2,000.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(2000, "Third Semester", "Second Installment")}
                  </div>
                </div>
                <div className="installment">
                  <div className="text-container">
                    <span className="material-symbols-outlined icon-text">dialpad</span>
                    <div className="text">
                      <p>Third Installment</p>
                      <span>Ghc 1,920.00</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    {renderPaymentButton(1920, "Third Semester", "Third Installment")}
                  </div>
                </div>
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
                disabled={isLoading || !email}
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

export default FeesDetailsPage;

// import "../style/FeesPayment.css";
// import { useState, useEffect } from "react";
// import logo from "./images/cybersecurity-analyst-ecommerce.avif";
// import axios from "axios";

// const FeesDetailsPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState("");
//   const [semester, setSemester] = useState("");
//   const [installment, setInstallment] = useState("");
//   const [amount, setAmount] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   const paymentLinks = {
//     2000: "https://paystack.shop/pay/7faz2q19tm",
//     1920: "https://paystack.shop/pay/7faz2q19tm",
//   };

//   // Get user email from localStorage on component mount
//   useEffect(() => {
//     const userData = localStorage.getItem("user");
//     if (userData) {
//       try {
//         const user = JSON.parse(userData);
//         if (user.email) {
//           setEmail(user.email);
//         }
//       } catch (error) {
//         console.error("Error parsing user data from localStorage:", error);
//       }
//     }
//   }, []);

//   const handlePayment = (amount, semester, installment) => {
//     setAmount(amount);
//     setSemester(semester);
//     setInstallment(installment);
//     setShowModal(true);
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
    
//     try {
//       const data = {
//         email,
//         semester,
//         installment,
//         amount
//       };
      
//       await axios.post("https://acg-7euk.onrender.com/api/fees/SaveFormData", data);
      
//       const paymentLink = paymentLinks[amount];
//       if (!paymentLink) {
//         console.error(`No payment link found for the amount: ${amount}`);
//         setIsLoading(false);
//         return;
//       }

//       window.location.href = `${paymentLink}?metadata=${encodeURIComponent(
//         JSON.stringify({ email, semester, installment, amount })
//       )}`;
//     } catch (error) {
//       console.error("Error during payment initialization:", error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fees-page">
//       <main className="fees-content">
//         <section className="fees-overview">
//           <div className="overview-cards">
//             <div className="header-container">
//               <div className="header-text">
//                 <h2>Hey there, Welcome to Our Installment Fees Structure</h2>
//                 <p>
//                   This initial payment includes admission processing fees,
//                   administrative costs, and other essential onboarding
//                   services. AppCode academic year consists of three semesters.
//                 </p>
//               </div>
//               <img src={logo} alt="Cybersecurity Analyst" />
//             </div>

//             {/* Semester 1 */}
//             <div className="overview-card">
//               <div className="card-header">
//                 <div className="line"></div>
//                 <p className="header">Semester One</p>
//                 <div className="text">
//                   <p>First Semester</p>
//                   <span className="material-symbols-outlined">bolt</span>
//                 </div>
//               </div>
//               <div className="installment-container">
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>First Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(2000, "First Semester", "First Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>Second Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(2000, "First Semester", "Second Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>Third Installment</p>
//                       <span>Ghc 1,920.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(1920, "First Semester", "Third Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Semester 2 */}
//             <div className="overview-card">
//               <div className="card-header">
//                 <div className="line"></div>
//                 <p className="header">Semester Two</p>
//                 <div className="text">
//                   <p>Second Semester</p>
//                   <span className="material-symbols-outlined">bolt</span>
//                 </div>
//               </div>
//               <div className="installment-container">
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>First Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(2000, "Second Semester", "First Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>Second Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(2000, "Second Semester", "Second Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>Third Installment</p>
//                       <span>Ghc 1,920.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(1920, "Second Semester", "Third Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Semester 3 */}
//             <div className="overview-card">
//               <div className="card-header">
//                 <div className="line"></div>
//                 <p className="header">Semester Three</p>
//                 <div className="text">
//                   <p>Third Semester</p>
//                   <span className="material-symbols-outlined">bolt</span>
//                 </div>
//               </div>
//               <div className="installment-container">
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>First Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(2000, "Third Semester", "First Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>Second Installment</p>
//                       <span>Ghc 2,000.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(2000, "Third Semester", "Second Installment")}
//                     >
//                       Pay Now
//                       <span className="material-symbols-outlined">east</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="installment">
//                   <div className="text-container">
//                     <span className="material-symbols-outlined icon-text">dialpad</span>
//                     <div className="text">
//                       <p>Third Installment</p>
//                       <span>Ghc 1,920.00</span>
//                     </div>
//                   </div>
//                   <div className="btn-container">
//                     <button 
//                       className="btn" 
//                       onClick={() => handlePayment(1920, "Third Semester", "Third Installment")}
//                     >
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

//       {/* Payment Confirmation Modal */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2 className="modal-title">Confirm Payment Details</h2>
//             <div className="payment-summary">
//               <div className="summary-row">
//                 <span>Email:</span>
//                 <strong>{email}</strong>
//               </div>
//               <div className="summary-row">
//                 <span>Semester:</span>
//                 <strong>{semester}</strong>
//               </div>
//               <div className="summary-row">
//                 <span>Installment:</span>
//                 <strong>{installment}</strong>
//               </div>
//               <div className="summary-row total">
//                 <span>Amount Due:</span>
//                 <strong>Ghc {amount?.toLocaleString()}</strong>
//               </div>
//             </div>
//             <div className="btn-container">
//               <button
//                 onClick={handleSubmit}
//                 className="btn btn-submit"
//                 disabled={isLoading || !email}
//               >
//                 {isLoading ? "Processing..." : "Proceed to Payment"}
//                 <span className="material-symbols-outlined">east</span>
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="btn btn-cancel"
//                 disabled={isLoading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeesDetailsPage;