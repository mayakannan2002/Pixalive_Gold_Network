import React, { useState } from 'react';
import Authentication from './../Services/Authentication'

const StrategicCollaboration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: 'Authenticity and Quality',
      content:
        'All digital gold investments on the Pixalive platform are backed by MMTC-PAMP’s 24K, 999.9 pure gold, ensuring the highest standards of quality and authenticity.',
    },
    {
      title: 'Secure Storage',
      content:
        'Your gold is stored in 100% secure and insured vaults by MMTC-PAMP, ensuring complete peace of mind.',
    },
    {
      title: 'Seamless Transactions',
      content:
        'Buy, sell, or convert your gold digitally anytime through the Pixalive platform with a smooth and transparent process.',
    },
    {
      title: 'Accessibility',
      content:
        'Invest in gold starting from as low as ₹1, making it accessible for everyone across the country.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Text Block */}
        <div className="lg:w-1/3">
          <h2 className="text-gray-500 font-medium text-[15px] leading-relaxed">
            Pixalive Gold Network’s <br />
            Strategic Collaboration <br />
            With MMTC-PAMP
          </h2>
        </div>

        {/* Right Block */}
        <div className="lg:w-2/3 space-y-10">
          <h3 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
            Pixalive Gold Network’s partnership with MMTC-PAMP ensures trusted, secure, and
            innovative gold investment through unmatched purity and expertise.
          </h3>

          {/* Accordion */}
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 bg-white cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="font-semibold text-lg text-black">{item.title}</div>
                {activeIndex === index && (
                  <div className="mt-2 text-gray-600 text-sm">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCollaboration;
