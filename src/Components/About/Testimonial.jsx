import React, { useState } from 'react';
import { FaGooglePlay, FaApple, FaStar } from 'react-icons/fa';
import googlePlayLogo from './../../assets/About/playlogo.png';
import userAvatar1 from './../../assets/About/avatar1.png';
import userAvatar2 from './../../assets/About/avatar2.png';
import userAvatar3 from './../../assets/About/avatar3.png';
import testimonialAvatar1 from './../../assets/About/avatar1.png';
import testimonialAvatar2 from './../../assets/About/avatar2.png';
import testimonialAvatar3 from './../../assets/About/avatar3.png';

const TestimonialCard = ({ quote, author, location, avatar, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 sm:p-8  shadow-md transition duration-300 ease-in-out transform 
        ${isHovered ? 'bg-black text-white scale-[1.02]' : 'bg-white text-black'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute top-5 left-6 text-5xl font-serif ${isHovered ? 'text-gray-400' : 'text-gray-300'}`}>
        “
      </div>

      <p className="text-sm sm:text-base mt-10 mb-6 leading-relaxed">
        {quote}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10  mr-3 object-cover border-2 border-white"
          />
          <div>
            <p className={`text-sm font-semibold ${isHovered ? 'text-white' : 'text-black'}`}>{author}</p>
            <p className={`text-xs ${isHovered ? 'text-gray-400' : 'text-gray-500'}`}>{location}</p>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} className={`${isHovered ? 'text-yellow-400' : 'text-yellow-500'} text-sm`} />
          ))}
          {rating % 1 !== 0 && (
            <FaStar className={`${isHovered ? 'text-yellow-400' : 'text-yellow-500'} text-sm`} style={{ clipPath: 'inset(0 50% 0 0)' }} />
          )}
          <span className={`ml-1 text-sm font-semibold ${isHovered ? 'text-yellow-400' : 'text-black'}`}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: "A seamless and secure way to invest in gold! I've always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
      author: "Arun K",
      location: "Mumbai",
      avatar: testimonialAvatar1,
      rating: 4
    },
    {
      id: 'testimonial-2',
      quote: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I've finally found a space that keeps me focused and inspired.",
      author: "Priya R",
      location: "Chennai",
      avatar: testimonialAvatar2,
      rating: 5
    },
    {
      id: 'testimonial-3',
      quote: "A seamless and secure way to invest in gold! I've always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
      author: "Rajesh M",
      location: "Bangalore",
      avatar: testimonialAvatar3,
      rating: 4.5
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-16 px-4 sm:px-12 lg:px-8">
      <div className="max-w-[1280px] mx-auto">

        {/* Avatars */}
        <div className="flex justify-center -space-x-2 mb-5">
          <img src={userAvatar1} alt="User 1" className="w-10 h-10 sm:w-12 sm:h-12  border-2 border-white object-cover" />
          <img src={userAvatar2} alt="User 2" className="w-10 h-10 sm:w-12 sm:h-12  border-2 border-white object-cover" />
          <img src={userAvatar3} alt="User 3" className="w-10 h-10 sm:w-12 sm:h-12  border-2 border-white object-cover" />
        </div>

        {/* Headings */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">3.5 Cr.+ users trust us.</h2>
          <p className="text-base text-gray-600">
            Rated 4.7 <span className="font-semibold">1.4L</span> reviews on
          </p>
        </div>

        {/* Store Links */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          <a
            href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-6 py-3  hover:bg-gray-800"
          >
            <img src={googlePlayLogo} alt="Play Store" className="h-6 mr-2" />
            <span>Play Store</span>
          </a>
          <a
            href="https://apps.apple.com/us/app/YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-6 py-3  hover:bg-gray-800"
          >
            <FaApple className="text-lg mr-2" />
            <span>App Store</span>
          </a>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-w-1200">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
