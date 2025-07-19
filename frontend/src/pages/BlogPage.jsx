import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import BlogPageOne from "../components/BlogPageOne";
import BlogPageTwo from "../components/BlogPageTwo";
import axios from "axios";
import { AnimatedFade, AnimatedText } from "../components/AnimatedComponent";
import { motion } from "framer-motion";

export default function BlogPage() {
  // state to manage the current view (pagination)
  const [view, setView] = useState("one");

  // state to store the fetched blogs
  const [blogs, setBlogs] = useState(null);

  // state for error handling and loading
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // function to fetch blogs from the server
  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null); // clear any previous errors

    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
        timeout: 10000, // add timeout to prevent hanging connection

        // retry logic
        retry: 3,
        retryDelay: 1000,
      });
      setBlogs(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setIsLoading(false);

      // handle specific network errors
      if (error.code === 'ECONNRESET' || error.code === 'ECONNABORTED') {
        setError("Connection to server failed. Please check your internet connection and try again.");
      } else if (error.response && error.response.status === 404) {
        setError("Couldn't find any blogs. They might have been moved or deleted.");
      } else if (error.response && error.response.status >= 500) {
        setError("Our server is currently having issues. Please try again later.");
      } else {
        setError("Something went wrong while loading blog posts. Please try again.");
      }
    }
  };

  // fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="bg-[#f6f2ff] w-full">
        <AnimatedFade className="flex items-center justify-center pt-20 pb-2 overflow-x-auto px-4" delay={0.1}>
          <NavLink to={"/"} className="cursor-pointer">
            Home
          </NavLink>

          <ChevronRight className="w-5 " />

          <p className="whitespace-nowrap">Blog</p>

          <ChevronRight />

          <p className="font-bold whitespace-nowrap">Blog Post</p>
        </AnimatedFade>

        {/* page title */}
        <AnimatedText className="text-center font-bold text-5xl md:text-6xl pb-20 px-4" delay={0.2}>
          Standard
        </AnimatedText>
      </div>

      {/* error message */}
      {error && (
        <motion.div
          className="w-11/12 mx-auto bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>

            <p>{error}</p>

          </div>
          <div className="flex">
            <button
              onClick={() => fetchBlogs()}
              className="mr-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-1 px-3 rounded text-sm transition-colors duration-200"
            >
              Retry
            </button>

            <button
              onClick={() => setError(null)}
              className="text-red-500 hover:text-red-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      {/* loading indicator */}
      {isLoading && (
        <div className="w-11/12 mx-auto flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}

      {/* pagination controls */}
      <AnimatedFade className="w-11/12 mx-auto pt-13 sm:pt-16 md:pt-20 space-x-4 flex items-center justify-center" delay={0.3}>
        {/* chevron to navigate to the first page */}
        {view === "two" && (
          <ChevronRight
            onClick={() => setView("one")}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-black"
          />
        )}

        {/* button for the first page */}
        <span
          onClick={() => setView("one")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "one" ? "bg-purple-500 text-white" : ""
            }`}>
          1
        </span>

        {/* button for the second page */}
        <span
          onClick={() => setView("two")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "two" ? "bg-purple-500 text-white" : ""
            }`}>
          2
        </span>

        {/* chevron to navigate to the second page */}
        {view === "one" && (
          <ChevronRight
            onClick={() => setView("two")}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-black"
          />
        )}
      </AnimatedFade>

      {/* conditionally render the sections based on the selected view */}
      {view === "one" ? (
        <BlogPageOne blogs={blogs ? blogs.slice(0, 6) : []} /> // render the first page of blogs
      ) : (
        <BlogPageTwo blogs={blogs ? blogs.slice(6) : []} /> // render the second page of blogs
      )}
    </div>
  );
}