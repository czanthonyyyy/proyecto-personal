import React, { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import Rating from '../ui/Rating'
import Badge from '../ui/Badge'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useToast } from '../../context/ToastContext'
import { formatPrice, getDiscountPrice } from '../../utils/helpers'
import { PLATFORM_ICONS } from '../../utils/constants'

const GameModal = ({ game, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart, isInCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const { addToast } = useToast()
  
  if (!game) return null
  
  const finalPrice = game.discount ? getDiscountPrice(game.price, game.discount) : game.price
  const inCart = isInCart(game.id)
  const inWishlist = isInWishlist(game.id)
  
  const handleAddToCart = () => {
    addToCart(game)
    addToast(`${game.title} añadido al carrito`, 'success')
  }
  
  const handleToggleWishlist = () => {
    toggleWishlist(game)
    addToast(
      inWishlist
        ? `${game.title} eliminado de la lista de deseos`
        : `${game.title} añadido a la lista de deseos`,
      'success'
    )
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % game.images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + game.images.length) % game.images.length)
  }
  
  // Get similar games (same genre, different game)
  const similarGames = [] // Will be passed from parent
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={game.title} className="max-w-6xl">
      <div className="space-y-6">
        {/* Image Gallery */}
        <div className="relative bg-dark-800 rounded-lg overflow-hidden">
          <div className="w-full h-96 flex items-center justify-center">
            <img
              src={game.images[currentImageIndex]}
              alt={game.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {game.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass-strong rounded-full text-white hover:text-cyan transition-colors duration-300"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass-strong rounded-full text-white hover:text-cyan transition-colors duration-300"
                aria-label="Imagen siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {game.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-cyan w-8' : 'bg-white/40'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Basic Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-white">{game.title}</h2>
                {game.discount > 0 && (
                  <Badge variant="discount" size="lg">
                    -{game.discount}%
                  </Badge>
                )}
              </div>
              <p className="text-white/60 mb-2">Por {game.studio}</p>
              <div className="flex items-center gap-4 mb-4">
                <Rating rating={game.rating} size="lg" />
                <Badge variant="genre" size="md">
                  {game.genre}
                </Badge>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {game.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-sm text-white/60 flex items-center gap-1"
                    title={platform}
                  >
                    <span>{PLATFORM_ICONS[platform] || '🎮'}</span>
                    <span>{platform}</span>
                  </span>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Descripción</h3>
              <p className="text-white/80 leading-relaxed">{game.description}</p>
            </div>
            
            {/* Storyline */}
            {game.storyline && (
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Historia</h3>
                <p className="text-white/80 leading-relaxed">{game.storyline}</p>
              </div>
            )}
            
            {/* Features */}
            {game.features && game.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Características</h3>
                <ul className="space-y-2">
                  {game.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80">
                      <svg className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* System Requirements */}
            {game.requirements && game.requirements.minimum && Object.keys(game.requirements.minimum).length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Requisitos del Sistema</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Mínimos</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      <p><span className="font-semibold">OS:</span> {game.requirements.minimum.os || 'N/A'}</p>
                      <p><span className="font-semibold">Procesador:</span> {game.requirements.minimum.processor || 'N/A'}</p>
                      <p><span className="font-semibold">Memoria:</span> {game.requirements.minimum.memory || 'N/A'}</p>
                      <p><span className="font-semibold">Gráficos:</span> {game.requirements.minimum.graphics || 'N/A'}</p>
                      <p><span className="font-semibold">Almacenamiento:</span> {game.requirements.minimum.storage || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Recomendados</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      <p><span className="font-semibold">OS:</span> {game.requirements.recommended.os || 'N/A'}</p>
                      <p><span className="font-semibold">Procesador:</span> {game.requirements.recommended.processor || 'N/A'}</p>
                      <p><span className="font-semibold">Memoria:</span> {game.requirements.recommended.memory || 'N/A'}</p>
                      <p><span className="font-semibold">Gráficos:</span> {game.requirements.recommended.graphics || 'N/A'}</p>
                      <p><span className="font-semibold">Almacenamiento:</span> {game.requirements.recommended.storage || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Reviews */}
            {game.reviews && game.reviews.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Reseñas</h3>
                <div className="space-y-4">
                  {game.reviews.map((review, index) => (
                    <div key={index} className="glass rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">{review.user}</span>
                        <Rating rating={review.rating} size="sm" showNumber={false} />
                      </div>
                      <p className="text-white/80 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 glass rounded-lg p-6 space-y-4">
              {/* Price */}
              <div className="text-center">
                {game.discount > 0 && (
                  <p className="text-sm text-white/40 line-through mb-1">
                    {formatPrice(game.price)}
                  </p>
                )}
                <p className="text-4xl font-bold text-cyan mb-2">
                  {finalPrice === 0 ? 'Free to Play' : formatPrice(finalPrice)}
                </p>
                {game.discount > 0 && (
                  <Badge variant="discount" size="lg">
                    Ahorra {formatPrice(game.price - finalPrice)}
                  </Badge>
                )}
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  className="w-full"
                >
                  {inCart ? 'En Carrito' : 'Añadir al Carrito'}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleToggleWishlist}
                  className="w-full"
                >
                  {inWishlist ? '❤️ En Lista de Deseos' : '🤍 Añadir a Lista de Deseos'}
                </Button>
              </div>
              
              {/* Release Date */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-white/60">
                  <span className="font-semibold">Fecha de lanzamiento:</span>{' '}
                  {new Date(game.releaseDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default GameModal

