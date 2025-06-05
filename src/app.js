import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

// ✅ Only allow JSON and urlencoded data for non-multipart routes
// multer handles multipart/form-data automatically
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Serve static files (important for multer temp paths)
app.use(express.static("public"));

// ✅ Cookie parser
app.use(cookieParser());

// ✅ Routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export { app };