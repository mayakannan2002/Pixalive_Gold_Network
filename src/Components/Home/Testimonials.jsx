import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BsHeadset, BsShieldCheck } from "react-icons/bs";
import PriyaImg from "./../../assets/About/avatar2.png"; // Update with actual path

const testimonials = [
  {
    text: `"A seamless and secure way to invest in gold!" I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.`,
    name: "Priya R",
    location: "Chennai",
    rating: 4,
  },
  {
    text: `"Exceptional customer support!" I had a query and their 24/7 support team was there instantly. Super impressive.`,
    name: "Karan P",
    location: "Mumbai",
    rating: 5,
  },
  {
    text: `"My go-to platform for digital gold investment. Secure, reliable and very user-friendly!"`,
    name: "Anjali S",
    location: "Bangalore",
    rating: 5,
  },
];

const badges = [
  {
    icon: <BsShieldCheck className="w-5 h-5 text-gray-700" />,
    text: "100% Sale and Secure",
  },
  {
    icon: <BsHeadset className="w-5 h-5 text-gray-700 null-pointer-events" />,
    text: "24/7 Support",
  },
  {
    icon: <BsHeadset className="w-5 h-5 text-gray-700" />,
    text: "24/7 Support",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="  w-full px-4 md:px-8 lg:px-6 py-16 max-w-[1280px] mx-auto font-[Lufga]">
      {/* Top Headings */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <h3 className="text-sm md:text-base text-[#4B4B4B] font-medium md:w-1/4">
        Loved by the People <br/>Who Work Here
        </h3>
        <p className="text-[20px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[54px] text-black font-lufga md:w-3/4">
        Joining Pixalive Gold Network has been a game-changer for my business. The support, visibility, and growth opportunities I received are unmatched.
        </p>
      </div>


      
     {/* Testimonials */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <p className="text-gray-800 text-base leading-relaxed mb-6">
              {item.text}
            </p>

            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-3">
                <img
                  src={PriyaImg}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {item.rating} <FaStar className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-3   shadow-sm p-4 bg-white"
          >
            <div className="bg-white p-2 rounded-full shadow-sm">
              {badge.icon}
            </div>
            <p className="text-gray-700 text-sm font-medium">{badge.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}