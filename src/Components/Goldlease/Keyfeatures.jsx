import React, { useState } from "react";

const features = [
  {
    id: 1,
    title: "Bank Guarantee",
    description:
      "All digital gold investments on the Pixalive platform are backed by MMTC-PAMP’s 24K, 9999 pure gold, ensuring the highest standards of quality and authenticity.",
  },
  {
    id: 2,
    title: "Flexible Lease Terms",
    description: "",
  },
  {
    id: 3,
    title: "Gold Price Appreciation",
    description: "",
  },
  {
    id: 4,
    title: "High-Security Storage",
    description: "",
  },
];

const KeyFeatures = () => {
  const [active, setActive] = useState(1);

  const toggleFeature = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-10 lg:px-24">
      <div className="max-w-[1280px] mx-auto">
        {/* Header section with left and right layout */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Left: Label */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 mb-2">Key Features</p>
          </div>

          {/* Right: Heading */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-semibold text-black leading-relaxed">
              Flexible Maturity Options — Upon completing the lease term, you can
              either take back your gold or extend the lease, giving you full
              control over your gold investment journey
            </h2>
          </div>
        </div>

        {/* Accordion list */}
        <div className=" bg-white rounded-md shadow-sm divide-y divide-gray-200">
          {features.map((feature) => (
            <div key={feature.id}>
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                onClick={() => toggleFeature(feature.id)}
              >
                <div>
                  <div className="text-xl font-bold text-black">
                    {String(feature.id).padStart(2, "0")}
                  </div>
                  <div className="text-md font-semibold text-black mt-1">
                    {feature.title}
                  </div>
                  {active === feature.id && feature.description && (
                    <p className="text-sm text-gray-600 mt-3 max-w-xl">
                      {feature.description}
                    </p>
                  )}
                </div>
                <div className="text-2xl text-gray-400">
                  {active === feature.id ? "−" : "+"}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
