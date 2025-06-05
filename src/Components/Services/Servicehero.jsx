import React from "react";

const Service = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 max-w-[1280px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Side Title */}
        <div className="lg:w-1/3 pt-2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Start Your Digital Wealth Journey <br />
            With 24K Pure Gold
          </p>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-2/3 space-y-4">
          <p className="text-black text-2xl md:text-3xl font-medium leading-snug">
            <span>Save in 99.5% pure digital gold, powered</span>
            <br />
            <span>by MMTC-PAMP—smart, secure, and</span>
            <br />
            <span>built for your family’s long-term financial</span>
            <br />
            <span>growth.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Service;
