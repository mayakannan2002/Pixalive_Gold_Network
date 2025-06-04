import React, { useState } from 'react';

const faqItems = [
  {
    question: "Established Brand Presence",
    answer:
      "Pixalive Gold Network is India’s leading gold-centric ecosystem, backed by trust, innovation, and collaboration with industry leaders like MMTC-PAMP.",
  },
  {
    question: "Diverse Gold-Related Services",
    answer: "Offers a wide range of gold services including trading, storage, gifting, and more.",
  },
  {
    question: "Scalable Franchise Model",
    answer: "Designed to grow from local areas to national presence seamlessly.",
  },
  {
    question: "High-Growth Industry",
    answer: "Gold-tech is a booming sector with increasing consumer interest and demand.",
  },
  {
    question: "Lucrative Franchise Options",
    answer:
      "Choose from Zonal, State, District, or Area franchises, tailored to different investment levels, ensuring inclusivity for varied business scales.",
  },
  {
    question: "Robust Support System",
    answer: "Get end-to-end support in operations, marketing, and training from Pixalive.",
  },
  {
    question: "Digital Integration",
    answer: "Leverage cutting-edge digital tools for smooth operations and customer reach.",
  },
  {
    question: "Long-Term Stability",
    answer: "Benefit from a stable and reliable model focused on consistent growth.",
  },
];

const FranchiseFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f6f6f6] px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-6 md:p-10 rounded-xl shadow-sm">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-l-[3px] border-black pl-4 pr-2 mb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-[16px] font-semibold text-black leading-tight">
                {item.question}
              </h3>
              <span className="text-black text-lg">
                {openIndex === index ? "˄" : "˅"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-[14px] text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchiseFAQ;
