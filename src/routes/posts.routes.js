import { Router } from "express";
import { getAllPosts, getPostById } from "../controllers/posts.controller.js";

const router = Router();

// GET all posts
router.get("/", getAllPosts);

// GET single post by ID
router.get("/:id", getPostById);

export default router;
