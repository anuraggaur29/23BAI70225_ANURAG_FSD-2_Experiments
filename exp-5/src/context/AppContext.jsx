import { createContext, useContext, useState, useEffect } from 'react'

/**
 * App Context — Theme + User Profile
 * Experiment 5 | Anurag (23BAI70225)
 * Provides global theme toggle (dark/light) and mock user profile
 */

const AppContext = createContext()

const defaultUser = {
  name: 'Anurag',
  uid: '23BAI70225',
  section: '23AML-6B',
  university: 'Chandigarh University',
  experiment: 5,
}

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'dark'
  })

  const [user] = useState(defaultUser)

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    localStorage.setItem('app-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <AppContext.Provider value={{ theme, toggleTheme, user }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}

export default AppContext
