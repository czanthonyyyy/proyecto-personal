import React from 'react'

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full'
  
  const variants = {
    default: 'bg-cyan/20 text-cyan border border-cyan/50',
    discount: 'bg-gold text-dark-900 font-bold',
    genre: 'bg-purple/20 text-purple border border-purple/50',
    platform: 'bg-white/10 text-white border border-white/20',
    new: 'bg-green-500 text-white',
    popular: 'bg-cyan text-white',
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge

