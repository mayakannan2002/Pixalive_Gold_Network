import React from "react";

const GetStartedSection = () => {
  return (
    <section className="bg py-16 px-4">
      <div className="max-w-[1101px] mx-auto bg-[#eeeeee] p-10 text-center shadow-sm">
        {/* Red dot + subtitle */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
          <p className="text-gray-600 text-sm">Pixalive Gold Network</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Get Started Today
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          For more information or personalized advice, our dedicated team is ready to assist. <br />
          Let us help you secure your future with Pixalive Gold Lease.
        </p>

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default GetStartedSection;
