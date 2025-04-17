import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import MoreBlogsSinglePost from "../components/moreBlogsSinglePost";

export default function SinglePostPage() {
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
    <div>
      {/* Header Section */}
      <div className="bg-[#f6f2ff] space-y-4">
        {/* Breadcrumb navigation */}
        <div className="flex items-center justify-center pt-20">
          <NavLink to={"/"} className="cursor-pointer">
            Home
          </NavLink>
          <ChevronRight />
          <p>Blog</p>
          <ChevronRight />
          <p className="font-bold">Blog Without Sidebar</p>
        </div>

        {/* Page title */}
        <p className="text-center font-bold text-4xl md:text-6xl pb-20">
          Blog Without Sidebar
        </p>
      </div>

      {/* Main Content Section */}
      <div className="w-11/12 lg:w-7/12 mx-auto p-4 md:p-6">
        {/* Post Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/blog1-author1.png"
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-semibold text-gray-800">
              Kimberly Mastrangelo
            </span>
          </div>
          <div className="text-sm text-gray-500">
            <span>Oct 26, 2025</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>3 min read</span>
          </div>
        </header>

        {/* Post Content */}
        <div className="mb-6 grid grid-cols-1 gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            The Art of Building a Strong Personal Brand on Social Media
          </h1>
          <p className="text-gray-700 leading-relaxed">
            In today’s digital age, building a strong personal brand on social
            media is more crucial than ever. A compelling personal brand not
            only establishes your credibility and trustworthiness but also opens
            doors to new opportunities, connects you with like-minded
            individuals, ...
          </p>
          <img
            src="/blog-details-image1.png"
            alt="blog-details"
            className="rounded-lg object-cover"
          />
          <p className="text-gray-700 leading-relaxed">
            In today’s digital age, building a strong personal brand on social
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
        <h2 className="text-2xl md:text-3xl font-semibold">
          Understanding Your Personal Brand
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your personal brand is a reflection of who you are, what you stand
          for, and how you want others to perceive you. Before diving into the
          social media world, take some time to reflect on your values,
          interests, and goals. Ask yourself: What do I want to be known for?
          What are my unique strengths and passions? Who is my target audience?
        </p>

        {/* Responsive Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <img
            src="/blog-details-image2.png"
            alt=""
            className="rounded-lg object-cover"
          />
          <img
            src="/blog-details-image3.png"
            alt=""
            className="rounded-lg object-cover"
          />
        </div>

        {/* Quote Section */}
        <div className="gap-4 grid grid-cols-1 border border-gray-300 rounded-md bg-purple-800 mt-6 p-6">
          <span className="text-white text-lg md:text-2xl font-semibold">
            <q>
              Your personal brand is the unique story that only you can tell.
              Own it, share it, and let it shine.
            </q>
          </span>
          <span className="text-white">Henry Fawyel</span>
        </div>

        {/* Tags and Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 gap-4">
          <div className="flex items-center gap-4">
            <p className="font-semibold text-lg md:text-2xl">Tags:</p>
            <div className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              Social Media
            </div>
            <div className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              UI/UX
            </div>
            <div className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              Business
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-lg md:text-2xl font-semibold">Socials:</p>
            <FaFacebookF
              size={40}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
            />
            <FaInstagram
              size={40}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
            />
            <FaLinkedinIn
              size={40}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Leave a Reply</h3>
          <p className="text-gray-600 mb-6">
            Provide clear contact information, including phone number, email,
            and address.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="text"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-30 bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition"
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