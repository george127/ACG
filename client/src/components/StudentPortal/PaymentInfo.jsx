import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Accessing user info from Redux store
import axios from "axios";
import "../style/PaymentInfo.css"; // CSS file for advanced styles
import CircularProgressBar from "./CircularProgressBar";
import PaymentImage from "./images/software-tester-tech-journalist.jpg";

const PaymentInfo = ({ email }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);

  // Fetch payment details when the component loads
  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://acg-7euk.onrender.com/api/fees/${email}`
        );
        setPaymentDetails(response.data.userForm); // Extract data from response
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [email]);

  // Loading state
  if (loading) {
    return <p className="loading">Fetching your payment details...</p>;
  }

  // Error state
  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  // Group records by semester and then by installments
  const groupRecordsBySemester = () => {
    const semesters = ["First Semester", "Second Semester", "Third Semester"];
    const grouped = {};

    semesters.forEach(semester => {
      const semesterRecords = paymentDetails?.paystack?.records?.filter(
        record => record.semester === semester
      ) || [];

      grouped[semester] = {
        First: semesterRecords.filter(record => record.installment === "First Installment"),
        Second: semesterRecords.filter(record => record.installment === "Second Installment"),
        Third: semesterRecords.filter(record => record.installment === "Third Installment")
      };
    });

    return grouped;
  };

  const semesterGroups = groupRecordsBySemester();

  // Helper function to calculate grant total for the current and previous installments within a semester
  const calculateGrantTotal = (installmentGroups, currentInstallment, currentIndex) => {
    let total = 0;

    // Loop through all installments up to the current one
    for (const installment of ["First", "Second", "Third"]) {
      if (installment === currentInstallment) {
        total += installmentGroups[installment]
          .slice(0, currentIndex + 1) // Add amounts from this group up to the current record
          .reduce((sum, record) => sum + (record.amountPaid || 0), 0);
        break;
      } else {
        total += installmentGroups[installment]?.reduce(
          (sum, record) => sum + (record.amountPaid || 0),
          0
        );
      }
    }
    return total;
  };

  return (
    <div className="Payment-container">
      <div className="Payment-details">
        <div className="payment-summary-card">
          <div className="payment-header">
            <h3>Congratulations, {user?.name}</h3>
            <br />
            <p>
              You've successfully made a payment. Keep up the great
              progress! Your commitment and dedication are truly commendable. We
              are excited to have you on this journey with us, and this payment
              is an important step toward your educational goals.
            </p>
          </div>
          <div className="summary-details">
            <div className="detail">
              <span className="icon material-symbols-outlined">payments</span>
              <span className="label">
                Total Amount You <br /> Have Paid So Far:
              </span>
              <span className="value">00.0</span>
            </div>
            <div className="detail">
              <span className="icon material-symbols-outlined">
                account_balance_wallet
              </span>
              <span className="label">
                Remaining Balance <br /> To Be Paid:
              </span>
              <span className="value">00.0</span>
            </div>
            <div className="detail">
              <span className="icon material-symbols-outlined">event</span>
              <span className="label">
                Your Next Payment <br /> Is Due On:
              </span>
              <span className="value"></span>
            </div>
          </div>
          <div className="image-container">
            <img src={PaymentImage} alt="" />
          </div>
        </div>

        <div className="progress-container">
          <p>Progress History</p>
          <br />
          <div className="progress-history">
            <CircularProgressBar percentage={75} size={160} strokeWidth={10} />
          </div>
          <br />
          <div className="payment-history-details">
            <div className="history-details">
              <span className="level">Semester One</span>
              <div className="progress-text">
                <span>30%</span>
                <span> 100%</span>
              </div>
              <div className="parent-div">
                <div className="child-div"></div>
              </div>
            </div>

            <div className="history-details">
              <span className="level">Semester Two</span>
              <div className="progress-text">
                <span>30%</span>
                <span> 100%</span>
              </div>
              <div className="parent-div">
                <div className="child-div"></div>
              </div>
            </div>

            <div className="history-details">
              <span className="level">Semester Three</span>
              <div className="progress-text">
                <span>30%</span>
                <span> 100%</span>
              </div>
              <div className="parent-div">
                <div className="child-div"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="semester-column-layout">
        {Object.entries(semesterGroups).map(([semester, installmentGroups]) => (
          <div key={semester} className="semester-column">
            <h3 className="semester-title">{semester}</h3>
            <div className="installments-row">
              {Object.entries(installmentGroups).map(([installment, records]) => (
                <div key={`${semester}-${installment}`} className="installment-card">
                  <div className="installment-header">
                    <h4>{installment} Installment</h4>
                    <span className="material-symbols-outlined">stat_minus_3</span>
                  </div>
                  <div className="installment-content">
                    {records.length > 0 ? (
                      records.map((record, index) => {
                        const grantTotal = calculateGrantTotal(
                          installmentGroups,
                          installment,
                          index
                        );

                        return (
                          <div key={index} className="payment-record">
                            <div className="payment-row">
                              <span className="label">
                                <i className="bi bi-calendar"></i>
                                Status:
                                </span>
                              <span className="value">{record.status || "N/A"}</span>
                            </div>
                            <div className="payment-row">
                              <span className="label">
                                <i className="bi bi-card-text"></i> 
                                Transaction ID:
                                </span>
                              <span className="value">{record.transactionId || "N/A"}</span>
                            </div>
                            <div className="payment-row">
                              <span className="label">
                                <i className="bi bi-credit-card"></i> 
                                Amount Paid:</span>
                              <span className="value cash">
                                <span className="material-symbols-outlined">
                                  attach_money
                                </span>
                                {record.amountPaid || "N/A"}
                              </span>
                            </div>
                            <div className="payment-row">
                              <span className="label">
                                <i className="bi bi-cash-coin"></i>
                                Grant Total:</span>
                              <span className="value cash">
                                <span className="material-symbols-outlined">
                                  attach_money
                                </span>
                                {grantTotal}
                              </span>
                            </div>
                            <div className="payment-row">
                              <span className="value date">{record.date || "N/A"}</span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="no-records">No payment records</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;







