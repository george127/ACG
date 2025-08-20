import UserForm from "../models/feesPayment.js"; // Make sure this path is correct

export const getPaymentStatus = async (req, res) => {
  try {
    const { email } = req.params;
    
    console.log("Fetching payment status for email:", email); // Debug log
    
    // Correct query - find by email in paystack.email field
    const userPayments = await UserForm.findOne({ "paystack.email": email });
    
    console.log("Found user payments:", userPayments); // Debug log
    
    if (!userPayments || !userPayments.paystack || !userPayments.paystack.records) {
      return res.status(200).json({});
    }
    
    // Organize by semester and installment
    const status = {};
    userPayments.paystack.records.forEach(record => {
      if (!status[record.semester]) {
        status[record.semester] = {};
      }
      // Use actual status from record or default to "paid" if not specified
      status[record.semester][record.installment] = record.status || "paid";
    });
    
    console.log("Processed status:", status); // Debug log
    res.status(200).json(status);
  } catch (error) {
    console.error("Error fetching payment status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};