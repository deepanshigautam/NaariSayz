"use client";
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

const LandingPage = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage the expanded state

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full bg-[repeating-linear-gradient(60deg,#000,#000_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
          <div className="absolute w-full h-full bg-[repeating-linear-gradient(-60deg,#000,#000_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 border border-purple-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-40 right-40 w-96 h-96 border border-pink-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute bottom-20 left-1/2 w-80 h-80 border border-purple-500/10 rounded-full animate-[spin_25s_linear_infinite]" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_70%,rgba(0,0,0,0.95)_100%)]" />

        {/* Dynamic Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-[moveRight_8s_linear_infinite]" />
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-[moveLeft_8s_linear_infinite]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-[moveDown_8s_linear_infinite]" />
          <div className="absolute right-0 bottom-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-[moveUp_8s_linear_infinite]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 text-center">
            {/* Hero Section */}
            <div className="relative py-8">
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
            </div>

            {/* Mission Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
              <div className="relative backdrop-blur-sm bg-black/50 rounded-3xl p-12 border border-white/10">
                <h2 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  We are dedicated to creating a safer world for women through
                  education, support, and community action. Our platform
                  provides essential resources, emergency assistance, and a
                  strong support network to empower women with knowledge and
                  tools for personal safety.
                </p>
              </div>
            </div>

            {/* Primary Actions */}
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

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
