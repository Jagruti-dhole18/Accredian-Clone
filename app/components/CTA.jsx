import { FaHeadphonesAlt } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="relative overflow-hidden bg-[#1A73E8] text-white rounded-2xl px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
        </div>

        <div className="relative z-10 flex items-center gap-6 text-left">
          <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center min-w-[80px] h-[80px]">
            <FaHeadphonesAlt className="text-[#1A73E8] text-4xl" />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-lg font-medium opacity-90 mt-2">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        <button className="relative z-10 bg-white text-[#1A73E8] px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-blue-50 transition-all shadow-md">
          Contact Us <MdChevronRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
}