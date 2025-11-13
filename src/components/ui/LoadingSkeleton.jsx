import React from 'react'

const LoadingSkeleton = ({ type = 'card', className = '' }) => {
  if (type === 'card') {
    return (
      <div className={`glass rounded-lg overflow-hidden animate-pulse ${className}`}>
        <div className="w-full h-48 bg-white/10" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-white/10 rounded w-3/4" />
          <div className="h-3 bg-white/10 rounded w-1/2" />
          <div className="h-3 bg-white/10 rounded w-2/3" />
          <div className="flex gap-2 mt-4">
            <div className="h-8 bg-white/10 rounded w-20" />
            <div className="h-8 bg-white/10 rounded w-20" />
          </div>
        </div>
      </div>
    )
  }
  
  if (type === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
        <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-white/10 rounded w-4/6 animate-pulse" />
      </div>
    )
  }
  
  if (type === 'circle') {
    return (
      <div className={`rounded-full bg-white/10 animate-pulse ${className}`} />
    )
  }
  
  return (
    <div className={`bg-white/10 rounded animate-pulse ${className}`} />
  )
}

export default LoadingSkeleton

