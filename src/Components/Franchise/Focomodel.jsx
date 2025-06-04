import React from 'react';

const FranchiseAdvantage = () => {
  return (
    <section className="w-full">
      {/* FOCO Model Section */}
      <div className="bg-black text-white py-10 px-6 text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">FOCO MODEL</p>
        <p className="text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
          <span className="text-xl mr-1">“</span>
          We follow a <span className="font-semibold">Franchise-Owned, Company-Operated (FOCO) model</span>, where you own the franchise, and Pixalive runs the operations. You earn a share of the revenue while we ensure quality and smooth service.
          <span className="text-xl ml-1">”</span>
        </p>
      </div>

      {/* Franchise Advantage Section */}
      <div className="bg-[#f9f9f9] px-6 md:px-20 py-16 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
          {/* Left Text Label */}
          <div className="md:w-1/4 flex-shrink-0">
            <p className="text-[12px] text-gray-500 font-medium leading-snug">
              Franchise Advantage with <br /> Pixalive Gold Network
            </p>
          </div>

          {/* Right Paragraph */}
          <div className="md:w-3/4">
            <p className="text-lg text-black font-normal leading-7">
              Unlock exclusive growth potential with a <br />
              trusted gold-tech brand offering scalable <br />
              models, strong support, and future-ready <br />
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseAdvantage;
