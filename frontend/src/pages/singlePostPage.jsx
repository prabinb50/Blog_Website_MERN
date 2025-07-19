import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import MoreBlogsSinglePost from "../components/moreBlogsSinglePost";
import { AnimatedText, AnimatedCard, AnimatedFade } from "../components/AnimatedComponent";

export default function SinglePostPage() {
  // get the blog id from the URL
  const location = useLocation();
  const blogs_id = location.pathname.split("/")[2];

  // State to store single post data
  const [singlePost, setSinglePost] = useState();

  // Add loading state
  const [loading, setLoading] = useState(true);

  // Add error state
  const [error, setError] = useState(null);

  // Fetch single post data from the backend
  const fetchSinglePost = async () => {
    try {
      setLoading(true);
      const startTime = Date.now();

      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs/${blogs_id}`);
      setSinglePost(response.data.data);
      setError(null);

      // ensure loading is shown for at least 1 seconds 
      const elapsedTime = Date.now() - startTime;
      const minLoadingTime = 1000;

      if (elapsedTime < minLoadingTime) {
        setTimeout(() => {
          setLoading(false);
        }, minLoadingTime - elapsedTime);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching single post:", error);
      setError("Failed to load blog post. Please try again later.");
      setLoading(false);
    }
  };

  // Fetch single post data when the component mounts or when blogs_id changes
  useEffect(() => {
    fetchSinglePost();
  }, [blogs_id]);

  // Rest of the component remains unchanged
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

      {/* main Content section */}
      <div className="w-[90%] sm:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto pt-13 sm:pt-16 md:pt-20 pb-13 sm:pb-16 md:pb-20">
        {loading ? (
          // Loading indicator for the blog post
          <div className="space-y-6">
            <div className="flex justify-between items-center animate-pulse">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-24 ml-3"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>

            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-64 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        ) : error ? (
          // Error message
          <div className="text-center py-10">
            <p className="text-red-500 text-lg">{error}</p>
            <button
              onClick={fetchSinglePost}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          // Actual content when loaded
          <>
            {/* post header */}
            <AnimatedFade className="flex justify-between items-center mb-4 sm:mb-6" delay={0.3}>
              <div className="flex items-center">
                {/* author profile image and name */}
                <img
                  src={singlePost?.profile}
                  alt="Author"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3 object-cover"
                />

                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {singlePost?.username}
                </span>
              </div>

              <div className="text-sm sm:text-base text-gray-500 ">
                {/* post date and read time */}
                <span>
                  {singlePost?.date && new Date(singlePost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                <span className="mx-1 inline">|</span>

                <span>{singlePost?.readTime}</span>
              </div>
            </AnimatedFade>

            {/* Post Content */}
            <AnimatedCard className="mb-6 grid grid-cols-1 gap-3 sm:gap-4" delay={0.4}>
              {/* Post title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2 sm:mb-4 text-center">
                {singlePost?.title}
              </h1>

              {/* Post description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                {singlePost?.description}
              </p>

              {/* Post image */}
              <div className="my-2 sm:my-4">
                <img
                  src={singlePost?.image}
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
            </AnimatedCard>

            {/* Additional Sections */}
            <AnimatedText className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-3" delay={0.5}>
              Understanding Your Personal Brand
            </AnimatedText>

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

            {/* comment section with  */}
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
          </>
        )}
      </div>

      {/* more blogs section */}
      <MoreBlogsSinglePost />
    </div >
  );
}