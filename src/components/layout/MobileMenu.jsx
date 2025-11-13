import React, { useEffect } from 'react'

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
            <div className="text-xl font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              GameStore
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-cyan transition-colors duration-300 rounded-lg hover:bg-white/10"
              aria-label="Cerrar menú"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-4">
            <button
              onClick={() => handleTabChange('home')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'home'
                  ? 'text-cyan bg-cyan/10'
                  : 'text-white/80 hover:text-cyan hover:bg-white/10'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleTabChange('store')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'store'
                  ? 'text-cyan bg-cyan/10'
                  : 'text-white/80 hover:text-cyan hover:bg-white/10'
              }`}
            >
              Tienda
            </button>
            <button
              onClick={() => handleTabChange('deals')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'deals'
                  ? 'text-cyan bg-cyan/10'
                  : 'text-white/80 hover:text-cyan hover:bg-white/10'
              }`}
            >
              Ofertas
            </button>
            <button
              onClick={() => handleTabChange('library')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'library'
                  ? 'text-cyan bg-cyan/10'
                  : 'text-white/80 hover:text-cyan hover:bg-white/10'
              }`}
            >
              Biblioteca
            </button>
            <button
              onClick={() => handleTabChange('wishlist')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'wishlist'
                  ? 'text-cyan bg-cyan/10'
                  : 'text-white/80 hover:text-cyan hover:bg-white/10'
              }`}
            >
              Lista de Deseos
            </button>
            <button
              onClick={() => handleTabChange('cart')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'cart'
                  ? 'text-cyan bg-cyan/10'
                  : 'text-white/80 hover:text-cyan hover:bg-white/10'
              }`}
            >
              Carrito
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu

