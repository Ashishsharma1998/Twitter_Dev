import express from "express";
import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import toggleLike from "../../controllers/like-controller.js";
import createComment from "../../controllers/comment-controller.js";
import { logIn, signUp } from "../../controllers/user-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";
const router = express.Router();

router.post("/tweets", createTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", authenticate, createComment);
router.get("/tweets/:id", getTweet);
router.post("/signUp", signUp);
router.post("/login", logIn);

export default router;
