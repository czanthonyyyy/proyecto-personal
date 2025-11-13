import React from 'react'
import { useFilter } from '../../context/FilterContext'
import { PLATFORMS, PLATFORM_ICONS } from '../../utils/constants'

const PlatformFilter = () => {
  const { filters, setPlatforms } = useFilter()
  
  const handlePlatformToggle = (platform) => {
    const newPlatforms = filters.platforms.includes(platform)
      ? filters.platforms.filter((p) => p !== platform)
      : [...filters.platforms, platform]
    setPlatforms(newPlatforms)
  }
  
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Plataformas</h3>
      <div className="space-y-2">
        {PLATFORMS.map((platform) => (
          <label
            key={platform}
            className="flex items-center gap-2 cursor-pointer hover:text-cyan transition-colors duration-300"
          >
            <input
              type="checkbox"
              checked={filters.platforms.includes(platform)}
              onChange={() => handlePlatformToggle(platform)}
              className="w-4 h-4 text-cyan bg-white/10 border-white/20 rounded focus:ring-cyan focus:ring-2"
            />
            <span className="text-white/80 flex items-center gap-2">
              <span>{PLATFORM_ICONS[platform] || '🎮'}</span>
              <span>{platform}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default PlatformFilter

