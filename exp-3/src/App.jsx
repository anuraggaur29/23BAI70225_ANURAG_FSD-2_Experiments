import { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'

/**
 * Main App Component
 * Author: Anurag (23BAI70225)
 * Section: 23AML-6B
 * Experiment 3 - Modern UI Design with Bootstrap & Material UI
 */
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smooth entry animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-container">
          <div className="pulse-loader"></div>
          <h2 className="loading-text">ANURAG</h2>
          <p className="loading-subtext">23BAI70225 | Initializing Innovation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
