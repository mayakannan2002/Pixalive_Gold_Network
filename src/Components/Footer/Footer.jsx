import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "./../../assets/Headermain/Plogo.png";
import mmtc from "./../../assets/Headermain/mmtcpamp.png";
import lbma from "./../../assets/Headermain/lbma3.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-[#140113] text-white">
      <hr />

      {/* Top CTA Section */}
      <div className="bg-[#b98a30] py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-4 md:mb-0 text-left">
          Start investing in Digital Gold today
        </h2>
        <button
          className="bg-[#CC25BE] hover:bg-yellow-800 text-white font-semibold px-5 py-2 rounded-full transition cursor-pointer"
          onClick={() => {
            window.location.href = '/signup';
          }}
        >
          Login/Sign up
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo and Description */}
        <div className="text-left">
          <img src={logo} alt="Pixalive Logo" className="h-12 mb-4" />
          <p className="text-gray-300 leading-relaxed">
            Pixalive Gold Network is India’s first social gold platform, offering 100% gold-backed
            investment options, seamless trading, gold loans, gold chits, jewelry purchases, and
            more. In partnership with MMTC-PAMP, we ensure the highest quality, purity, and security
            for your gold investments.
          </p>
          <div className="flex justify-start space-x-6 mt-6">
            <img src={mmtc} alt="MMTC-PAMP" className="h-10" />
            <img src={lbma} alt="LBMA" className="h-10" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/faq" className="hover:text-white" onClick={scrollToTop}>FAQ</Link></li>
            <li><Link to="/" className="hover:text-white" onClick={scrollToTop}>Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-white" onClick={scrollToTop}>Refund & Cancellation Policy</Link></li>
            <li><Link to="/" className="hover:text-white" onClick={scrollToTop}>Customer Support</Link></li>
            <li><Link to="/" className="hover:text-white" onClick={scrollToTop}>Careers</Link></li>
            <li><Link to="/blog" className="hover:text-white" onClick={scrollToTop}>Blogs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-6">
            <Link to="/contact" className="hover:text-white" onClick={scrollToTop}>
              Contact Us
            </Link>
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex justify-start items-center gap-2">
              <FaPhone size={20} /> +91 87785 84566
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaEnvelope size={20} /> info@pixaliveventures.com
            </li>
            <li className="flex justify-start items-start gap-2">
              <FaMapMarkerAlt size={25} />
              <span>
                Third Floor, No 35/2, Konappana Agrahara, Hosur Road, Electronics City,
                Bengaluru, Karnataka 560100, India
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-4">Contact With us</h4>
          <div className="flex justify-start space-x-4 text-xl text-gray-400">
            <a
              href="https://www.instagram.com/pixalivetech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/pixalivegoldnetwork/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <FaFacebook className="hover:text-white transition cursor-pointer" />
            <FaTwitter className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 text-center text-gray-400 py-4 text-xs px-4">
        Copyright © 2025 Tripalive.Me Technology Private Limited (Pixalive Gold Network).
        All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
