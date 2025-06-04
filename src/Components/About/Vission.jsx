import React from "react";

const Vission = () => {
  const data = [
    {
      count: "30+",
      title: "Empowering India Through a Trusted Gold Ecosystem",
      subtitle: "Our Vision",
      description:
        "To establish Pixalive Gold Network as the largest and most trusted gold ecosystem in India, fostering financial empowerment and accessibility through innovative services and strategic partnerships",
    },
    {
      count: "06+",
      title: "EmpowerCore: Bringing Gold Closer to Everyday Life",
      subtitle: "Our Mission",
      description:
        "To empower individuals and businesses by creating a secure, transparent, and innovative gold ecosystem that brings the value of gold closer to everyday life.",
    },
    {
      count: "4000+",
      title: "Our Branches and Premier Partnerships",
      subtitle: "Our Goal",
      description:
        "Expand to 4000+ branches across India to make gold services widely accessible. Build trust through partnerships with top brands like MMTC-PAMP.",
    },
  ];

  return (
    <div className="bg-white py-16 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-15">
        {data.map((item, index) => (
          <div
            key={index}
            className={`text-left ${index < 2 ? "border-r border-gray-300" : ""}`}
          >
            <h2 className="text-5xl font-bold text-black mb-4">{item.count}</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <h4 className="text-md font-bold text-black mb-1">{item.subtitle}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vission;
