import React from 'react'
import { HiSparkles } from 'react-icons/hi'

const BrandLogo = ({ showWordmark = true, orientation = 'row' }) => {
  return (
    <div
      className={`flex ${orientation === 'column' ? 'flex-col' : 'flex-row'} items-center gap-3`}
    >
      <div className="relative w-11 h-11 rounded-2xl shadow-[0_8px_25px_rgba(0,217,255,0.3)] bg-gradient-to-br from-cyan to-purple p-[2px]">
        <div className="absolute inset-0.5 rounded-2xl bg-[#05060a] opacity-90" />
        <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/30 via-purple/20 to-transparent">
          <HiSparkles className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
        </div>
      </div>
      {showWordmark && (
        <div className="leading-tight">
          <p className="text-lg font-black uppercase tracking-[0.4em] text-white">Nova</p>
          <p className="text-xl font-black text-cyan leading-none">Forge</p>
          <p className="text-[10px] tracking-[0.35em] text-white/60 mt-1 uppercase">
            Gaming Market
          </p>
        </div>
      )}
    </div>
  )
}

export default BrandLogo


