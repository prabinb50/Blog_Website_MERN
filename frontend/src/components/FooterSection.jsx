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
    <div className="bg-gray-50 h-full ">

      <div className="w-11/12 mx-auto px-6  pt-20 pb-8 space-y-16 ">

        <div className="  grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 md:gap-24 xl:gap-8 ">
          {/* left section */}
          <div className="flex flex-col gap-12  ">
            <Link to={"/"} className="cursor-pointer">
              {/* Footer logo */}
              <img src="/header-logo1.png" alt="Vexon Logo" className="h-8" />
            </Link>

            <p className=" opacity-60 leading-7">
              Vexon is your hub for the latest in digital innovation, technology
              trends, creative insights. Our mission is to empower creators,
              businesses, valuable resource.
            </p>

            <div className="flex items-center gap-2 xl:gap-4 lg:gap-1">
              <FaFacebookF
                size={40}
                className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 "
              />
              <FaLinkedinIn size={40}
                className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 " />
              <FaInstagram size={40}
                className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 " />
              <FaXTwitter size={40}
                className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 " />
            </div>
          </div>

          {/* center section */}
          <div className="flex flex-col gap-12   ">
            <p className="font-semibold text-xl opacity-95 whitespace-nowrap">
              Explore Categories
            </p>
            <div className="flex flex-col whitespace-nowrap gap-4">
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Digital Marketing
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Ai & Technology
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Content Strategy
              </Link>
              <Link
                to={"/blog"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Social Media
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                SEO & Analytics
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Design & Development
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-12  ">
            <p className="font-semibold text-xl opacity-95 whitespace-nowrap">
              Explore Categories
            </p>
            <div className="flex flex-col whitespace-nowrap gap-2">
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Home
              </Link>
              <Link
                to={"/blog"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Blog
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Features
              </Link>
              <Link
                to={"/contact"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Contact Us
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Privacy & policy
              </Link>
              <Link
                to={"/"}
                className="hover:text-violet-500 opacity-60 hover:translate-x-2 duration-500"
              >
                Terms of Services
              </Link>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-8 ">
            <p className="font-semibold text-xl opacity-95 whitespace-nowrap">
              Contact Us
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="opacity-80" strokeWidth={1.5} />
                <p className="hover:text-violet-500 opacity-60 duration-500 cursor-pointer">
                  support@vexon.com
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="opacity-80" size={28} strokeWidth={1.5} />
                <p className="hover:text-violet-500 opacity-60 duration-500 cursor-pointer">
                  Kathmandu,Nepal +0123, Bagmati Province N.O. : 3
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="opacity-80" strokeWidth={1.5} />
                <p className="hover:text-violet-500 opacity-60 duration-500 cursor-pointer">
                  +9779784563120
                </p>
              </div>
            </div>
          </div>
        </div>





        <div className="flex justify-between flex-col md:flex-row  items-center border-t pt-2 border-gray-400 gap-4">
          <p className="opacity-80 tracking-wide">
            © 2025 Vexon, Inc. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-violet-500 opacity-80 duration-500 cursor-pointer">  Privacy Policy</span> <span>|</span> <span className="hover:text-violet-500 opacity-80 duration-500 cursor-pointer">Terms & Conditions</span>
          </div>
        </div>

      </div>

    </div>
  );
}
