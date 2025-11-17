import React, { useState } from 'react'
import { useWishlist } from '../context/WishlistContext'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Button from '../components/ui/Button'
import { FaHeart } from 'react-icons/fa'
import { getDiscountPrice, formatPrice } from '../utils/helpers'

const Wishlist = () => {
  const { wishlist } = useWishlist()
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
          <FaHeart className="w-16 h-16 mx-auto mb-4 text-red-400" aria-hidden="true" />
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
  
  const wishlistValue = wishlist.reduce((acc, game) => {
    const finalPrice = game.discount ? getDiscountPrice(game.price, game.discount) : game.price
    return acc + finalPrice
  }, 0)

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/10 via-purple/10 to-transparent p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Wishlist dinámica</p>
            <h1 className="text-4xl font-black text-white">Lista de Deseos</h1>
            <p className="text-white/70">
              Tienes {wishlist.length} {wishlist.length === 1 ? 'juego' : 'juegos'} vigilados. Te
              avisaremos cuando bajen de precio o lleguen a Game Pass/PS Plus.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="primary" size="md">
                Comprar todo ({formatPrice(wishlistValue)})
              </Button>
              <Button variant="ghost" size="md" onClick={() => handleViewDetails(wishlist[0])}>
                Revisar primero
              </Button>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Valor potencial</p>
            <p className="text-3xl font-bold text-cyan">{formatPrice(wishlistValue)}</p>
            <p className="text-white/60 text-sm">Antes de impuestos</p>
          </div>
        </div>
      </section>

      <GameGrid games={wishlist} onViewDetails={handleViewDetails} viewMode="grid" />

      {selectedGame && (
        <GameModal game={selectedGame} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Wishlist

