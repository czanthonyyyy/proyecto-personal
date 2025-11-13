import React from 'react'

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'store', label: 'Tienda', icon: '🛒' },
    { id: 'deals', label: 'Ofertas', icon: '🔥' },
    { id: 'library', label: 'Biblioteca', icon: '📚' },
    { id: 'wishlist', label: 'Deseos', icon: '❤️' },
    { id: 'cart', label: 'Carrito', icon: '🛍️' },
  ]
  
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <nav className="sticky top-[73px] z-30 glass border-b border-white/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap relative ${
                activeTab === tab.id
                  ? 'text-cyan'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan animate-fade-in" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

