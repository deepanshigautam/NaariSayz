import React from 'react'
import Link from "next/link";
import {
  Shield,

  BookOpen,
  
  Bell,
 
} from "lucide-react";

function PrimaryAction() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Emergency Help */}
              <Link href="/emergency" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-100" />
                <div className="relative px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl group-hover:scale-[1.02] transition duration-500">
                  <Shield className="w-8 h-8 text-white mx-auto mb-4" />
                  <span className="font-semibold text-lg text-white block">
                    Emergency Help
                  </span>
                  <span className="text-sm text-white/90 mt-2 block">
                    24/7 Immediate Assistance
                  </span>
                </div>
              </Link>

              {/* Safety Resources */}
              <Link href="/resources" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
                <div className="relative px-8 py-6 bg-black rounded-2xl border border-white/10 group-hover:border-white/20 transition duration-500">
                  <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                    Safety Resources
                  </span>
                  <span className="text-sm text-gray-400 mt-2 block">
                    Guidelines & Training
                  </span>
                </div>
              </Link>

              {/* Report Incident */}
              <Link href="/report" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
                <div className="relative px-8 py-6 bg-black rounded-2xl border border-white/10 group-hover:border-white/20 transition duration-500">
                  <Bell className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                    Report Incident
                  </span>
                  <span className="text-sm text-gray-400 mt-2 block">
                    Confidential Reporting
                  </span>
                </div>
              </Link>
            </div>
  )
}

export default PrimaryAction