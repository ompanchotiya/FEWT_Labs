import React from 'react'
import MovieCard from './MovieCard'

function MovieGrid() {
  return (
    <div>
      <nav className="genre-filter">
        <a href="#" className="genre-tab active">All Movies</a>
        <a href="#" className="genre-tab">Action</a>
        <a href="#" className="genre-tab">Sci-Fi</a>
        <a href="#" className="genre-tab">Drama</a>
        <a href="#" className="genre-tab">Animation</a>
        <a href="#" className="genre-tab">Crime</a>
        <a href="#" className="genre-tab">Adventure</a>
      </nav>

      <div className="section-header">
        <h2 className="section-title">Trending Movies</h2>
      </div>
      <hr color='white'/>
      

      <div className="movie-grid">
        <MovieCard />
      </div>
    </div>
  )
}

export default MovieGrid
