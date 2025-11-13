import React, { useState, useMemo } from 'react'
import { games } from '../data/games'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Button from '../components/ui/Button'

const Library = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Simulated purchased games (in a real app, this would come from the backend)
  const purchasedGames = useMemo(() => {
    // Simulate user has purchased first 5 games
    return games.slice(0, 5)
  }, [])
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  if (purchasedGames.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Tu biblioteca está vacía
          </h2>
          <p className="text-white/60 mb-8">
            Comienza a construir tu biblioteca comprando juegos de nuestra tienda
          </p>
          <Button variant="primary" size="lg">
            <a href="#store">Explorar Tienda</a>
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Mi Biblioteca</h1>
        <p className="text-white/60">
          Tienes {purchasedGames.length} {purchasedGames.length === 1 ? 'juego' : 'juegos'} en tu biblioteca
        </p>
      </div>
      
      {/* Games Grid */}
      <GameGrid
        games={purchasedGames}
        onViewDetails={handleViewDetails}
        viewMode="grid"
      />
      
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

export default Library

