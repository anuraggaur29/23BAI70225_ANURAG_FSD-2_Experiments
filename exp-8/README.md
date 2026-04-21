# Experiment 8 - Frontend Integration with JWT APIs

# Exp-8_FSD_Anurag_23BAI70225

React frontend for **Experiment 8**, integrated with the JWT backend from **exp-6-FSD**.

## Objective

- Login using backend JWT API
- Store JWT in `sessionStorage` for current browser session
- Protect dashboard route when no token exists
- Call protected endpoint with `Authorization: Bearer <token>`
- Logout by clearing session token

## Tech Stack

- React + Vite
- Bootstrap
- Material UI
- Axios
- React Router DOM

## Project Structure

```text
exp-8-FSD/
├── screenshots/
├── src/
│   ├── api/
│   │   └── client.js
│   ├── components/
│   │   ├── DashboardPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
└── README.md
```

## Backend Contract (Exp 6)

- Base URL: `http://localhost:5000/api`
- Login: `POST /auth/login`
- Protected route: `GET /protected`
- Logout: `POST /auth/logout`

Demo credential from Exp 6:

- `user123 / password123`

## Setup & Run

```bash
npm install
npm run dev
```

For production build:

```bash
npm run build
npm run preview
```

## Environment Variable

Create `.env` (or edit `.env.example`) if backend URL changes:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Implementation Notes

### Login API call

```js
const response = await api.post("/auth/login", { username, password });
const token = response?.data?.token;
sessionStorage.setItem("token", token);
```

### Protected API call

```js
const response = await api.get("/protected");
```

Axios interceptor automatically injects the JWT token:

```js
config.headers.Authorization = `Bearer ${token}`;
```

### Route guard

```js
if (!sessionStorage.getItem("token")) {
  return <Navigate to="/" replace />;
}
```

### Logout

```js
sessionStorage.removeItem("token");
sessionStorage.removeItem("username");
```

## Screenshots

### Login Page

![Login Page](./screenshots/Screenshot%202026-04-17%20010506.png)

### Successful Login / Dashboard

![Successful Login Dashboard](./screenshots/Screenshot%202026-04-17%20010529.png)

### Protected API Access Success

![Protected API Access](./screenshots/Screenshot%202026-04-17%20010535.png)

## Submission Notes

- Do not upload `node_modules` in zip
- Keep README updated
- Add your deployment link in required format:
  - `{uid}-8-{name}.vercel.app`
