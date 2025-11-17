import React from 'react'
import GameCard from './GameCard'
import LoadingSkeleton from '../ui/LoadingSkeleton'
import { FaGamepad } from 'react-icons/fa'

const GameGrid = ({ games, onViewDetails, isLoading = false, viewMode = 'grid' }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <LoadingSkeleton key={i} type="card" />
        ))}
      </div>
    )
  }
  
  if (games.length === 0) {
    return (
      <div className="text-center py-12">
        <FaGamepad className="w-16 h-16 mx-auto mb-4 text-cyan" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-white mb-2">No se encontraron juegos</h3>
        <p className="text-white/60">
          Intenta ajustar los filtros para encontrar más juegos
        </p>
      </div>
    )
  }
  
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onViewDetails={onViewDetails} />
        ))}
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onViewDetails={onViewDetails} />
      ))}
    </div>
  )
}

export default GameGrid

