import React, { useEffect } from 'react'
import { FaBookOpen, FaGavel, FaHeadset, FaHome, FaStore, FaTags, FaTimes } from 'react-icons/fa'
import { RiHeart2Fill, RiShoppingCartLine } from 'react-icons/ri'
import BrandLogo from '../ui/BrandLogo'

const menuLinks = [
  { id: 'home', label: 'Inicio', Icon: FaHome },
  { id: 'store', label: 'Tienda', Icon: FaStore },
  { id: 'deals', label: 'Ofertas', Icon: FaTags },
  { id: 'library', label: 'Biblioteca', Icon: FaBookOpen },
  { id: 'wishlist', label: 'Lista de Deseos', Icon: RiHeart2Fill },
  { id: 'cart', label: 'Carrito', Icon: RiShoppingCartLine },
  { id: 'support', label: 'Soporte', Icon: FaHeadset },
  { id: 'legal', label: 'Legal', Icon: FaGavel },
]

const MobileMenu = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    onClose()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  if (!isOpen) return null
  
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in md:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 glass-strong border-r border-white/20 animate-slide-in md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <BrandLogo showWordmark={false} />
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-cyan transition-colors duration-300 rounded-lg hover:bg-white/10"
              aria-label="Cerrar menú"
            >
              <FaTimes className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-3">
            {menuLinks.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                  activeTab === id
                    ? 'border-cyan/40 bg-cyan/10 text-cyan shadow-[0_10px_30px_rgba(0,217,255,0.25)]'
                    : 'border-white/5 text-white/80 hover:text-cyan hover:border-cyan/30 hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu

