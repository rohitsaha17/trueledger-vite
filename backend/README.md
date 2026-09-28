# TrueLedger Backend

Express + MongoDB (Mongoose) API for the TrueLedger website and admin panel.

## Setup

```bash
npm install
npm run seed           # creates the admin login
npm run dev            # http://localhost:5000
```

Create a `.env` in this folder first (it is gitignored):

```
MONGODB_URI=
PORT=5000
JWT_SECRET=
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

## Structure

```
config/       mongodb connection
models/       mongoose schemas
controllers/  request handlers
routes/       url -> controller mapping
middleware/   jwt auth guard
server.js     app setup
seed.js       creates the admin user
```

## Endpoints

Public — no token:

| Method | Path                     | Used by                          |
| ------ | ------------------------ | -------------------------------- |
| GET    | /api/case-studies        | case studies page                |
| GET    | /api/case-studies/:slug  | case study detail page           |
| GET    | /api/blog                | resources page                   |
| GET    | /api/blog/:slug          | blog post page                   |
| GET    | /api/media               | media gallery page               |
| POST   | /api/enquiries           | contact form, consultation modal, whitepaper gate |
| POST   | /api/subscribers         | newsletter form                  |
| POST   | /api/auth/login          | admin login                      |
| GET    | /api/site-assets         | every page (admin image/video overrides) |
| GET    | /api/uploads/:id         | serves an uploaded file          |

Admin — send `Authorization: Bearer <token>`:

| Method | Path                     | Used by                          |
| ------ | ------------------------ | -------------------------------- |
| GET    | /api/auth/me             | admin route guard                |
| GET    | /api/stats               | dashboard counts                 |
| GET    | /api/case-studies/all    | admin case studies list          |
| POST   | /api/case-studies        | create                           |
| PUT    | /api/case-studies/:id    | update / publish toggle          |
| DELETE | /api/case-studies/:id    | delete                           |
| GET    | /api/enquiries           | admin enquiries page             |
| DELETE | /api/enquiries/:id       | delete an enquiry                |
| GET    | /api/subscribers         | admin subscribers page           |
| DELETE | /api/subscribers/:id     | remove a subscriber              |
| PUT    | /api/site-assets/:key    | replace a site image/video       |
| DELETE | /api/site-assets/:key    | reset it to the original         |
| POST   | /api/uploads             | upload a file (raw body, max 50 MB) |

Blog (`/api/blog`) and media (`/api/media`) follow the same pattern as case
studies. Media has no `/:slug` route — it is only ever listed.

## Site assets & uploads

Every image/video slot on the website has a key (e.g. `home.hero.slide-1`) and a
default, both listed in `frontend/src/data/site-assets/`. The `siteassets`
collection only stores the slots an admin has replaced.

Uploaded files are stored in MongoDB GridFS (`uploads.files` / `uploads.chunks`)
and referenced as `/api/uploads/<id>`. They count toward the Atlas storage quota
(512 MB on the free tier), so keep videos small.
