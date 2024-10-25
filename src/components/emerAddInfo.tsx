import React from 'react'
import {
    Navigation,
    Clock,
    MapPin,
    Info,
   
  } from "lucide-react";

function EmerAddInfo() {
  return (
    <div className="relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-xl blur opacity-75" />
    <div className="relative bg-black/80 backdrop-blur-lg rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Important Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
            <Clock className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              24/7 Availability
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              All emergency numbers are operational round the clock
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
            <Navigation className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Location Matters
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Some services may vary based on your location
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
            <MapPin className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Know Your Nearest Help
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Always be aware of the nearest available assistance
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
            <Info className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Information is Power
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stay informed about emergency services in your area
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmerAddInfo