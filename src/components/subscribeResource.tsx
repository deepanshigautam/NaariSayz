'use client';
import React, { useState} from "react";

function SubscribeResource() {
    
   
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
          setIsSubscribed(true);
          setEmail("");
          setTimeout(() => setIsSubscribed(false), 3000);
        }
      };
  return (
    <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
            <form onSubmit={handleSubscribe} className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border border-white/10 rounded-l-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-r-xl px-4"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className="mt-4 text-green-400">Thank you for subscribing!</p>
            )}
          </div>
  )
}

export default SubscribeResource