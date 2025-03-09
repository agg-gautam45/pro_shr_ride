import express from "express";
import {registerController,loginController,forgotPasswordController} from "../controllers/authController.js"

const router = express.Router();

//register request
router.post('/register',registerController)

//login request
router.post('/login',loginController);



//forgot-password
router.post('/forgot-password',forgotPasswordController);


export default router;