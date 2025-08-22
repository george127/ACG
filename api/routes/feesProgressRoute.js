import express from "express";

import { getPaymentProgress } from "../controllers/paymentProgressController.js";
const router = express.Router();

router.get('/payment-progress/:email', getPaymentProgress);

export default router;