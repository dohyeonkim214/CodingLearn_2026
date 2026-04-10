import { useState } from 'react'

export default function MovieCard({ title, rating, url, description, fallbackImage }) {
  const [posterSrc, setPosterSrc] = useState(url)

  return (
    <article className="movie-card" aria-label="movie card">
      <img
        className="movie-card-poster"
        src={posterSrc}
        alt={`${title} 포스터`}
        loading="lazy"
        onError={() => setPosterSrc(fallbackImage)}
      />
      <div className="movie-card-body">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-rating">{rating}</p>
        <p className="movie-card-description">{description}</p>
      </div>
    </article>
  )
}
