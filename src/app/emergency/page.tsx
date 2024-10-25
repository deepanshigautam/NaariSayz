'use client';
import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  ArrowLeft, 
  Shield, 
  AlertCircle, 
  Navigation, 
  Clock,
  MapPin,
  Info,
  HeartPulse,
  Copy,
  Ambulance,
  Building,
  HandHelping,
  Baby,
  UserRound,
} from "lucide-react";
import BackgroundCanvas from "@/src/components/backgroundElement";

const EmergencyHelpPage = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string>("all");

  const emergencyContacts = [
    {
      id: 1,
      name: "Women's National Emergency",
      number: "1091",
      description: "24/7 immediate assistance for women in distress",
      icon: Phone,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 2,
      name: "Domestic Violence",
      number: "181",
      description: "Support for domestic violence victims",
      icon: Shield,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 3,
      name: "Police Emergency",
      number: "100",
      description: "Direct police assistance and emergency response",
      icon: Shield,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 4,
      name: "Medical Emergency",
      number: "108",
      description: "Emergency medical services and ambulance",
      icon: HeartPulse,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 5,
      name: "National Commission for Women",
      number: "011-26942369",
      description: "Central complaints handling system for women",
      icon: Building,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 6,
      name: "Delhi Commission for Women",
      number: "011-23379181",
      description: "Women's helpline for Delhi region",
      icon: UserRound,
      category: "primary",
      available: "24/7",
      state: "delhi"
    },
    {
      id: 7,
      name: "Child Abuse & Sexual Offence",
      number: "1098",
      description: "POCSO e-Box for reporting child abuse",
      icon: Baby,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 8,
      name: "Senior Citizen Helpline",
      number: "14567",
      description: "Emergency assistance for senior citizens",
      icon: HandHelping,
      category: "primary",
      available: "24/7",
      state: "all"
    },
    {
      id: 9,
      name: "Student/Child Helpline",
      number: "1098",
      description: "Support for students and children in distress",
      icon: Baby,
      category: "primary",
      available: "24/7",
      state: "all"
    },
  ];

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundCanvas/>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Emergency Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-purple-500/20 mb-8">
              <AlertCircle className="w-12 h-12 text-red-400 animate-pulse" />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Emergency Help
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Immediate assistance is available 24/7. These numbers are toll-free and can be dialed from any phone.
            </p>
          </div>

          {/* Primary Emergency Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {emergencyContacts
              .filter(contact => contact.category === "primary")
              .map(contact => (
                <div 
                  key={contact.id}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative flex flex-col bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-white/10 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                        <contact.icon className="w-6 h-6 text-purple-300" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{contact.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{contact.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          {contact.number}
                        </span>
                        <button
                          onClick={() => handleCopyNumber(contact.number)}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Copy className="w-4 h-4 text-gray-400" />
                        </button>
                        {copiedNumber === contact.number && (
                          <span className="text-xs text-green-400 font-medium">Copied!</span>
                        )}
                      </div>
                      <a
                        href={`tel:${contact.number}`}
                        className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Important Information */}
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
                    <h3 className="text-lg font-semibold text-white mb-1">24/7 Availability</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">All emergency numbers are operational round the clock</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Navigation className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location Matters</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Some services may vary based on your location</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Know Your Nearest Help</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Always be aware of the nearest available assistance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Info className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Information is Power</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Stay informed about emergency services in your area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelpPage;