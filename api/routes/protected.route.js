import express from "express";
import protectedController from "../controller/protected.controller.js";
import verifyToken from "../middleware/jwt.token.middleware.js";

const router = express.Router();

router.get("/blog", verifyToken, protectedController.protectedBlogPostGetAllPosts); // traz todos os posts do usuario logado
router.get("/blog/:postId", verifyToken, protectedController.protectedBlogPostGetByPostID);
router.post("/blog", verifyToken, protectedController.protectedBlogPostSubmit);
router.delete("/blog/:postId", verifyToken, protectedController.protectedBlogPostDeleteByPostID);
router.patch("/blog/:postId", verifyToken, protectedController.protectedBlogPostPatchByPostID);
router.put("/blog/:postId", verifyToken, protectedController.protectedBlogPostPutByPostID);

export default router;
