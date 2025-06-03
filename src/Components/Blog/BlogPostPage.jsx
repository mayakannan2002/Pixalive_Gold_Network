import React, { useState } from 'react';
import featuredImageBase from './../../assets/Blogs/blog-1.png'; // Initial featured image
import promoImage from './../../assets/Blogs/blog-promo.png';
import blogThumb1 from './../../assets/Blogs/blog-2.png';
import blogThumb2 from './../../assets/Blogs/blog-3.png';

const BlogPostPage = () => {
  const [featuredBlog, setFeaturedBlog] = useState({
    title: 'The Future of Wealth: Digital Gold with Pixalive',
    thumb: featuredImageBase,
  });

  const [recentBlogs, setRecentBlogs] = useState([
    {
      title: 'Building a future with tokenized gold assets',
      thumb: blogThumb1,
    },
    {
      title: 'How to protect your wealth in a digital world',
      thumb: blogThumb2,
    },
  ]);

  const handleRecentBlogClick = (index) => {
    const clickedBlog = recentBlogs[index];
    const currentFeatured = { ...featuredBlog };

    // Update featured with clicked one
    setFeaturedBlog(clickedBlog);

    // Replace clicked with the previous featured one
    const newRecentBlogs = [...recentBlogs];
    newRecentBlogs[index] = currentFeatured;

    setRecentBlogs(newRecentBlogs);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black px-4 py-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Left Column: Blog Content */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-2">{featuredBlog.title}</h2>
          <p className="text-sm text-gray-500 mb-4">by Pixalive Team | Published on Apr 20, 2025</p>

          {/* Featured Image */}
          <img
            src={featuredBlog.thumb}
            alt="Blog"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg mb-3 mx-auto"
          />

          {/* Table of Contents */}
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-2">Table of contents</h3>
            <ul className="list-disc list-inside text-l text-gray-500 space-y-1 ">
              <li>Why Choose Pixalive Gold Wallet?</li>
              <li>1. Accessibility for Everyone</li>
              <li>2. Security and Purity Guaranteed</li>
              <li>3. Liquidity and Flexibility</li>
              <li>4. More Than an Investment</li>
              <li>Revolutionizing the Gold Ecosystem</li>
              <li>Gold Wallet: Securely store and manage your digital gold</li>
              <li>A Partnership Built on Trust</li>
              <li>The Future is Digital, the Future is Gold</li>
            </ul>  <hr className='mt-2 border-gray-300'/>
            <p className=" text-gray-500 ">modified on:  june 02, 2025</p>
          </div>
        

          {/* Blog Body */}
          <div className="space-y-6  leading-relaxed">
           <p className=" text-l text-black-800">
            
              For centuries, gold has been the foundation of wealth, a safe haven during economic uncertainties, and a symbol of prosperity. However, the traditional ways of owning and investing in gold come with challenges such as high initial investment costs, storage concerns, and limited liquidity. Enter the digital era, where Pixalive Gold Network is reshaping how people invest in and interact with gold.</p>
            <h4 className="font-semibold   text-3xl">Why Choose Pixalive Gold Network? </h4>
            <p className=" text-l text-black-800">
             Pixalive Gold Network bridges the gap between tradition and technology, allowing users to buy, store, and manage 24K, 999.9 pure digital gold. Backed by MMTC-PAMP, one of the world’s leading gold refiners and custodians, Pixalive ensures every gram of your investment is secure, authentic, and readily accessible./</p>
            
            
            
            <h4 className="font-semibold   text-2xl">1. Accessibility for Everyone</h4>
            <p className=" text-l text-black-800">
              Gold investment is no longer reserved for the wealthy. With Pixalive, you can start investing with as little as ₹1. This micro-investment approach empowers individuals from all walks of life to own gold, making wealth-building an inclusive opportunity.</p>

            <h4 className="font-semibold   text-2xl">2. Security and Purity Guaranteed</h4>
           <p className=" text-l text-black-800">
              Partnering with MMTC-PAMP guarantees the highest level of purity and safety for your digital gold. Stored in world-class, fully insured vaults, your gold is always secure, with real-time transparency ensuring trust at every step.</p>

            <h4 className="font-semibold  text-2xl">3. Liquidity and Flexibility</h4>
            <p className=" text-l text-black-800">
              Digital gold with Pixalive offers unparalleled liquidity. You can buy, sell, or redeem your gold anytime at live market rates. Whether you want to convert your gold into cash, physical gold, or products from Pixalive’s extensive partner network, the choice is yours.</p>

            <h4 className="font-semibold  text-2xl">4. More Than an Investment</h4>
              <p className=" text-l text-black-800">
              Pixalive turns gold into an everyday asset. Use it for payments, redeem it for groceries or jewelry, or leverage it as collateral for instant loans—all from the Pixalive platform </p>

            <h4 className="font-semibold   text-2xl">Revolutionizing the Gold Ecosystem</h4>
           <p className=" text-l text-black-800">
              Pixalive Gold Network isn’t just about digital gold; it’s about creating a holistic gold ecosystem. Through strategic divisions and services, Pixalive integrates gold into daily life in innovative ways: </p>

            <h4 className="font-semibold   text-2xl">
              Gold Wallet: Securely store and manage your digital gold.
            </h4>
              <p className=" text-l text-black-800">
              Redemption Options: Convert your digital gold into physical gold, cash, or everyday products.

Franchise and Merchant Integration: Expand the Pixalive ecosystem by onboarding businesses and enabling digital gold payments.

Educational Resources: Empower users with tools and knowledge for better financial decision-making  </p>

            <h4 className="font-semibold   text-2xl">A Partnership Built on Trust</h4>
            <p className=" text-l text-black-800">
              Pixalive’s collaboration with MMTC-PAMP ensures that every gram of digital gold you own is of the highest quality, stored with maximum security, and fully insured. This partnership reflects Pixalive’s commitment to creating a transparent and reliable platform for gold investors. </p>

            <h4 className="font-semibold  text-2xl">
              The Future is Digital, the Future is Gold
            </h4>
              <p className=" text-l text-black-800">
             As the world moves towards digitalization, the way we invest and interact with wealth is evolving. Pixalive Gold Network embraces this change by making gold accessible, flexible, and integrated into modern life. With a focus on security, innovation, and user empowerment, Pixalive is more than a gold investment platform—it’s the future of wealth management.

Whether you’re a seasoned investor or just starting your wealth-building journey, Pixalive Gold Network is your gateway to financial growth and security. Embrace the power of digital gold today and secure your golden future
            </p>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          {/* Promo Card */}
          <div className="bg-white text-black rounded-lg p-4 shadow-md">
            <h4 className="font-semibold mb-1">Save in Digital Gold with</h4>
            <p className="text-sm text-gray-700 mb-2">Pixalive Gold Wallet. Invest securely, anytime, anywhere.</p>
            <img src={promoImage} alt="Promo" className="w-full h-auto rounded-md" />
          </div>

          {/* Recent Blogs */}
          <div>
            <h4 className="text-white font-semibold mb-2">Recent Blogs</h4>
            <div className="space-y-3">
              {recentBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer hover:opacity-80"
                  onClick={() => handleRecentBlogClick(index)}
                >
                  <img src={blog.thumb} alt={blog.title} className="w-12 h-12 rounded-md object-cover" />
                  <p className="text-sm text-gray-300">{blog.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
