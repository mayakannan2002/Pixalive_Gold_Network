import React, { useRef, useEffect } from 'react';
import Frame1 from './../../assets/Franchise/Frame1.png';
import Frame2 from './../../assets/Franchise/Frame2.png';
import Frame3 from './../../assets/Franchise/Frame3.png';
import Frame4 from './../../assets/Franchise/Frame4.png';

const baseOptions = [
  {
    title: "Zonal Franchise",
    description: "Become the leading partner for an entire region",
    investment: "₹ 10 Crores",
    scope: "Oversee multiple states within a designated zone.",
    responsibilities: "Oversee multiple states within a designated zone.",
    period: "10 years renewable.",
    icon: Frame1,
  },
  {
    title: "State Franchise",
    description: "Own the rights to operate and grow Pixalive Gold Network across an entire state",
    investment: "₹ 5 Crores",
    scope: "Operate and manage all district and area franchises within a state.",
    responsibilities: "Oversee state marketing, operations, and partner setup.",
    period: "10 years renewable.",
    icon: Frame2,
  },
  {
    title: "District Franchise",
    description: "Take charge of Pixalive Gold's operations in your district",
    investment: "₹ 50 Lakhs",
    scope: "Manage all area franchises within a district.",
    responsibilities: "Local offers, customer connection, and smooth daily operations.",
    period: "10 years renewable.",
    icon: Frame3,
  },
  {
    title: "Area Franchise",
    description: "The most accessible and local level of partnership",
    investment: "₹ 25 Lakhs",
    scope: "Handle local-level franchise activities.",
    responsibilities: "Local promotions, setup, and branding.",
    period: "10 years renewable.",
    icon: Frame4,
  },
];

// Duplicate to create seamless scroll loop
const franchiseOptions = [...baseOptions, ...baseOptions];

export default function FranchiseSection() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const scrollSpeed = 0.5;
  const intervalTime = 10;

  const startScrolling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
    }, intervalTime);
  };

  const stopScrolling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    startScrolling();

    container.addEventListener('mouseenter', stopScrolling);
    container.addEventListener('mouseleave', startScrolling);

    return () => {
      stopScrolling();
      container.removeEventListener('mouseenter', stopScrolling);
      container.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  return (
    <section className="bg py-20 px-4 md:px-10 lg:px-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 mb-12">
        <div className="md:w-1/4">
          <p className="text-sm text-gray-500 font-medium leading-snug">Our Franchise Type</p>
        </div>
        <div className="md:w-3/4">
          <p className="text-3xl md:text-4xl text-black font-semibold leading-snug">
            Whether you're an experienced entrepreneur <br />
            or a driven investor, the <span className="font-semibold">Pixalive Gold Network</span> <br />
            offers a golden gateway to success across <br />
            multiple regions in India.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="max-w-[1280px] mx-auto overflow-x-hidden no-scrollbar"
      >
        <div className="flex gap-6 w-fit py-4">
          {franchiseOptions.map((item, index) => (
            <div
              key={index}
              className="w-[350px] bg-white shadow-sm flex-shrink-0 p-6 hover:shadow-md transition"
            >
              <img src={item.icon} alt={`${item.title} Icon`} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-semibold text-black mb-2">
                {item.investment}{' '}
                <span className="text-gray-600 text-sm">/ Investment</span>
              </p>
              <button className="bg-black text-white text-sm py-2 px-4  mb-4 hover:bg-gray-800 transition">
                Contact Us
              </button>

              <h3 className="text-sm font-bold text-black uppercase mb-3">What You Get :-</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p className="flex items-start">
                  <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                  <strong>Scope:</strong> {item.scope}
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                  <strong>Responsibilities:</strong> {item.responsibilities}
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                  <strong>Franchise Period:</strong> {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
