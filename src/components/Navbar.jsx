import { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { state } = useAppContext()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`gaming-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
          ANURAG
          <span>23BAI70225 • EXP-4</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            HOME
          </Link>
          <Link to="/favorites" className={`nav-link ${isActive('/favorites') ? 'active' : ''}`}>
            FAVORITES
            {state.favorites.length > 0 && (
              <span className="nav-fav-badge">{state.favorites.length}</span>
            )}
          </Link>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          HOME
        </Link>
        <Link to="/favorites" className={`nav-link ${isActive('/favorites') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          FAVORITES
          {state.favorites.length > 0 && (
            <span className="nav-fav-badge">{state.favorites.length}</span>
          )}
        </Link>
      </nav>
    </header>
  )
}

export default memo(Navbar)
