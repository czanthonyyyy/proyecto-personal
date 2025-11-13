import React from 'react'
import { useFilter } from '../../context/FilterContext'
import { SORT_OPTIONS } from '../../utils/constants'

const SortOptions = () => {
  const { filters, setSort } = useFilter()
  
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Ordenar por</h3>
      <select
        value={filters.sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value} className="bg-dark-800">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortOptions

