import express from "express";
import { handleWebhook, SaveFormData, getPaymentDetails} from "../controllers/feesPaymentController.js";
import { getPaymentStatus } from "../controllers/paymentStatusController.js";

const router = express.Router();

// routes/fees.js (or similar)

// Route to handle webhook events
router.post("/webhook", handleWebhook);
router.post("/SaveFormData", SaveFormData);
router.get("/:email", getPaymentDetails);
router.get('/payment-status/:email', getPaymentStatus);

export default router;
