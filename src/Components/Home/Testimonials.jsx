import React from "react";
import { Star, Quote, Phone, ShieldCheck } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-16 px-6 text-black">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-gray-500 text-sm mb-3">Loved by the People Who Work Here</p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mb-12">
          Joining Pixalive Gold Network has been a game-changer for my business.
          The support, visibility, and growth opportunities I received are unmatched.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="bg-white p-6 rounded-md shadow-sm flex flex-col justify-between min-h-[280px]">
            <p className="text-base mb-6">
              "A seamless and secure way to invest in gold!" I've always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.
            </p>
            <div className="border-t pt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/avatar.png"
                  alt="Priya R"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Priya R</p>
                  <p className="text-gray-500 text-sm">Chennai</p>
                </div>
              </div>
              <div className="flex items-center text-yellow-500">
                <span className="mr-1 font-medium">4</span>
                <Star fill="currentColor" size={16} />
              </div>
            </div>
          </div>

          {/* Center Highlighted Card */}
          <div className="bg-black text-white p-6 rounded-md grid place-content-between min-h-[280px] relative overflow-hidden">
            <div>
              <Quote size={36} className="mb-4" />
              <p className="text-base leading-relaxed">
                "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired."
              </p>
            </div>
            <div className="border-t border-gray-700 pt-4 flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <img
                  src="/avatar.png"
                  alt="Priya R"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Priya R</p>
                  <p className="text-gray-400 text-sm">Chennai</p>
                </div>
              </div>
              <div className="flex items-center text-yellow-500">
                <span className="mr-1 font-medium">4</span>
                <Star fill="currentColor" size={16} />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-white flex items-center gap-3 p-4 rounded-md shadow-sm">
              <Phone size={20} />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col justify-between min-h-[180px]">
              <p className="text-base mb-6">
                "A seamless and secure way to invest in gold!" I've always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.
              </p>
              <div className="border-t pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/avatar.png"
                    alt="Priya R"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">Priya R</p>
                    <p className="text-gray-500 text-sm">Chennai</p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500">
                  <span className="mr-1 font-medium">4</span>
                  <Star fill="currentColor" size={16} />
                </div>
              </div>
            </div>

            <div className="bg-white flex items-center gap-3 p-4 rounded-md shadow-sm">
              <ShieldCheck size={20} />
              <p className="text-sm font-medium">100% Safe and Secure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
