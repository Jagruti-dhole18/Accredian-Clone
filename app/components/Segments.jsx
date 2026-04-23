"use client";

import { useState } from "react";
import Image from "next/image";

export default function Segments() {
  const [index, setIndex] = useState(0);

  const segments = [
    { title: "Program Specific", desc: "Certificate, Executive, PG", img: "/segments/project.webp" },
    { title: "Industry Specific", desc: "IT, Healthcare, Finance", img: "/segments/industry.webp" },
    { title: "Topic Specific", desc: "ML, Design, Analytics", img: "/segments/topic.webp" },
    { title: "Level Specific", desc: "Senior, Mid-Career, Freshers", img: "/segments/level.webp" },
  ];

  return (
    <section id="segments" className="max-w-7xl mx-auto py-16 md:py-20 px-4 text-center">
      <div className="mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
          Tailored <span className="text-[#1A73E8]">Course Segmentation</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={s.img} 
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col justify-center min-h-[140px]">
              <h3 className="text-[#1A73E8] font-bold text-xl md:text-2xl tracking-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm md:text-base mt-3 font-medium leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}