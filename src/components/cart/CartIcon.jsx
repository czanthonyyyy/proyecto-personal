import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartIcon = ({ count = 0, onClick }) => {
  return (
    <div className="relative">
      <FaShoppingCart className="w-6 h-6" aria-hidden="true" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-cyan text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  )
}

export default CartIcon

