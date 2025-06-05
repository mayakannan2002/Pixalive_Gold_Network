import React from "react";
import { Phone, ShieldCheck, Star, Quote } from "lucide-react";

const PixaliveTestimonialSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-16 px-6 text-black">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <p className="text-gray-500 text-sm mb-2">Loved by the People Who Work Here</p>
        <h2 className="text-4xl font-semibold max-w-4xl leading-snug mb-12">
          Joining Pixalive Gold Network has been a game-changer for my business.
          The support, visibility, and growth opportunities I received are unmatched.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col justify-between min-h-[250px]">
              <p className="text-sm mb-6">
                "A seamless and secure way to invest in gold!" I’ve always wanted to invest in gold,
                but Pixalive Gold Network made it easy and trustworthy.
              </p>
              <div className="border-t pt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/avatar.png" alt="Priya R" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm">Priya R</p>
                    <p className="text-gray-500 text-sm">Chennai</p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500">
                  <span className="mr-1 text-sm">4</span>
                  <Star fill="currentColor" size={16} />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-3">
              <ShieldCheck size={18} className="text-gray-800" />
              <span className="text-sm font-medium">100% Sale and Secure</span>
            </div>
          </div>

          {/* Center Column (Black Card) */}
          <div className="bg-black text-white p-6 rounded-md relative overflow-hidden min-h-[250px] flex flex-col justify-between">
            <div>
              <Quote size={32} className="mb-4" />
              <p className="text-sm leading-relaxed">
                "Pixalive feels less like an office and more like a creative playground. As a freelance
                designer, I’ve finally found a space that keeps me focused and inspired."
              </p>
            </div>
            <div className="border-t border-gray-700 pt-3 flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <img src="/avatar.png" alt="Priya R" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm">Priya R</p>
                  <p className="text-gray-400 text-sm">Chennai</p>
                </div>
              </div>
              <div className="flex items-center text-yellow-500">
                <span className="mr-1 text-sm">4</span>
                <Star fill="currentColor" size={16} />
              </div>
            </div>
            {/* Grid lines (optional visual effect) */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-3">
              <Phone size={18} className="text-gray-800" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col justify-between min-h-[180px]">
              <p className="text-sm mb-6">
                "A seamless and secure way to invest in gold!" I’ve always wanted to invest in gold,
                but Pixalive Gold Network made it easy and trustworthy.
              </p>
              <div className="border-t pt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/avatar.png" alt="Priya R" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm">Priya R</p>
                    <p className="text-gray-500 text-sm">Chennai</p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500">
                  <span className="mr-1 text-sm">4</span>
                  <Star fill="currentColor" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixaliveTestimonialSection;
