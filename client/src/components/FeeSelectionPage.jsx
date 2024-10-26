import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FeeSelectionPage() {
  const navigate = useNavigate();

  const handleFeePayment = async (amount) => {
    try {
      const { data } = await axios.post('/api/paystack/pay-school-fee', { amount });
      window.open(data.authorization_url, '_blank');   
      navigate.push('/signup');
    } catch (error) {
      console.error('Error with payment:', error);
    }
  };

  return (
    <div>
      <h1>Select School Fee Amount</h1>
      <button onClick={() => handleFeePayment(50000)}>Pay 50,000</button>
      <button onClick={() => handleFeePayment(100000)}>Pay 100,000</button>
    </div>
  );
}

export default FeeSelectionPage;
