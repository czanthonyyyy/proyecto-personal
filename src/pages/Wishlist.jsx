import React, { useState } from 'react'
import { useWishlist } from '../context/WishlistContext'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Button from '../components/ui/Button'

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist()
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Tu lista de deseos está vacía
          </h2>
          <p className="text-white/60 mb-8">
            Comienza a agregar juegos a tu lista de deseos para guardarlos para más tarde
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
        <h1 className="text-4xl font-bold text-white mb-4">Lista de Deseos</h1>
        <p className="text-white/60">
          Tienes {wishlist.length} {wishlist.length === 1 ? 'juego' : 'juegos'} en tu lista de deseos
        </p>
      </div>
      
      {/* Games Grid */}
      <GameGrid
        games={wishlist}
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

export default Wishlist

