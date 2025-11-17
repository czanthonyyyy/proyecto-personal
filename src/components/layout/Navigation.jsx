import React from 'react'
import { FaBookOpen, FaFire, FaHeart, FaHome, FaShoppingBag, FaStore } from 'react-icons/fa'

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Inicio', icon: FaHome },
    { id: 'store', label: 'Tienda', icon: FaStore },
    { id: 'deals', label: 'Ofertas', icon: FaFire },
    { id: 'library', label: 'Biblioteca', icon: FaBookOpen },
    { id: 'wishlist', label: 'Deseos', icon: FaHeart },
    { id: 'cart', label: 'Carrito', icon: FaShoppingBag },
  ]
  
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <nav className="sticky top-[73px] z-30 glass border-b border-white/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap relative ${
                  activeTab === tab.id
                    ? 'text-cyan'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{tab.label}</span>
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan animate-fade-in" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

