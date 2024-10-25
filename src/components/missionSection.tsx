import React from "react";

function MissionSection() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
      <div className="relative backdrop-blur-sm bg-black/50 rounded-3xl p-12 border border-white/10">
        <h2 className="lg:text-4xl md:text-3xl text-3xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="text-xl leading-relaxed text-gray-300">
          We are dedicated to creating a safer world for women through
          education, support, and community action. Our platform provides
          essential resources, emergency assistance, and a strong support
          network to empower women with knowledge and tools for personal safety.
        </p>
      </div>
    </div>
  );
}

export default MissionSection;
