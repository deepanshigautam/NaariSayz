
import React from "react";
import { AlertCircle } from "lucide-react";
import BackgroundCanvas from "@/src/components/backgroundElement";
import EmergencyNumberCard from "@/src/components/emergencyNumberCard";
import BackButton from "@/src/components/backButton";
import EmerAddInfo from "@/src/components/emerAddInfo";

const EmergencyHelpPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundCanvas />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <BackButton />

          {/* Emergency Header */}
          <div className="text-center mb-16">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Emergency Help
              <span>
                <div className="inline-flex items-center justify-center lg:w-24 lg:h-24 md:w-22 md:h-22 w-16 h-16 ml-8 rounded-full bg-gradient-to-br from-red-500/20 to-purple-500/20 mb-8">
                  <AlertCircle className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-8 h-8 text-red-400 animate-pulse" />
                </div>
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Immediate assistance is available 24/7. These numbers are
              toll-free and can be dialed from any phone.
            </p>
          </div>

          {/* Primary Emergency Numbers */}
          <EmergencyNumberCard />

          {/* Important Information */}
          <EmerAddInfo />
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelpPage;
