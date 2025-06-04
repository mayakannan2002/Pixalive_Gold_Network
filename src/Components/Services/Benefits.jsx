import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side Title */}
        <div className="lg:w-1/3">
          <h2 className="text-gray-500 font-medium text-lg leading-snug">
            Benefits Of The Pixalive <br />
            Gold Network
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-2/3">
          <h3 className="text-black text-2xl md:text-4xl font-medium leading-snug">
            Pixalive Gold Network offers premium exposure, priority support, and exclusive tools to boost your digital presence and growth and trech
          </h3>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div>
              <div className="text-4xl mb-4">🙌</div>
              <h4 className="font-semibold text-black mb-2">100% Gold-Backed Security</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provides end-to-end gold services including digital investment, physical redemption, loans, and jewelry purchases.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="text-4xl mb-4">🌼</div>
              <h4 className="font-semibold text-black mb-2">One Network, Multiple Services</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrates gold into everyday life, allowing users to redeem their gold for groceries, pharmacy products, dining, salon services, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="text-4xl mb-4">🛡️</div>
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
