"use client";

import React from 'react';
import { LuTrendingUp, LuMonitor, LuPlay } from "react-icons/lu";

const HowItWork = () => {
  const steps = [
    {
      id: 1,
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: <LuTrendingUp />,
    },
    {
      id: 2,
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: <LuMonitor />,
    },
    {
      id: 3,
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: <LuPlay />,
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-20 px-4 flex justify-center">
      <div className="max-w-5xl w-full text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            How We <span className="text-[#1A73E8]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg font-medium max-w-2xl mx-auto">
            A Structured Three-Step Approach to <span className="text-[#1A73E8]">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative group w-full ${
                index === 2 
                  ? "col-span-2 mx-auto max-w-[calc(50%-1rem)] lg:col-span-1 lg:max-w-none" 
                  : "col-span-1"
              }`}
            >
              <div className="bg-[#EBF3FF] border border-blue-50 rounded-[1.5rem] p-5 md:p-8 py-10 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-4 left-4 w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#1A73E8] flex items-center justify-center text-[#1A1A1A] font-bold text-[10px] md:text-xs bg-white shadow-sm">
                  {step.id}
                </div>

                <div className="bg-[#1A73E8] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-6 shadow-lg shadow-blue-200/50 transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>

                <h3 className="text-sm md:text-xl font-bold text-[#1A1A1A] mb-2 px-2">
                  {step.title}
                </h3>
                
                <p className="hidden lg:block text-gray-600 text-sm font-medium leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-1 h-16 bg-[#1A73E8] rounded-full z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;