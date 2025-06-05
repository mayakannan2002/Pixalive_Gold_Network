import React from "react";

const GoldDotsSection = () => {
  return (
    <section className="  w-full px-4 md:px-8 lg:px-6 py-16 max-w-[1280px] mx-auto font-[Lufga]">
      {/* Small heading */}
      <p className="text-center text-gray-500 text-sm sm:text-base md:text-md font-medium tracking-wide mb-6">
        Gold Dots — Your Digital Wealth Currency
      </p>

      {/* Main heading */}
      <div className="max-w-8xl  mx-auto text-center ">
        <p  className="text-[#6D6D6D] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px]  font-lufga space-y-6 leading-tight "
          style={{ wordSpacing: window.innerWidth >= 1024 ? "1.20rem" : "normal" }}
          >
          Gold Dots are the core rewards unit in the Pixalive Network—<br />
          designed to bridge your social actions and commerce journey.
        </p>

        <p  className="text-[#6D6D6D] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px]  font-lufga  leading-tight "
        style={{ wordSpacing: window.innerWidth >= 1024 ? "0.70rem" : "normal" }}
        >
          Whether{" "}
          <span className=" text-[#000000] font-lufga">
            you're swiping, sharing, shopping, or building <br />
             your network, you're earning real value.
          </span>
          
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-black text-white text-sm sm:text-base md:text-md   font-medium px-4 py-2 hover:bg-gray-900 transition duration-300">
          Learn How →
        </button>
      </div>
    </section>
  );
};

export default GoldDotsSection;
