import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import MoreBlogsSinglePost from "../components/moreBlogsSinglePost";
import { AnimatedText, AnimatedCard, AnimatedFade } from "../components/AnimatedComponent";

export default function DefaultSinglePostPage() {
  // state variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // display a toast notification
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
    // reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setPhone("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#f6f2ff] w-full">
        <AnimatedFade className="flex items-center justify-center pt-20 pb-2 overflow-x-auto px-4" delay={0.1}>
          <NavLink to={"/"} className="cursor-pointer ">
            Home
          </NavLink>

          <ChevronRight className="w-5" />

          <p className="whitespace-nowrap ">Blog</p>

          <ChevronRight className="w-5" />

          <p className="font-bold whitespace-nowrap">Blog Without Sidebar</p>
        </AnimatedFade>

        {/* page title */}
        <AnimatedText className="text-center font-bold text-4xl md:text-5xl pb-20 px-4" delay={0.2}>
          Blog Without Sidebar
        </AnimatedText>
      </div>

      {/* main content section */}
      <div className="w-[90%] sm:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto pt-13 sm:pt-16 md:pt-20 pb-13 sm:pb-16 md:pb-20">
        {/* post header */}
        <AnimatedFade className="flex justify-between items-center mb-4 sm:mb-6" delay={0.3}>
          <div className="flex items-center ">
            {/* author profile image and name */}
            <img
              src="/blog1-author1.png"
              alt="Author"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3 object-cover"
            />

            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              Prabin Joshi
            </span>
          </div>

          <div className="text-sm sm:text-base text-gray-500 ">
            {/* post date and read time */}
            <span>Oct 26, 2025</span>

            <span className="mx-1 inline ">|</span>

            <span>3 min read</span>
          </div>
        </AnimatedFade>

        {/* post content */}
        <AnimatedCard className="mb-6 grid grid-cols-1 gap-3 sm:gap-4" delay={0.4}>
          {/* post title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2 sm:mb-4 text-center">
            <span className="inline sm:inline-block sm:w-full mb-2">The Art of Building a Strong Personal Brand</span>

            <span className="inline sm:inline-block sm:w-full"> on Social Media</span>
          </h1>

          {/* post description */}
          {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
            <span className="inline sm:inline-block sm:w-full">In today's digital age, building a strong personal brand on social
              media is more crucial than ever. A compelling personal brand not
              only establishes your credibility and trustworthiness but also opens</span>

            <span className="inline sm:inline-block sm:w-full"> doors to new opportunities, connects you with like-minded individuals,</span>
          </p> */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
            This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.
          </p>

          {/* post image */}
          <div className="my-2 sm:my-4">
            <img
              src="/blog-details-image1.png"
              alt="blog-details"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* additional content */}
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
        </AnimatedCard>

        {/* section heading */}
        <AnimatedText className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3" delay={0.5}>
          Understanding Your Personal Brand
        </AnimatedText>

        {/* section content */}
        <AnimatedText className="text-sm sm:text-base text-gray-700 leading-relaxed" delay={0.5}>
          Your personal brand is a reflection of who you are, what you stand
          for, and how you want others to perceive you. Before diving into the
          social media world, take some time to reflect on your values,
          interests, and goals. Ask yourself: What do I want to be known for?
          What are my unique strengths and passions? Who is my target audience?
        </AnimatedText>

        {/* images  */}
        <AnimatedCard className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6" delay={0.6}>
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
        </AnimatedCard>

        {/* quote section  */}
        <AnimatedCard
          className="gap-3 grid grid-cols-1 border border-gray-300 rounded-md bg-purple-800 mt-4 sm:mt-6 p-4 sm:p-6"
          delay={0.7}>
          <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            <q>
              Your personal brand is the unique story that only you can tell.
              Own it, share it, and let it shine.
            </q>
          </span>

          <span className="text-white text-sm sm:text-base">Henry Fawyel</span>
        </AnimatedCard>

        {/* tags and socials */}
        <AnimatedFade
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-6 md:py-8 gap-4"
          delay={0.8}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* tags */}
            <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Tags:</p>

            <div className="text-sm sm:text-base text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              Social Media
            </div>

            <div className="text-sm sm:text-base text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              UI/UX
            </div>

            <div className="text-sm sm:text-base text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-1.5 sm:p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700">
              Business
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
            {/* social media icons */}
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
        </AnimatedFade>

        {/* comment section with card animation */}
        <AnimatedCard
          className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-lg shadow-md"
          delay={0.9}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Leave a Reply</h3>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Provide clear contact information, including phone number, email,
            and address.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type="text"
                placeholder="First Name"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
              />

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                type="text"
                placeholder="Last Name"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="text"
                placeholder="Phone"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
              />
            </div>

            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              type="text"
              placeholder="Subject"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
              rows="4"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 bg-purple-600 text-white py-2.5 rounded-lg font-bold hover:bg-purple-700 transition text-sm sm:text-base"
            >
              Get Started
            </button>
          </form>
        </AnimatedCard>
      </div>

      {/* more blogs section */}
      <MoreBlogsSinglePost />
    </div >
  );
}