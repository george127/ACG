import axios from 'axios';
import Payment from '../models/Payment.js'; 

export const verifyPayment = async (req, res) => {
  const { reference } = req.query;

  try {
    // Call Paystack API to verify the transaction using the reference
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, // Ensure the secret key is correct
      },
    });

    const paymentData = response.data.data;

    // Check if the payment was successful
    if (paymentData.status === 'success') {
      const payment = new Payment({
        reference: paymentData.reference,
        amount: paymentData.amount,
        userId: paymentData.customer.id, // Make sure customer.id corresponds to your user model
        paymentSuccess: true,
      });

      // Save the payment data to MongoDB
      try {
        await payment.save();
        return res.status(200).json({ paymentSuccess: true });
      } catch (saveError) {
        console.error('Error saving payment:', saveError);
        return res.status(500).json({ error: 'Error saving payment data.' });
      }
    } else {
      return res.status(400).json({ paymentSuccess: false, paymentFailed: true });
    }
  } catch (error) {
    // Improved error logging
    if (error.response) {
      console.error('Paystack API error:', error.response.data);
      return res.status(500).json({ error: error.response.data.message || 'Paystack API error' });
    }
    console.error('Error verifying payment:', error);
    return res.status(500).json({ error: 'An error occurred during payment verification.' });
  }
};        
