import express from "express";
import mainController from "../controllers/mainController.js"
import authenticateUser from "../middlewares/authentication.js";

const router = express.Router();

router.get("/", authenticateUser, mainController);

export default router;