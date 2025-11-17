import React, { useState, useMemo, useEffect } from 'react'
import { games } from '../data/games'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Badge from '../components/ui/Badge'
import { formatPrice } from '../utils/helpers'
import { FaClock, FaFireAlt, FaPercentage } from 'react-icons/fa'

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

  const highestDiscount = dealsGames[0]?.discount ?? 0
  const averageDiscount = dealsGames.length
    ? Math.round(
        dealsGames.reduce((acc, game) => acc + game.discount, 0) / dealsGames.length
      )
    : 0
  const estimatedSavings = dealsGames.reduce(
    (acc, game) => acc + (game.discount / 100) * game.price,
    0
  )
  
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/10 via-cyan/10 to-transparent p-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Flash Deals</p>
            <h1 className="text-4xl font-black text-white">Ofertas Especiales</h1>
            <p className="text-white/70 max-w-2xl">
              Curamos descuentos agresivos con métricas de demanda real. Cada bloque se actualiza cada
              24 horas o cuando se agota el stock digital.
            </p>
          </div>
          <Badge variant="discount" size="lg">
            ¡Ofertas Limitadas!
          </Badge>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass rounded-2xl p-4 text-center">
            <FaPercentage className="w-5 h-5 text-cyan mx-auto mb-2" aria-hidden="true" />
            <p className="text-3xl font-bold text-white">{highestDiscount}%</p>
            <p className="text-white/60 text-sm">Mayor descuento activo</p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <FaFireAlt className="w-5 h-5 text-cyan mx-auto mb-2" aria-hidden="true" />
            <p className="text-3xl font-bold text-white">{averageDiscount}%</p>
            <p className="text-white/60 text-sm">Promedio global</p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <FaClock className="w-5 h-5 text-cyan mx-auto mb-2" aria-hidden="true" />
            <p className="text-3xl font-bold text-white">
              {timeRemaining.hours.toString().padStart(2, '0')}:
              {timeRemaining.minutes.toString().padStart(2, '0')}
            </p>
            <p className="text-white/60 text-sm">Tiempo restante global</p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-white">{formatPrice(estimatedSavings)}</p>
            <p className="text-white/60 text-sm">Ahorro agregado</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Próximo corte en:</h2>
          <div className="flex items-center gap-6 flex-wrap">
            {['days', 'hours', 'minutes', 'seconds'].map((key) => (
              <div key={key} className="text-center min-w-[70px]">
                <div className="text-3xl font-bold text-cyan">
                  {timeRemaining[key].toString().padStart(2, '0')}
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GameGrid games={dealsGames} onViewDetails={handleViewDetails} viewMode="grid" />

      {selectedGame && (
        <GameModal game={selectedGame} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Deals

