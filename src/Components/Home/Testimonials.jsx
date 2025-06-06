import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BsHeadset, BsShieldCheck } from "react-icons/bs";
import PriyaImg from "./../../assets/About/avatar2.png";

const testimonials = [
  {
    text: "A seamless and secure way to invest in gold! I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
    name: "Priya R",
    location: "Chennai",
    rating: 4,
    badge: {
      icon: <BsShieldCheck className="w-4 h-4 text-green-600" />,
      text: "100% Safe and Secure",
      position: "bottom",
    },
  },
  {
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
    name: "Karan P",
    location: "Mumbai",
    rating: 4,
    badge: null,
    centerText: true,
  },
  {
    text: "Investing in digital gold has never been this smooth! I love how Pixalive Gold Network made it so accessible and reliable.",
    name: "Anjali S",
    location: "Bangalore",
    rating: 4,
    badge: {
      icon: <BsHeadset className="w-4 h-4 text-blue-600" />,
      text: "24/7 Support",
      position: "top",
    },
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [total]);

  const getVisibleIndexes = () => {
    if (windowWidth < 768) return [activeIndex];
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 py-16 max-w-[1260px] mx-auto font-[Lufga]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-14">
        <h3 className="text-sm text-[#4B4B4B] font-lufga md:w-1/4">
          Loved by the People <br />
          Who Work Here
        </h3>
        <p className="text-[22px] md:text-[30px] lg:text-[32px] leading-[32px] md:leading-[52px] text-black font-lufga md:w-3/4">
          Joining Pixalive Gold Network has been a game-changer for my business. The support, visibility,
          and growth opportunities I received are unmatched.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div
        className={`flex ${
          windowWidth < 768 ? "flex-col" : "flex-row"
        } justify-center items-stretch gap-8 transition-all duration-500`}
      >
        {getVisibleIndexes().map((index) => {
          const item = testimonials[index];
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: isActive ? 1.08 : 1,
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 w-full max-w-xs md:max-w-sm lg:max-w-md"
            >
              {/* Top Badge */}
              {item.badge?.position === "top" && (
                <div
                  className={`flex items-center gap-2 px-4 py-4  shadow-sm ${
                    isActive ? "bg-black text-white" : "bg-white text-gray-800"
                  }`}
                >
                  <span className={`p-2  shadow ${isActive ? "bg-gray-900" : "bg-white"}`}>
                    {item.badge.icon}
                  </span>
                  <span className="text-sm font-medium">{item.badge.text}</span>
                </div>
              )}

              {/* Testimonial Card */}
              <div
                className={`flex flex-col justify-between p-6  shadow-md transition duration-500 ${
                  isActive ? "bg-black text-white z-10" : "bg-white text-gray-800"
                } ${item.centerText ? "text-center" : ""}`}
                style={{ minHeight: "300px" }}
              >
                <div className={item.centerText ? "flex items-center justify-center h-full" : ""}>
                  <p className="text-base leading-relaxed">{item.text}</p>
                </div>

                <div className="flex items-center justify-between border-t pt-4 border-gray-300 mt-6">
                  {/* Profile Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={PriyaImg}
                      alt={item.name}
                      className={`w-10 h-10  object-cover ${
                        isActive ? "ring-2 ring-white" : ""
                      }`}
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className={`text-xs ${isActive ? "text-gray-300" : "text-[#7A7A7A]"}`}>
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={`flex items-center gap-1 ${isActive ? "text-white" : "text-black"}`}>
                    {item.rating}
                    <FaStar className={`w-4 h-4 ${isActive ? "text-yellow-400" : "text-yellow-500"}`} />
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              {item.badge?.position === "bottom" && (
                <div
                  className={`flex items-center gap-2 px-4 py-4  shadow-sm ${
                    isActive ? "bg-black text-white" : "bg-white text-gray-800"
                  }`}
                >
                  <span className={`p-2 r shadow ${isActive ? "bg-gray-900" : "bg-white"}`}>
                    {item.badge.icon}
                  </span>
                  <span className="text-sm font-medium">{item.badge.text}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
