import React, { useState, useMemo, useEffect } from 'react'
import { games } from '../data/games'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Badge from '../components/ui/Badge'
import { filterGames, sortGames, getDiscountPrice } from '../utils/helpers'
import { formatPrice } from '../utils/helpers'

const Deals = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState({
    days: 3,
    hours: 12,
    minutes: 30,
    seconds: 0,
  })
  
  // Get games with discounts
  const dealsGames = useMemo(() => {
    return games
      .filter((game) => game.discount > 0)
      .sort((a, b) => b.discount - a.discount)
  }, [])
  
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-white">Ofertas Especiales</h1>
          <Badge variant="discount" size="lg">
            ¡Ofertas Limitadas!
          </Badge>
        </div>
        
        {/* Countdown Timer */}
        <div className="glass rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Las ofertas terminan en:
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan">{timeRemaining.days}</div>
              <div className="text-sm text-white/60">Días</div>
            </div>
            <div className="text-2xl text-white/60">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan">{timeRemaining.hours}</div>
              <div className="text-sm text-white/60">Horas</div>
            </div>
            <div className="text-2xl text-white/60">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan">{timeRemaining.minutes}</div>
              <div className="text-sm text-white/60">Minutos</div>
            </div>
            <div className="text-2xl text-white/60">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan">{timeRemaining.seconds}</div>
              <div className="text-sm text-white/60">Segundos</div>
            </div>
          </div>
        </div>
        
        {/* Deals Info */}
        <div className="glass rounded-lg p-6">
          <p className="text-white/80 mb-4">
            Descubre nuestras ofertas especiales con descuentos de hasta el 75% de descuento.
            ¡No te pierdas estas ofertas limitadas!
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="discount" size="md">
              Hasta 75% OFF
            </Badge>
            <Badge variant="default" size="md">
              Ofertas Limitadas
            </Badge>
            <Badge variant="popular" size="md">
              Más Populares
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Deals Grid */}
      <GameGrid
        games={dealsGames}
        onViewDetails={handleViewDetails}
        viewMode="grid"
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

export default Deals

