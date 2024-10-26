"use client";
import React, { useState } from "react";

import {
  Phone,
  Shield,
  HeartPulse,
  Copy,
  Siren,
  Building,
  HandHelping,
  Baby,
  UserRound,
} from "lucide-react";

function EmergencyNumberCard() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
 

  const emergencyContacts = [
    {
      id: 1,
      name: "Women's National Emergency",
      number: "1091",
      description: "24/7 immediate assistance for women in distress",
      icon: Phone,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 2,
      name: "Domestic Violence",
      number: "181",
      description: "Support for domestic violence victims",
      icon: Shield,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 3,
      name: "Police Emergency",
      number: "100",
      description: "Direct police assistance and emergency response",
      icon: Siren,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 4,
      name: "Medical Emergency",
      number: "108",
      description: "Emergency medical services and ambulance",
      icon: HeartPulse,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 5,
      name: "National Commission for Women",
      number: "011-26942369",
      description: "Central complaints handling system for women",
      icon: Building,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 6,
      name: "Delhi Commission for Women",
      number: "011-23379181",
      description: "Women's helpline for Delhi region",
      icon: UserRound,
      category: "primary",
      available: "24/7",
      state: "delhi",
    },
    {
      id: 7,
      name: "Child Abuse & Sexual Offence",
      number: "1098",
      description: "POCSO e-Box for reporting child abuse",
      icon: Baby,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 8,
      name: "Senior Citizen Helpline",
      number: "14567",
      description: "Emergency assistance for senior citizens",
      icon: HandHelping,
      category: "primary",
      available: "24/7",
      state: "all",
    },
    {
      id: 9,
      name: "Student/Child Helpline",
      number: "1098",
      description: "Support for students and children in distress",
      icon: Baby,
      category: "primary",
      available: "24/7",
      state: "all",
    },
  ];

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 2000);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {emergencyContacts
        .filter((contact) => contact.category === "primary")
        .map((contact) => (
          <div key={contact.id} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative flex flex-col bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-white/10 h-full">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                  <contact.icon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-white">{contact.name}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {contact.description}
              </p>
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
                    <span className="text-xs text-green-400 font-medium">
                      Copied!
                    </span>
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
  );
}

export default EmergencyNumberCard;
