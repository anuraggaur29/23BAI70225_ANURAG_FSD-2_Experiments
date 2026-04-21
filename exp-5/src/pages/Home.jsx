import { useState, useEffect, useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useAppContext } from '../context/AppContext'

/**
 * Home Page — Gaming RGB Style
 * Uses Context API (theme + user) + Redux (favorites)
 * Experiment 5 | Anurag (23BAI70225)
 */

const features = [
  {
    icon: '⚛️',
    title: 'REDUX TOOLKIT',
    desc: 'Centralized state management with Redux Toolkit — favorites shared across all components with predictable updates.',
    tags: ['configureStore', 'createSlice', 'Provider'],
  },
  {
    icon: '🎨',
    title: 'CONTEXT API',
    desc: 'Global theme toggle and user profile using React Context — consumed across Navbar, Footer, and all pages.',
    tags: ['useContext', 'createContext', 'Provider'],
  },
  {
    icon: '🧠',
    title: 'useMemo',
    desc: 'Performance optimization with memoized computations — filtered search, category stats, and derived counts.',
    tags: ['useMemo', 'memo', 'optimization'],
  },
  {
    icon: '🛣️',
    title: 'REACT ROUTER',
    desc: 'Multi-page navigation with React Router v6 — Home, Favorites, and Reports pages with lazy loading.',
    tags: ['BrowserRouter', 'Routes', 'Link'],
  },
]

const Home = () => {
  const favorites = useSelector((state) => state.app.favorites)
  const { theme, user } = useAppContext()
  const [showModal, setShowModal] = useState(false)
  const [showCloud, setShowCloud] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowModal(true), 600)
    return () => clearTimeout(t)
  }, [])

  // useMemo: derive a summary string from favorites
  const favSummary = useMemo(() => {
    if (favorites.length === 0) return 'No favorites yet'
    return `${favorites.length} item${favorites.length > 1 ? 's' : ''} saved`
  }, [favorites])

  return (
    <div className={`page-wrapper ${theme}`}>
      <Navbar />

      {/* ===== EXPERIMENT 5 POPUP ===== */}
      {showModal && (
        <div className="exp-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="exp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="exp-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <div className="exp-modal-icon">🧪</div>
            <h2>EXPERIMENT 5</h2>
            <h3>Full Stack Development — Redux + Context + useMemo</h3>
            <hr className="rgb-divider" />

            <div className="aim-section">
              <h4>🎯 AIM</h4>
              <p>
                Enhance the Experiment 4 project by implementing Redux Toolkit for state management,
                Context API for global theme/user state, and useMemo for performance optimization
                across a multi-page React application.
              </p>
            </div>

            <div className="obj-section">
              <h4>🎓 OBJECTIVES</h4>
              <ul className="obj-list">
                <li>Implement Redux Toolkit with configureStore & createSlice</li>
                <li>Create Context Provider for theme toggle & user profile</li>
                <li>Optimize derived calculations with useMemo</li>
                <li>Add new Reports page with Redux + Context + useMemo</li>
                <li>Maintain React Router with 3+ pages</li>
                <li>Apply responsive design with light/dark themes</li>
              </ul>
            </div>

            <div className="student-info">
              <div className="info-item"><span className="label">Student: </span><span className="value">{user.name}</span></div>
              <div className="info-item"><span className="label">UID: </span><span className="value">{user.uid}</span></div>
              <div className="info-item"><span className="label">Section: </span><span className="value">{user.section}</span></div>
              <div className="info-item"><span className="label">University: </span><span className="value">{user.university}</span></div>
            </div>

            <button className="modal-cta" onClick={() => setShowModal(false)}>
              LET'S GO →
            </button>
          </div>
        </div>
      )}

      {/* ===== CLOUD: WHAT'S NEW IN EXP 5 ===== */}
      {showCloud && (
        <div className="cloud-wrapper">
          <button className="cloud-close" onClick={() => setShowCloud(false)}>✕</button>
          <div className="cloud-shape">
            <div className="cloud-inner">
              <h3 className="cloud-title">☁️ What's New in Exp 5</h3>
              <ul className="cloud-list">
                <li className="cloud-item ci-1">🔧 Redux Toolkit <span>(replaces useReducer)</span></li>
                <li className="cloud-item ci-2">🎨 Context API <span>(theme + user profile)</span></li>
                <li className="cloud-item ci-3">🧠 useMemo <span>(performance optimization)</span></li>
                <li className="cloud-item ci-4">📊 New Reports Page <span>(analytics dashboard)</span></li>
                <li className="cloud-item ci-5">🌗 Dark / Light Theme Toggle</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
      <main className="page-container">
        <section className="home-hero">
          <h1 className="hero-name">{user.name.toUpperCase()}</h1>
          <p className="hero-uid">UID: {user.uid} &nbsp;•&nbsp; SECTION: {user.section}</p>
          <p className="hero-tagline">
            <strong>Experiment 5</strong> — Redux Toolkit + Context API + useMemo<br />
            Redux &nbsp;•&nbsp; useContext &nbsp;•&nbsp; useMemo &nbsp;•&nbsp; React Router
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/favorites" className="gaming-btn success" style={{ textDecoration: 'none' }}>
              ★ FAVORITES ({favSummary})
            </Link>
            <Link to="/reports" className="gaming-btn" style={{ textDecoration: 'none' }}>
              📊 REPORTS
            </Link>
            <button className="gaming-btn" onClick={() => setShowModal(true)}>
              📋 EXPERIMENT INFO
            </button>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="features-section">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 className="section-title">CONCEPTS USED</h2>
            <p className="section-subtitle">Core React concepts implemented in Experiment 5</p>
            <hr className="rgb-divider" />
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="gaming-card feature-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div style={{ marginTop: '12px' }}>
                  {f.tags.map((tag) => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default memo(Home)
