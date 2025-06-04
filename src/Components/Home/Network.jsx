import React from 'react';

const features = [
  {
    title: '1. Comprehensive Gold Services:',
    description:
      'Offers a complete range of gold-related services, including digital gold investment, physical gold redemption, gold loans, and jewelry purchases.',
    image: '/images/gold-services.png',
  },
  {
    title: '2. Gold-Backed Ecosystem:',
    description:
      'Integrates gold into everyday life, allowing users to redeem their gold for groceries, pharmacy products, dining, salon services, and more.',
    image: '/images/gold-ecosystem.png',
  },
  {
    title: '3. Secure and Transparent:',
    description:
      'Ensures top-tier security with trusted partners like MMTC-PAMP, Brink’s, and blockchain-based operations for transparency.',
    image: '/images/secure-transparent.png',
  },
  {
    title: '4. Community-Centric Approach:',
    description:
      'Empowers local businesses and users through partnerships, franchise opportunities, and gold-backed rewards programs.',
    image: '/images/community-centric.png',
  },
  {
    title: '5. Profit Opportunities:',
    description:
      'Provides earning potential through franchise models, referral rewards, and gold leasing programs.',
    image: '/images/profit-opportunities.png',
  },
  {
    title: '6. Trusted Brand:',
    description:
      'Operated by Pixalive Group, a leader in integrating gold, technology, and community-driven services.',
    image: '/images/trusted-brand.png',
  },
];

const GoldFeatures = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-6 py-16 max-w-[1280px] mx-auto font-[Lufga]">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <h3 className="text-sm md:text-base text-[#4B4B4B] font-medium md:w-1/4">
          Why Choose Us
        </h3>
        <p className="text-[20px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[54px] text-black font-lufga md:w-3/4">
          Provides end-to-end gold services including digital investment, physical redemption, loans, and jewelry purchases.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="md:ml-[25%] w-full md:w-[75%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 items-start">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 object-contain mb-2"
              />
              <h4 className="text-[16px] md:text-[17px] lg:text-[22px] font-bold text-black">
                {feature.title}
              </h4>
              <p className="text-[14px] md:text-[15px] lg:text-[18px] text-[#666666] leading-[22px] md:leading-[24px] lg:leading-[30px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldFeatures;
