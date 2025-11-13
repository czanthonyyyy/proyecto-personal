import React, { useState, useEffect } from 'react'
import GameCard from './GameCard'

const GameCarousel = ({ games, onViewDetails, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  useEffect(() => {
    if (!autoPlay || isPaused || games.length === 0) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [autoPlay, isPaused, games.length, interval])
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % games.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length)
  }
  
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }
  
  if (games.length === 0) return null
  
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {games.map((game, index) => (
            <div key={game.id} className="min-w-full">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={game.images[0]}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                      {game.title}
                    </h3>
                    <p className="text-lg text-white/80 mb-6 line-clamp-2">
                      {game.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => onViewDetails && onViewDetails(game)}
                        className="px-6 py-3 bg-cyan text-white rounded-lg hover:bg-cyan-hover transition-colors duration-300 glow-cyan"
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      {games.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-strong rounded-full text-white hover:text-cyan transition-colors duration-300 z-10"
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-strong rounded-full text-white hover:text-cyan transition-colors duration-300 z-10"
            aria-label="Slide siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Indicators */}
      {games.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {games.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan w-8' : 'bg-white/40'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GameCarousel

