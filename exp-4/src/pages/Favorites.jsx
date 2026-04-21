import { useState, useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAppContext } from '../context/AppContext'
import { actionTypes } from '../reducer/appReducer'

/**
 * Favorites Page — Context + useReducer + useMemo
 * Experiment 4 | Anurag (23BAI70225)
 */

const sampleItems = [
  { id: 'react', name: 'React', category: 'Frontend', description: 'JavaScript library for building user interfaces' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', description: 'JavaScript runtime built on Chrome V8 engine' },
  { id: 'python', name: 'Python', category: 'AI / ML', description: 'Versatile language for data science and AI' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI / ML', description: 'Open-source machine learning framework' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', description: 'NoSQL document-oriented database' },
  { id: 'docker', name: 'Docker', category: 'DevOps', description: 'Containerized application deployment platform' },
  { id: 'aws', name: 'AWS', category: 'Cloud', description: 'Amazon cloud computing services' },
  { id: 'figma', name: 'Figma', category: 'Design', description: 'Collaborative interface design tool' },
]

const Favorites = () => {
  const { state, dispatch } = useAppContext()
  const [search, setSearch] = useState('')

  // useMemo — memoized total count
  const totalFavoritesCount = useMemo(() => state.favorites.length, [state.favorites])

  // useMemo — filtered favorites by search
  const filteredFavorites = useMemo(() => {
    if (!search.trim()) return state.favorites
    const q = search.toLowerCase()
    return state.favorites.filter(
      (item) => item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
    )
  }, [state.favorites, search])

  // useMemo — available items not yet favorited
  const availableItems = useMemo(() => {
    const favIds = new Set(state.favorites.map((f) => f.id))
    return sampleItems.filter((item) => !favIds.has(item.id))
  }, [state.favorites])

  const addFav = (item) => dispatch({ type: actionTypes.ADD_FAVORITE, payload: item })
  const removeFav = (id) => dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: id })
  const clearAll = () => dispatch({ type: actionTypes.CLEAR_FAVORITES })

  const bgStyle = {
    background: 'linear-gradient(135deg, #0a0a0a 0%, #050510 50%, #0a0a0a 100%)',
    color: '#fff',
    minHeight: '100vh',
  }

  return (
    <div style={bgStyle}>
      <Navbar />

      <main className="page-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px 40px' }}>
        {/* Header */}
        <div className="fav-header">
          <Link to="/" className="gaming-btn" style={{ textDecoration: 'none', marginBottom: '16px', display: 'inline-block', fontSize: '0.75rem', padding: '6px 18px' }}>
            ← BACK
          </Link>
          <h2 className="section-title">★ MY FAVORITES</h2>
          <p className="section-subtitle">Manage your favorite technologies</p>

          <div className="fav-count-badge">
            ❤️ Total: {totalFavoritesCount}
          </div>
        </div>

        {/* Controls */}
        <div className="fav-controls">
          <input
            type="text"
            className="fav-search"
            placeholder="🔍 Search favorites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: '#161616',
              borderColor: '#333',
              color: '#fff',
            }}
          />
          {totalFavoritesCount > 0 && (
            <button className="gaming-btn danger" onClick={clearAll}>
              🗑 CLEAR ALL
            </button>
          )}
        </div>

        <hr className="rgb-divider" />

        {/* Favorites List */}
        <p className="section-label">YOUR FAVORITES (<span className="count">{filteredFavorites.length}</span>)</p>
        <div className="fav-grid">
          {filteredFavorites.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">💔</div>
              <p>{search ? 'No favorites match your search' : 'No favorites yet — add some below!'}</p>
            </div>
          ) : (
            filteredFavorites.map((item) => (
              <div className="gaming-card" key={item.id}>
                <div className="fav-item">
                  <div>
                    <h4>{item.name}</h4>
                    <span className="fav-category">{item.category}</span>
                    <p className="fav-desc">{item.description}</p>
                  </div>
                  <button className="fav-item-action remove" onClick={() => removeFav(item.id)} title="Remove">
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <hr className="rgb-divider" />

        {/* Available Items */}
        <p className="section-label">ADD TO FAVORITES (<span className="count">{availableItems.length}</span>)</p>
        <div className="fav-grid">
          {availableItems.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🎉</div>
              <p>All items added to favorites!</p>
            </div>
          ) : (
            availableItems.map((item) => (
              <div className="gaming-card" key={item.id}>
                <div className="fav-item">
                  <div>
                    <h4>{item.name}</h4>
                    <span className="fav-category" style={{ color: '#00f0ff' }}>{item.category}</span>
                    <p className="fav-desc">{item.description}</p>
                  </div>
                  <button className="fav-item-action add" onClick={() => addFav(item)} title="Add">
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="footer-bar" style={{ marginTop: '40px' }}>
          <strong>ANURAG</strong> &nbsp;|&nbsp; 23BAI70225 &nbsp;|&nbsp; Experiment 4 &nbsp;|&nbsp; Context + Reducer + Memo
        </footer>
      </main>
    </div>
  )
}

export default memo(Favorites)
