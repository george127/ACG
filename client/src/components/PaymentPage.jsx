


import "../components/style/PaymentPage.css";

const PaymentPage = () => {
  // Function to redirect user to Paystack payment page
  const handlePaystackPayment = () => {
    window.location.href = "https://paystack.com/pay/urbgr54s6h";
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Pay for Form Access</h1>
      <p className="payment-description">
        Please complete your payment to access the form and continue with your
        registration.
      </p>
      <button className="pay-button" onClick={handlePaystackPayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;