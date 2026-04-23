import {
  FaLightbulb,
  FaBrain,
  FaUserTie,
  FaChartBar,
  FaCogs,
  FaGlobe,
  FaUniversity,
} from "react-icons/fa";

export default function Domains() {
  const domains = [
    { name: "Product & Innovation Hub", icon: <FaLightbulb /> },
    { name: "Gen-AI Mastery", icon: <FaBrain /> },
    { name: "Leadership Elevation", icon: <FaUserTie /> },
    { name: "Tech & Data Insights", icon: <FaChartBar /> },
    { name: "Operations Excellence", icon: <FaCogs /> },
    { name: "Digital Enterprise", icon: <FaGlobe /> },
    { name: "Fintech Innovation Lab", icon: <FaUniversity /> },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 text-center">
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
          Our <span className="text-[#1A73E8]">Domain Expertise</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg font-medium">
          <span className="text-[#1A73E8]">Specialized Programs</span> Designed to Fuel Innovation
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto">
        {domains.map((d, i) => (
          <div
            key={i}
            className={`bg-white border border-gray-100 rounded-2xl py-4 px-6 flex items-center justify-start shadow-sm hover:shadow-md transition-all duration-300 group min-w-[280px] lg:min-w-0 lg:w-[calc(33.33%-1.5rem)] lg:flex-col lg:items-center lg:justify-center lg:py-8 lg:min-h-[160px] ${
              i === 6 ? "lg:flex" : ""
            }`}
          >
            <div className="text-[#1A73E8] text-2xl lg:text-4xl mr-4 lg:mr-0 lg:mb-4 transition-transform duration-300 group-hover:scale-110 shrink-0">
              {d.icon}
            </div>

            <p className="text-[#1A1A1A] font-bold text-sm lg:text-xl tracking-tight leading-snug text-left lg:text-center">
              {d.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}