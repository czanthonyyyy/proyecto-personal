import React, { useState, useEffect } from 'react'
import { useFilter } from '../../context/FilterContext'
import { useDebounce } from '../../hooks/useDebounce'

const SearchBar = () => {
  const { filters, setSearch } = useFilter()
  const [searchTerm, setSearchTerm] = useState(filters.search)
  const debouncedSearch = useDebounce(searchTerm, 300)
  
  useEffect(() => {
    setSearch(debouncedSearch)
  }, [debouncedSearch, setSearch])
  
  const handleClear = () => {
    setSearchTerm('')
    setSearch('')
  }
  
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar juegos..."
        className="w-full pl-10 pr-10 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300"
          aria-label="Limpiar búsqueda"
        >
          <svg
            className="w-5 h-5"
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
      )}
    </div>
  )
}

export default SearchBar

