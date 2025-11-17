import React, { useState, useMemo } from 'react'
import { games } from '../data/games'
import { useFilter } from '../context/FilterContext'
import FilterSidebar from '../components/filters/FilterSidebar'
import GameGrid from '../components/game/GameGrid'
import GameModal from '../components/game/GameModal'
import Button from '../components/ui/Button'
import { filterGames, sortGames } from '../utils/helpers'
import { FaListUl, FaSlidersH, FaThLarge } from 'react-icons/fa'

const Store = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const { filters } = useFilter()
  
  // Filter and sort games
  const filteredGames = useMemo(() => {
    const filtered = filterGames(games, filters)
    return sortGames(filtered, filters.sort)
  }, [filters])
  
  const handleViewDetails = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }
  
  const totalStudios = useMemo(() => new Set(games.map((game) => game.studio)).size, [])
  const totalGenres = useMemo(() => new Set(games.map((game) => game.genre)).size, [])

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan/15 via-purple/10 to-transparent p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">NovaForge Storefront</p>
            <h1 className="text-4xl font-black text-white">
              Explora {filteredGames.length} experiencias de nueva generación
            </h1>
            <p className="text-white/70 max-w-2xl">
              Filtra por plataformas, géneros y descuentos sin perder el flujo. Las colecciones se
              actualizan cada 60 minutos con señal de demanda y rareza.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md" onClick={() => setIsFilterOpen(true)}>
                Activar filtros avanzados
              </Button>
              <Button variant="ghost" size="md" onClick={() => setViewMode('grid')}>
                Reiniciar vista
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-cyan">{totalStudios}</p>
              <p className="text-white/60 text-sm">Estudios activos</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-cyan">{totalGenres}</p>
              <p className="text-white/60 text-sm">Géneros curados</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

        <div className="flex-1 space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="md"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 md:hidden"
              >
                <FaSlidersH className="w-4 h-4" aria-hidden="true" />
                Ajustar filtros
              </Button>
              <span className="text-white/80 text-sm">
                Mostrando <strong>{filteredGames.length}</strong> resultados
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'border-cyan/40 bg-cyan/10 text-cyan'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-cyan/30'
                }`}
                aria-label="Vista de cuadrícula"
              >
                <FaThLarge className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'border-cyan/40 bg-cyan/10 text-cyan'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-cyan/30'
                }`}
                aria-label="Vista de lista"
              >
                <FaListUl className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <GameGrid games={filteredGames} onViewDetails={handleViewDetails} viewMode={viewMode} />
        </div>
      </div>

      {selectedGame && (
        <GameModal game={selectedGame} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Store

