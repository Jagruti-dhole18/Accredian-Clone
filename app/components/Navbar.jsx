"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Stats", id: "stats" },
    { name: "Clients", id: "clients" },
    { name: "Accredian Edge", id: "edge" },
    { name: "CAT", id: "cat-framework" }, 
    { name: "How It Works", id: "how-it-works" },
    { name: "FAQs", id: "faqs" },
    { name: "Testimonials", id: "testimonials" },
  ];

  // Active link detect karne ke liye logic (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        
        {/* LOGO */}
        <div className="flex items-center shrink-0">
          <Image 
            src="/logo.webp" 
            alt="Accredian Logo" 
            width={160} 
            height={40} 
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.id}`}
              className={`relative h-full flex items-center text-sm xl:text-base font-semibold transition-all duration-300 group ${
                activeLink === link.id ? "text-[#1A73E8]" : "text-[#4A4A4A] hover:text-[#1A73E8]"
              }`}
            >
              {link.name}
              
              {/* Blue Underline - Bottom sticky like the image */}
              <span className={`absolute bottom-0 left-0 h-[3px] bg-[#1A73E8] transition-all duration-300 ${
                activeLink === link.id ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl text-[#1A1A1A] p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
        open ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
      }`}>
        <div className="flex flex-col px-6 space-y-5">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.id}`}
              onClick={() => {
                setOpen(false);
                setActiveLink(link.id);
              }}
              className={`text-lg font-bold transition-colors ${
                activeLink === link.id ? "text-[#1A73E8]" : "text-[#1A1A1A]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}