import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed!", err);
  });







/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.MONGODB_URI, (error) => {
      console.log(`app is listening on port ${process.env.MONGODB_URI}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/