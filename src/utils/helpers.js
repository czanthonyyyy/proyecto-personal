export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const calculateDiscount = (originalPrice, discountedPrice) => {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100
  return Math.round(discount)
}

export const getDiscountPrice = (price, discount) => {
  return price * (1 - discount / 100)
}

export const sortGames = (games, sortBy) => {
  const sortedGames = [...games]
  
  switch (sortBy) {
    case 'price-low':
      return sortedGames.sort((a, b) => {
        const priceA = a.discount ? getDiscountPrice(a.price, a.discount) : a.price
        const priceB = b.discount ? getDiscountPrice(b.price, b.discount) : b.price
        return priceA - priceB
      })
    case 'price-high':
      return sortedGames.sort((a, b) => {
        const priceA = a.discount ? getDiscountPrice(a.price, a.discount) : a.price
        const priceB = b.discount ? getDiscountPrice(b.price, b.discount) : b.price
        return priceB - priceA
      })
    case 'popularity':
      return sortedGames.sort((a, b) => b.rating - a.rating)
    case 'release-date':
      return sortedGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    case 'rating':
      return sortedGames.sort((a, b) => b.rating - a.rating)
    case 'alphabetical':
      return sortedGames.sort((a, b) => a.title.localeCompare(b.title))
    default:
      return sortedGames
  }
}

export const filterGames = (games, filters) => {
  return games.filter(game => {
    // Filtro por género
    if (filters.genres.length > 0 && !filters.genres.includes(game.genre)) {
      return false
    }

    // Filtro por plataforma
    if (filters.platforms.length > 0) {
      const hasPlatform = game.platforms.some(platform => filters.platforms.includes(platform))
      if (!hasPlatform) return false
    }

    // Filtro por precio
    const gamePrice = game.discount ? getDiscountPrice(game.price, game.discount) : game.price
    if (gamePrice < filters.priceMin || gamePrice > filters.priceMax) {
      return false
    }

    // Filtro por rating
    if (game.rating < filters.rating) {
      return false
    }

    // Filtro por búsqueda
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      const matchesTitle = game.title.toLowerCase().includes(searchLower)
      const matchesStudio = game.studio.toLowerCase().includes(searchLower)
      const matchesGenre = game.genre.toLowerCase().includes(searchLower)
      if (!matchesTitle && !matchesStudio && !matchesGenre) {
        return false
      }
    }

    return true
  })
}

