import React, { useState, memo } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useToast } from '../../context/ToastContext'
import Rating from '../ui/Rating'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { formatPrice, getDiscountPrice } from '../../utils/helpers'
import { DEFAULT_PLATFORM_ICON, PLATFORM_ICONS } from '../../utils/constants'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const GameCard = memo(({ game, onViewDetails }) => {
  const { addToCart, isInCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const { addToast } = useToast()
  const [imageError, setImageError] = useState(false)
  
  const finalPrice = game.discount ? getDiscountPrice(game.price, game.discount) : game.price
  const inCart = isInCart(game.id)
  const inWishlist = isInWishlist(game.id)
  
  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(game)
    addToast(`${game.title} añadido al carrito`, 'success')
  }
  
  const handleToggleWishlist = (e) => {
    e.stopPropagation()
    toggleWishlist(game)
    addToast(
      inWishlist
        ? `${game.title} eliminado de la lista de deseos`
        : `${game.title} añadido a la lista de deseos`,
      'success'
    )
  }
  
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(game)
    }
  }
  
  return (
    <div
      className="glass rounded-xl overflow-hidden card-hover cursor-pointer group"
      onClick={handleViewDetails}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-dark-800 h-64 flex items-center justify-center">
        <img
          src={imageError ? 'https://via.placeholder.com/400x600?text=Game' : game.images[0]}
          alt={game.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        {/* Discount Badge */}
        {game.discount > 0 && (
          <div className="absolute top-2 right-2">
            <Badge variant="discount" size="lg">
              -{game.discount}%
            </Badge>
          </div>
        )}
        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-2 left-2 p-2 rounded-full glass-strong transition-all duration-300 ${
            inWishlist
              ? 'text-red-500 bg-red-500/20'
              : 'text-white/80 hover:text-red-500 hover:bg-red-500/20'
          }`}
          aria-label="Añadir a lista de deseos"
        >
          {inWishlist ? (
            <FaHeart className="w-5 h-5" aria-hidden="true" />
          ) : (
            <FaRegHeart className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            variant="primary"
            size="md"
            onClick={handleAddToCart}
            className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            {inCart ? 'En Carrito' : 'Añadir al Carrito'}
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Studio */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{game.title}</h3>
          <p className="text-sm text-white/60">{game.studio}</p>
        </div>
        
        {/* Rating */}
        <Rating rating={game.rating} size="sm" />
        
        {/* Platforms */}
        <div className="flex items-center gap-2 flex-wrap">
          {game.platforms.slice(0, 3).map((platform) => {
            const PlatformIcon = PLATFORM_ICONS[platform] || DEFAULT_PLATFORM_ICON
            return (
              <span
                key={platform}
                className="text-xs text-white/60 flex items-center"
                title={platform}
              >
                <PlatformIcon className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">{platform}</span>
              </span>
            )
          })}
          {game.platforms.length > 3 && (
            <span className="text-xs text-white/60">+{game.platforms.length - 3}</span>
          )}
        </div>
        
        {/* Genre */}
        <Badge variant="genre" size="sm">
          {game.genre}
        </Badge>
        
        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {game.discount > 0 && (
              <span className="text-sm text-white/40 line-through">
                {formatPrice(game.price)}
              </span>
            )}
            <span className="text-xl font-bold text-cyan">
              {finalPrice === 0 ? 'Free to Play' : formatPrice(finalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

GameCard.displayName = 'GameCard'

export default GameCard

