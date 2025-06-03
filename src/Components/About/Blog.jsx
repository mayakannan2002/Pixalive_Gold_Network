import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import promoImage from './../../assets/Blogs/blogpage.png';
import blogThumb1 from './../../assets/Blogs/blog1.png';
import blogThumb2 from './../../assets/Blogs/blog2.png';

const blogs = [
  {
    id: 1,
    title: "The Future of Wealth: Digital Gold with Pixalive",
    description:
      "The Pixalive Gold Network revolutionizes gold ownership with services like digital gold investment, gold loans, jewelry purchases, and more.",
    image: promoImage,
    tag: "Finance",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
  {
    id: 2,
    title: "Empowering Communities Through Gold: Pixalive Franchises",
    description:
      "At Pixalive Gold Network, we believe in creating a gold-centric ecosystem that not only benefits individuals but also empowers local communities.",
    image: blogThumb1,
    tag: "Marketing",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
  {
    id: 3,
    title: "A Partnership Built on Trust: Pixalive and MMTC-PAMP",
    description:
      "The Pixalive Gold Network is proud to partner with MMTC-PAMP, one of the most trusted names in the gold industry.",
    image: blogThumb2,
    tag: "Investing",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1280px] bg-[#f6f6f6] text-black py-16 px-4 lg:px-20  justify-center">
      {/* Heading Section */}
      <div className="mb-10">
        
        <p className="text-sm text-gray-500 mb-2">Pixalive Gold Network Blog</p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 leading-snug max-w-4xl">
          Pixalive Gold Network blogs share insights on digital gold, investment tips, and secure wealth-building through blockchain
        </h2>
        <a
          href="#"
          className="inline-flex items-center text-sm text-black mt-5 font-medium hover:underline"
        >
          View all blogs <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="group">
            <div className="relative h-56 sm:h-60 w-full rounded overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-white text-xs text-black font-medium px-2 py-1 rounded">
                {blog.tag}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug mb-1">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {blog.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>👤 {blog.author} · {blog.date}</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
