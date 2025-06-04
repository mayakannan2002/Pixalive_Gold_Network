import React from "react";
import MMTC from "./../../assets/secured/mmtc.png";
import LBMA from "./../../assets/secured/lbma.png";
import UPI from "./../../assets/secured/upi.png";
import PHONEPE from "./../../assets/secured/phonepe.png";
import NPCI from "./../../assets/secured/npci.png";
import CASHFREE from "./../../assets/secured/cashfree.png";
import STARTUP from "./../../assets/secured/startup.png";
import BIS from "./../../assets/secured/bis.png";

const companies = [
  { name: "MMTC Pamp", logo: MMTC, link: "https://www.mmtcpamp.com" },
  { name: "LBMA Good Delivery Refiner", logo: LBMA, link: "https://www.lbma.org.uk" },
  { name: "Unified Payments Interface", logo: UPI, link: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { name: "Phone Pe", logo: PHONEPE, link: "https://www.phonepe.com" },
  { name: "National Payments Corporation of India", logo: NPCI, link: "https://www.npci.org.in" },
  { name: "Cashfree Payments", logo: CASHFREE, link: "https://www.cashfree.com" },
  { name: "Startupindia", logo: STARTUP, link: "https://www.startupindia.gov.in" },
  { name: "Bureau of Indian Standards", logo: BIS, link: "https://www.bis.gov.in" },
];

export default function SecurityAndStats() {
  return (
    <section className="w-full max-w-[1380px] mx-auto px-4 py-12 md:py-20 font-[Lufga]">
      <h2 className="text-center text-black text-lg sm:text-2xl font-lufga mb-8 sm:mb-10">
        Secured By
      </h2>

      {/* Horizontal Scroll Row */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 whitespace-nowrap px-1 w-max">
          {companies.map((company, idx) => (
            <a
              key={idx}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#E6E6E6]  px-4 py-2 hover:shadow transition"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-7  w-8 sm:h-8 sm:w-8 object-contain"
              />
              <p className="text-xs sm:text-sm  p-8 text-[#666666] whitespace-nowrap">
                {company.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
