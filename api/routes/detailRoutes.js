import express from "express";
import { DetailsInfo } from "../controllers/DetailsController.js";

const router = express.Router();

router.post("/Info", DetailsInfo);

export default router;
