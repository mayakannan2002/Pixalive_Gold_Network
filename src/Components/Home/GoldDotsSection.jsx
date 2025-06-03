import React from "react";

const GoldDotsSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      {/* Small heading */}
      <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg font-medium tracking-wide mb-6">
        Gold Dots — Your Digital Wealth Currency
      </p>

      {/* Main heading */}
      <div className="max-w-7xl mx-auto text-center ">
        <p className="text-[#6D6D6D] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[43px] font-lufga leading-[1.4]">
          Gold Dots are the core rewards unit in the Pixalive Network — designed
          to bridge your social actions and commerce journey
        </p>

        <p className="text-[#6D6D6D] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[45px] font-normal leading-[1.4]">
          Whether{" "}
          <span className=" text-[#000000] font-lufga">
            you're swiping, sharing, shopping, or building your
            network, you're earning real value.
          </span>
          
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-black text-white text-sm sm:text-base md:text-lg font-medium px-6 py-3 hover:bg-gray-900 transition duration-300">
          Learn How →
        </button>
      </div>
    </section>
  );
};

export default GoldDotsSection;
