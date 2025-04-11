import React, { useState } from "react";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import BlogPageOne from "../components/BlogPageOne";
import BlogPageTwo from "../components/BlogPageTwo";

export default function BlogPage() {
  // State to manage the current view
  const [view, setView] = useState("one");

  return (
    <div>
      <div className="bg-[#f6f2ff] space-y-4">
        {/* Breadcrumb navigation */}
        <div className="flex items-center justify-center pt-20">
          <NavLink to={"/"} className="cursor-pointer">
            Home
          </NavLink>
          <ChevronRight />
          <p>Blog</p>
          <ChevronRight />
          <p className="font-bold">Blog Post 01</p>
        </div>

        {/* Page title */}
        <p className="text-center font-bold text-6xl pb-20">Standard</p>
      </div>

      <div className="w-11/12 mx-auto pt-20 space-x-4 flex items-center justify-center">
        {view === "two" && (
          <ChevronRight
            onClick={() => setView("one")}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-black"
          />
        )}

        <span
          onClick={() => setView("one")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "one" ? "bg-purple-500 text-white" : ""
            }`}
        >
          1
        </span>

        <span
          onClick={() => setView("two")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${view === "two" ? "bg-purple-500 text-white" : ""
            }`}
        >
          2
        </span>

        {view === "one" && (
          <ChevronRight
            onClick={() => setView("two")}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-black"
          />
        )}
      </div>


      {/* Conditionally render the sections based on the selected view */}
      {view === "one" ? <BlogPageOne /> : <BlogPageTwo />}
    </div>
  );
}