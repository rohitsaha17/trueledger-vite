# TrueLedger Consulting

```
backend/    Express + MongoDB API (admin auth, case studies, media, blog)
frontend/   React + Vite website and admin panel
```

## Running locally

Two terminals:

```bash
# terminal 1
cd backend
npm install
npm run seed     # creates the admin login from ADMIN_EMAIL / ADMIN_PASSWORD in .env
npm run dev      # http://localhost:5000

# terminal 2
cd frontend
npm install
npm run dev      # http://localhost:5173
```

The admin panel is at `/admin/login`.

## Environment

`backend/.env`

```
MONGODB_URI=...
PORT=5000
JWT_SECRET=...
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=admin@trueledger.com
ADMIN_PASSWORD=...
```

`frontend/.env`

```
VITE_API_URL=http://localhost:5000/api
```

See `backend/README.md` for the API endpoints.
