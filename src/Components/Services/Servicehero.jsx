import React from "react";

const Service = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#f5f5f5] py-16 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-start gap-10">
            {/* Left text */}
            <div className="w-full md:w-1/3 text-left">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Start Your Digital Wealth Journey <br />
                With 24K Pure Gold
              </p>
            </div>

            {/* Right heading */}
            <div className="w-full md:w-2/3 text-left space-y-4">
              <h2 className="text-black text-2xl md:text-4xl font-medium leading-snug">
                <span>Save in 99.5% pure digital gold, powered</span>
                <br />
                <span>by MMTC-PAMP—smart, secure, and</span>
                <br />
                <span>built for your family’s long-term and financial</span>
                <br />
                <span>growth.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
