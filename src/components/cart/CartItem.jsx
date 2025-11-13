import React from 'react'
import { useCart } from '../../context/CartContext'
import { formatPrice, getDiscountPrice } from '../../utils/helpers'
import Button from '../ui/Button'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()
  const finalPrice = item.discount ? getDiscountPrice(item.price, item.discount) : item.price
  const total = finalPrice * item.quantity
  
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1)
  }
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    } else {
      removeFromCart(item.id)
    }
  }
  
  const handleRemove = () => {
    removeFromCart(item.id)
  }
  
  return (
    <div className="glass rounded-lg p-4 flex items-center gap-4">
      {/* Image */}
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg"
      />
      
      {/* Info */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-white/60 mb-2">{item.studio}</p>
        <div className="flex items-center gap-4">
          {item.discount > 0 && (
            <span className="text-sm text-white/40 line-through">
              {formatPrice(item.price)}
            </span>
          )}
          <span className="text-lg font-bold text-cyan">
            {finalPrice === 0 ? 'Free to Play' : formatPrice(finalPrice)}
          </span>
        </div>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 flex items-center justify-center"
          aria-label="Disminuir cantidad"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 flex items-center justify-center"
          aria-label="Aumentar cantidad"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      {/* Total */}
      <div className="text-right">
        <p className="text-xl font-bold text-white mb-1">{formatPrice(total)}</p>
        <button
          onClick={handleRemove}
          className="text-sm text-red-400 hover:text-red-300 transition-colors duration-300"
          aria-label="Eliminar del carrito"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CartItem

