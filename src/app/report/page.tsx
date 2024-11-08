'use client';
import React, { useState } from "react";
import { AlertCircle, Send, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/src/components/ui/alert";
import Footer from "@/src/components/footer";
import { supabase } from "@/src/services/supabaseClient";

// Define the type for formData
interface FormData {
  username:string,
  incidentType: string;
  dateTime: string;
  location: string;
  description: string;
  email: string;
  isAnonymous: boolean;
}

const ReportPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username:"",
    incidentType: "",
    dateTime: "",
    location: "",
    description: "",
    email: "",
    isAnonymous: false
  });
  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const newErrors: { [key in keyof FormData]?: string } = {};

    if (!formData.incidentType) {
      newErrors.incidentType = "Please select an incident type";
    }

    if (!formData.dateTime) {
      newErrors.dateTime = "Please provide the date and time";
    } else {
      const selectedDate = new Date(formData.dateTime);
      if (selectedDate > new Date()) {
        newErrors.dateTime = "Date cannot be in the future";
      }
    }

    if (!formData.location) {
      newErrors.location = "Please provide the location";
    }

    if (!formData.description) {
      newErrors.description = "Please provide a description";
    } else if (formData.description.length < 20) {
      newErrors.description = "Description should be at least 20 characters";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: _error } = await supabase.from("report-incident").insert({
        username: formData.username,
        incident_type: formData.incidentType,
        date_time: formData.dateTime,
        location: formData.location,
        description: formData.description,
        email: formData.email,
        is_anonymous: formData.isAnonymous
      });
    
      if (_error) {
        throw _error;
      }
    
      setShowConfirmation(true);
    } catch  {
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
    
  };

  const ConfirmationScreen = () => (
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
            {formData.email && " We will contact you through the provided email address."}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Return to Home
              </button>
            </Link>
            <button 
              onClick={() => {
                setShowConfirmation(false);
                setFormData({
                  username:"",
                  incidentType: "",
                  dateTime: "",
                  location: "",
                  description: "",
                  email: "",
                  isAnonymous: false
                });
              }}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Submit Another Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="container mx-auto px-4 py-8 relative">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-12">
              <h1 className="lg:text-5xl md:text-4xl text-[2rem] font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Report an Incident
              </h1>
              <p className="text-gray-400 lg:text-lg md:text-lg text-[1rem]">
                Your safety matters. All reports are confidential and handled with care.
              </p>
            </div>

            {showAlert && (
              <Alert variant="destructive" className="mb-6 bg-red-900/50 border-red-500/50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please correct the errors in the form before submitting.
                </AlertDescription>
              </Alert>
            )}

            {showConfirmation ? (
              <ConfirmationScreen />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-75" />
                  <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2">Name *</label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.username ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        />
                        {errors.username && (
                          <p className="text-red-400 text-sm mt-1">{errors.username}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Incident Type *</label>
                        <select
                          name="incidentType"
                          value={formData.incidentType}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.incidentType ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        >
                          <option value="">Select incident type</option>
                          <option value="harassment">Harassment</option>
                          <option value="stalking">Stalking</option>
                          <option value="assault">Assault</option>
                          <option value="domestic">Domestic Violence</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.incidentType && (
                          <p className="text-red-400 text-sm mt-1">{errors.incidentType}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Date & Time *</label>
                        <input
                          type="datetime-local"
                          name="dateTime"
                          value={formData.dateTime}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.dateTime ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        />
                        {errors.dateTime && (
                          <p className="text-red-400 text-sm mt-1">{errors.dateTime}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Location *</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.location ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        />
                        {errors.location && (
                          <p className="text-red-400 text-sm mt-1">{errors.location}</p>
                        )}
                      </div>
                      

                      <div>
                        <label className="block text-gray-300 mb-2">Description *</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.description ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                          rows={4}
                        ></textarea>
                        {errors.description && (
                          <p className="text-red-400 text-sm mt-1">{errors.description}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Email (optional)</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="isAnonymous"
                          checked={formData.isAnonymous}
                          onChange={handleChange}
                          className="form-checkbox h-5 w-5 text-purple-500 border-gray-300 rounded focus:ring-purple-400 focus:ring-offset-black"
                        />
                        <label className="ml-2 text-gray-300">Submit as anonymous</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <Loader2 className="animate-spin h-5 w-5" />}
                    {isSubmitting ? "Submitting..." : "Submit Report"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
