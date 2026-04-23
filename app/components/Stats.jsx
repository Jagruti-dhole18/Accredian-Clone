const Stats = () => {
  const stats = [
    { value: "10K+", label: "Professionals Trained For Exceptional Career Success" },
    { value: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
    { value: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
  ];

  return (
    <section id="stats" className="max-w-7xl mx-auto py-16 md:py-20 text-center px-4">
      <div className="mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
          Our <span className="text-[#1A73E8]">Track Record</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg font-medium">
          The Numbers Behind <span className="text-[#1A73E8]">Our Success</span>
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div 
            key={i} 
            className={`flex flex-col md:items-center px-4 md:px-10 py-8 md:py-6 border-b md:border-b-0 border-gray-200 last:border-b-0 ${
              i !== stats.length - 1 ? "md:border-r md:border-gray-300" : ""
            }`}
          >
            <div className="flex items-center md:flex-col gap-6 md:gap-0">
              <div className="bg-[#EBF3FF] text-[#1A73E8] w-28 md:w-auto px-6 md:px-8 py-3 rounded-full text-xl md:text-2xl font-bold md:mb-6 shrink-0">
                {s.value}
              </div>
              <p className="text-[#1A1A1A] text-left md:text-center text-base md:text-lg font-semibold leading-snug md:max-w-[260px]">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;