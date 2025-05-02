import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <div className="bg-gray-50 w-full">
      <div className="lg:w-11/12 mx-auto px-4 sm:px-7 lg:px-0 pt-15 md:pt-20 pb-4 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 xl:gap-8">
          {/* Left section: Logo, description, and social media links */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Footer logo */}
            <Link to={"/"} className="cursor-pointer inline-block">
              <img src="/header-logo1.png" alt="Vexon Logo" className="h-6 sm:h-8" />
            </Link>

            {/* Company description */}
            <p className="opacity-60 leading-6 sm:leading-7">
              Vexon is your hub for the latest in digital innovation, technology
              trends, creative insights. Our mission is to empower creators,
              businesses, valuable resource.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter].map((Icon, index) => (
                <Icon
                  key={index}
                  size={32}
                  className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Center section: Explore Categories */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
            <p className="font-semibold text-lg sm:text-xl opacity-95">
              Explore Categories
            </p>

            {/* List of categories */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                "Digital Marketing",
                "Ai & Technology",
                "Content Strategy",
                "Social Media",
                "SEO & Analytics",
                "Design & Development"
              ].map((category, index) => (
                <Link
                  key={index}
                  to={"/" + (index === 3 ? "blog" : "")}
                  className="text-base hover:text-violet-500 opacity-60 hover:translate-x-2 transition-all duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Center section: Quick Links */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
            <p className="font-semibold text-lg sm:text-xl opacity-95">
              Quick Links
            </p>

            {/* List of quick links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: "Features", path: "/" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy & Policy", path: "/" },
                { name: "Terms of Services", path: "/" }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-base hover:text-violet-500 opacity-60 hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right section: Contact Information */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
            <p className="font-semibold text-lg sm:text-xl opacity-95">
              Contact Us
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="opacity-80 flex-shrink-0" size={20} strokeWidth={1.5} />
                <p className="text-base hover:text-violet-500 opacity-60 transition-all duration-300 cursor-pointer">
                  support@vexon.com
                </p>
              </div>

              <div className="flex items-start sm:items-center gap-3">
                <MapPin className="opacity-80 flex-shrink-0 mt-1 sm:mt-0" size={20} strokeWidth={1.5} />
                <p className="text-base hover:text-violet-500 opacity-60 transition-all duration-300 cursor-pointer">
                  Kathmandu, Nepal +0123, Bagmati Province N.O. : 3
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="opacity-80 flex-shrink-0" size={20} strokeWidth={1.5} />
                <p className="text-base hover:text-violet-500 opacity-60 transition-all duration-300 cursor-pointer">
                  +9779784563120
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-4 border-gray-400 gap-3 sm:gap-4 mt-8">
          {/* Copyright text */}
          <p className="text-base opacity-80 text-center sm:text-left">
            © 2025 Vexon, Inc. All Rights Reserved.
          </p>

          {/* Privacy policy and terms */}
          <div className="flex gap-2 sm:gap-4 text-base">
            <span className="hover:text-violet-500 opacity-80 transition-all duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="opacity-80">|</span>
            <span className="hover:text-violet-500 opacity-80 transition-all duration-300 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
