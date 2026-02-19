import { useState, useEffect, useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAppContext } from '../context/AppContext'

/**
 * Home Page — Gaming RGB Style
 * Uses Context API for theme
 * Experiment 4 | Anurag (23BAI70225)
 */

const features = [
  {
    icon: '⚛️',
    title: 'CONTEXT API',
    desc: 'Global state management with React Context — theme switching and favorites shared across all components.',
    tags: ['createContext', 'useContext', 'Provider'],
  },
  {
    icon: '⚡',
    title: 'useReducer',
    desc: 'Structured state logic with reducer pattern — ADD, REMOVE, CLEAR favorites with predictable state updates.',
    tags: ['useReducer', 'dispatch', 'actions'],
  },
  {
    icon: '🧠',
    title: 'useMemo',
    desc: 'Performance optimization with memoized computations — filtered search and derived counts recalculated only when needed.',
    tags: ['useMemo', 'memo', 'optimization'],
  },
]

const Home = () => {
  const { state } = useAppContext()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowModal(true), 600)
    return () => clearTimeout(t)
  }, [])

  // useMemo: derive a summary string from favorites (uses context)
  const favSummary = useMemo(() => {
    if (state.favorites.length === 0) return 'No favorites yet'
    return `${state.favorites.length} item${state.favorites.length > 1 ? 's' : ''} saved`
  }, [state.favorites])

  const bgStyle = {
    background: 'linear-gradient(135deg, #0a0a0a 0%, #050510 50%, #0a0a0a 100%)',
    color: '#fff',
  }

  return (
    <div style={bgStyle}>
      <Navbar />

      {/* ===== EXPERIMENT 4 POPUP ===== */}
      {showModal && (
        <div className="exp-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="exp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="exp-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <div className="exp-modal-icon">🧪</div>
            <h2>EXPERIMENT 4</h2>
            <h3>Full Stack Development — Advanced React Hooks</h3>
            <hr className="rgb-divider" />

            <div className="aim-section">
              <h4>🎯 AIM</h4>
              <p>
                Implement advanced React state management using Context API, useReducer,
                and useMemo hooks to build a globally managed application with optimized
                performance and structured state logic.
              </p>
            </div>

            <div className="obj-section">
              <h4>🎓 OBJECTIVES</h4>
              <ul className="obj-list">
                <li>Create global state with Context API (theme + favorites)</li>
                <li>Implement useReducer with ADD, REMOVE, CLEAR actions</li>
                <li>Optimize with useMemo for derived computations</li>
                <li>Build Favorites page with full CRUD operations</li>
                <li>Use functional components with React Router navigation</li>
                <li>Apply React best practices — no external state libraries</li>
              </ul>
            </div>

            <div className="student-info">
              <div className="info-item"><span className="label">Student: </span><span className="value">Anurag</span></div>
              <div className="info-item"><span className="label">UID: </span><span className="value">23BAI70225</span></div>
              <div className="info-item"><span className="label">Section: </span><span className="value">23AML-6B</span></div>
              <div className="info-item"><span className="label">University: </span><span className="value">Chandigarh University</span></div>
            </div>

            <button className="modal-cta" onClick={() => setShowModal(false)}>
              LET'S GO →
            </button>
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
      <main className="page-container">
        <section className="home-hero">
          <h1 className="hero-name">ANURAG</h1>
          <p className="hero-uid">UID: 23BAI70225 &nbsp;•&nbsp; SECTION: 23AML-6B</p>
          <p className="hero-tagline">
            <strong>Experiment 4</strong> — Advanced React Hooks<br />
            Context API &nbsp;•&nbsp; useReducer &nbsp;•&nbsp; useMemo
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/favorites" className="gaming-btn success" style={{ textDecoration: 'none' }}>
              ★ FAVORITES ({favSummary})
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
            <p className="section-subtitle">Core React hooks implemented in this experiment</p>
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

        {/* ===== FOOTER ===== */}
        <footer className="footer-bar">
          <strong>ANURAG</strong> &nbsp;|&nbsp; 23BAI70225 &nbsp;|&nbsp; Experiment 4 &nbsp;|&nbsp; Chandigarh University
        </footer>
      </main>
    </div>
  )
}

export default memo(Home)
