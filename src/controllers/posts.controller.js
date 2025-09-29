import axios from "axios";

const API_URL = process.env.API_URL || "https://jsonplaceholder.typicode.com/posts";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    console.log("📡 Fetching from:", API_URL);
    const response = await axios.get(API_URL);
    res.status(200).json({
      success: true,
      count: response.data.length,
      data: response.data,
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
};

// Get post by ID
export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`📡 Fetching post ID: ${id} from ${API_URL}`);
    const response = await axios.get(`${API_URL}/${id}`);
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("❌ Error in getPostById:", error.message);
    res.status(404).json({
      success: false,
      message: `Post with id ${id} not found`,
      error: error.message,
    });
  }
};
