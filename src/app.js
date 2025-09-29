import express from "express";
import morgan from "morgan";
import "express-async-errors"; // handles async errors
import postsRouter from "./routes/posts.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/posts", postsRouter);

// Not Found Middleware
app.use(notFound);

// Error Handler Middleware
app.use(errorHandler);

export default app;
