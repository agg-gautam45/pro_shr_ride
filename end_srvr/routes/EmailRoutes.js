import express from "express";
import { testController } from "../controllers/EmailController.js";

const router = express.Router();

//register request
router.post('/get_email',testController);



export default router;