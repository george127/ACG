import express from "express";
import { handleWebhook, SaveFormData, getPaymentDetails, getPaymentStatus } from "../controllers/feesPaymentController.js";

const router = express.Router();


// Route to handle webhook events
router.post("/webhook", handleWebhook);
router.post("/SaveFormData", SaveFormData);
router.get("/:email", getPaymentDetails);
router.get("/payment-status", getPaymentStatus);

export default router;
