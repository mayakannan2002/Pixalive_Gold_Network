import React from "react";

const Service = () => {
  return (
    <div className="bg-[#f5f5f5] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        {/* Left text */}
        <div className="w-full md:w-1/3">
          <p className="text-gray-600 text-base leading-relaxed md:ml-4 lg:ml-10">
            Start Your Digital Wealth Journey <br />
            With 24K Pure Gold
          </p>
        </div>

        {/* Right heading */}
        <div className="w-full md:w-2/3 space-y-3 md:space-y-4">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
            Save in 99.5% pure digital gold, powered
            <br />
            by MMTC-PAMP — smart, secure, and
            <br />
            built for your family’s long-term financial
            <br />
            growth.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
