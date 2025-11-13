import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const WishlistContext = createContext()

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage('wishlist', [])

  const addToWishlist = (game) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.some(item => item.id === game.id)) {
        return prevWishlist
      }
      return [...prevWishlist, game]
    })
  }

  const removeFromWishlist = (gameId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== gameId))
  }

  const toggleWishlist = (game) => {
    if (isInWishlist(game.id)) {
      removeFromWishlist(game.id)
    } else {
      addToWishlist(game)
    }
  }

  const isInWishlist = (gameId) => {
    return wishlist.some(item => item.id === gameId)
  }

  const getWishlistCount = () => {
    return wishlist.length
  }

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    getWishlistCount,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

