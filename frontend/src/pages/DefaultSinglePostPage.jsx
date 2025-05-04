import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import MoreBlogsSinglePost from "../components/moreBlogsSinglePost";

export default function DefaultSinglePostPage() {

  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display a toast notification
    toast("Thank you for your message! We will get back to you soon.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setPhone("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Light purple background for title section */}
      <div className="bg-[#f6f2ff] w-full">
        <div className="flex items-center justify-center pt-20 pb-2 overflow-x-auto px-4">
          {/* Breadcrumb navigation */}
          <NavLink to={"/"} className="cursor-pointer ">
            Home
          </NavLink>
          <ChevronRight className="w-5" />
          <p className="whitespace-nowrap ">Blog</p>
          <ChevronRight className="w-5" />
          <p className="font-bold whitespace-nowrap">Blog Without Sidebar</p>
        </div>

        {/* Page title */}
        <p className="text-center font-bold text-4xl md:text-5xl pb-20 px-4">
          Blog Without Sidebar
        </p>
      </div>

      {/* Main Content Section */}
      <div className="w-[90%] sm:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto pt-15 md:pt-20 pb-15 pb:pb-20">
        {/* Post Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <div className="flex items-center mb-3 sm:mb-0">
            {/* Author profile image and name */}
            <img
              src="/blog1-author1.png"
              alt="Author"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3 object-cover"
            />

            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              Kimberly Mastrangelo
            </span>
          </div>

          <div className="text-xs sm:text-sm text-gray-500">
            {/* Post date and read time */}
            <span>Oct 26, 2025</span>

            <span className="mx-2 inline">|</span>

            <span>3 min read</span>
          </div>
        </header>

        {/* Post Content */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:gap-4">
          {/* Post title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2 sm:mb-4">
            The Art of Building a Strong Personal Brand on Social Media
          </h1>

          {/* Post description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            In today’s digital age, building a strong personal brand on social
            media is more crucial than ever. A compelling personal brand not
            only establishes your credibility and trustworthiness but also opens
            doors to new opportunities, connects you with like-minded
            individuals, ...
          </p>

          {/* Post image */}
          <div className="my-2 sm:my-4">
            <img
              src="/blog-details-image1.png"
              alt="blog-details"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Additional content */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            In today's digital age, building a strong personal brand on social
            media is more crucial than ever. A compelling personal brand not
            only establishes your credibility and trustworthiness but also opens
            doors to new opportunities, connects you with like-minded
            individuals, and can even generate income. With billions of users on
            social media platforms, carving out a unique space for yourself may
            seem daunting, but with the right strategies, you can create a brand
            that resonates.
          </p>
        </div>

        {/* Additional Sections */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3">
          Understanding Your Personal Brand
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Your personal brand is a reflection of who you are, what you stand
          for, and how you want others to perceive you. Before diving into the
          social media world, take some time to reflect on your values,
          interests, and goals. Ask yourself: What do I want to be known for?
          What are my unique strengths and passions? Who is my target audience?
        </p>

        {/* Responsive Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <img
            src="/blog-details-image2.png"
            alt=""
            className="rounded-lg object-cover w-full h-auto"
          />
          <img
            src="/blog-details-image3.png"
            alt=""
            className="rounded-lg object-cover w-full h-auto "
          />
        </div>

        {/* Quote Section */}
        <div className="gap-3 grid grid-cols-1 border border-gray-300 rounded-md bg-purple-800 mt-4 sm:mt-6 p-4 sm:p-6">
          <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            <q>
              Your personal brand is the unique story that only you can tell.
              Own it, share it, and let it shine.
            </q>
          </span>
          <span className="text-white text-sm sm:text-base">Henry Fawyel</span>
        </div>

        {/* Tags and Socials */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-6 md:py-8 gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Tags */}
            <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Tags:</p>
            <div className="text-xs sm:text-sm text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              Social Media
            </div>
            <div className="text-xs sm:text-sm text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              UI/UX
            </div>
            <div className="text-xs sm:text-sm text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              Business
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
            {/* Social media icons */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Socials:</p>
            <FaFacebookF
              size={30}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
            />
            <FaInstagram
              size={30}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
            />
            <FaLinkedinIn
              size={30}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Leave a Reply</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Provide clear contact information, including phone number, email,
            and address.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type="text"
                placeholder="First Name"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                type="text"
                placeholder="Last Name"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="text"
                placeholder="Phone"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              type="text"
              placeholder="Subject"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
              rows="4"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 bg-purple-600 text-white py-2.5 rounded-lg font-bold hover:bg-purple-700 transition text-sm sm:text-base"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* More Blogs Section */}
      <MoreBlogsSinglePost />
    </div>
  );
}
