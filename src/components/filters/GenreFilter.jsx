import React from 'react'
import { useFilter } from '../../context/FilterContext'
import { GENRES } from '../../utils/constants'

const GenreFilter = () => {
  const { filters, setGenres } = useFilter()
  
  const handleGenreToggle = (genre) => {
    const newGenres = filters.genres.includes(genre)
      ? filters.genres.filter((g) => g !== genre)
      : [...filters.genres, genre]
    setGenres(newGenres)
  }
  
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Géneros</h3>
      <div className="space-y-2">
        {GENRES.map((genre) => (
          <label
            key={genre}
            className="flex items-center gap-2 cursor-pointer hover:text-cyan transition-colors duration-300"
          >
            <input
              type="checkbox"
              checked={filters.genres.includes(genre)}
              onChange={() => handleGenreToggle(genre)}
              className="w-4 h-4 text-cyan bg-white/10 border-white/20 rounded focus:ring-cyan focus:ring-2"
            />
            <span className="text-white/80">{genre}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default GenreFilter

