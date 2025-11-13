import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import CartIcon from '../cart/CartIcon'
import MobileMenu from './MobileMenu'

const Header = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartItemsCount } = useCart()
  const { getWishlistCount } = useWishlist()
  const cartCount = getCartItemsCount()
  const wishlistCount = getWishlistCount()
  
  const handleLogoClick = () => {
    setActiveTab('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <>
      <header className="sticky top-0 z-40 glass-strong border-b border-white/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                GameStore
              </div>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`transition-colors duration-300 ${
                  activeTab === 'home'
                    ? 'text-cyan'
                    : 'text-white/80 hover:text-cyan'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => setActiveTab('store')}
                className={`transition-colors duration-300 ${
                  activeTab === 'store'
                    ? 'text-cyan'
                    : 'text-white/80 hover:text-cyan'
                }`}
              >
                Tienda
              </button>
              <button
                onClick={() => setActiveTab('deals')}
                className={`transition-colors duration-300 ${
                  activeTab === 'deals'
                    ? 'text-cyan'
                    : 'text-white/80 hover:text-cyan'
                }`}
              >
                Ofertas
              </button>
            </nav>
            
            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Wishlist Icon */}
              <button
                onClick={() => setActiveTab('wishlist')}
                className="relative p-2 text-white/80 hover:text-cyan transition-colors duration-300 rounded-lg hover:bg-white/10"
                aria-label="Lista de deseos"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 bg-cyan text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              
              {/* Cart Icon */}
              <button
                onClick={() => setActiveTab('cart')}
                className="relative p-2 text-white/80 hover:text-cyan transition-colors duration-300 rounded-lg hover:bg-white/10"
                aria-label="Carrito de compras"
              >
                <CartIcon count={cartCount} />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-white/80 hover:text-cyan transition-colors duration-300 rounded-lg hover:bg-white/10"
                aria-label="Menú móvil"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  )
}

export default Header

