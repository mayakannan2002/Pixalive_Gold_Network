// // JSX Code

// import React, { useState } from 'react';

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: 'What is the Pixalive Gold Network?',
//       answer:
//         'Pixalive Gold Network is India’s leading digital gold ecosystem offering innovative services and franchise opportunities across multiple levels - zonal, state, district, and area.',
//     },
//     {
//       id: 2,
//       question: 'What is the investment required to start?',
//       answer:
//         'The investment varies depending on the franchise level and region. Please contact us for detailed information.',
//     },
//     {
//       id: 3,
//       question: 'Do I need prior experience to become a franchise partner?',
//       answer:
//         'No prior experience is necessary. We provide comprehensive training and support to all our franchise partners.',
//     },
//     {
//       id: 4,
//       question: 'What support will I receive as a franchise partner?',
//       answer:
//         'We offer extensive support, including marketing assistance, operational guidance, and ongoing technical support.',
//     },
//     {
//       id: 5,
//       question: 'How can I apply for a Pixalive franchise?',
//       answer:
//         'You can apply by filling out the inquiry form on our website, and our team will get in touch with you.',
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-start md:space-x-12 mb-12">
//           {/* Got Questions? */}
//           <div className="flex-shrink-0 mb-4 md:mb-0">
//             <p className="text-gray-600 text-lg sm:text-xl font-normal">
//               Got Questions?
//             </p>
//             <p className="text-gray-500 text-base sm:text-lg font-light italic">
//               We've Got Answers
//             </p>
//           </div>

//           {/* Main Heading */}
//           <div className="flex-grow">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
//               Here are the most common queries about becoming a Pixalive Gold Franchise partner—
//               <span className="font-normal text-gray-700">simple, clear, and helpful.</span>
//             </h1>
//           </div>
//         </div>

//         {/* FAQ Items Section */}
//         <div className="space-y-6">
//           {faqs.map((faq, index) => (
//             <div
//               key={faq.id}
//               className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
//             >
//               <button
//                 className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <div className="flex items-center">
//                   <span className="text-xl font-medium text-gray-700 mr-3">
//                     {faq.id}.
//                   </span>
//                   <h3 className="text-lg sm:text-xl font-medium text-gray-800">
//                     {faq.question}
//                   </h3>
//                 </div>
//                 {/* Plus/Minus with Round Background */}
//                 <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 text-gray-500 text-xl transition-transform duration-300 transform">
//                   {openIndex === index ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2}
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2}
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                     </svg>
//                   )}
//                 </span>
//               </button>
//               {openIndex === index && (
//                 <div className="p-6 pt-0">
//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;




// import React, { useState } from "react";

// const features = [
//   {
//     id:1,
//     Question:"What is the Pixalive Gold Network?",
//     Answer:
//           "Pixalive Gold Network is India’s leading digital gold ecosystem offering innovative services and franchise opportunities across multiple levels – zonal, state, district, and area."
//   },
//   {
//     id: 2,
//     Question: 'What is the investment required to start?',
//     Answer: 'The investment varies depending on the franchise level and region. Please contact us for detailed information.',

//   },
//   {
//     id: 3,
//     Question: 'What is the investment required to start?',
//     Answer: 'The investment varies depending on the franchise level and region. Please contact us for detailed information.',

//   },
//   {
//    id: 4,
//       Question: 'What support will I receive as a franchise partner?',
//       Answer:
//         'We offer extensive support, including marketing assistance, operational guidance, and ongoing technical support.',
//      },
    
//      {
//      id: 5,
//       Question: 'How can I apply for a Pixalive franchise?',
//       Answer:
//         'You can apply by filling out the inquiry form on our website, and our team will get in touch with you.',
//      }
// ];

// const KeyFeatures = () => {
//   const [active, setActive] = useState(1);

//   const toggleFeature = (id) => {
//     setActive(active === id ? null : id);
//   };

//   return (
//     <section className="bg-[#F5F5F5] py-16 px-4 md:px-10 lg:px-24">
//       <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-6 mb-10">
//         {/* Header section with left and right layout */}
        
//           {/* Left: Label */}
//           <div className="md:w-2/5">
//             <p className="text-sm text-gray-500 mb-2">Got Questions?<br/> We’ve Got Answers</p>
//           </div>

//           {/* Right: Heading */}
//           <div className="col-span-3 space-y-10 ">
//             <h2 className="md:w-3/4 text-2xl md:text-3xl font-semibold text-black leading-relaxed">
//               Here are the most common queries about <br/>becoming a Pixalive Gold Franchise partner—<br/>simple, clear, and helpful.
//             </h2>
          
        

//         {/* Accordion list */}
//         <div className=" bg-white shadow-sm divide-y divide-gray-200">
//           {features.map((feature) => (
//             <div key={feature.id}>
//               <button
//                 className="w-full text-left px-6 py-5 flex justify-between items-center"
//                 onClick={() => toggleFeature(feature.id)}
//               >
//                 <div>
//                   <div className="text-xl font-bold text-black">
//                     {String(feature.id).padStart(2, "0")}
//                   </div>
//                   <div className="text-md font-semibold text-black mt-1">
//                     {feature.Question}
//                   </div>
//                   {active === feature.id && feature.description && (
//                     <p className="text-sm text-gray-600 mt-3 max-w-xl">
//                       {feature.Answer}
//                     </p>
//                   )}
//                 </div>
//                 <div className="text-2xl text-gray-400">
//                   {active === feature.id ? "−" : "+"}
//                 </div>
//               </button>
//             </div>
//           ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;

import React, { useState } from "react";

const features = [
  {
    id: 1,
    Question: "What is the Pixalive Gold Network?",
    Answer:
      "Pixalive Gold Network is India’s leading digital gold ecosystem offering innovative services and franchise opportunities across multiple levels – zonal, state, district, and area.",
  },
  {
    id: 2,
    Question: "What is the investment required to start?",
    Answer:
      "The investment varies depending on the franchise level and region. Please contact us for detailed information.",
  },
  {
    id: 3,
    Question: "Do I need prior experience to become a franchise partner?",
    Answer:
      "No prior experience is necessary. We provide comprehensive training and support to all our franchise partners.",
  },
  {
    id: 4,
    Question: "What support will I receive as a franchise partner?",
    Answer:
      "We offer extensive support, including marketing assistance, operational guidance, and ongoing technical support.",
  },
  {
    id: 5,
    Question: "How can I apply for a Pixalive franchise?",
    Answer:
      "You can apply by filling out the inquiry form on our website, and our team will get in touch with you.",
  },
];

const KeyFeatures = () => {
  const [active, setActive] = useState(null);

  const toggleFeature = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-10 lg:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side intro */}
        <div className="md:w-1/4">
          <p className="text-sm text-gray-500 mb-2">Got Questions?</p>
          <p className="text-sm text-gray-500 mb-6">We’ve Got Answers</p>
        </div>

        {/* Right side FAQ section */}
        <div className="md:w-3/4 space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-relaxed">
            Here are the most common queries about <br />
            becoming a Pixalive Gold Franchise partner—<br />
            simple, clear, and helpful.
          </h2><br/>

          <div className=" divide-y divide-gray-200 ">
            {features.map((feature) => (
              <div key={feature.id}>
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <div>
                    <div className="text-md font-semibold text-black flex gap-2 items-start">
                      <span className="text-black">{`${feature.id}.`}</span>
                      {feature.Question}
                    </div>
                    {active === feature.id && (
                      <p className="text-sm text-gray-600 mt-3 max-w-xl">
                        {feature.Answer}
                      </p>
                    )}
                  </div>
                  {/* Rounded Plus/Minus symbol */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black text-black text-lg">
                    {active === feature.id ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
