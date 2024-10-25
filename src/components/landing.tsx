import React from "react";

import BackgroundCanvas from "./backgroundElement";
import AdditionalFeatures from "./additionalFeatures";
import HeroSection from "./heroSection";
import MissionSection from "./missionSection";
import PrimaryAction from "./primaryAction";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundCanvas />

      <div className="container mx-auto px-4 py-5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 text-center">
            <HeroSection />

            <MissionSection />

            <PrimaryAction />

            <AdditionalFeatures />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
