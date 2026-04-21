import { useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { clearFavorites } from '../store/favoritesSlice'
import { useAppContext } from '../context/AppContext'

/**
 * Reports Page — NEW for Experiment 5
 * Demonstrates: Redux (useSelector + useDispatch), useMemo, useContext
 * Anurag (23BAI70225)
 */

const allTechItems = [
  { id: 'react', name: 'React', category: 'Frontend' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend' },
  { id: 'python', name: 'Python', category: 'AI / ML' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI / ML' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database' },
  { id: 'docker', name: 'Docker', category: 'DevOps' },
  { id: 'aws', name: 'AWS', category: 'Cloud' },
  { id: 'figma', name: 'Figma', category: 'Design' },
]

const Reports = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.app.favorites)
  const { theme, user } = useAppContext()

  // useMemo — category breakdown of favorites
  const categoryStats = useMemo(() => {
    const map = {}
    favorites.forEach((item) => {
      map[item.category] = (map[item.category] || 0) + 1
    })
    return Object.entries(map)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)
  }, [favorites])

  // useMemo — percentage of total items favorited
  const completionPercent = useMemo(() => {
    return Math.round((favorites.length / allTechItems.length) * 100)
  }, [favorites])

  // useMemo — items NOT yet favorited
  const missingItems = useMemo(() => {
    const favIds = new Set(favorites.map((f) => f.id))
    return allTechItems.filter((item) => !favIds.has(item.id))
  }, [favorites])

  // useMemo — most popular category
  const topCategory = useMemo(() => {
    if (categoryStats.length === 0) return 'None'
    return categoryStats[0].category
  }, [categoryStats])

  // useMemo — summary stats object
  const summaryStats = useMemo(() => ({
    total: favorites.length,
    categories: categoryStats.length,
    remaining: allTechItems.length - favorites.length,
    completion: completionPercent,
  }), [favorites, categoryStats, completionPercent])

  return (
    <div className={`page-wrapper ${theme}`}>
      <Navbar />

      <main className="page-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px 40px' }}>
        {/* Header */}
        <div className="reports-header">
          <Link to="/" className="gaming-btn" style={{ textDecoration: 'none', marginBottom: '16px', display: 'inline-block', fontSize: '0.75rem', padding: '6px 18px' }}>
            ← BACK
          </Link>
          <h2 className="section-title">📊 REPORTS & ANALYTICS</h2>
          <p className="section-subtitle">
            Insights about your favorites — powered by Redux + useMemo + Context
          </p>
          <p className="section-subtitle" style={{ fontSize: '0.8rem', marginTop: '-20px' }}>
            Viewing as: <strong style={{ color: '#00f0ff' }}>{user.name}</strong> ({user.uid}) &nbsp;|&nbsp; Theme: {theme}
          </p>
          <hr className="rgb-divider" />
        </div>

        {/* Summary Cards */}
        <div className="report-stats-grid">
          <div className="gaming-card stat-card">
            <span className="stat-icon">📦</span>
            <div className="stat-value">{summaryStats.total}</div>
            <div className="stat-label">TOTAL FAVORITES</div>
          </div>
          <div className="gaming-card stat-card">
            <span className="stat-icon">📂</span>
            <div className="stat-value">{summaryStats.categories}</div>
            <div className="stat-label">CATEGORIES</div>
          </div>
          <div className="gaming-card stat-card">
            <span className="stat-icon">⏳</span>
            <div className="stat-value">{summaryStats.remaining}</div>
            <div className="stat-label">REMAINING</div>
          </div>
          <div className="gaming-card stat-card">
            <span className="stat-icon">🏆</span>
            <div className="stat-value">{summaryStats.completion}%</div>
            <div className="stat-label">COMPLETION</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="gaming-card" style={{ marginBottom: '24px' }}>
          <h3 className="report-card-title">COLLECTION PROGRESS</h3>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <span className="progress-bar-label">{completionPercent}%</span>
          </div>
          <p className="report-card-sub">
            {favorites.length} of {allTechItems.length} technologies collected
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="gaming-card" style={{ marginBottom: '24px' }}>
          <h3 className="report-card-title">CATEGORY BREAKDOWN</h3>
          {categoryStats.length === 0 ? (
            <div className="empty-state" style={{ border: 'none', padding: '20px' }}>
              <div className="empty-icon">📭</div>
              <p>No favorites yet — add some from the Favorites page!</p>
            </div>
          ) : (
            <div className="category-bars">
              {categoryStats.map((cat) => (
                <div className="category-bar-row" key={cat.category}>
                  <span className="category-bar-name">{cat.category}</span>
                  <div className="category-bar-track">
                    <div
                      className="category-bar-fill"
                      style={{ width: `${(cat.count / favorites.length) * 100}%` }}
                    />
                  </div>
                  <span className="category-bar-count">{cat.count}</span>
                </div>
              ))}
            </div>
          )}
          {topCategory !== 'None' && (
            <p className="report-card-sub" style={{ marginTop: '12px' }}>
              🏅 Top category: <strong style={{ color: '#39ff14' }}>{topCategory}</strong>
            </p>
          )}
        </div>

        {/* Missing Items */}
        <div className="gaming-card" style={{ marginBottom: '24px' }}>
          <h3 className="report-card-title">NOT YET COLLECTED</h3>
          {missingItems.length === 0 ? (
            <div className="empty-state" style={{ border: 'none', padding: '20px' }}>
              <div className="empty-icon">🎉</div>
              <p>You've collected everything! 100% complete.</p>
            </div>
          ) : (
            <div className="missing-items-grid">
              {missingItems.map((item) => (
                <div className="missing-item" key={item.id}>
                  <span className="missing-name">{item.name}</span>
                  <span className="missing-cat">{item.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="report-actions">
          <Link to="/favorites" className="gaming-btn success" style={{ textDecoration: 'none' }}>
            ★ GO TO FAVORITES
          </Link>
          {favorites.length > 0 && (
            <button className="gaming-btn danger" onClick={() => dispatch(clearFavorites())}>
              🗑 RESET ALL DATA
            </button>
          )}
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default memo(Reports)
