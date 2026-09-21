import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard() {
  return (
    <article className="movie-card">
      <div className="poster-container">
        <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop" alt="Dune: Part Two" className="poster-img" />
        <div className="rating-badge">★ 8.6</div>
        <a href="#" className="heart-btn" title="Add to Watchlist">♥</a>
      </div>
      <div className="card-info">
        <div className="card-title-row">
          <h3 className="card-title">
            <Link to="/movies/1" style={{ color: 'inherit', textDecoration: 'none' }}>Dune: Part Two</Link>
          </h3>
          <span className="release-year">2024</span>
        </div>
        <p className="card-meta">Sci-Fi • Dir. Denis Villeneuve</p>
      </div>
    </article>
  )
}

export default MovieCard
