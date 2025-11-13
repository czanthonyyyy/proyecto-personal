import React from 'react'
import Button from '../ui/Button'
import Rating from '../ui/Rating'
import Badge from '../ui/Badge'
import { formatPrice, getDiscountPrice } from '../../utils/helpers'

const Hero = ({ game, onViewDetails, onAddToCart }) => {
  if (!game) return null
  
  const finalPrice = game.discount ? getDiscountPrice(game.price, game.discount) : game.price
  
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden rounded-2xl mb-12">
      {/* Background Image */}
      <div className="absolute inset-0 bg-dark-800">
        <img
          src={game.images[0]}
          alt={game.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-end p-8 md:p-12">
        <div className="max-w-4xl">
          {/* Badges */}
          <div className="flex items-center gap-3 mb-4">
            {game.discount > 0 && (
              <Badge variant="discount" size="lg">
                -{game.discount}% OFF
              </Badge>
            )}
            <Badge variant="new" size="md">
              Nuevo Lanzamiento
            </Badge>
            <Badge variant="genre" size="md">
              {game.genre}
            </Badge>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {game.title}
          </h1>
          
          {/* Studio */}
          <p className="text-xl text-white/80 mb-4">
            Por {game.studio}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <Rating rating={game.rating} size="lg" />
          </div>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-8 line-clamp-2 max-w-2xl">
            {game.description}
          </p>
          
          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onViewDetails && onViewDetails(game)}
              className="glow-cyan"
            >
              Ver Detalles
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onAddToCart && onAddToCart(game)}
            >
              Añadir al Carrito
            </Button>
            <div className="flex items-center gap-2">
              {game.discount > 0 && (
                <span className="text-2xl text-white/40 line-through">
                  {formatPrice(game.price)}
                </span>
              )}
              <span className="text-3xl font-bold text-cyan">
                {finalPrice === 0 ? 'Free to Play' : formatPrice(finalPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

