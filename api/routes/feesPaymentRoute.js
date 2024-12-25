import express from "express";
import { handleWebhook, SaveFormData, getPaymentDetails } from "../controllers/feesPaymentController.js";

const router = express.Router();


// Route to handle webhook events
router.post("/webhook", handleWebhook);
router.post("/SaveFormData", SaveFormData);
router.get("/:email", getPaymentDetails);

export default router;
