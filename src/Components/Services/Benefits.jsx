import React from 'react';
import b1 from "./../../assets/Service/b3.png";
import b2 from "./../../assets/Service/b2.png";
import b3 from "./../../assets/Service/b1.png";

const BenefitsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side Title */}
        <div className="w-full md:w-1/3 pt-2">
          <h2 className="text-gray-500 font-medium text-lg leading-snug ">
            Benefits Of The Pixalive <br />
            Gold Network
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-2/3">
          <h3 className="text-black text-2xl md:text-4xl font-medium leading-snug">
            Pixalive Gold Network offerss premium exposure, priority support, and exclusive tools to boost your digital presence and growth
          </h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className=''>
              <img src={b1} alt="Gold-backed Security" className="mb-4 w-[42px] h-[42px] ml-6 " />
              <h4 className="font-semibold text-black mb-2 text-base ml-6">
                100% Gold-Backed Security
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed ml-8 mt-4">
                Provides end-to-end gold <br/>services including digital<br/> investment, physical <br/>redemption, loans, and jewelry<br/> purchases.
              </p>
            </div>

            {/* Card 2 */}
            <div className='ml-1'>
              <img src={b2} alt="Multiple Services" className="mb-4 w-[42px] h-[42px]" />
              <h4 className="font-semibold text-black mb-2 text-base">
                One Network, Multiple Services
                <br/>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed  mt-4">
                Integrates gold into everyday life<br/>, allowing users to redeem their gold <br/>for groceries, pharmacy products,<br/> dining, salon services, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div >
              <img src={b3} alt="Smart Growth" className="mb-4 w-[42px] h-[42px]" />
              <h4 className="font-semibold text-black mb-2 text-base">
                Smart, Flexible & Transparent Growth
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-9">
                Ensures top-tier security with<br/> trusted partners like MMTC-PAMP<br/>, Brink’s, and blockchain-backed<br/> operations for transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
