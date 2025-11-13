import React, { useState, useEffect } from 'react'
import { useFilter } from '../../context/FilterContext'

const PriceRange = () => {
  const { filters, setPriceRange } = useFilter()
  const [minPrice, setMinPrice] = useState(filters.priceMin)
  const [maxPrice, setMaxPrice] = useState(filters.priceMax)
  
  useEffect(() => {
    setPriceRange(minPrice, maxPrice)
  }, [minPrice, maxPrice, setPriceRange])
  
  const handleMinChange = (e) => {
    const value = Math.max(0, Math.min(100, parseInt(e.target.value) || 0))
    setMinPrice(value)
    if (value > maxPrice) {
      setMaxPrice(value)
    }
  }
  
  const handleMaxChange = (e) => {
    const value = Math.max(0, Math.min(100, parseInt(e.target.value) || 100))
    setMaxPrice(value)
    if (value < minPrice) {
      setMinPrice(value)
    }
  }
  
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Rango de Precio</h3>
      <div className="space-y-4">
        {/* Price Display */}
        <div className="text-center text-white/80 text-lg font-semibold">
          ${minPrice} - ${maxPrice}
        </div>
        
        {/* Slider */}
        <div className="relative h-2">
          <div className="absolute inset-0 h-2 bg-white/10 rounded-lg" />
          <div 
            className="absolute h-2 bg-cyan rounded-lg"
            style={{
              left: `${(minPrice / 100) * 100}%`,
              width: `${((maxPrice - minPrice) / 100) * 100}%`,
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={minPrice}
            onChange={handleMinChange}
            className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-10"
            style={{
              background: 'transparent',
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-10"
            style={{
              background: 'transparent',
            }}
          />
        </div>
        
        {/* Input Fields */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label className="block text-sm text-white/60 mb-1">Mínimo</label>
            <input
              type="number"
              min="0"
              max="100"
              value={minPrice}
              onChange={handleMinChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-white/60 mb-1">Máximo</label>
            <input
              type="number"
              min="0"
              max="100"
              value={maxPrice}
              onChange={handleMaxChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceRange
