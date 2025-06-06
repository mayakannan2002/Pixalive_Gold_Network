import React from "react";

const PixaliveGoldNetwork = () => {
  return (
    <section className="bg-[#f6f6f6] py-16 px-4 md:px-12 flex justify-center font-[Lufga]">
      <div className="w-full max-w-[1280px] mx-auto">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10 mb-10">
          <div className="lg:w-2/5 mb-6 lg:mb-0">
            <p className="text-base text-[#6D6D6D] font-medium leading-snug">
              Pixalive Gold Network
            </p>
            <p className="text-base text-black font-medium leading-snug mt-4">
              Bridging Social Engagement <br /> and Commerce
            </p>
          </div>
          <div className="lg:w-3/5">
            <p className="text-black text-2xl sm:text-3xl lg:text-[30px] leading-snug lg:leading-[130%] font-normal">
              The Pixalive Gold Network serves as the vital link between the Pixalive Social Network and the Pixalive Consumer Network, enabling users to transform their social interactions into tangible rewards.
            </p>
          </div>
        </div>

        {/* Bottom paragraph section aligned with main paragraph */}
        <div className="lg:ml-[41.666667%]">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="text-[#6D6D6D] text-base leading-relaxed">
                On the Pixalive Social Network, users connect, share, and engage with content. Every interaction—be it swiping, sharing, or posting—earns users Gold Dots, rewarding their active participation.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#6D6D6D] text-base leading-relaxed">
                These Gold Dots are more than just digital tokens; they are the gateway to the Pixalive Consumer Network, a diverse marketplace encompassing various sectors such as shopping, food, travel, and more. Here, users can redeem their Gold Dots for products and services, effectively turning social engagement into tangible value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixaliveGoldNetwork;
