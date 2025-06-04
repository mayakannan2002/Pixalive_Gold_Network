import React from "react";
import { Star, Quote, Phone, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f6f6f6] px-6 py-20 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Top Headings */}
        <div className="mb-10">
          <p className="text-sm text-gray-500 mb-1">Loved by the People Who Work Here</p>
          <h2 className="text-2xl md:text-4xl font-medium leading-snug text-gray-900">
            Joining Pixalive Gold Network has been a game-changer for my business. The support, visibility, and growth opportunities I received are unmatched.
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 flex flex-col justify-between shadow-sm">
            <p className="text-sm text-gray-800 mb-4">
              "A seamless and secure way to invest in gold!" I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.
            </p>
            <hr className="my-3" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya R" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-sm font-medium">Priya R</p>
                  <p className="text-xs text-gray-500">Chennai</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-1">
                4 <Star size={14} fill="orange" stroke="orange" />
              </div>
            </div>
          </div>

          {/* Card 2 (Highlighted Center) */}
          <div className="bg-black text-white p-6 flex flex-col justify-between relative overflow-hidden">
            <Quote size={32} className="mb-4 opacity-40" />
            <p className="text-sm mb-6">
              “Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.”
            </p>
            <hr className="border-gray-700 my-3" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya R" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-sm font-medium">Priya R</p>
                  <p className="text-xs text-gray-400">Chennai</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-white gap-1">
                4 <Star size={14} fill="orange" stroke="orange" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 flex flex-col justify-between shadow-sm">
            <p className="text-sm text-gray-800 mb-4">
              "A seamless and secure way to invest in gold!" I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.
            </p>
            <hr className="my-3" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya R" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-sm font-medium">Priya R</p>
                  <p className="text-xs text-gray-500">Chennai</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-1">
                4 <Star size={14} fill="orange" stroke="orange" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Support Info */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-3">
            <ShieldCheck size={16} className="text-black" />
            100% Sale and Secure
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-3">
            <Phone size={16} className="text-black" />
            24/7 Support
          </div>
        </div>
      </div>
    </section>
  );
}
