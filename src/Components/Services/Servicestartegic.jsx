import React, { useState } from 'react';
import office from "./../../assets/Service/office.png";

const StrategicCollaboration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: 'Authenticity and Quality',
      content:
        'All digital gold investments on the Pixalive platform are backed by MMTC-PAMP’s 24K, 999.9 pure gold, ensuring the highest standards of quality and authenticity.',
    },
    {
      title: 'Secure Storage',
      content: '',
    },
    {
      title: 'Seamless Transactions',
      content: '',
    },
    {
      title: 'Accessibility',
      content: '',
    },
  ];

  return (
<<<<<<< HEAD
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Text Block */}
        <div className="lg:w-1/3">
          <h2 className="text-gray-500 font-medium text-[15px] leading-relaxed">
=======
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        {/* Left Text Block */}
        <div className="lg:col-span-3 ml-19">
          <h2 className="text-gray-500 font-medium text-sm leading-relaxed">
>>>>>>> Mayakannan
            Pixalive Gold Network’s <br />
            Strategic Collaboration <br />
            With MMTC-PAMP
          </h2>
        </div>

        {/* Right Block */}
        <div className="lg:w-2/3 space-y-10">
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
            Pixalive Gold Network’s partnership with MMTC-PAMP ensures trusted, secure, and
            innovative gold investment through unmatched purity and expertise.
          </h3>

          {/* White Box with Image + Accordion */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden grid md:grid-cols-2">
            {/* Left Image */}
            <div className="w-full h-[420px]">
              <img
                src={office}
                alt="Handshake"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accordion Content */}
            <div className="p-8 space-y-5">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border-b pb-4 cursor-pointer"
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-2xl font-bold text-black">{`0${index + 1}`}</p>
                      <h4 className="font-semibold text-black mt-1">{item.title}</h4>
                    </div>
                    <span className="text-2xl text-gray-600">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  {activeIndex === index && item.content && (
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed pr-4">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCollaboration;
