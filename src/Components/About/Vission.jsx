import React from 'react';

const AboutPageHero = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black py-16 px-4 lg:px-20 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:gap-24 mb-16 md:mb-24">
          {/* Left Vertical Label */}
          <div className="w-full md:w-[150px] flex-shrink-0 mb-8 md:mb-0">
            <p className="text-sm ml-2 text-gray-400 whitespace-nowrap">Pixalive Gold Network <br/> Story</p>
          </div>

          {/* Right Main Heading */}
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-snug max-w-4xl">
              Pixalive Gold Network is India’s first social gold
              platform, offering gold-backed investments,
              loans, and jewelry services. It was founded by
              Rajasekar Sundaresan, inspired by his
              personal experience with the value of gold
              during tough times
            </h1>
          </div>
        </div>

        {/* Bottom Section - Three Cards */}
        {/* Changed from grid directly to a flex container to manage borders more easily */}
        <div className="flex flex-col md:flex-row "> {/* Add bg-white to parent to make it one continuous white background */}
          {/* Card 1 */}
          <div className="  p-2 flex-1 border-b md:border-b-0 md:border-r border-gray-500">
            <div className="w-full"> {/* Inner div to align text within the card's flex item */}
              <h2 className="text-4xl font-bold text-black mb-4">30+</h2>
              <h3 className="text-lg font-semibold  mb-6">Empowering India Through a Trusted Gold Ecosystem</h3>
              <h4 className="text-lg font-semibold text-black mb-2">Our Vision</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                To establish Pixalive Gold Network as
                the largest and most trusted gold
                ecosystem in India, fostering financial
                empowerment and accessibility
                through innovative services and
                strategic partnerships
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" p-6 flex-1 max-w[1280px] border-b md:border-b-0 md:border-r border-gray-500">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-black mb-4">06+</h2>
              <h3 className="text-lg font-semibold  mb-6">EmpowerCore: Bringing Gold Closer to Everyday Life</h3>
              <h4 className="text-lg font-semibold text-black mb-2">Our Mission</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower individuals and
                businesses by creating a secure,
                transparent, and innovative gold
                ecosystem that brings the value of
                gold closer to everyday life.
              </p>
            </div>
          </div>

          {/* Card 3 - No right border */}
          <div className="p-6 flex-1">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-black mb-4">4000+</h2>
              <h3 className="text-lg font-semibold mb-6">Our Branches and Premier Partnerships</h3>
              <h4 className="text-lg font-semibold text-black mb-2">Our Goal</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Expand to 4000+ branches across
                India to make gold services widely
                accessible. Build trust through
                partnerships with top brands like
                MMTC-PAMP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageHero;