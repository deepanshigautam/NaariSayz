'use client'
import React, { useState } from "react";
import { AlertCircle, Lock, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BackgroundCanvas from "@/src/components/backgroundElement";


const ReportPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Define the event type for the handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      <BackgroundCanvas/>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Report an Incident
            </h1>
            <p className="text-gray-400 text-lg">
              Your safety matters. All reports are confidential and handled with care.
            </p>
          </div>

          {showConfirmation ? (
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-75" />
              <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">Report Submitted Successfully</h2>
                  <p className="text-gray-300 mb-6">
                    Thank you for your report. Our team will review it and take appropriate action.
                    If immediate assistance is needed, please use our emergency helpline.
                  </p>
                  <Link href="/">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Return to Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-75" />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                

                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Incident Type</label>
                      <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors">
                        <option value="">Select incident type</option>
                        <option value="harassment">Harassment</option>
                        <option value="stalking">Stalking</option>
                        <option value="assault">Assault</option>
                        <option value="domestic">Domestic Violence</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Date & Time</label>
                      <input
                        type="datetime-local"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Location</label>
                      <input
                        type="text"
                        placeholder="Enter incident location"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Description</label>
                      <textarea
                        rows={4} // Change from "4" to 4 (number)
                        placeholder="Please provide details of the incident"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Contact Information (Optional)</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="anonymous"
                        className="mr-2 rounded border-white/10 bg-black/50"
                      />
                      <label htmlFor="anonymous" className="text-gray-300">
                        Submit anonymously
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Report"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
