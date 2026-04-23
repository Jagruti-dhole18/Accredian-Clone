"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function LeadForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        alert("Form submitted successfully!");
        onClose();
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex max-w-5xl w-full overflow-hidden relative">
        <div className="hidden md:block w-1/2 relative min-h-[600px]">
          <Image
            src="/business.webp"
            alt="Lead Generation"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
          >
            <IoClose size={28} />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">
            Enquire Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              type="text"
              name="name"
              placeholder="Enter Name"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none transition-all"
              onChange={handleChange}
            />
            
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none transition-all"
              onChange={handleChange}
            />

            <div className="flex border-b border-gray-300 py-2 items-center gap-2">
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Image src="https://flagcdn.com/in.svg" width={20} height={15} alt="IN" />
                +91
              </span>
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full outline-none"
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none transition-all"
              onChange={handleChange}
            />

            <select 
              name="domain"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none bg-white text-gray-500"
              onChange={handleChange}
            >
              <option value="">Select Domain</option>
              <option value="tech">Tech</option>
              <option value="business">Business</option>
            </select>

            <input
              type="number"
              name="candidates"
              placeholder="Enter No. of candidates"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none transition-all"
              onChange={handleChange}
            />

            <select 
              required
              name="mode"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none bg-white text-gray-500"
              onChange={handleChange}
            >
              <option value="">Select Mode of Delivery *</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border-b border-gray-300 py-2 focus:border-[#1A73E8] outline-none transition-all"
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A73E8] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95 disabled:bg-gray-400 mt-4"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}