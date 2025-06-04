


import React, { useState } from "react";

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

const FranchiseAdvantage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg">
      {/* Franchise Advantage Text Section */}
      <div className="py-20 px-4 md:px-10 lg:px-24">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Label */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 font-medium leading-snug">
              Franchise Advantage with <br /> Pixalive Gold Network
            </p>
          </div>

          {/* Right Intro Text */}
          <div className="md:w-3/4">
            <p className="text-3xl md:text-4xl text-black font-semibold leading-snug mb-12">
              Unlock exclusive growth potential with a <br />
              trusted gold-tech brand offering scalable <br />
              models, strong support, and future-ready <br />
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 md:px-20 pb-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8 bg-white p-6 md:p-10  shadow-sm">
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
                <span className="ml-2">
  {openIndex === index ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )}
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
    </section>
  );
};

export default FranchiseAdvantage;
