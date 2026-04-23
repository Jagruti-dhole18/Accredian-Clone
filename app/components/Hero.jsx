"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import LeadForm from "./LeadForm";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 pt-6 md:pt-10">
      <div className="bg-[#EBF3FF] rounded-3xl px-6 md:px-12 pt-10 md:pt-16 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center overflow-hidden">
        
        <div className="pb-10 md:pb-16 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1A1A1A]">
            Next-Gen <span className="text-[#1A73E8]">Expertise</span>
            <br />
            For Your <span className="text-[#1A73E8]">Enterprise</span>
          </h1>

          <p className="text-[#1A1A1A] mt-6 text-lg md:text-xl opacity-90 max-w-md font-medium">
            Cultivate high-performance teams through expert learning.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 mt-8 text-[#1A1A1A] font-semibold text-sm md:text-base">
            {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-green-600 text-xl" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsFormOpen(true)}
            className="mt-10 bg-[#1A73E8] hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-md font-bold transition-all shadow-md active:scale-95"
          >
            Enquire Now
          </button>
        </div>

        <div className="relative w-full flex items-end justify-center md:justify-end">
          <Image
            src="/hero.webp" 
            alt="Business experts"
            width={600}
            height={500}
            priority 
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain translate-y-2 md:translate-y-4"
          />
        </div>
      </div>

      <LeadForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
}