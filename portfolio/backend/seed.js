import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Project from "./models/Project.js";
import Skill from "./models/Skill.js";
import Certification from "./models/Certification.js";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

const projects = [
  {
    title: "TripVault",
    subtitle: "Full-Stack Travel Planning Application",
    description:
      "A full-stack travel planning platform enabling users to create, manage, and organize trips through a secure, authenticated web interface.",
    highlights: [
      "Designed and implemented a RESTful API using Node.js and Express, with endpoints supporting user registration, login, and complete CRUD operations for trip records.",
      "Implemented secure user authentication and session handling using JSON Web Tokens (JWT), protecting trip-related routes from unauthorized access.",
      "Developed a responsive front-end using React and Vite, delivering a fast, modern user experience for creating and managing trip data.",
      "Used a lightweight JSON-based data layer for rapid local development and testing, with the architecture structured to support a production database migration.",
      "Deployed the application on Vercel, configuring build and routing settings for a live, publicly accessible demo.",
    ],
    techStack: ["React", "Vite", "Node.js", "Express", "JWT", "JSON Data Store"],
    repoUrl: "https://github.com/lokeshanon680-bot/Tripvault",
    liveUrl: "",
    order: 1,
  },
];

const skills = [
  { name: "Python", category: "language", blurb: "Develops and tests Python scripts for data analysis and automation tasks.", order: 1 },
  { name: "Java", category: "language", blurb: "Implements Java-based solutions for software modules and applications.", order: 2 },

  { name: "React", category: "web", blurb: "Builds responsive, component-driven front-ends.", order: 1 },
  { name: "Node.js / Express", category: "web", blurb: "Builds RESTful APIs and backend services.", order: 2 },
  { name: "MongoDB", category: "web", blurb: "Data modelling, CRUD operations, and aggregation pipelines.", order: 3 },
  { name: "REST APIs", category: "web", blurb: "Designs and consumes REST endpoints end to end.", order: 4 },

  { name: "Git & GitHub", category: "tools", blurb: "Collaborates on codebases using Git, managing version control and branching effectively.", order: 1 },
  { name: "AWS Cloud Foundations", category: "tools", blurb: "Foundational understanding of AWS compute, storage, databases, networking, and security.", order: 2 },
  { name: "MS Word", category: "tools", blurb: "Creates and formats professional documents and reports.", order: 3 },

  { name: "Communication", category: "professional", blurb: "Clearly conveys technical information to team members through written and verbal updates.", order: 1 },
  { name: "Teamwork", category: "professional", blurb: "Collaborates with developers and designers to deliver high-quality software products.", order: 2 },
  { name: "Curriculum Development", category: "professional", blurb: "Designs engaging, outcomes-based curricula tailored to diverse student needs.", order: 3 },
  { name: "Active Learning", category: "professional", blurb: "Promotes participation through discussion, hands-on activities, and collaborative tasks.", order: 4 },
  { name: "Public Speaking", category: "professional", blurb: "Delivers lectures and presentations clearly and confidently to large and small groups.", order: 5 },
  { name: "Accurate Data Entry", category: "professional", blurb: "Inputs large volumes of data into databases with high accuracy and attention to detail.", order: 6 },
  { name: "Office Supply Management", category: "professional", blurb: "Monitors inventory levels and places orders to ensure uninterrupted office operations.", order: 7 },
];

const certifications = [
  {
    title: "Introduction to MongoDB (For Students)",
    issuer: "MongoDB",
    date: "September 2024",
    score: "100%",
    description:
      "Data modelling, CRUD operations, and querying using MongoDB. Schema design, indexing, and the aggregation framework. Familiar with MongoDB Atlas.",
    order: 1,
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "March 2025",
    score: "100%",
    description:
      "Foundational understanding of AWS cloud services across compute, storage, databases, networking, and security. Practical skills in cloud deployment and management.",
    order: 2,
  },
  {
    title: "Learnathon '25: Get Started with Microsoft Copilot",
    issuer: "Microsoft",
    date: "September 2025",
    score: "95%",
    description:
      "Integrating AI-driven productivity tools into workflows and leveraging LLMs for task automation and content generation.",
    order: 3,
  },
  {
    title: "Problem Solving & Innovation",
    issuer: "Wadhwani Foundation",
    date: "October 2025",
    score: "100%",
    description:
      "Microcertificate for a 4-hour intensive training program focused on structured problem solving and innovation techniques.",
    order: 4,
  },
];

async function seed() {
  await connectDB(MONGODB_URI);

  await Promise.all([
    Project.deleteMany({}),
    Skill.deleteMany({}),
    Certification.deleteMany({}),
  ]);

  await Project.insertMany(projects);
  await Skill.insertMany(skills);
  await Certification.insertMany(certifications);

  console.log(`[seed] inserted ${projects.length} projects`);
  console.log(`[seed] inserted ${skills.length} skills`);
  console.log(`[seed] inserted ${certifications.length} certifications`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
