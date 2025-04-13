import { Clock } from "lucide-react";
import React from "react";
import Img1 from "../../public/blog1-image6.png";

export default function MoreBlogsSinglePost() {
  return (
    <div>
      <h1>More Blogs</h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-md mb-4">
      
        {/* Image section */}
        <img className="rounded-t-md w-full" src={Img1} alt="Image" />
      

      <div className="space-y-4 px-4 pb-3 ">
        <div className="flex justify-between">
          <p className="text-sm font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
            Social Media
          </p>

          <div className="flex items-center gap-1 cursor-pointer">
            <Clock size={16} />{" "}
            <p className="text-sm opacity-80"> 3 min read</p>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-lg font-bold hover:text-violet-500 cursor-pointer">
        Creating a Visual Identity: Tips for Aesthetic and Brand Consistency
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive</p>

        {/* Author and Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img
            src="/author-placeholder.png"
            alt="Katie Sims"
            className="w-6 h-6 rounded-full"
          />
          <p>Katie Sims</p>
          <span>|</span>
          <p><Date></Date></p>
      </div>
      </div>
    </div>



    <div className="bg-white shadow-md rounded-md mb-4">
      
      {/* Image section */}
      <img className="rounded-t-md w-full" src="/blog1-image6.png" alt="Image" />
    

    <div className="space-y-4 px-4 pb-3 ">
      <div className="flex justify-between">
        <p className="text-sm font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
          Social Media
        </p>

        <div className="flex items-center gap-1 cursor-pointer">
          <Clock size={16} />{" "}
          <p className="text-sm opacity-80"> 3 min read</p>
        </div>
      </div>
      {/* Title */}
      <h3 className="text-lg font-bold hover:text-violet-500 cursor-pointer">
      Creating a Visual Identity: Tips for Aesthetic and Brand Consistency
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive</p>

      {/* Author and Date */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <img
          src="/author-placeholder.png"
          alt="Katie Sims"
          className="w-6 h-6 rounded-full"
        />
        <p>Katie Sims</p>
        <span>•</span>
        <p>Date</p>
    </div>
    </div>
  </div>
  
  </div>
    </div>
  );
}
