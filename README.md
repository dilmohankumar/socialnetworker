# socialnetworker-style Digital Marketing Website (Clone)

Full-stack starter: **React + Vite + Tailwind CSS** (client) and **Node.js + Express + MongoDB** (server).

This first drop builds the **Home Page** only (Header with hover dropdowns, Hero, Services grid,
About, Locations, Footer) pixel-matched to the reference screenshots, wired to the backend API,
but falling back to local mock data automatically if the API isn't running yet.

Every other page (Services detail, Verticals detail, Technologies, Our Work, Careers, Contact)
is intentionally left out for now — the instructions said to nail this page first, then add the
rest once this is approved. The folder structure below already has empty `pages/` slots reserved
so adding them later is just "create the file, add the route."

```
socialnetworker-clone/
├── client/                     # React + Vite + Tailwind
│   ├── public/
│   ├── src/
│   │   ├── assets/             # logo, icons, images
│   │   ├── components/
│   │   │   ├── layout/         # Header, Footer, Navbar dropdown
│   │   │   ├── home/           # Hero, Services, About, Locations sections
│   │   │   └── common/         # Button, Dropdown, Container, SectionTitle
│   │   ├── data/                # mockData.js -> used until backend is live
│   │   ├── hooks/                # useFetch etc.
│   │   ├── pages/                # Home.jsx (more pages later)
│   │   ├── services/              # api.js -> axios instance + endpoints
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   ├── .env.example
│   └── package.json
│
├── server/                     # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/
│   │   ├── models/               # Service, Vertical, ContactMessage
│   │   ├── routes/
│   │   ├── middleware/errorHandler.js
│   │   ├── data/seedData.js      # same mock content, seeds MongoDB
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

## Running it

### 1. Backend
```bash
cd server
npm install
cp .env.example .env      # set your MongoDB URI
npm run seed               # loads mock services/verticals into MongoDB
npm run dev                # starts on http://localhost:5000
```

### 2. Frontend
```bash
cd client
npm install
cp .env.example .env      # VITE_API_URL=http://localhost:5000/api
npm run dev                 # starts on http://localhost:5173
```

If `VITE_API_URL` is unreachable, the site silently falls back to
`src/data/mockData.js` so the UI is never blocked on the backend — perfect for
now, and you flip it to fully dynamic later with zero component changes.

## Design tokens used (matched from screenshots)
- Navy hero background: `#211E5B` → gradient to `#100E33`
- Primary accent (headline + CTA button): `#E1552D`
- Purple pill buttons ("Know More"): `#6E2FA8`
- Neutral text: `#1A1A1A` / white on dark sections
