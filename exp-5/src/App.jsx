import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppContext } from './context/AppContext'

const Home = lazy(() => import('./pages/Home'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Reports = lazy(() => import('./pages/Reports'))

function App() {
  const [loading, setLoading] = useState(true)
  const { theme } = useAppContext()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-container">
          <div className="pulse-loader"></div>
          <h2 className="loading-text">ANURAG</h2>
          <p className="loading-subtext">23BAI70225 • EXP-5</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`App ${theme}`}>
      <Suspense fallback={<div className="loading-screen"><div className="pulse-loader"></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
