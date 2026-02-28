import { memo } from 'react'
import { useAppContext } from '../context/AppContext'

/**
 * ThemeToggle — Uses Context API
 * Experiment 5 | Anurag (23BAI70225)
 */

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext()

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default memo(ThemeToggle)
