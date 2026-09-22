# TrueLedger Backend

Express + MongoDB (Mongoose) API for the TrueLedger website and admin panel.

## Setup

```bash
npm install
cp .env.example .env   # then fill in MONGODB_URI, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npm run seed           # creates the admin login
npm run dev            # http://localhost:5000
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

Blog (`/api/blog`) and media (`/api/media`) follow the same pattern as case
studies. Media has no `/:slug` route — it is only ever listed.
