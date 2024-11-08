'use client'
import React, { useState, useEffect } from "react";
import { supabase } from "@/src/services/supabaseClient";

function SubscribeResource() {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);  // Track if we're on the client side

  // Check if we're on the client side before rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;  

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();  

    if (!email) return;  

    try {
      
      const { data, error } = await supabase.from("subscribers").insert([{ email }]);

      console.log("Supabase response:", { data, error });  

      if (error) {
        console.error("Subscription error:", error.message);
        setError("Subscription failed. Please try again.");
      } else {
        console.log("Subscriber added:", data);  
        setIsSubscribed(true);  
        setEmail("");  

       
        setTimeout(() => setIsSubscribed(false), 3000);
      }
    } catch (err) {
      console.error("Unexpected error adding subscriber:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="mt-16 text-center">
     
      <form onSubmit={handleSubscribe} className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
          required
          className="bg-white/5 border border-white/10 rounded-l-xl py-3 lg:px-4 px-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-r-xl lg:px-4 px-5"
        >
          Subscribe
        </button>
      </form>
      {isSubscribed && <p className="mt-4 text-green-400">Thank you for subscribing!</p>}
      {error && <p className="mt-4 text-red-400">{error}</p>}
    </div>
  );
}

export default SubscribeResource;
