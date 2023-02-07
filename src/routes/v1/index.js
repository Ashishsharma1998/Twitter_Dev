import express from "express";
import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import toggleLike from "../../controllers/like-controller.js";
import createComment from "../../controllers/comment-controller.js";
import { signUp } from "../../controllers/user-controller.js";
const router = express.Router();

router.post("/tweets", createTweet);
router.post("/toggle/like", toggleLike);
router.post("/comments", createComment);
router.get("/tweets/:id", getTweet);
router.post("/signUp", signUp);

export default router;
