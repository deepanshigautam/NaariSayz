'use client'
import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import BackgroundCanvas from "@/src/components/backgroundElement";
import BackButton from "@/src/components/backButton";
import ArticleResource from "@/src/components/articleResource";
import Footer from "@/src/components/footer";

const SafetyResourcesPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will run only in the client
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {isClient && <BackgroundCanvas />} {/* Only render on client */}

      <div className="container mx-auto px-4 py-10 relative">
        <div className="max-w-7xl mx-auto">
          <BackButton />

          {/* Header */}
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Safety Resources 
              <span>
                <div className="inline-flex items-center justify-center lg:w-24 lg:h-24 md:w-22 md:h-22 w-16 h-16 ml-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-2">
                  <BookOpen className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-8 h-8 text-purple-400" />
                </div>
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Essential information and guides for personal safety, legal rights, and support services.
            </p>
          </header>

          {/* Articles */}
          <ArticleResource />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SafetyResourcesPage;
