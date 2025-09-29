import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/", getAllPosts);      // GET all posts
router.get("/:id", getPostById);   // GET single post
router.post("/", createPost);      // CREATE new post
router.put("/:id", updatePost);    // UPDATE post
router.delete("/:id", deletePost); // DELETE post

export default router;
