import React from 'react'
import GameGrid from '../game/GameGrid'

const TrendingGames = ({ games, onViewDetails }) => {
  if (!games || games.length === 0) return null
  
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Juegos en Tendencia</h2>
        <a
          href="#store"
          className="text-cyan hover:text-cyan-hover transition-colors duration-300"
        >
          Ver todos →
        </a>
      </div>
      <GameGrid
        games={games.slice(0, 8)}
        onViewDetails={onViewDetails}
        viewMode="grid"
      />
    </section>
  )
}

export default TrendingGames

