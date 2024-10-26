import express from 'express';
import { verifyPayment } from '../controllers/paymentController.js'; // Ensure .js extension

const router = express.Router();
   
// Route for verifying payment
router.get('/verify-payment', verifyPayment);

export default router; // Export the router
