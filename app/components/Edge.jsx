"use client";
import Image from "next/image";

export default function Edge() {
  return (
    <section id="edge" className="max-w-7xl mx-auto py-12 md:py-20 px-4">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">The <span className="text-[#1A73E8]">Accredian Edge</span></h2>
        <p className="text-gray-600 mt-4 text-base md:text-xl font-medium">Key Aspects of <span className="text-[#1A73E8]">Our Strategic Training</span></p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full aspect-square md:hidden">
          <Image src="/accredian-edge-mobile.svg" alt="Edge Mobile" fill priority className="object-contain" />
        </div>
        <div className="relative hidden md:block w-full max-w-5xl aspect-[21/9]">
          <Image src="/accredian-edge.svg" alt="Edge Desktop" fill priority className="object-contain" />
        </div>
      </div>
    </section>
  );
}