import express from "express";
import protectedController from "../controller/protected.controller.js";
import verifyToken from "../middleware/jwt.token.middleware.js";

const router = express.Router();

router.get("/blog", verifyToken, protectedController.protectedExampleService);
router.post("/blog", verifyToken, protectedController.submitPost);

export default router;
