import express from "express";
import loginUser from "../controllers/loginController.js";
import authenticateUser from "../middlewares/authentication.js";

const router = express.Router();

router.post("/login", loginUser);

export default router;