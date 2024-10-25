'use client'
import React, { useState } from "react";
import Link from "next/link";
import {
    Shield,
    Phone,
    BookOpen,
    Users,
    Bell,
    Heart,
    ChevronDown,
    ChevronUp,
    MessageCircle,
    HandHeart,
    Calendar,
    UserPlus,
  } from "lucide-react";

function AdditionalFeatures() {
    const [isExpanded, setIsExpanded] = useState(false); // State to manage the expanded state

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };
  return (
    <div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    {/* Support Network - Expandable */}
    <div className="relative group col-span-2">
      <button
        onClick={toggleExpand}
        className="w-full text-left focus:outline-none"
      >
        <div className="relative p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-purple-400 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Support Network
                </h3>
                <p className="text-gray-300">
                  Connect with support groups and counselors for
                  guidance and assistance.
                </p>
              </div>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-purple-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-purple-400" />
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Support Network - Enhanced */}
          <div className="relative group col-span-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
            <div className="relative backdrop-blur-sm bg-black/50 rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white">
                  Support Network
                </h3>
                <p className="text-gray-300 mt-2">
                  Join our community of support and empowerment
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Support Groups */}
                <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                  <MessageCircle className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Support Groups
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Connect with women in moderated support groups for
                    sharing experiences and healing together.
                  </p>
                </div>

                {/* Professional Counseling */}
                <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                  <HandHeart className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Professional Counseling
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Access certified counselors specializing in trauma
                    support and mental health care.
                  </p>
                </div>

                {/* Community Events */}
                <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                  <Calendar className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Community Events
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Join workshops, self-defense classes, and
                    awareness programs in your area.
                  </p>
                </div>

                {/* Mentorship Program */}
                <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                  <UserPlus className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Mentorship Program
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Connect with experienced mentors who can guide you
                    through recovery and empowerment.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href=""
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition duration-300"
                >
                  Join Our Community
                  <Heart className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div></div>
  )
}

export default AdditionalFeatures