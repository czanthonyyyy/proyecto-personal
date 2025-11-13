import React from 'react'
import GameCarousel from '../game/GameCarousel'

const SpecialOffers = ({ games, onViewDetails }) => {
  const offers = games.filter(game => game.discount > 0).slice(0, 5)
  
  if (!offers || offers.length === 0) return null
  
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Ofertas Especiales</h2>
        <a
          href="#deals"
          className="text-cyan hover:text-cyan-hover transition-colors duration-300"
        >
          Ver todas →
        </a>
      </div>
      <GameCarousel
        games={offers}
        onViewDetails={onViewDetails}
        autoPlay={true}
        interval={5000}
      />
    </section>
  )
}

export default SpecialOffers

