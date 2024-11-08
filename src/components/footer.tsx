import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Shield,
  ExternalLink,
  AlertCircle,
  HeartHandshake,
  Code
} from 'lucide-react';
import SubscribeResource from '@/src/components/subscribeResource';

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-black text-gray-300 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                NaariSayz
              </h3>
              <p className="text-sm text-gray-400">
                Empowering women through knowledge and support. Creating a safe space 
                for information, resources, and community building.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-500 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Resource Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Personal Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Crisis Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4" />
                    Support Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Helpful Organizations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Reach Out</h4>
              <ul className="space-y-2">
                <li>
                  <a href="tel:1800-XXX-XXXX" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Helpline: 1800-XXX-XXXX
                  </a>
                </li>
                <li>
                  <a href="mailto:support@naarisayz.org" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@naarisayz.org
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-500 transition-colors flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Support Centers Near You
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Join Our Community</h4>
              <p className="text-sm text-gray-400">
                Stay updated with resources, support services, and community events.
              </p>
              
                <SubscribeResource/>
              
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer - Fixed only on md screens and above */}
      <div className="relative md:fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 NaariSayz. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-purple-500 transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Developed with</span>
              <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
              <span>by</span>
              <a 
                href="https://github.com/deepanshigautam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-purple-500 hover:text-purple-400"
              >
                <Code className="w-4 h-4" />
                Deepanshi Gautam
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;