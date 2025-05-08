import express from "express";
import protectedController from "../controller/protected.controller.js";
import verifyToken from "../middleware/jwt.token.middleware.js";

const router = express.Router();

router.get("/blog", verifyToken, protectedController.protectedBlogPostGetAllPosts);
router.get("/blog/:userId", verifyToken, protectedController.protectedBlogPostGetByUserId);
router.post("/blog", verifyToken, protectedController.protectedBlogPostSubmit);
router.delete("/blog/:title", verifyToken, protectedController.protectedBlogPostDeleteByTitle);
router.patch("/blog/:title", verifyToken, protectedController.protectedBlogPostPatchByTitle);

export default router;
