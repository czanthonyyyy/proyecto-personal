import React, { useState, useMemo } from 'react'
import { games } from '../data/games'
import Hero from '../components/sections/Hero'
import TrendingGames from '../components/sections/TrendingGames'
import SpecialOffers from '../components/sections/SpecialOffers'
import NewReleases from '../components/sections/NewReleases'
import GameModal from '../components/game/GameModal'
import { useCart } from '../context/CartContext'
import { sortGames } from '../utils/helpers'

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()
  
  // Get trending games (highest rated)
  const trendingGames = useMemo(() => {
    return sortGames(games, 'rating').slice(0, 8)
  }, [])
  
  // Get featured game (games marked as featured, or first trending game as fallback)
  const featuredGame = useMemo(() => {
    const featuredGames = games.filter(game => game.featured === true)
    return featuredGames.length > 0 ? featuredGames[0] : (trendingGames[0] || games[0])
  }, [trendingGames])
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleAddToCart = (game) => {
    addToCart(game)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <Hero
        game={featuredGame}
        onViewDetails={handleViewDetails}
        onAddToCart={handleAddToCart}
      />
      
      {/* Trending Games */}
      <TrendingGames
        games={trendingGames}
        onViewDetails={handleViewDetails}
      />
      
      {/* Special Offers */}
      <SpecialOffers
        games={games}
        onViewDetails={handleViewDetails}
      />
      
      {/* New Releases */}
      <NewReleases
        games={games}
        onViewDetails={handleViewDetails}
      />
      
      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          game={selectedGame}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Home

