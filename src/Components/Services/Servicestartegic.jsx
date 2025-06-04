// src/components/StrategicCollaboration.jsx
import React from 'react';
import Authentication from './Authentication';

const StrategicCollaboration = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        {/* Left Text Block */}
        <div className="lg:col-span-3 ml-19">
          <h2 className="text-gray-500 font-medium text-sm leading-relaxed">
            Pixalive Gold Network’s <br />
            Strategic Collaboration <br />
            With MMTC-PAMP
          </h2>
        </div>

        {/* Right Text + Authentication Component */}
        <div className="lg:col-span-9 space-y-10 ml-30">
          <h3 className="text-black text-2xl md:text-4xl font-medium leading-snug">
            Pixalive Gold Network’s partnership with<br />
            MMTC-PAMP ensures trusted, secure, and<br />
            innovative gold investment through<br />
            unmatched purity and expertise.
          </h3>

          {/* Imported Authentication Component */}
        </div>
      </div>
    </section>
  );
};

export default StrategicCollaboration;
