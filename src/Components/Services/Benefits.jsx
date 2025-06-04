import React from "react";
import gold1 from "./../../assets/Service/b1.png";
import gold2 from "./../../assets/Service/b2.png";
import gold3 from "./../../assets/Service/b3.png";

const benefits = [
  {
    icon: gold3,
    title: "100% Gold-Backed Security",
    description: (
      <>
        Provides end-to-end gold <br />services including digital <br />investment,
        physical <br />redemption, loans, and jewelry<br /> purchases.
      </>
    ),
  },
  {
    icon: gold2,
    title: "One Network, Multiple Services",
    description: (
      <>
        Integrates gold into everyday life,<br />
        allowing users to redeem their gold <br />for groceries, pharmacy products,<br /> dining, salon services, and more.
      </>
    ),
  },
  {
    icon: gold1,
    title: "Smart, Flexible & Transparent Growth",
    description: (
      <>
        Ensures top-tier security with <br />trusted partners like MMTC-PAMP,<br />
        Brink’s, and blockchain-backed<br /> operations for transparency.
      </>
    ),
  },
];


const BenefitsSection = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 md:px-16 py-20">
      {/* OUTER FLEX to separate left heading and right content */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-1 mb-12">
        {/* LEFT HEADING */}
        <div className="md:w-[250px] ml-9 mt-4">
          <p className="text-sm text-gray-500 font-medium">
            Benefits Of The Pixalive Gold Network
          </p>
        </div>

        {/* RIGHT HEADING TEXT */}
        <div className="flex-1 ml-10">
          <h2 className="text-3xl md:text-5xl font-medium leading-snug text-black">
            Pixalive Gold Network offers premium <br/> exposure, priority support,
            and exclusive tools <br/>to boost your digital presence and growth
          </h2>
        </div>
      </div>

      {/* BENEFITS GRID */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-3  ">
        {benefits.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mx-auto mb-4"
            />
            <h3 className="font-semibold text-base md:text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
