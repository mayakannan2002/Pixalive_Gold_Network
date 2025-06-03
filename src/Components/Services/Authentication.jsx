// src/components/Authentication.jsx
import React, { useState } from 'react';
import office from './../../assets/Service/office.png';
import office1 from './../../assets/Service/office1.png';
import office2 from './../../assets/Service/office2.png';
import office3 from './../../assets/Service/office3.png';

const accordionData = [
  {
    title: 'Authenticity and Quality',
    content:
      'All digital gold investments on the Pixalive platform are backed by MMTC-PAMP’s 24K, 999.9 pure gold, ensuring the highest standards of quality and authenticity.',
    image: office,
  },
  {
    title: 'Secure Storage',
    content:
      'Your gold is stored in fully insured, secure vaults managed by MMTC-PAMP, ensuring peace of mind and physical safety for your digital assets.',
    image: office1,
  },
  {
    title: 'Seamless Transactions',
    content:
      'Experience quick and hassle-free transactions when buying or selling gold, with full transparency and instant updates.',
    image: office2,
  },
  {
    title: 'Accessibility',
    content:
      'Invest in digital gold anytime, anywhere, using the Pixalive platform—accessible on both web and mobile devices.',
    image: office3,
  },
];

const Authentication = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="border border-gray-300 rounded-2xl shadow-lg bg-white overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={accordionData[activeIndex].image}
            alt="Accordion Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Accordion Section */}
        <div className="p-8 md:p-10 space-y-6">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[26px] font-bold text-black leading-tight">{`0${index + 1}`}</p>
                  <h4 className="font-semibold text-black mt-1 text-base">{item.title}</h4>
                </div>
                <div className="text-2xl text-gray-600 leading-none">
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed pr-2">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
