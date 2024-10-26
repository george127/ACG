import { useNavigate } from 'react-router-dom';
import '../components/style/PaymentPage.css';
import axios from 'axios';

function PaymentPage() {
  const navigate = useNavigate();

  // Handle Paystack payment by opening the Paystack payment link
  const handlePaystackPayment = () => {
    // Open Paystack payment link in a new tab
    const paystackWindow = window.open('https://paystack.com/pay/fplw8fq1r2', '_blank');   

    // Check for payment verification when the payment window is closed 
    paystackWindow.onbeforeunload = () => {
      // Simulate an API call to verify payment (mock)
      axios.get('/api/verify-payment?reference=fplw8fq1r2') // Reference would be dynamic in a real scenario
        .then((res) => {
          if (res.data.paymentSuccess) {
            // Store payment success flag in localStorage 
            localStorage.setItem('hasPaid', 'true');
            // Redirect to the student form page
            navigate('/form');
          } else {   
            alert('Payment verification failed. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error verifying payment:', error);
          alert('An error occurred while verifying payment.');
        });
    };
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Pay for Form Access</h1>
      <p className="payment-description">
        Please complete your payment to access the form and continue with your registration.
      </p>
      <button className="pay-button" onClick={handlePaystackPayment}>Pay Now</button>
    </div>
  );
}

export default PaymentPage;
   