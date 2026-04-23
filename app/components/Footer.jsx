"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import LeadForm from "./LeadForm";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer className="bg-white py-12 px-6 md:px-20 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
          <div className="flex flex-col gap-6">
            <Image 
              src="/logo.webp" 
              alt="Accredian Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto object-contain" 
            />
            
            <div className="flex gap-5 text-gray-500 text-2xl">
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><FaLinkedin /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><FaYoutube /></a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#1A73E8] hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-xl transition-all shadow-md active:scale-95"
            >
              Enquire Now
            </button>
            <p className="text-sm font-semibold text-gray-500 mt-3">Speak with our Advisor</p>
          </div>
        </div>

        <hr className="border-gray-100 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-5">Accredian</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#1A73E8] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#1A73E8] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#1A73E8] transition-colors">Why Accredian</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-5">Contact Us</h3>
            <div className="space-y-4 text-gray-600 font-medium">
              <p>Email us: <a href="mailto:enterprise@accredian.com" className="text-[#1A73E8] font-bold">enterprise@accredian.com</a></p>
              <p className="leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, <br />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 mb-8" />

        <div className="text-center text-gray-400 text-sm font-medium">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>

      <LeadForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </footer>
  );
};

export default Footer;