import React, { useState, useMemo } from 'react'
import { games } from '../data/games'
import { useFilter } from '../context/FilterContext'
import FilterSidebar from '../components/filters/FilterSidebar'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Button from '../components/ui/Button'
import { filterGames, sortGames } from '../utils/helpers'

const Store = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const { filters } = useFilter()
  
  // Filter and sort games
  const filteredGames = useMemo(() => {
    const filtered = filterGames(games, filters)
    return sortGames(filtered, filters.sort)
  }, [filters])
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filter Sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="md"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden"
              >
                Filtros
              </Button>
              <h1 className="text-3xl font-bold text-white">
                Tienda ({filteredGames.length} juegos)
              </h1>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-cyan text-white'
                    : 'bg-white/10 text-white/60 hover:text-white'
                }`}
                aria-label="Vista de cuadrícula"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'list'
                    ? 'bg-cyan text-white'
                    : 'bg-white/10 text-white/60 hover:text-white'
                }`}
                aria-label="Vista de lista"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Game Grid */}
          <GameGrid
            games={filteredGames}
            onViewDetails={handleViewDetails}
            viewMode={viewMode}
          />
        </div>
      </div>
      
      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          game={selectedGame}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Store

