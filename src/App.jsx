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
import Toast from './components/ui/Toast'
import BackToTop from './components/ui/BackToTop'
import { ToastProvider } from './context/ToastContext'

function App() {
  const [activeTab, setActiveTab] = useState('home')

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
      default:
        return <Home />
    }
  }

  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
            <div className="min-h-screen flex flex-col">
              <Header activeTab={activeTab} setActiveTab={setActiveTab} />
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
              <main className="flex-grow">
                {renderPage()}
              </main>
              <Footer />
              <Toast />
              <BackToTop />
            </div>
          </FilterProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  )
}

export default App

