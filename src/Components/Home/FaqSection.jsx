import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Frame from "./../../assets/frame.png";

const faqData = [
  {
    number: "01",
    title: "Integrated E-commerce Experience",
    content: {
      paragraph:
        "This integration simplifies the shopping experience, allowing users to transact within the same ecosystem where they engage socially.",
      points: [
        "Shop for a variety of products and services",
        "Utilize Gold Dots for purchases",
        "Access exclusive deals and offers",
      ],
    },
  },
  {
    number: "02",
    title: "Build and Benefit from Your Network",
    content: {
      paragraph:
        "Build connections and earn rewards through active engagement within your personal and extended network.",
      points: [
        "Expand your social and professional network",
        "Earn incentives from referrals",
        "Grow organically with trust-based relationships",
      ],
    },
  },
  {
    number: "03",
    title: "Secure and Trustworthy Platform",
    content: {
      paragraph:
        "Your data and transactions are protected with top-grade security, ensuring peace of mind while you shop or engage.",
      points: [
        "Robust encryption protocols",
        "Secure payment gateways",
        "Verified seller networks",
      ],
    },
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={Frame}
              alt="Shopping"
              className="w-full max-w-[500px] h-auto sm:h-[680px] md:h-[760px] lg:h-[760px] xs:h-[600px] custom-md-img-height"
            />
          </div>

          {/* Right FAQ Content */}
          <div className="flex flex-col w-full">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="py-6 border-b border-gray-200 last:border-b-1"
              >
                <div className="flex flex-wrap justify-between items-start w-full gap-4">
                  {/* Number & Title */}
                  <div className="flex-1 min-w-[250px]">
                    <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[50px] font-bold text-black leading-none custom-md-number">
                      {item.number}
                    </h2>
                    <h3 className="text-[15px] md:text-[16px] lg:text-[22px] font-bold text-black mt-3 md:mt-4 lg:mt-6 custom-md-title">
                      {item.title}
                    </h3>

                    {/* Expandable Content */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === index ? "max-h-[1000px] mt-4" : "max-h-0"
                      }`}
                    >
                      <div className="text-[#6D6D6D] text-[14px] md:text-[15px] lg:text-[18px] leading-relaxed space-y-3">
                        <p>{item.content.paragraph}</p>
                        <ul className="list-disc list-inside text-black space-y-4 pt-3">
                          {item.content.points.map((point, i) => (
                            <li
                              key={i}
                              className={i < 2 ? "custom-md-point" : ""}
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleIndex(index)}
                    aria-expanded={openIndex === index}
                    className="text-black border border-gray-400 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200 ml-auto self-start"
                  >
                    {openIndex === index ? (
                      <Minus size={20} strokeWidth={2} />
                    ) : (
                      <Plus size={20} strokeWidth={2} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
