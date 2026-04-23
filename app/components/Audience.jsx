"use client";

import Image from "next/image";
import { 
  FaLaptopCode, 
  FaCheck, 
  FaTimes, 
  FaGraduationCap, 
  FaBriefcase 
} from "react-icons/fa";

export default function Audience() {
  const items = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <div className="relative">
          <FaLaptopCode className="text-4xl md:text-5xl" />
          <div className="absolute top-1 left-2 bg-white rounded-sm leading-none flex items-center justify-center p-[1px]">
            <FaCheck className="text-[#1A73E8] text-[8px] md:text-[10px]" />
          </div>
        </div>
      ),
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <div className="relative">
          <FaLaptopCode className="text-4xl md:text-5xl" />
          <div className="absolute top-1 left-2 bg-white rounded-sm leading-none flex items-center justify-center p-[1px]">
            <FaTimes className="text-[#1A73E8] text-[8px] md:text-[10px]" />
          </div>
        </div>
      ),
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: <FaGraduationCap className="text-4xl md:text-5xl" />,
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: <FaBriefcase className="text-4xl md:text-5xl" />,
    },
  ];

  return (
    <section className="w-full py-10 px-4 flex justify-center">
      <div className="bg-[#1A73E8] rounded-3xl p-8 md:p-16 text-white flex flex-col lg:grid lg:grid-cols-5 gap-12 lg:gap-8 relative overflow-hidden max-w-5xl w-full">
        
        <div className="lg:col-span-2 relative z-10 flex flex-col justify-between">
          <div>
            <p className="text-lg md:text-xl font-medium opacity-90">Who Should Join?</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
              Strategic Skill Enhancement
            </h2>
          </div>

          <div className="hidden lg:block lg:absolute lg:-bottom-20 lg:-left-10">
            <Image
              src="/peoples.png"
              alt="Professionals"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12 relative z-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <div className="mb-4 text-white">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl md:text-2xl">
                {item.title}
              </h3>

              <p className="text-base md:text-lg opacity-90 mt-2 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}