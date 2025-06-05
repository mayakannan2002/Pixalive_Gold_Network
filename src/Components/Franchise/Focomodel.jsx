import React from 'react';

const FranchiseAdvantage = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* FOCO Model Section */}
        <div className="bg-black text-white py-10 px-6 text-center min-h-[120px] flex items-center justify-center ">
          <div>
            <p className="text-md md:text-xl text-gray-400 uppercase tracking-widest mb-6">
              FOCO MODEL
            </p>
            <p className="text-lg md:text-2xl font-light text-gray-400 max-w-4xl mx-auto leading-relaxed">
              <span className="text-3xl mr-1 align-top">“</span>
              We follow a <span className="font-semibold text-white">Franchise-Owned, Company-Operated (FOCO) model</span>, where you own the franchise, and Pixalive runs the operations. You earn a share of the revenue while we ensure quality and smooth service.
              <span className="text-3xl ml-1 align-top">”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseAdvantage;
