"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      logo: "/adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      logo: "/reliance.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
    {
      logo: "/ibm.png",
      text: "Exceptional delivery and industry-focused learning that truly added value to our teams. Their methodology is top-notch.",
    },
  ];

  const slides = [
    data.slice(0, 2),
    data.slice(2, 4),
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto py-16 md:py-20 px-4 text-center">
      <div className="mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
          Testimonials from <span className="text-[#1A73E8]">Our Partners</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl font-medium">
          What <span className="text-[#1A73E8]">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="lg:hidden">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] text-left flex flex-col items-center min-h-[300px] justify-center">
          <div className="relative h-16 w-32 mb-8">
            <Image
              src={data[index].logo}
              alt="Client Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[#1A1A1A] text-lg md:text-xl leading-relaxed font-medium text-center italic">
            "{data[index].text}"
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                index === i ? "bg-[#1A73E8] w-4 h-4" : "bg-gray-300 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-8 mt-12 transition-all duration-500">
          {slides[index === 0 || index === 1 ? 0 : 1].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] text-left min-h-[350px] flex flex-col justify-start"
            >
              <div className="relative h-16 w-32 mb-10">
                <Image
                  src={item.logo}
                  alt="Client Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-[#1A1A1A] text-xl leading-relaxed font-medium">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i === 0 ? 0 : 2)}
              className={`transition-all duration-300 rounded-full ${
                (index < 2 && i === 0) || (index >= 2 && i === 1) 
                ? "bg-[#1A73E8] w-6 h-2" 
                : "bg-gray-300 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}