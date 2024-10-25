import React from 'react'

function HeroSection() {
  return (
    <div><div className="relative py-8">
    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl -z-10" />
    <h1 className="text-7xl font-bold tracking-tight">
      NaariSayz
      <span className="block mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-5xl bg-clip-text text-transparent">
        Empowering Women's Safety
      </span>
    </h1>
    <p className="mt-6 text-xl text-gray-400 font-light tracking-wide">
      Knowledge • Support • Action
    </p>
  </div></div>
  )
}

export default HeroSection