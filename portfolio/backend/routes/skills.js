import { Router } from "express";
import Skill from "../models/Skill.js";
import Certification from "../models/Certification.js";

const router = Router();

// GET /api/skills - all skills, grouped by category
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    const grouped = skills.reduce((acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});

// GET /api/skills/certifications - all certifications
router.get("/certifications", async (req, res) => {
  try {
    const certs = await Certification.find().sort({ order: 1, createdAt: 1 });
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch certifications" });
  }
});

// POST /api/skills - add a skill
router.post("/", async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
