import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import FeedBlog1 from "./FeedBlog1";
import FeedBlog2 from "./FeedBlog2";
import FeedBlog3 from "./FeedBlog3";
import axios from "axios";
import { AnimatedFade } from "../AnimatedComponent";

export default function SingleFeedSection() {
  // state to track the current view 
  const [view, setView] = useState("one");

  // function to navigate to the previous view
  const goToPrevious = () => {
    if (view === "two") setView("one");
    else if (view === "three") setView("two");
  };

  // function to navigate to the next view
  const goToNext = () => {
    if (view === "one") setView("two");
    else if (view === "two") setView("three");
  };

  // state to store the fetched blogs
  const [blogs, setBlogs] = useState(null);

  // state for loading indicator
  const [isLoading, setIsLoading] = useState(false);

  // state for error handling
  const [error, setError] = useState(null);

  // function to fetch blogs from the server
  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
        timeout: 10000, // add timeout to prevent hanging connection
      });
      setBlogs(response.data.data); // set the fetched blogs to state
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setIsLoading(false);
      setError("Failed to load blogs. Please try again later.");
    }
  };

  // fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <AnimatedFade className="w-full" delay={0.1}>
      {/* error message */}
      {error && (
        <div className="w-11/12 mx-auto mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center justify-between">
          <p>{error}</p>
          <button
            onClick={fetchBlogs}
            className="text-sm bg-red-100 hover:bg-red-200 px-3 py-1 rounded"
          >
            Retry
          </button>
        </div>
      )}

      {/* loading indicator */}
      {isLoading ? (
        <div className="w-full flex justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <>
          {/* render content based on the current view */}
          <AnimatedFade delay={0.2}>
            {view === "one" && <FeedBlog1 blogs={blogs ? blogs.slice(0, 4) : []} />}
            {view === "two" && <FeedBlog2 blogs={blogs ? blogs.slice(4, 8) : []} />}
            {view === "three" && <FeedBlog3 blogs={blogs ? blogs.slice(8) : []} />}
          </AnimatedFade>

          {/* pagination controls */}
          <AnimatedFade className="w-11/12 mx-auto pt-8 space-x-4 flex items-center justify-center" delay={0.3}>
            {/* show chevronleft only if not on the first view */}
            {view !== "one" && (
              <ChevronLeft
                size={20}
                strokeWidth={1.5}
                onClick={goToPrevious}
                className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-gray-700"
              />
            )}

            {/* pagination box for view one */}
            <span
              onClick={() => setView("one")}
              className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "one" ? "bg-purple-500 text-white" : ""
                }`}
            >
              1
            </span>

            {/* pagination box for view two */}
            <span
              onClick={() => setView("two")}
              className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "two" ? "bg-purple-500 text-white" : ""
                }`}
            >
              2
            </span>

            {/* pagination box for view three */}
            <span
              onClick={() => setView("three")}
              className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "three" ? "bg-purple-500 text-white" : ""
                }`}
            >
              3
            </span>

            {/* show chevronright only if not on the last view */}
            {view !== "three" && (
              <ChevronRight
                size={20}
                strokeWidth={1.5}
                onClick={goToNext}
                className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-gray-700"
              />
            )}
          </AnimatedFade>
        </>
      )}
    </AnimatedFade>
  );
}