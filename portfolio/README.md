# Lokesh Waran — Portfolio

A full-stack personal portfolio: a React (Vite) front end backed by a Node.js/Express + MongoDB API. Content (projects, skills, certifications) is stored in the database and served through REST endpoints, seeded from your resume.

```
portfolio/
├── backend/     Express API + MongoDB (Mongoose)
└── frontend/    React (Vite) site
```

If the API isn't running, the site still works — it falls back to local data in `frontend/src/data/portfolioData.js`, so you always have something to look at while wiring things up.

## 1. Prerequisites

- Node.js 18+
- A MongoDB database — either:
  - **Local**: install MongoDB Community Server and run `mongod`, or
  - **Free cloud option**: create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and copy its connection string

## 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set `MONGODB_URI` to your database (local or Atlas). Then seed the database with your resume content and start the API:

```bash
npm run seed    # loads projects, skills, and certifications from your resume
npm run dev     # starts the API on http://localhost:5000
```

Check it's alive: open `http://localhost:5000/api/health` — you should see `{"status":"ok", ...}`.

### API endpoints

| Method | Route                        | Description                          |
|--------|-------------------------------|---------------------------------------|
| GET    | `/api/projects`               | List all projects                     |
| GET    | `/api/projects/:id`           | Get one project                       |
| POST   | `/api/projects`                | Create a project                      |
| PUT    | `/api/projects/:id`           | Update a project                      |
| DELETE | `/api/projects/:id`           | Delete a project                      |
| GET    | `/api/skills`                 | All skills, grouped by category       |
| GET    | `/api/skills/certifications`  | All certifications                    |
| POST   | `/api/skills`                  | Add a skill                           |
| POST   | `/api/contact`                 | Submit a contact-form message         |
| GET    | `/api/contact`                 | List submitted messages (basic admin) |

## 3. Frontend setup

In a second terminal:

```bash
cd frontend
npm install
npm run dev     # starts the site on http://localhost:5173
```

Open `http://localhost:5173`. The frontend talks to the API at `http://localhost:5000/api` by default — to point it elsewhere, create `frontend/.env` with:

```
VITE_API_URL=https://your-api-domain.com/api
```

## 4. Editing your content

You don't need to touch the front-end code to update what's shown — edit the database instead:

- **Fastest path**: edit `backend/seed.js` (projects, skills, certifications arrays) and re-run `npm run seed`.
- **Or**: use the POST/PUT endpoints above (e.g. with a tool like Postman or `curl`) to add or update records directly.

## 5. Deploying

- **Frontend**: `npm run build` in `frontend/` produces a static `dist/` folder — deploy it to Vercel, Netlify, or GitHub Pages.
- **Backend**: deploy `backend/` to Render, Railway, or a small VM; point `MONGODB_URI` at your Atlas cluster and set `CLIENT_ORIGIN` to your deployed frontend's URL (for CORS).
- After deploying the backend, set `VITE_API_URL` in the frontend build environment to the backend's public URL.

For a full step-by-step walkthrough (Vercel + Render + MongoDB Atlas, all free tiers), see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Design notes

The visual direction is a code-editor/terminal aesthetic — a nod to the fact that this is a developer's own site: a typed "profile object" as the hero, section labels styled as file paths (`~/about`, `~/projects`, etc.), and a dark, cursor-teal palette rather than a generic template look. All content is pulled from your resume rather than placeholder text.
