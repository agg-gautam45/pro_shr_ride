import express from "express";
import { getRideController, publishRideController } from "../controllers/publishRideController.js";

const router = express.Router();

//register request
router.post('/publish',publishRideController)

//
router.get('/get_rides',getRideController)



export default router;