import React from 'react'
import SearchBar from './SearchBar'
import GenreFilter from './GenreFilter'
import PlatformFilter from './PlatformFilter'
import PriceRange from './PriceRange'
import SortOptions from './SortOptions'
import ActiveFilters from './ActiveFilters'
import { useFilter } from '../../context/FilterContext'

const FilterSidebar = ({ isOpen, onClose }) => {
  
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 md:top-[120px] left-0 z-50 h-screen md:h-[calc(100vh-120px)] md:max-h-[calc(100vh-120px)] overflow-y-auto w-80 glass-strong border-r border-white/20 p-6 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-xl font-bold text-white">Filtros</h2>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-cyan transition-colors duration-300 rounded-lg hover:bg-white/10"
            aria-label="Cerrar filtros"
          >
            <svg
              className="w-6 h-6"
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
        </div>
        
        {/* Filters */}
        <div className="space-y-6">
          {/* Search */}
          <SearchBar />
          
          {/* Active Filters */}
          <ActiveFilters />
          
          {/* Sort */}
          <SortOptions />
          
          {/* Genres */}
          <GenreFilter />
          
          {/* Platforms */}
          <PlatformFilter />
          
          {/* Price Range */}
          <PriceRange />
          
          {/* Rating Filter */}
          <RatingFilter />
        </div>
      </aside>
    </>
  )
}

const RatingFilter = () => {
  const { filters, setRating } = useFilter()
  
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Rating</h3>
      <div className="space-y-2">
        {[4, 3, 2, 1].map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 cursor-pointer hover:text-cyan transition-colors duration-300"
          >
            <input
              type="radio"
              name="rating"
              checked={filters.rating === rating}
              onChange={() => setRating(rating)}
              className="w-4 h-4 text-cyan bg-white/10 border-white/20 focus:ring-cyan focus:ring-2"
            />
            <span className="text-white/80">{rating}+ estrellas</span>
          </label>
        ))}
        <label className="flex items-center gap-2 cursor-pointer hover:text-cyan transition-colors duration-300">
          <input
            type="radio"
            name="rating"
            checked={filters.rating === 0}
            onChange={() => setRating(0)}
            className="w-4 h-4 text-cyan bg-white/10 border-white/20 focus:ring-cyan focus:ring-2"
          />
          <span className="text-white/80">Todos</span>
        </label>
      </div>
    </div>
  )
}

export default FilterSidebar

