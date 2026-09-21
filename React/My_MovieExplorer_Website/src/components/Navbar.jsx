import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ user, handleLogout }) {
  const navigate = useNavigate()

  const onLogout = () => {
    if (handleLogout) handleLogout()
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-title">Movie<span>Explorer</span></span>
        </Link>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search movies by title, genre, or director..." />
        </div>

        <div className="nav-actions">

          {!user ? (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          ) : (
            <div className="user-nav-group">
              <Link to="/deshboard" className="btn btn-primary">
                Dashboard ({user})
              </Link>
              <button onClick={onLogout} className="btn btn-outline">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
