import Image from "next/image";

export default function CAT() {
  return (
    <section id="cat-framework" className="max-w-6xl mx-auto py-10 px-4">
      
      {/* Box padding reduced for a tighter look */}
      <div className="bg-white rounded-3xl py-8 px-4 md:px-8 text-center">
        
        {/* Header Section - Text size slightly reduced */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            The <span className="text-[#1A73E8]">CAT Framework</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg font-medium">
            Our Proven Approach to <span className="text-[#1A73E8]">Learning Excellence</span>
          </p>
        </div>

        {/* Framework Image - Max width restricted to 4xl for compactness */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[22/8]">
          <Image
            src="/cat-image.svg"
            alt="CAT Framework"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>

    </section>
  );
}