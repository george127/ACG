import UserForm from "../models/feesPayment.js";

export const SaveFormData = async (req, res) => {
  const { email, semester, installment } = req.body;

  try {
    // Check if a document with the same email already exists
    let userForm = await UserForm.findOne({ "paystack.email": email });

    if (userForm) {
      // Add a new record to the existing user
      userForm.paystack.records.push({ semester, installment });

      // Save the updated document
      await userForm.save();

      return res.status(200).json({ message: "Form data updated successfully" });
    } else {
      // If no user is found, create a new document
      userForm = new UserForm({
        paystack: {
          email,
          records: [{ semester, installment }],
        },
      });

      // Save the new document
      await userForm.save();

      return res.status(200).json({ message: "Form data saved successfully" });
    }
  } catch (error) {
    console.error("Error saving form data:", error);
    return res.status(500).json({ message: "Failed to save form data" });
  }
};


export const handleWebhook = async (req, res) => {
  try {
    console.log("Webhook received:", req.body); // Log the webhook data

    const { event, data } = req.body;

    // Only handle "charge.success" events
    if (event === "charge.success") {
      const { customer, reference, status, amount } = data;
      const { email, first_name, last_name, phone } = customer;

      // Check if a document with the same email already exists
      let userForm = await UserForm.findOne({ "paystack.email": email });

      if (userForm) {
        // Update the most recent record with the payment details
        const latestRecord = userForm.paystack.records[userForm.paystack.records.length - 1];
        if (latestRecord) {
          latestRecord.firstName = first_name;
          latestRecord.lastName = last_name;
          latestRecord.phoneNumber = phone;
          latestRecord.status = status;
          latestRecord.amount = parseFloat(amount) / 100; // Convert kobo to currency
          latestRecord.amountPaid = parseFloat(amount) / 100;  
          latestRecord.transactionId = reference;
 
          // Save the updated document
          await userForm.save(); 

          return res.status(200).json({
            message: "Transaction details updated successfully.",
          });
        }
      } else {
        // If no user is found, create a new document with the payment details
        const newUserForm = new UserForm({
          paystack: {
            email,
            records: [
              {
                first_name,
                last_name,
                phone,
                status, 
                amount: parseFloat(amount) / 100, // Convert kobo to currency
                status,
                amount: parseFloat(amount) / 100, // Convert kobo to currency
                amountPaid: parseFloat(amount) / 100,
                transactionId: reference,
              }, 
            ],
          },
        });

        // Save the new document
        await newUserForm.save();

        return res.status(200).json({
          message: "Transaction details saved successfully.",
        });
      }
    } else {
      // Handle other events (if needed)
      return res.status(400).json({ message: "Unhandled webhook event" });
    }
  } catch (error) {
    console.error("Error processing webhook:", error);

    // Respond with error details
    return res.status(500).json({
      message: "An error occurred while processing the webhook",
      error: error.message,
    }); 
  }
};


export const getPaymentDetails = async (req, res) => {
  const { email } = req.params; // Extract email from request params

  try {
    const userForm = await UserForm.findOne({ "paystack.email": email });

    if (userForm) {
      return res.status(200).json({ userForm });
    } else {
      return res.status(404).json({ message: "No data found for this email" });
    }
  } catch (error) {
    console.error("Error fetching payment details:", error);
    return res.status(500).json({ message: "Failed to fetch payment details" });
  }
};