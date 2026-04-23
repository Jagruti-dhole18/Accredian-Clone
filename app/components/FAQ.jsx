"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import LeadForm from "./LeadForm";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQ, setOpenQ] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    {
      category: "About the Course",
      questions: [
        {
          q: "What types of corporate training programs does Accredian offer?",
          a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
        },
        {
          q: "What domain specializations are available?",
          a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
        },
      ],
    },
    {
      category: "About the Delivery",
      questions: [
        {
          q: "Can the courses be customized for specific industries or teams?",
          a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus.",
        },
        {
          q: "Who are the instructors for these programs?",
          a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts.",
        },
      ],
    },
    {
      category: "Miscellaneous",
      questions: [
        {
          q: "What is the ideal team size for corporate training?",
          a: "Our programs are flexible and can cater to teams of any size, from small groups to large cohorts.",
        },
      ],
    },
  ];

  if (!mounted) return null;

  return (
    <section id="faqs" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-12">
        Frequently Asked <span className="text-[#1A73E8]">Questions</span>
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="w-full relative lg:block">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-4 items-center no-scrollbar">
            {data.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCategory(i);
                  setOpenQ(null);
                }}
                className={`whitespace-nowrap lg:whitespace-normal text-center font-bold py-3 px-6 lg:py-4 rounded-xl transition-all duration-300 border-2 flex-shrink-0 lg:w-full ${
                  activeCategory === i
                    ? "bg-white text-[#1A73E8] border-transparent shadow-lg"
                    : "bg-transparent text-gray-500 border-gray-300"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:col-span-2 space-y-4 lg:space-y-6">
          {data[activeCategory].questions.map((item, i) => (
            <div key={i} className="border-b border-gray-200 pb-2 lg:pb-4">
              <button
                onClick={() => setOpenQ(openQ === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4"
              >
                <span className={`text-base lg:text-lg font-bold transition-colors ${openQ === i ? "text-[#1A73E8]" : "text-[#1A1A1A]"}`}>
                  {item.q}
                </span>
                <FaChevronDown className={`text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${openQ === i ? "rotate-180 text-[#1A73E8]" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openQ === i ? "max-h-60 opacity-100 mt-2 pb-4" : "max-h-0 opacity-0"}`}>
                <p className="text-gray-600 leading-relaxed font-medium text-sm lg:text-base">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12 lg:mt-20">
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-[#1A73E8] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95"
        >
          Enquire Now
        </button>
      </div>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}