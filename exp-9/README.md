# Experiment 9 - Frontend Integration with RBAC APIs

# Exp-9_FSD_Anurag_23BAI70225

React frontend for **Experiment 9**, integrated with RBAC backend from **exp-7-FSD**.

## Objective

- Login using username/password against RBAC backend
- Keep session state in `sessionStorage`
- Redirect users based on role
- Restrict UI and routes for `USER` and `ADMIN`
- Demonstrate role-based endpoint access from frontend

## Tech Stack

- React + Vite
- Bootstrap
- Material UI
- Axios
- React Router DOM

## Project Structure

```text
exp-9-FSD/
├── screenshots/
├── src/
│   ├── api/
│   │   └── client.js
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RoleRoute.jsx
│   │   └── UserDashboard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
└── README.md
```

## Backend Contract (Exp 7)

- Base URL: `http://localhost:8080/api`
- User endpoint: `GET /user/profile`
- Admin endpoint: `GET /admin/dashboard`
- Public endpoint (backend): `GET /public/hello`

Demo credentials from Exp 7:

- `user1 / user123` -> USER
- `admin1 / admin123` -> ADMIN

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
VITE_API_BASE_URL=http://localhost:8080/api
```

## Implementation Notes

### Login flow

1. Encode credentials to Basic Auth.
2. Validate with `GET /user/profile`.
3. Check role by trying `GET /admin/dashboard`.
4. Save `role`, `username`, and `basicAuth` in `sessionStorage`.
5. Redirect:
   - USER -> `/user`
   - ADMIN -> `/admin`

### Basic Auth header

```js
const basicToken = sessionStorage.getItem("basicAuth");
headers: { Authorization: `Basic ${basicToken}` };
```

### Route protection

```js
<RoleRoute allow={["ADMIN"]}>
  <AdminDashboard />
</RoleRoute>
```

### Role-based UI behavior

- USER dashboard:
  - Can fetch `/api/user/profile`
  - Gets denied on `/api/admin/dashboard` (403 expected)
- ADMIN dashboard:
  - Can fetch both `/api/user/profile` and `/api/admin/dashboard`

### Logout

```js
sessionStorage.clear();
```

## Screenshots

### Login Page

![Login Page](./screenshots/Screenshot%202026-04-17%20011202.png)

### USER Dashboard Access

![USER Dashboard Access](./screenshots/Screenshot%202026-04-17%20011441.png)

### USER Forbidden on ADMIN Route

![USER Forbidden on ADMIN Route](./screenshots/Screenshot%202026-04-17%20011456.png)

### ADMIN Dashboard Access

![ADMIN Dashboard Access](./screenshots/Screenshot%202026-04-17%20011516.png)

### Session Storage (Role/User)

![Session Storage Role User](./screenshots/Screenshot%202026-04-17%20011535.png)

### Unauthorized / Redirect Flow

![Unauthorized Redirect Flow](./screenshots/Screenshot%202026-04-17%20011543.png)

### Additional Verification

![Additional Verification](./screenshots/Screenshot%202026-04-17%20011623.png)

## Submission Notes

- Do not upload `node_modules` in zip
- Keep README updated
- Add deployment link in required format:
  - `{uid}-9-{name}.vercel.app`
