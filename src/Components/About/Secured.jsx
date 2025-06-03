import React from 'react';
import mmtcPampLogo from './../../assets/About/mmtc-pamp.png'; // Assuming you have these images
import lbmaMemberLogo from './../../assets/About/lbma-member.png'; // Assuming you have these images

const OurPartnershipSection = () => {
  return (
    <div className="bg-[#f6f6f6] text-black py-16 px-4 lg:px-20 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">

        {/* Top Section: "Our Partnership" label and Main Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24 mb-16 md:mb-24">
          {/* Left Column for "Our Partnership" label */}
          <div className="md:col-span-4 flex-shrink-0 mb-8 md:mb-0">
            <p className="text-sm ml-2 text-gray-400 whitespace-nowrap">Our Partnership</p>
          </div>

          {/* Right Column for Main Quote (spans the remaining 8 columns) */}
          <div className="md:col-span-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-snug">
              "We have partnered with MMTC-PAMP, India's
              most trusted refinery, to ensure that every
              gram of gold you own through Pixalive Gold is
              certified, pure, and insured. Your investment is
              real, secure, and future-ready."
            </h1>
          </div>
        </div>

        {/* Bottom Section: Two Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-16">
          {/* Empty column to push cards to the right, matching the quote alignment */}
          <div className="md:col-span-4 hidden md:block">
            {/* This div is intentionally empty on medium screens and up to create the blank space */}
          </div>

          {/* Container for the two cards, spanning the remaining 8 columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            {/* Card 1: MMTC-PAMP */}
            {/* Re-added bg-white, shadow-sm, and centering classes */}
            <div className="bg-white p-6 md:p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <img
                src={mmtcPampLogo}
                alt="MMTC-PAMP Logo"
                className="mb-8 w-48 h-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-black mb-2">LBMA Good Delivery Refiner</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MMTC-PAMP is India's only LBMA-accredited
                gold and silver refinery, combining Swiss
                precision and Indian expertise to set global
                standards in precious metals.
              </p>
            </div>

            {/* Card 2: LBMA Member */}
            {/* Re-added bg-white, shadow-sm, and centering classes */}
            <div className="bg-white p-6 md:p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <img
                src={lbmaMemberLogo}
                alt="LBMA Member Logo"
                className="mb-8 w-48 h-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-black mb-2">LBMA Good Delivery Refiner</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MMTC-PAMP is India's only LBMA-accredited
                gold and silver refinery, combining Swiss
                precision and Indian expertise to set global
                standards in precious metals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnershipSection;