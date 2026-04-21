# Experiment 5 — Full Stack Development

**Student:** Anurag  
**UID:** 23BAI70225  
**Section:** 23AML-6B  
**University:** Chandigarh University

---

## Experiment 5 Updates

This project extends **Experiment 4** with the following enhancements:

### What's New

- **Redux Toolkit** — Centralized state management using `configureStore` and `createSlice` with 3 actions: `addFavorite`, `removeFavorite`, `clearFavorites`
- **Context API** — Global `AppContext` providing theme toggle (dark/light) and mock user profile, used in Navbar, Footer, and all pages
- **useMemo** — Performance-optimized derived computations: filtered search, category stats, completion percentage, missing items
- **New Page: Reports** — Analytics dashboard showing category breakdown, progress bars, and collection stats
- **Theme Toggle** — Dark/Light mode switch using `useContext`, persisted via `localStorage`

### Pages (3 total via React Router)

1. **Home** — Hero section, experiment info modal, feature cards
2. **Favorites** — Add/remove/clear favorites with search filtering
3. **Reports** _(NEW for Exp 5)_ — Analytics dashboard with Redux state + useMemo + Context

### Tech Stack

- React 18 + Vite
- Redux Toolkit (`@reduxjs/toolkit` + `react-redux`)
- React Router v6
- Context API (`useContext` + `createContext`)
- `useMemo` for derived state optimization
- CSS with gaming RGB theme + light/dark mode

### Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── AppContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Favorites.jsx
│   └── Reports.jsx          ← NEW (Exp 5)
├── store/
│   ├── store.js
│   └── favoritesSlice.js
├── styles/
│   ├── variables.css
│   ├── animations.css
│   ├── components.css
│   └── responsive.css
├── App.jsx
└── main.jsx
```

### Screenshots

See the `/screenshots` folder:

- `home.png` — Home page with experiment info
- `reports.png` — New Reports/Analytics page
- `favorites.png` — Favorites management page

### How to Run

```bash
npm install
npm run dev
```

---

> Built with React + Redux Toolkit + Context API | Experiment 5 — FSD
