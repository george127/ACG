import { useState, useEffect } from "react";
import axios from "axios";

const PaymentInfo = ({ email }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch payment details when the component loads
  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/fees/${email}`);
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
    return <p>Loading payment details...</p>;
  }

  // Error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render payment details
  return (
    <div>
      <h2>Payment Details for {email}</h2>
      {paymentDetails?.paystack?.records?.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Semester</th>
              <th>Installment</th>
              <th>Amount Paid</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Phone</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {paymentDetails.paystack.records.map((record, index) => (
              <tr key={index}>
                <td>{record.semester || "N/A"}</td>
                <td>{record.installment || "N/A"}</td>
                <td>{record.amountPaid || "N/A"}</td>
                <td>{record.status || "N/A"}</td>
                <td>{record.transactionId || "N/A"}</td>
                <td>{record.phoneNumber || "N/A"}</td>
                <td>{record.firstName || "N/A"}</td>
                <td>{record.lastName || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment records found for this user.</p>
      )}
    </div>
  );
};

export default PaymentInfo;
