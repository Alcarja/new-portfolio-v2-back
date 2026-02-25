import express from "express";

import {
  getAllProjects,
  getProjectById,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/get-all-projects", getAllProjects);
router.get("/get-project-by-id/:projectId", getProjectById);

export default router;
