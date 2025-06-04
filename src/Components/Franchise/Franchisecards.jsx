import React from 'react';
import Frame1 from './../../assets/Franchise/Frame1.png';
import Frame2 from './../../assets/Franchise/Frame2.png';
import Frame3 from './../../assets/Franchise/Frame3.png';
import Frame4 from './../../assets/Franchise/Frame4.png';

const franchiseOptions = [
  {
    title: "Zonal Franchise",
    description: "Become the leading partner for an entire region",
    investment: "₹ 10 Crores",
    scope: "Oversee multiple states within a designated zone.",
    responsibilities: "Oversee multiple states within a designated zone.",
    period: "10 years renewable.",
    icon: Frame1,
  },
  {
    title: "State Franchise",
    description: "Own the rights to operate and grow Pixalive Gold Network across an entire state",
    investment: "₹ 5 Crores",
    scope: "Operate and manage all district and area franchises within a state.",
    responsibilities: "Oversee state marketing, operations, and partner setup.",
    period: "10 years renewable.",
    icon: Frame2,
  },
  {
    title: "District Franchise",
    description: "Take charge of Pixalive Gold's operations in your district",
    investment: "₹ 50 Lakhs",
    scope: "Manage all area franchises within a district.",
    responsibilities: "Local offers, customer connection, and smooth daily operations.",
    period: "10 years renewable.",
    icon: Frame3,
  },
  {
    title: "Area Franchise",
    description: "The most accessible and local level of partnership",
    investment: "₹ 25 Lakhs",
    scope: "Handle local-level franchise activities.",
    responsibilities: "Local promotions, setup, and branding.",
    period: "10 years renewable.",
    icon: Frame4,
  },
];

export default function FranchiseSection() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-20">
      {/* Header: Our Franchise Type + Paragraph */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-14">
        {/* Left label */}
        <div className="md:w-1/4 flex-shrink-0">
          <p className="text-[12px] text-gray-500 font-medium tracking-wide leading-snug">
            Our Franchise Type
          </p>
        </div>

        {/* Right paragraph */}
        <div className="md:w-3/4">
          <p className="text-lg text-black font-normal leading-7">
            Whether you're an experienced entrepreneur <br />
            or a driven investor, the <span className="font-semibold">Pixalive Gold Network</span> <br />
            offers a golden gateway to success across <br />
            multiple regions in India.
          </p>
        </div>
      </div>

      {/* Franchise Cards */}
      <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto lg:grid lg:grid-cols-4 no-scrollbar">
        {franchiseOptions.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] max-w-xs lg:max-w-full bg-white rounded-xl shadow-sm flex flex-col p-6"
          >
            <img src={item.icon} alt={`${item.title} Icon`} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <p className="text-lg font-semibold text-black mb-2">
              {item.investment} <span className="text-gray-600 text-sm">/ Investment</span>
            </p>
            <button className="bg-black text-white text-sm py-2 px-4 rounded mb-4 hover:bg-gray-800 transition">
              Contact Us
            </button>
            <hr className="mb-4" />
            <div className="text-left text-sm text-gray-700 space-y-2">
              <p><span className="text-green-600">✓</span> <strong>Scope:</strong> {item.scope}</p>
              <p><span className="text-green-600">✓</span> <strong>Responsibilities:</strong> {item.responsibilities}</p>
              <p><span className="text-green-600">✓</span> <strong>Franchise Period:</strong> {item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
