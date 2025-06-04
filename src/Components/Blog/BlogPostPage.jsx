import React, { useState } from 'react';
import featuredImageBase from './../../assets/Blogs/blog-1.png';
import promoImage from './../../assets/Blogs/blog-promo.png';
import blogThumb1 from './../../assets/Blogs/B1.png';
import blogThumb2 from './../../assets/Blogs/B2.png'; // updated file name
import authorImage from './../../assets/Blogs/author.png';
import { FaRegShareSquare } from 'react-icons/fa';
import { BiCopy } from 'react-icons/bi';

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
    const newRecentBlogs = [...recentBlogs];
    newRecentBlogs[index] = currentFeatured;
    setFeaturedBlog(clickedBlog);
    setRecentBlogs(newRecentBlogs);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black px-4 py-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-2">{featuredBlog.title}</h2>
          <p className="text-sm text-gray-500 mb-4">by Pixalive Team | Published on Apr 20, 2025</p>

          <img
            src={featuredBlog.thumb}
            alt="Blog"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg mb-3 mx-auto"
          />

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
            </ul>
            <hr className="mt-2 border-gray-300" />
            <p className="text-gray-500">modified on: June 02, 2025</p>
          </div>

          <div className="space-y-6 leading-relaxed">
            <p>
              For centuries, gold has been the foundation of wealth, a safe haven during economic uncertainties...
            </p>

            <h4 className="font-semibold text-3xl">Why Choose Pixalive Gold Network?</h4>
            <p>
              Pixalive Gold Network bridges the gap between tradition and technology...
            </p>

            <h4 className="font-semibold text-2xl">1. Accessibility for Everyone</h4>
            <p>
              Gold investment is no longer reserved for the wealthy...
            </p>

            <h4 className="font-semibold text-2xl">2. Security and Purity Guaranteed</h4>
            <p>
              Partnering with MMTC-PAMP guarantees the highest level of purity and safety...
            </p>

            <h4 className="font-semibold text-2xl">3. Liquidity and Flexibility</h4>
            <p>
              Digital gold with Pixalive offers unparalleled liquidity...
            </p>

            <h4 className="font-semibold text-2xl">4. More Than an Investment</h4>
            <p>
              Pixalive turns gold into an everyday asset...
            </p>

            <h4 className="font-semibold text-2xl">Revolutionizing the Gold Ecosystem</h4>
            <p>
              Pixalive Gold Network isn’t just about digital gold; it’s about creating a holistic ecosystem...
            </p>

            <h4 className="font-semibold text-2xl">Gold Wallet: Securely store and manage your digital gold.</h4>
            <p>
              Redemption Options, Merchant Integration, Education Resources...
            </p>

            <h4 className="font-semibold text-2xl">A Partnership Built on Trust</h4>
            <p>
              Pixalive’s collaboration with MMTC-PAMP ensures that every gram of digital gold...
            </p>

            <h4 className="font-semibold text-2xl">The Future is Digital, the Future is Gold</h4>
            <p>
              As the world moves toward digitalization... secure your golden future.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#E7E7E7] text-black p-4">
            <h4 className="font-semibold mb-1">Save in Digital Gold with</h4>
            <p className="text-sm text-gray-700 mb-2">Pixalive Gold Wallet. Invest securely, anytime, anywhere.</p>
            <img src={promoImage} alt="Promo" className="w-full h-auto rounded-md" />
          </div>

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
