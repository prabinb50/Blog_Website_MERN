import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AnimatedText, AnimatedCard, AnimatedFade } from "./AnimatedComponent";

export default function FooterSection() {
  return (
    <div className="bg-gray-50 w-full">
      <div className="lg:w-11/12 mx-auto px-4 sm:px-7 lg:px-0 pt-13 sm:pt-15 md:pt-20 pb-4 space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 xl:gap-8">
          {/* left section: logo, description, and social media links */}
          <AnimatedCard className="flex flex-col gap-6 sm:gap-8 lg:gap-10" delay={0.1}>
            {/* footer logo */}
            <Link to={"/"} className="cursor-pointer inline-block">
              <img
                src="/header-logo1.png"
                alt="Vexon Logo"
                className="h-6 sm:h-8"
              />
            </Link>

            {/* company description */}
            <p className="opacity-70 leading-6 sm:leading-7">
              Vexon is your hub for the latest in digital innovation, technology
              trends, creative insights. Our mission is to empower creators,
              businesses, valuable resource.
            </p>

            {/* social media icons */}
            <AnimatedFade className="flex items-center gap-2 sm:gap-3" delay={0.2}>
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter].map((Icon, index) => (
                <Icon
                  key={index}
                  size={32}
                  className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 transition-all duration-300"
                />
              ))}
            </AnimatedFade>
          </AnimatedCard>

          {/* center section: explore categories */}
          <AnimatedCard className="flex flex-col gap-4 sm:gap-6 lg:gap-10" delay={0.2}>
            <AnimatedText className="font-semibold text-lg sm:text-xl opacity-95" delay={0.25}>
              Explore Categories
            </AnimatedText>

            {/* list of categories */}
            <div className="flex flex-col gap-3 sm:gap-4 opacity-70">
              {[
                "Digital Marketing",
                "Ai & Technology",
                "Content Strategy",
                "Social Media",
                "SEO & Analytics",
                "Design & Development"
              ].map((category, index) => (
                <AnimatedText
                  key={index}
                  delay={0.3 + index * 0.05}
                  className="text-base hover:text-violet-500 opacity-60 hover:translate-x-2 transition-all duration-300"
                >
                  <Link to={"/" + (index === 3 ? "blog" : "")}>
                    {category}
                  </Link>
                </AnimatedText>
              ))}
            </div>
          </AnimatedCard>

          {/* center section: quick links */}
          <AnimatedCard className="flex flex-col gap-4 sm:gap-6 lg:gap-10" delay={0.3}>
            <AnimatedText className="font-semibold text-lg sm:text-xl opacity-95" delay={0.35}>
              Quick Links
            </AnimatedText>

            {/* list of quick links */}
            <div className="flex flex-col gap-3 sm:gap-4 opacity-70">
              {[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: "Categories", path: "/categories" },
                { name: "Single Post", path: "/single-post" },
                { name: "Contact Us", path: "/contact" },
                { name: "Terms of Services", path: "/" }
              ].map((link, index) => (
                <AnimatedText
                  key={index}
                  delay={0.4 + index * 0.05}
                  className="text-base hover:text-violet-500 opacity-60 hover:translate-x-2 transition-all duration-300"
                >
                  <Link to={link.path}>{link.name}</Link>
                </AnimatedText>
              ))}
            </div>
          </AnimatedCard>

          {/* right section: contact information */}
          <AnimatedCard className="flex flex-col gap-4 sm:gap-6 lg:gap-10" delay={0.4}>
            <AnimatedText className="font-semibold text-lg sm:text-xl opacity-95" delay={0.45}>
              Contact Us
            </AnimatedText>

            {/* contact details */}
            <div className="space-y-4">
              <AnimatedFade className="flex items-center gap-3" delay={0.5}>
                <Mail className="opacity-80 flex-shrink-0" size={20} strokeWidth={1.5} />

                <p className="text-base hover:text-violet-500 opacity-70 transition-all duration-300 cursor-pointer">
                  support@vexon.com
                </p>
              </AnimatedFade>

              <AnimatedFade className="flex items-start sm:items-center gap-3" delay={0.55}>
                <MapPin className="opacity-80 flex-shrink-0 mt-1 sm:mt-0" size={20} strokeWidth={1.5} />
                <p className="text-base hover:text-violet-500 opacity-70 transition-all duration-300 cursor-pointer">
                  Kathmandu, Nepal
                </p>
              </AnimatedFade>

              <AnimatedFade className="flex items-center gap-3" delay={0.6}>
                <Phone className="opacity-80 flex-shrink-0" size={20} strokeWidth={1.5} />
                <p className="text-base hover:text-violet-500 opacity-70 transition-all duration-300 cursor-pointer">
                  +9779784563120
                </p>
              </AnimatedFade>
            </div>
          </AnimatedCard>
        </div>

        {/* footer bottom section */}
        <AnimatedFade className="flex flex-col sm:flex-row justify-between items-center border-t pt-4 border-gray-400 gap-3 sm:gap-4 mt-8" delay={0.7}>
          {/* copyright text */}
          <p className="text-base opacity-80 text-center sm:text-left">
            © 2025 Vexon, Inc. All Rights Reserved.
          </p>

          {/* privacy policy and terms */}
          <div className="flex gap-2 sm:gap-4 text-base">
            <span className="hover:text-violet-500 opacity-80 transition-all duration-300 cursor-pointer">
              Privacy Policy
            </span>

            <span className="opacity-80">|</span>

            <span className="hover:text-violet-500 opacity-80 transition-all duration-300 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </AnimatedFade>
      </div>
    </div>
  );
}