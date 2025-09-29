import axios from "axios";
import Post from "../models/post.model.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts,
  });
};

// Get single post by ID
export const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: `Post with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: post,
  });
};

// Create new post
export const createPost = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({
      success: false,
      message: "Title and body are required",
    });
  }

  const newPost = await Post.create({ title, body });

  res.status(201).json({
    success: true,
    data: newPost,
  });
};

// Update post
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const post = await Post.findByIdAndUpdate(
    id,
    { title, body },
    { new: true, runValidators: true }
  );

  if (!post) {
    return res.status(404).json({
      success: false,
      message: `Post with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: post,
  });
};

// Delete post
export const deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: `Post with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
    data: post,
  });
};