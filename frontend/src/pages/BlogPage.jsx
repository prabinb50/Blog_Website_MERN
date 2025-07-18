import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import BlogPageOne from "../components/BlogPageOne";
import BlogPageTwo from "../components/BlogPageTwo";
import axios from "axios";
import { AnimatedFade, AnimatedText } from "../components/AnimatedComponent";

export default function BlogPage() {
  // state to manage the current view (pagination)
  const [view, setView] = useState("one");

  // state to store the fetched blogs
  const [blogs, setBlogs] = useState(null);

  // function to fetch blogs from the server
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong to fetch blogs.");
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

          <p className="font-bold whitespace-nowrap">Blog Post 01</p>
        </AnimatedFade>

        {/* page title */}
        <AnimatedText className="text-center font-bold text-5xl md:text-6xl pb-20 px-4" delay={0.2}>
          Standard
        </AnimatedText>
      </div>

      {/* pagination controls */}
      <AnimatedFade className="w-11/12 mx-auto pt-20 space-x-4 flex items-center justify-center" delay={0.3}>
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