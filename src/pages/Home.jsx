import React, { useState, useMemo } from 'react'
import { games } from '../data/games'
import Hero from '../components/sections/Hero'
import GameModal from '../components/game/GameModal'
import GameGrid from '../components/game/GameGrid'
import Button from '../components/ui/Button'
import { useCart } from '../context/CartContext'
import { sortGames, getDiscountPrice, formatPrice } from '../utils/helpers'
import { FaBolt, FaCrown, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa'

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()

  const trendingGames = useMemo(() => {
    return sortGames(games, 'rating').slice(0, 8)
  }, [])

  const featuredGame = useMemo(() => {
    const featuredGames = games.filter(game => game.featured === true)
    return featuredGames.length > 0 ? featuredGames[0] : (trendingGames[0] || games[0])
  }, [trendingGames])
  const hotDeals = useMemo(() => games.filter(game => game.discount >= 30).slice(0, 4), [])
  const newReleases = useMemo(() => sortGames(games, 'release-date').slice(0, 6), [])
  const avgTrendingRating = trendingGames.length
    ? (trendingGames.reduce((acc, game) => acc + game.rating, 0) / trendingGames.length).toFixed(1)
    : '4.9'

  const stats = [
    { label: 'Catálogo premium', value: games.length, caption: 'Curado semanalmente', Icon: FaCrown },
    { label: 'Descuentos activos', value: `${hotDeals.length}+`, caption: 'Flash sales', Icon: FaBolt },
    { label: 'Rating global', value: avgTrendingRating, caption: 'Community score', Icon: FaShieldAlt },
    {
      label: 'Regiones servidas',
      value: '30+',
      caption: 'Distribución global',
      Icon: FaGlobeAmericas,
    },
  ]

  const collections = [
    {
      title: 'Exploración Sci-Fi',
      description: 'Campañas cinematográficas con mundos abiertos y fotografía espacial.',
      accent: 'from-cyan/20 via-purple/20 to-transparent',
    },
    {
      title: 'Competitivo Táctico',
      description: 'FPS y MOBAs con ranked queues y soporte eSports.',
      accent: 'from-red-500/20 via-orange-400/10 to-transparent',
    },
    {
      title: 'Co-op Comfort',
      description: 'Sesiones cooperativas con progresión compartida y juego cruzado.',
      accent: 'from-emerald-400/20 via-cyan/10 to-transparent',
    },
  ]

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
    <div className="container mx-auto px-4 py-12 space-y-12">
      <Hero game={featuredGame} onViewDetails={handleViewDetails} onAddToCart={handleAddToCart} />

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, caption, Icon }) => (
          <article
            key={label}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-cyan/40 transition-colors duration-300"
          >
            <Icon className="w-8 h-8 text-cyan" aria-hidden="true" />
            <div>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-white/80 text-sm">{label}</p>
              <p className="text-white/50 text-xs">{caption}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-800 min-h-[320px]">
          <img
            src={featuredGame?.images?.[0]}
            alt={featuredGame?.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 p-8 flex flex-col justify-end h-full space-y-4">
            <div className="text-xs uppercase tracking-[0.4em] text-white/60">Spotlight</div>
            <h2 className="text-3xl font-bold text-white">{featuredGame?.title}</h2>
            <p className="text-white/70 max-w-md">
              {featuredGame?.storyline?.slice(0, 110) || featuredGame?.description?.slice(0, 110)}
              ...
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="md" onClick={() => handleViewDetails(featuredGame)}>
                Ver detalles
              </Button>
              <Button variant="ghost" size="md" onClick={() => handleAddToCart(featuredGame)}>
                Añadir al carrito
              </Button>
            </div>
          </div>
        </article>

        <div className="glass rounded-3xl p-6 xl:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Radar en vivo</p>
              <h3 className="text-2xl font-bold text-white">Top picks de la comunidad</h3>
            </div>
            <Button variant="secondary" size="sm" onClick={() => (window.location.hash = 'store')}>
              Explorar tienda
            </Button>
          </div>
          <div className="space-y-4">
            {trendingGames.slice(0, 4).map((game) => {
              const finalPrice = game.discount ? getDiscountPrice(game.price, game.discount) : game.price
              return (
                <button
                  key={game.id}
                  onClick={() => handleViewDetails(game)}
                  className="w-full text-left flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan/40 transition-colors duration-300"
                >
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-dark-800"
                    style={{
                      backgroundImage: `url(${game.images?.[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <p className="text-white font-semibold">{game.title}</p>
                    <p className="text-white/60 text-sm">{game.genre} · {game.platforms[0]}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan font-bold">{formatPrice(finalPrice)}</p>
                    {game.discount > 0 && (
                      <span className="text-xs text-red-400 bg-red-400/10 rounded-full px-2 py-0.5">
                        -{game.discount}%
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className={`rounded-3xl border border-white/10 p-6 bg-gradient-to-br ${collection.accent} hover:border-cyan/40 transition-colors duration-300`}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-2">Colección editorial</p>
            <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
            <p className="text-white/70 mb-4">{collection.description}</p>
            <Button variant="ghost" size="sm" onClick={() => (window.location.hash = 'store')}>
              Ver selección
            </Button>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Tendencias</p>
            <h3 className="text-3xl font-bold text-white">Descubre lo más jugado</h3>
          </div>
          <Button variant="secondary" size="sm" onClick={() => (window.location.hash = 'store')}>
            Ver catálogo completo
          </Button>
        </div>
        <GameGrid games={trendingGames.slice(0, 4)} onViewDetails={handleViewDetails} viewMode="grid" />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Ofertas relámpago</p>
              <h3 className="text-2xl font-bold text-white">Ahorra antes del reset</h3>
            </div>
            <span className="text-sm text-white/60">Actualiza cada 24h</span>
          </div>
          <div className="space-y-3">
            {hotDeals.map((game) => {
              const finalPrice = getDiscountPrice(game.price, game.discount)
              return (
                <button
                  key={game.id}
                  onClick={() => handleViewDetails(game)}
                  className="w-full text-left rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan/40 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{game.title}</p>
                      <p className="text-white/60 text-sm">{game.genre}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan font-bold">{formatPrice(finalPrice)}</p>
                      <span className="text-xs text-red-400 bg-red-400/10 rounded-full px-2 py-0.5">
                        -{game.discount}%
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan/10 to-purple/10 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Nuevos lanzamientos</p>
              <h3 className="text-2xl font-bold text-white">Agenda global</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={() => (window.location.hash = 'store')}>
              Calendario
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {newReleases.map((game) => (
              <button
                key={game.id}
                onClick={() => handleViewDetails(game)}
                className="min-w-[220px] rounded-2xl bg-white/10 border border-white/10 p-4 flex-shrink-0 text-left hover:border-cyan/40 transition-colors duration-300"
              >
                <div
                  className="h-32 rounded-xl mb-4 bg-dark-800 overflow-hidden"
                  style={{
                    backgroundImage: `url(${game.images?.[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  aria-hidden="true"
                />
                <p className="text-white font-semibold">{game.title}</p>
                <p className="text-white/60 text-sm">
                  {new Date(game.releaseDate).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedGame && (
        <GameModal game={selectedGame} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Home

