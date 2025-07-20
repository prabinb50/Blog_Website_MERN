import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { ChevronRight, RefreshCw } from "lucide-react";
import BlogPageOne from "../components/BlogPageOne";
import BlogPageTwo from "../components/BlogPageTwo";
import axios from "axios";
import { AnimatedFade, AnimatedText, AnimatedCard } from "../components/AnimatedComponent";
import { motion } from "framer-motion";

export default function BlogPage() {
  // state to manage the current view (pagination)
  const [view, setView] = useState("one");

  // state to store the fetched blogs
  const [blogs, setBlogs] = useState(null);

  // state for error handling and loading
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // track loading start time for minimum display duration
  const [loadingStartTime, setLoadingStartTime] = useState(null);

  // function to fetch blogs from the server
  const fetchBlogs = async () => {
    setIsLoading(true);
    setLoadingStartTime(Date.now()); // record start time
    setError(null); // clear any previous errors

    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
        timeout: 10000, // add timeout to prevent hanging connection

        // retry logic
        retry: 3,
        retryDelay: 1000,
      });
      setBlogs(response.data.data);

      // calculate elapsed time & enforce minimum loading duration
      const elapsedTime = Date.now() - loadingStartTime;
      const minLoadingTime = 1000;

      if (elapsedTime < minLoadingTime) {
        setTimeout(() => {
          setIsLoading(false);
        }, minLoadingTime - elapsedTime);
      } else {
        setIsLoading(false);
      }

    } catch (error) {
      console.error("Error fetching blogs:", error);

      // calculate elapsed time and enforce minimum loading duration even on error
      const elapsedTime = Date.now() - loadingStartTime;
      const minLoadingTime = 1500;

      if (elapsedTime < minLoadingTime) {
        setTimeout(() => {
          setIsLoading(false);
          // handle specific network errors
          handleErrorMessage(error);
        }, minLoadingTime - elapsedTime);
      } else {
        setIsLoading(false);
        // handle specific network errors
        handleErrorMessage(error);
      }
    }
  };

  // helper function to handle different error types
  const handleErrorMessage = (error) => {
    if (error.code === 'ECONNRESET' || error.code === 'ECONNABORTED') {
      setError("Connection to server failed. Please check your internet connection and try again.");
    } else if (error.response && error.response.status === 404) {
      setError("Couldn't find any blogs. They might have been moved or deleted.");
    } else if (error.response && error.response.status >= 500) {
      setError("Our server is currently having issues. Please try again later.");
    } else {
      setError("Something went wrong while loading blog posts. Please try again.");
    }
  };

  // fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
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
          className="w-11/12 mx-auto bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8 flex items-center justify-between"
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
              className="flex items-center gap-1 mr-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-1 px-3 rounded text-sm transition-colors duration-200"
            >
              <RefreshCw size={14} />
              <span>Retry</span>
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

      {/* skeleton loaders during loading */}
      {isLoading && (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-13 sm:mt-16 md:mt-20 mb-13 sm:mb-16 md:mb-20">
          {Array(6).fill().map((_, index) => (
            <AnimatedCard
              key={`skeleton-${index}`}
              className="border border-gray-200 rounded-md overflow-hidden"
              delay={0.1 + (index % 6) * 0.05}
            >
              <div className="w-full flex flex-col gap-4">
                {/* skeleton image */}
                <div className="h-48 bg-gray-200 animate-pulse rounded-t-md"></div>

                {/* skeleton content */}
                <div className="space-y-4 px-4 pb-3">
                  {/* category and read time */}
                  <div className="flex justify-between">
                    <div className="h-5 bg-gray-200 animate-pulse rounded w-24"></div>
                    <div className="h-5 bg-gray-200 animate-pulse rounded w-16"></div>
                  </div>

                  {/* title */}
                  <div className="h-7 bg-gray-200 animate-pulse rounded w-full"></div>

                  {/* description */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  </div>

                  {/* author and date */}
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gray-200 animate-pulse rounded-full"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-20"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-4"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-40"></div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      )}

      {/* pagination controls - only show when not loading */}
      {!isLoading && blogs && blogs.length > 0 && (
        <AnimatedFade className="w-11/12 mx-auto pt-13 sm:pt-16 md:pt-20 space-x-4 flex items-center justify-center" delay={0.3}>
          {/* chevron to navigate to the first page */}
          {view === "two" && (
            <ChevronRight
              onClick={() => setView("one")}
              className="rotate-180 border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-black"
            />
          )}

          {/* button for the first page */}
          <span
            onClick={() => setView("one")}
            className={`border border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "one" ? "bg-purple-500 text-white" : "bg-gray-200"}`}>
            1
          </span>

          {/* button for the second page */}
          <span
            onClick={() => setView("two")}
            className={`border border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "two" ? "bg-purple-500 text-white" : "bg-gray-200"}`}>
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
      )}

      {/* no blogs found message */}
      {!isLoading && (!blogs || blogs.length === 0) && !error && (
        <div className="w-11/12 mx-auto text-center py-16">
          <AnimatedText className="text-gray-500 text-xl" delay={0.3}>
            No blog posts found.
          </AnimatedText>
          <button
            onClick={fetchBlogs}
            className="mt-4 flex items-center gap-2 mx-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
        </div>
      )}

      {/* conditionally render the blog pages based on the selected view */}
      {!isLoading && blogs && blogs.length > 0 && (
        view === "one" ? (
          <BlogPageOne blogs={blogs.slice(0, 6)} /> // render the first page of blogs
        ) : (
          <BlogPageTwo blogs={blogs.slice(6)} /> // render the second page of blogs
        )
      )}
    </div>
  );
}