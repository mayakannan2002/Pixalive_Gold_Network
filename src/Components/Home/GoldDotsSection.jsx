import React from "react";

const GoldDotsSection = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 font-[Lufga]     ">
      {/* Small heading */}
      <p className="text-center text-gray-500 text-[clamp(0.875rem,1.5vw,1.125rem)] font-medium tracking-wide mb-6">
        Gold Dots — Your Digital Wealth Currency
      </p>

      {/* Main heading */}
      <div className="text-center w-full">
        <p className="text-[#6D6D6D] text-[clamp(1.25rem,3vw,2.5rem)] leading-tight space-y-6 mb-1">
          Gold Dots are the core rewards unit in the Pixalive Network—<br />
          designed to bridge your social actions and commerce journey.
        </p>

        <p className="text-[#6D6D6D] text-[clamp(1.25rem,3vw,2.5rem)] leading-tight">
          Whether{" "}
          <span className="text-black font-medium">
            you're swiping, sharing, shopping, or building <br />
            your network, you're earning real value.
          </span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-black text-white text-[clamp(0.875rem,1.2vw,1rem)] font-medium px-6 py-3 hover:bg-gray-900 transition duration-300">
          Learn How →
        </button>
      </div>
    </section>
  );
};

export default GoldDotsSection;