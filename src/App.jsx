import React, { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { FilterProvider } from './context/FilterContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Navigation from './components/layout/Navigation'
import Home from './pages/Home'
import Store from './pages/Store'
import Deals from './pages/Deals'
import Library from './pages/Library'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Support from './pages/Support'
import Legal from './pages/Legal'
import Auth from './pages/Auth'
import Toast from './components/ui/Toast'
import BackToTop from './components/ui/BackToTop'
import { ToastProvider } from './context/ToastContext'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [targetSection, setTargetSection] = useState(null)

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'store':
        return <Store />
      case 'deals':
        return <Deals />
      case 'library':
        return <Library />
      case 'wishlist':
        return <Wishlist />
      case 'cart':
        return <Cart />
      case 'auth':
        return <Auth />
      case 'support':
        return (
          <Support
            focusSection={activeTab === 'support' ? targetSection : null}
            onSectionFocused={() => setTargetSection(null)}
          />
        )
      case 'legal':
        return (
          <Legal
            focusSection={activeTab === 'legal' ? targetSection : null}
            onSectionFocused={() => setTargetSection(null)}
          />
        )
      default:
        return <Home />
    }
  }

  const handleNavigate = (tab, section = null) => {
    setActiveTab(tab)
    setTargetSection(section)
  }

  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
            <div className="relative min-h-screen flex flex-col bg-[#03050b] text-white overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(0,217,255,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.2), transparent 40%), radial-gradient(circle at 50% 80%, rgba(0,217,255,0.1), transparent 55%)',
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col min-h-screen">
                <Header activeTab={activeTab} setActiveTab={setActiveTab} />
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="flex-grow relative z-10">
                  {renderPage()}
                </main>
                <Footer onNavigate={handleNavigate} />
                <Toast />
                <BackToTop />
              </div>
            </div>
          </FilterProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  )
}

export default App

