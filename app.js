import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import projectRoutes from "./routes/projectRoutes.js";

/* import authRoutes from "./routes/authRoutes.js"; */

dotenv.config();

const app = express();

app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "http://116.203.109.157",
  "https://jaime-alcaraz.es",
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/projects", projectRoutes);

export default app;
