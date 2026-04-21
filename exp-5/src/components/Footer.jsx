import { memo } from 'react'
import { useAppContext } from '../context/AppContext'

/**
 * Footer — Uses Context API (user info + theme)
 * Experiment 5 | Anurag (23BAI70225)
 */

const Footer = () => {
  const { user, theme } = useAppContext()

  return (
    <footer className="footer-bar">
      <strong>{user.name.toUpperCase()}</strong> &nbsp;|&nbsp; {user.uid} &nbsp;|&nbsp; Experiment {user.experiment} &nbsp;|&nbsp; {user.university}
      <span className="footer-theme-indicator">
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'} Mode
      </span>
    </footer>
  )
}

export default memo(Footer)
