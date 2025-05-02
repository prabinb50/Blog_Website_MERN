import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import FeedBlog1 from "./FeedBlog1";
import FeedBlog2 from "./FeedBlog2";
import FeedBlog3 from "./FeedBlog3";
import axios from "axios";

export default function SingleFeedSection() {
  const [view, setView] = useState("one"); // State to track the current view (one, two, three)

  // Function to navigate to the previous view
  const goToPrevious = () => {
    if (view === "two") setView("one");
    else if (view === "three") setView("two");
  };

  // Function to navigate to the next view
  const goToNext = () => {
    if (view === "one") setView("two");
    else if (view === "two") setView("three");
  };

  const [blogs, setBlogs] = useState(null); // State to store the fetched blogs

  // Function to fetch blogs from the server
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
      setBlogs(response.data.data); // Set the fetched blogs to state
    } catch (error) {
      console.log(error);
      console.log("Something went wrong."); // Log error if fetching fails
    }
  };

  // Fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {/* Render content based on the current view */}
      {view === "one" && <FeedBlog1 blogs={blogs ? blogs.slice(0, 4) : []} />}
      {view === "two" && <FeedBlog2 blogs={blogs ? blogs.slice(4, 8) : []} />}
      {view === "three" && <FeedBlog3 blogs={blogs ? blogs.slice(8) : []} />}

      <div className="w-11/12 mx-auto pt-8 space-x-4 flex items-center justify-center">
        {/* Show ChevronLeft only if not on the first view */}
        {view !== "one" && (
          <ChevronLeft
            size={20}
            strokeWidth={1.5}
            onClick={goToPrevious}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-gray-700"
          />
        )}

        {/* Pagination box for view one */}
        <span
          onClick={() => setView("one")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "one" ? "bg-purple-500 text-white" : ""
            }`}
        >
          1
        </span>

        {/* Pagination box for view two */}
        <span
          onClick={() => setView("two")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "two" ? "bg-purple-500 text-white" : ""
            }`}
        >
          2
        </span>

        {/* Pagination box for view three */}
        <span
          onClick={() => setView("three")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "three" ? "bg-purple-500 text-white" : ""
            }`}
        >
          3
        </span>

        {/* Show ChevronRight only if not on the last view */}
        {view !== "three" && (
          <ChevronRight
            size={20}
            strokeWidth={1.5}
            onClick={goToNext}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-gray-700"
          />
        )}
      </div>
    </div>
  );
}
