import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const FilterContext = createContext()

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useLocalStorage('filters', {
    genres: [],
    platforms: [],
    priceMin: 0,
    priceMax: 100,
    rating: 0,
    sort: 'popularity',
    search: '',
  })

  const updateFilters = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }))
  }

  const setGenres = (genres) => {
    updateFilters({ genres })
  }

  const setPlatforms = (platforms) => {
    updateFilters({ platforms })
  }

  const setPriceRange = (priceMin, priceMax) => {
    updateFilters({ priceMin, priceMax })
  }

  const setRating = (rating) => {
    updateFilters({ rating })
  }

  const setSort = (sort) => {
    updateFilters({ sort })
  }

  const setSearch = (search) => {
    updateFilters({ search })
  }

  const clearFilters = () => {
    setFilters({
      genres: [],
      platforms: [],
      priceMin: 0,
      priceMax: 100,
      rating: 0,
      sort: 'popularity',
      search: '',
    })
  }

  const clearFilter = (filterName) => {
    const defaultValues = {
      genres: [],
      platforms: [],
      priceMin: 0,
      priceMax: 100,
      rating: 0,
      sort: 'popularity',
      search: '',
    }
    updateFilters({ [filterName]: defaultValues[filterName] })
  }

  const value = {
    filters,
    updateFilters,
    setGenres,
    setPlatforms,
    setPriceRange,
    setRating,
    setSort,
    setSearch,
    clearFilters,
    clearFilter,
  }

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}

