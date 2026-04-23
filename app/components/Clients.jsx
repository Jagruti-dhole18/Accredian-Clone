"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Clients = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logos = [
    { src: "/reliance.png", alt: "Reliance Industries" },
    { src: "/hcl.png", alt: "HCL" },
    { src: "/ibm.png", alt: "IBM" },
    { src: "/crif.png", alt: "CRIF" },
    { src: "/adp.svg", alt: "ADP" },
    { src: "/bayer.svg", alt: "Bayer" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  if (!mounted) return null;

  return (
    <section id="clients" className="max-w-7xl mx-auto py-16 md:py-20 px-4 text-center overflow-hidden">
      <div className="mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
          Our Proven <span className="text-[#1A73E8]">Partnerships</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-xl font-medium">
          Successful Collaborations With the <span className="text-[#1A73E8]">Industry’s Best</span>
        </p>
      </div>

      <div className="relative mt-10">
        <div className="flex lg:hidden overflow-hidden group">
          <div className="flex animate-scroll whitespace-nowrap items-center gap-12">
            {duplicatedLogos.map((logo, i) => (
              <div 
                key={i} 
                className="relative h-12 w-32 flex shrink-0 items-center justify-center"
              >
               <Image
  src={logo.src}
  alt={logo.alt}
  fill
  className="object-contain"
  sizes="(max-width: 768px) 112px, 160px"
/>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="relative h-16 w-40 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;