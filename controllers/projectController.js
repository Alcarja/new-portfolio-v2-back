import { desc, eq } from "drizzle-orm";
import { db } from "../db/client.js";
import { projects } from "../db/schema.js";

export const getAllProjects = async (req, res) => {
  try {
    const allProjects = await db
      .select({
        id: projects.id,
        name: projects.name,
        type: projects.type,
        year: projects.year,
        technology: projects.technology,
        url: projects.url,
        imageUrl: projects.imageUrl,
      })
      .from(projects)
      .orderBy(desc(projects.id));

    res.status(200).json(allProjects);
  } catch (err) {
    console.error("Get projects error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;

    const allProjects = await db
      .select({
        id: projects.id,
        name: projects.name,
        type: projects.type,
        year: projects.year,
        technology: projects.technology,
        url: projects.url,
        imageUrl: projects.imageUrl,
      })
      .from(projects)
      .where(eq(projects.id, projectId));

    res.status(200).json(allProjects);
  } catch (err) {
    console.error("Get project error:", err);
    res.status(500).json({ error: err.message });
  }
};
