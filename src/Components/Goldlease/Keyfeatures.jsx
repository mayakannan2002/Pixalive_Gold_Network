import React from "react";
import img8 from "./../../assets/Goldlease/key1.png";
import img9 from "./../../assets/Goldlease/key2.png";
import img10 from "./../../assets/Goldlease/key3.png";
import img11 from "./../../assets/Goldlease/key4.png";

const features = [
  {
    id: "01",
    src: img8,
    title: "Bank Guarantee",
    description:
      "Enjoy complete peace of mind knowing your gold is backed by a trusted financial institution.",
  },
  {
    id: "02",
    src: img9,
    title: "Flexible Lease Terms",
    description:
      "Choose from a range of lease durations, including 6 months, 1 year, and longer.",
  },
  {
    id: "03",
    src: img10,
    title: "Gold Price Appreciation",
    description:
      "Your gold investment appreciates with the market, giving you added value along with lease returns.",
  },
  {
    id: "04",
    src: img11,
    title: "High-Security Storage",
    description:
      "Your gold is stored in state-of-the-art vaults, with 24/7 monitoring and guaranteed protection.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#140113] text-white py-16 px-4 md:px-18">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">KEY FEATURES</h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-sm md:text-base">
          Flexible Maturity Options — Upon Completing The Lease Term, You Can
          Either Take Back Your Gold Or Extend The Lease, Giving You Full
          Control Over Your Gold Investment Journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              tabIndex={0}
              className="group bg-white text-black rounded-xl p-6 shadow-sm h-[240px] flex flex-col justify-start items-start relative overflow-hidden focus:outline-none"
            >
              {/* Icon */}
              <div className="mb-2">
                <img src={feature.src} alt={feature.title} className="w-8 h-8" />
              </div>

              {/* Title + ID */}
              <div className="transition-all duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 translate-y-12 text-left">
                <div className="text-sm text-gray-400">{feature.id}</div>
                <h3 className="text-lg font-semibold leading-snug">{feature.title}</h3>
              </div>

              {/* Divider line */}
              <div className="w-full border-t border-gray-300 my-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"></div>

              {/* Description */}
              <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 text-left">
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
