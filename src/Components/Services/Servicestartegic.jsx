// src/components/StrategicCollaboration.jsx
import React, { useState } from 'react'; // ✅ Import useState
import Authentication from './Authentication';

const StrategicCollaboration = () => {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ Now it will work

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
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        {/* Left Text Block */}
        <div className="lg:col-span-3 ml-19">
          <h2 className="text-gray-500 font-medium text-sm leading-relaxed">
            Pixalive Gold Network’s <br />
            Strategic Collaboration <br />
            With MMTC-PAMP
          </h2>
        </div>

        {/* Right Text + Authentication Component */}
        <div className="lg:col-span-9 space-y-10 ml-30">
          <h3 className="text-black text-2xl md:text-4xl font-medium leading-snug">
            Pixalive Gold Network’s partnership with<br />
            MMTC-PAMP ensures trusted, secure, and<br />
            innovative gold investment through<br />
            unmatched purity and expertise.
          </h3>

          {/* You can conditionally render the accordion or Authentication */}
          <Authentication />

          {/* Optional Accordion UI */}
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
                >
                  {item.title}
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
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
