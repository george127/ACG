// controllers/paymentProgressController.js
import UserForm from "../models/feesPayment.js";

export const getPaymentProgress = async (req, res) => {
  try {
    const { email } = req.params;
    
    console.log("Fetching payment progress for email:", email);
    
    const userPayments = await UserForm.findOne({ "paystack.email": email });
    
    if (!userPayments || !userPayments.paystack || !userPayments.paystack.records) {
      return res.status(200).json({
        "First Semester": 0,
        "Second Semester": 0,
        "Third Semester": 0
      });
    }
    
    // Calculate progress for each semester
    const progress = {
      "First Semester": 0,
      "Second Semester": 0,
      "Third Semester": 0
    };
    
    // Count paid installments for each semester
    userPayments.paystack.records.forEach(record => {
      if (record.semester && (record.status === "paid" || record.status === "success")) {
        // Each installment represents 33.33% of the semester (100% / 3 installments)
        progress[record.semester] += 33.33;
      }
    });
    
    // Ensure we don't exceed 100% and round to whole numbers
    Object.keys(progress).forEach(semester => {
      progress[semester] = Math.min(Math.round(progress[semester]), 100);
    });
    
    console.log("Calculated progress:", progress);
    res.status(200).json(progress);
  } catch (error) {
    console.error("Error fetching payment progress:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};