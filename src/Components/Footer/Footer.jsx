import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "./../../assets/logowhite.png";
import mmtc from "./../../assets/Headermain/mmtcpamp.png";
import lbma from "./../../assets/Headermain/lbma3.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-black text-white">
      {/* Top CTA Section */}
      <div className="bg-[#000] border-b border-gray-800 py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-left">
          Start investing in Digital Gold today
        </h2>
        <button
          className="bg-white text-black hover:bg-[#B98A30] hover:text-black font-semibold px-5 py-2 transition"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Login/Sign up
        </button>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-10 text-sm">
        {/* Logo + Description */}
        <div className="text-left flex flex-col gap-4 md:col-span-5">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Pixalive Logo" className="h-13" />
            <div className="text-white">
              <h3 className="text-md font-bold">PIXALIVE</h3>
              <p className="text-xs font-semibold">GOLD NETWORK</p>
              <p className="text-xs">INFINITE OPPORTUNITIES TO EARN</p>
            </div>
          </div>
          <p className="text-white leading-relaxed mt-2">
            Pixalive Gold Network is India’s first social gold platform, offering 100% gold-backed
            investment options, seamless trading, gold loans, gold chits, jewelry purchases, and more.
            In partnership with MMTC-PAMP, we ensure the highest quality, purity, and security for your gold investments.
          </p>
          <div className="flex gap-4 mt-4">
            <img src={mmtc} alt="MMTC-PAMP" className="h-10" />
            <img src={lbma} alt="LBMA" className="h-10" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left md:col-span-2">
          <h4 className="text-white font-semibold text-xl mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white ">
            <li><Link to="/about" onClick={scrollToTop} className=" hover:underline cursor-pointer">About us</Link></li>
            <li><Link to="/faq" onClick={scrollToTop} className=" hover:underline cursor-pointer">FAQ</Link></li>
            <li><Link to="/" onClick={scrollToTop} className=" hover:underline cursor-pointer">Privacy Policy</Link></li>
            <li><Link to="/" onClick={scrollToTop} className=" hover:underline cursor-pointer">Refund & Cancellation Policy</Link></li>
            <li><Link to="/" onClick={scrollToTop} className=" hover:underline cursor-pointer">Customer Support</Link></li>
            <li><Link to="/" onClick={scrollToTop} className=" hover:underline cursor-pointer">Careers</Link></li>
            <li><Link to="/blog" onClick={scrollToTop} className=" hover:underline cursor-pointer">Blogs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left md:col-span-3">
          <Link to="/contact" onClick={scrollToTop}>
  <h4 className="text-white text-xl font-semibold mb-4 hover:underline cursor-pointer">
    Contact us
  </h4>
</Link>

          <ul className="space-y-3 text-white">
            <li className="flex items-center gap-3 ">
              <FaPhone size={16} /> +91 87785 84566
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope size={16} /> info@pixalive.network
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt size={16} />
              <span>
                3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II, Bengaluru, Karnataka 560100
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-left md:col-span-2">
          <h4 className="text-white text-xl font-semibold mb-4">Contact With us</h4>
          <div className="flex space-x-4 text-xl text-white">
            <a
              href="https://www.instagram.com/pixalivetech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition  hover:text-[#B98A30]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-[#B98A30] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/pixalivegoldnetwork/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-[#B98A30] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-[#B98A30] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center text-gray-500 py-4 text-xs px-4">
        Copyright © 2025 Tripalive.Me Technology Private Limited (Pixalive Gold Network). All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
