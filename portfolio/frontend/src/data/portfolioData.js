// Fallback data used when the backend API is unreachable, so the site
// still renders something meaningful during local development or a
// front-end-only deploy.

export const fallbackProjects = [
  {
    _id: "tripvault",
    title: "TripVault",
    subtitle: "Full-Stack Travel Planning Application",
    description:
      "A full-stack travel planning platform enabling users to create, manage, and organize trips through a secure, authenticated web interface.",
    highlights: [
      "RESTful API in Node.js and Express with endpoints for registration, login, and full CRUD on trip records.",
      "JWT-based authentication and session handling protecting trip routes from unauthorized access.",
      "Responsive React + Vite front-end for creating and managing trip data.",
      "JSON-based data layer for rapid local development, structured to support a production database migration.",
      "Deployed on Vercel with build and routing configured for a live public demo.",
    ],
    techStack: ["React", "Vite", "Node.js", "Express", "JWT", "JSON Data Store"],
    repoUrl: "https://github.com/lokeshanon680-bot/Tripvault",
    liveUrl: "",
  },
];

export const fallbackSkills = {
  language: [
    { _id: "s1", name: "Python", blurb: "Develops and tests Python scripts for data analysis and automation tasks." },
    { _id: "s2", name: "Java", blurb: "Implements Java-based solutions for software modules and applications." },
  ],
  web: [
    { _id: "s3", name: "React", blurb: "Builds responsive, component-driven front-ends." },
    { _id: "s4", name: "Node.js / Express", blurb: "Builds RESTful APIs and backend services." },
    { _id: "s5", name: "MongoDB", blurb: "Data modelling, CRUD operations, and aggregation pipelines." },
    { _id: "s6", name: "REST APIs", blurb: "Designs and consumes REST endpoints end to end." },
  ],
  tools: [
    { _id: "s7", name: "Git & GitHub", blurb: "Version control and branching across collaborative codebases." },
    { _id: "s8", name: "AWS Cloud Foundations", blurb: "Compute, storage, databases, networking, and security fundamentals." },
    { _id: "s9", name: "MS Word", blurb: "Professional document formatting and reporting." },
  ],
  professional: [
    { _id: "s10", name: "Communication", blurb: "Conveys technical information clearly in writing and verbally." },
    { _id: "s11", name: "Teamwork", blurb: "Collaborates with developers and designers to ship quality software." },
    { _id: "s12", name: "Curriculum Development", blurb: "Designs outcomes-based curricula for diverse learners." },
    { _id: "s13", name: "Active Learning", blurb: "Promotes participation through discussion and hands-on tasks." },
    { _id: "s14", name: "Public Speaking", blurb: "Delivers presentations clearly to groups of any size." },
    { _id: "s15", name: "Accurate Data Entry", blurb: "High-accuracy data entry with strong attention to detail." },
  ],
};

export const fallbackCertifications = [
  {
    _id: "c1",
    title: "Introduction to MongoDB (For Students)",
    issuer: "MongoDB",
    date: "September 2024",
    score: "100%",
    description: "Data modelling, CRUD operations, querying, schema design, indexing, and the aggregation framework.",
  },
  {
    _id: "c2",
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "March 2025",
    score: "100%",
    description: "Compute, storage, databases, networking, and security across the AWS cloud stack.",
  },
  {
    _id: "c3",
    title: "Learnathon '25: Get Started with Microsoft Copilot",
    issuer: "Microsoft",
    date: "September 2025",
    score: "95%",
    description: "Integrating AI-driven productivity tools into workflows and automating tasks with LLMs.",
  },
  {
    _id: "c4",
    title: "Problem Solving & Innovation",
    issuer: "Wadhwani Foundation",
    date: "October 2025",
    score: "100%",
    description: "A 4-hour intensive on structured problem solving and innovation techniques.",
  },
];

export const profile = {
  name: "Lokesh Waran",
  role: "Aspiring Software Developer",
  tagline: "Full-Stack Development · Cloud & AI Enthusiast",
  email: "lokeshanon680@gmail.com",
  phone: "+91 8870337408",
  linkedin: "https://linkedin.com/in/lokesh-waran",
  github: "https://github.com/lokeshanon680-bot",
  education: {
    degree: "B.E. Computer Science and Engineering",
    school: "Dhanalakshmi Srinivasan Engineering College, Perambalur",
    period: "September 2024 — April 2028",
    score: "80%",
    description:
      "Proficient in data structures, algorithms, and software development methodologies. Strong analytical and problem-solving skills built through database management, operating systems, and computer networks coursework.",
  },
};
