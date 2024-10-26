import mongoose from 'mongoose';

// Define the payment schema
const paymentSchema = new mongoose.Schema({
  reference: {
    type: String,
    required: true,
    unique: true, // Ensures each payment has a unique reference
  },
  amount: {
    type: Number,
    required: true,
  },   
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  paymentSuccess: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the Payment model
const Payment = mongoose.model('FormPayment', paymentSchema);

export default Payment;
