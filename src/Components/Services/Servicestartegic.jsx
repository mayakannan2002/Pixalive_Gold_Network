import React from 'react';

const StrategicCollaboration = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1280px] mx-auto ml-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Text */}
        <div className="lg:col-span-3 text-left mt-2">
          <h2 className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
            Pixalive Gold Network’s <br />
            Strategic Collaboration <br />
            With MMTC-PAMP
          </h2>
        </div>

        {/* Right Text - Exactly 4 lines */}
        <div className="lg:col-span-9">
  <h2 className="text-[20px] sm:text-[32px] md:text-[36px] lg:text-[41px] font-medium leading-relaxed text-black max-w-5xl ml-2">
    Pixalive Gold Network’s partnership with <br />
    MMTC-PAMP ensures trusted, secure, and <br />
    innovative gold investment through <br />
    unmatched purity and expertise.
  </h2>
</div>

      </div>
    </section>
  );
};

export default StrategicCollaboration;
