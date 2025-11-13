import React from 'react'
import GameGrid from '../game/GameGrid'

const NewReleases = ({ games, onViewDetails }) => {
  // Sort by release date and get newest games
  const newReleases = [...games]
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 8)
  
  if (!newReleases || newReleases.length === 0) return null
  
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Nuevos Lanzamientos</h2>
        <a
          href="#store"
          className="text-cyan hover:text-cyan-hover transition-colors duration-300"
        >
          Ver todos →
        </a>
      </div>
      <GameGrid
        games={newReleases}
        onViewDetails={onViewDetails}
        viewMode="grid"
      />
    </section>
  )
}

export default NewReleases

