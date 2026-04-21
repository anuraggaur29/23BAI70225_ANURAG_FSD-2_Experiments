import { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppContext } from '../context/AppContext'
import ThemeToggle from './ThemeToggle'

/**
 * Navbar — Gaming RGB Style
 * Uses Context (theme) + Redux (favorites count)
 * Experiment 5 | Anurag (23BAI70225)
 */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const favoritesCount = useSelector((state) => state.app.favorites.length)
  const { user } = useAppContext()
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
          {user.name.toUpperCase()}
          <span>{user.uid} • EXP-5</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            HOME
          </Link>
          <Link to="/favorites" className={`nav-link ${isActive('/favorites') ? 'active' : ''}`}>
            FAVORITES
            {favoritesCount > 0 && (
              <span className="nav-fav-badge">{favoritesCount}</span>
            )}
          </Link>
          <Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`}>
            REPORTS
          </Link>
          <ThemeToggle />
        </nav>

        <div className="nav-mobile-actions">
          <ThemeToggle />
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <nav className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          HOME
        </Link>
        <Link to="/favorites" className={`nav-link ${isActive('/favorites') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          FAVORITES
          {favoritesCount > 0 && (
            <span className="nav-fav-badge">{favoritesCount}</span>
          )}
        </Link>
        <Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          REPORTS
        </Link>
      </nav>
    </header>
  )
}

export default memo(Navbar)
