import { createPost, getPosts } from "@controllers/post-controller";
import express from "express";

const router = express.Router();

router.get("/publications", getPosts);
router.post("/create-publication", createPost);

export default router;