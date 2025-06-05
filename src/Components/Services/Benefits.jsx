import React from 'react';
import logo1 from "./../../assets/Service/a1.png";
import logo2 from "./../../assets/Service/a2.png";
import logo3 from "./../../assets/Service/a3.png";

const BenefitsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 max-w-[1280px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side Title */}
        <div className="lg:w-1/3 pt-2">
          <h2 className="text-gray-500 font-medium text-lg leading-snug ">
            Benefits Of The Pixalive <br />
            Gold Network
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-2/3">
          <h3 className="text-black text-2xl md:text-4xl font-medium leading-snug">
            Pixalive Gold Network offers premium exposure, priority support, and exclusive tools to boost your digital presence and growth
          </h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div>
              <img src={logo1} alt="100% Gold-Backed Security" className="w-16 h-16 mb-4" />
              <h4 className="font-semibold text-black mb-2">100% Gold-Backed Security</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provides end-to-end gold services including digital investment, physical redemption, loans, and jewelry purchases.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <img src={logo2} alt="One Network, Multiple Services" className="w-16 h-16 mb-4" />
              <h4 className="font-semibold text-black mb-2">One Network, Multiple Services</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrates gold into everyday life, allowing users to redeem their gold for groceries, pharmacy products, dining, salon services, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <img src={logo3} alt="Smart, Flexible & Transparent Growth" className="w-16 h-16 mb-4" />
              <h4 className="font-semibold text-black mb-2">Smart, Flexible & Transparent Growth</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensures top-tier security with trusted partners like MMTC-PAMP, Brink’s, and blockchain-backed operations for transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
