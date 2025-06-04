import React from "react";

const Service = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left text */}
        <div className="w-full md:w-1/3">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Start Your Digital Wealth Journey <br />
            With 24K Pure Gold
          </p>
        </div>

        {/* Right heading */}
        <div className="w-full md:w-2/3 space-y-4">
          <p className="text-black text-2xl md:text-4xl font-medium leading-snug">
            <span>Save in 99.5% pure digital gold, powered</span>
            <br />
            by MMTC-PAMP — smart, secure, and
            <br />
            <span>built for your family’s long-term id financial</span>
            <br />
            growth.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
