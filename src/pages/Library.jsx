import React, { useState, useMemo } from 'react'
import { games } from '../data/games'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Button from '../components/ui/Button'
import { FaBookOpen } from 'react-icons/fa'

const Library = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Simulated purchased games (in a real app, this would come from the backend)
  const purchasedGames = useMemo(() => {
    // Simulate user has purchased first 5 games
    return games.slice(0, 5)
  }, [])
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  if (purchasedGames.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <FaBookOpen className="w-16 h-16 mx-auto mb-4 text-cyan" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Tu biblioteca está vacía
          </h2>
          <p className="text-white/60 mb-8">
            Comienza a construir tu biblioteca comprando juegos de nuestra tienda
          </p>
          <Button variant="primary" size="lg">
            <a href="#store">Explorar Tienda</a>
          </Button>
        </div>
      </div>
    )
  }
  
  const estimatedHours = purchasedGames.length * 20
  const backlog = Math.max(0, purchasedGames.length - 3)

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple/20 via-cyan/10 to-transparent p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Colección NovaForge</p>
          <h1 className="text-4xl font-black text-white">Mi Biblioteca</h1>
          <p className="text-white/70">
            Tienes {purchasedGames.length}{' '}
            {purchasedGames.length === 1 ? 'juego listo' : 'juegos listos'} para descargar y jugar sin
            límites en cualquier plataforma enlazada.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="primary" size="md">
              Continuar jugando
            </Button>
            <Button variant="ghost" size="md" onClick={() => handleViewDetails(purchasedGames[0])}>
              Ver detalles del último
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="glass rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-cyan">{estimatedHours}h</p>
            <p className="text-white/60 text-sm">Horas jugadas</p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-cyan">{backlog}</p>
            <p className="text-white/60 text-sm">En backlog</p>
          </div>
        </div>
      </section>

      <GameGrid games={purchasedGames} onViewDetails={handleViewDetails} viewMode="grid" />

      {selectedGame && (
        <GameModal game={selectedGame} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Library

