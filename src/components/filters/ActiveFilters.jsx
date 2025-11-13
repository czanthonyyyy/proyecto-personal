import React from 'react'
import { useFilter } from '../../context/FilterContext'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const ActiveFilters = () => {
  const { filters, clearFilters, clearFilter, setGenres, setPlatforms, setPriceRange, setRating, setSearch } = useFilter()
  
  const hasActiveFilters = 
    filters.genres.length > 0 ||
    filters.platforms.length > 0 ||
    filters.priceMin > 0 ||
    filters.priceMax < 100 ||
    filters.rating > 0 ||
    filters.search !== ''
  
  if (!hasActiveFilters) return null
  
  const handleRemoveGenre = (genre) => {
    setGenres(filters.genres.filter((g) => g !== genre))
  }
  
  const handleRemovePlatform = (platform) => {
    setPlatforms(filters.platforms.filter((p) => p !== platform))
  }
  
  return (
    <div className="glass rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Filtros Activos</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-sm"
        >
          Limpiar Todo
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {/* Genres */}
        {filters.genres.map((genre) => (
          <Badge
            key={genre}
            variant="genre"
            size="sm"
            className="flex items-center gap-2"
          >
            {genre}
            <button
              onClick={() => handleRemoveGenre(genre)}
              className="ml-1 text-white/80 hover:text-white transition-colors duration-300"
              aria-label={`Eliminar filtro ${genre}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Badge>
        ))}
        
        {/* Platforms */}
        {filters.platforms.map((platform) => (
          <Badge
            key={platform}
            variant="platform"
            size="sm"
            className="flex items-center gap-2"
          >
            {platform}
            <button
              onClick={() => handleRemovePlatform(platform)}
              className="ml-1 text-white/80 hover:text-white transition-colors duration-300"
              aria-label={`Eliminar filtro ${platform}`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Badge>
        ))}
        
        {/* Price Range */}
        {(filters.priceMin > 0 || filters.priceMax < 100) && (
          <Badge
            variant="default"
            size="sm"
            className="flex items-center gap-2"
          >
            ${filters.priceMin} - ${filters.priceMax}
            <button
              onClick={() => setPriceRange(0, 100)}
              className="ml-1 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Eliminar filtro de precio"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Badge>
        )}
        
        {/* Rating */}
        {filters.rating > 0 && (
          <Badge
            variant="default"
            size="sm"
            className="flex items-center gap-2"
          >
            Rating: {filters.rating}+
            <button
              onClick={() => setRating(0)}
              className="ml-1 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Eliminar filtro de rating"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Badge>
        )}
        
        {/* Search */}
        {filters.search && (
          <Badge
            variant="default"
            size="sm"
            className="flex items-center gap-2"
          >
            Buscar: {filters.search}
            <button
              onClick={() => setSearch('')}
              className="ml-1 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Eliminar búsqueda"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Badge>
        )}
      </div>
    </div>
  )
}

export default ActiveFilters

