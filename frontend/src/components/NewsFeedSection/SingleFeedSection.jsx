import React, { useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";
import FeedBlog1 from "./FeedBlog1";
import FeedBlog2 from "./FeedBlog2";
import FeedBlog3 from "./FeedBlog3";

export default function SingleFeedSection() {
  const [view, setView] = useState("one");

  //
  const goToPrevious = () => {
    if (view === "two") setView("one");
    else if (view === "three") setView("two");
  };

  const goToNext = () => {
    if (view === "one") setView("two");
    else if (view === "two") setView("three");
  };

  return (
    <div>
      {/* Render content */}
      {view === "one" && <FeedBlog1 />}
      {view === "two" && <FeedBlog2 />}
      {view === "three" && <FeedBlog3 />}

      <div className="w-11/12 mx-auto pt-8 space-x-4 flex items-center justify-center">
        {/* Show ChevronLeft only if not on first view */}
        {view !== "one" && (
          <ChevronLeft
            size={20}
            strokeWidth={1.5}
            onClick={goToPrevious}
            className="border bg-gray-200 border-gray-200 h-14 w-14 text-center cursor-pointer text-sm text-gray-700"
          />
        )}

        {/* box 1 */}
        <span
          onClick={() => setView("one")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${
            view === "one" ? "bg-purple-500 text-white" : ""
          }`}
        >
          1
        </span>

        {/* box 2 */}
        <span
          onClick={() => setView("two")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${
            view === "two" ? "bg-purple-500 text-white" : ""
          }`}
        >
          2
        </span>

        {/* box 3 */}
        <span
          onClick={() => setView("three")}
          className={`border bg-gray-200 border-gray-200 px-6 py-4 font-bold cursor-pointer ${
            view === "three" ? "bg-purple-500 text-white" : ""
          }`}
        >
          3
        </span>

        {/* Show ChevronRight only if not on last view */}
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
