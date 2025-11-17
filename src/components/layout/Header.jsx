import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import CartIcon from '../cart/CartIcon'
import MobileMenu from './MobileMenu'
import BrandLogo from '../ui/BrandLogo'
import { FaBars, FaHeart } from 'react-icons/fa'

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
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-2xl bg-[#05070f]/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-4 cursor-pointer"
              aria-label="Volver al inicio NovaForge"
            >
              <BrandLogo />
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Neo Gaming Marketplace
                </span>
                <span className="text-sm text-white/60">
                  Actualizado diariamente con los títulos más calientes
                </span>
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
                <FaHeart
                  className={`w-6 h-6 ${wishlistCount > 0 ? 'text-red-400' : ''}`}
                  aria-hidden="true"
                />
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
                <FaBars className="w-6 h-6" aria-hidden="true" />
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

