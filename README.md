# Digital Marketing Website (fully dynamic)

React + Vite + Tailwind (client) and Node + Express + MongoDB (server).
**All content comes from MongoDB through the API — there is no static/mock fallback.**
If the API is down the site shows a retry screen instead of fake data.

## Run

```bash
# server  (needs MONGO_URI, optionally PORT, CLIENT_ORIGIN, ADMIN_API_KEY in server/.env)
cd server && npm install
npm run seed      # WARNING: replaces all content collections with the sample content
npm run dev       # http://localhost:5000

# client  (VITE_API_URL=http://localhost:5000/api in client/.env)
cd client && npm install && npm run dev
```

## What is dynamic

| Area | Collection / endpoint |
|---|---|
| Brand, nav, hero, stats, process, CTA, contact, footer, section headings | `SiteSettings` — `GET /api/settings` |
| Services (+ detail pages) | `GET /api/services`, `/api/services/:slug` |
| Industries | `/api/industries` |
| Case studies | `/api/case-studies` (`?featured=true&service=seo`) |
| Blog | `/api/blog` (`?category=SEO`) |
| Testimonials, clients, team, packages, FAQs, jobs, pages (about, privacy) | `/api/testimonials`, `/clients`, `/team`, `/packages`, `/faqs`, `/jobs`, `/pages/:slug` |
| Home page in one request | `GET /api/home` |
| Lead forms (contact + free audit) | `POST /api/contact` → `ContactMessage` |

Navigation dropdowns are built from the services/industries collections, so adding a service adds it to the menu.

## Editing content (admin API)

Writes are disabled unless `ADMIN_API_KEY` is set in `server/.env`. Then send it as the `x-admin-key` header:

```bash
curl -X POST $API/services -H 'x-admin-key: …' -H 'content-type: application/json' -d '{…}'
curl -X PUT  $API/blog/<id> -H 'x-admin-key: …' -d '{…}'      # PUT/DELETE use the Mongo _id
curl -X PUT  $API/settings  -H 'x-admin-key: …' -d '{…}'
```

The sample brand ("Growthly"), people, clients and numbers in `server/src/data/seed/` are placeholders — replace them with real data.
