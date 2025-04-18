import { CalendarDays, Clock } from "lucide-react";
import React from "react";
import Img1 from "../../public/blog1-image6.png";
import Img2 from "../../public/blog1-image7.png";
import Img3 from "../../public/blog1-image8.png";

export default function MoreBlogsSinglePost() {
  const Items1 = [
    {
      img: Img1,
      category: "Brand Consistency",
      title: "Creating a Visual Identity: Tips for Aesthetic and Brand Consistency",
      description:
        "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
      profile:
        "https://plus.unsplash.com/premium_photo-1668424271073-013772330c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
      authorName: "Katie Sims",
      date: "26 April 2025",
    },
    {
      img: Img2,
      category: "Gen Z",
      title: "How to Build Authentic Connections with the New Generation",
      description:
        "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
      profile:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      authorName: "David Elson",
      date: "26 April 2025",
    },
    {
      img: Img3,
      category: "Social Media",
      title: "Harnessing Analytics: Using Data to Refine Your Social Media Strategy",
      description:
        "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
      profile:
        "https://plus.unsplash.com/premium_photo-1671512497719-173938f4d3a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8X2hiLWRsNFEtNFVfGVufDB8fHx8fA%3D%3D",
      authorName: "Kenneth Allen",
      date: "26 April 2025",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      {/* Section title */}
      <h1 className="text-4xl font-bold text-center mb-12">More Blogs</h1>

      {/* Responsive grid layout */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Items1.map((item, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col gap-4 border border-gray-200 rounded-md hover:shadow-lg hover:-translate-y-2 duration-500"
          >
            {/* Image section */}
            <div>
              <img
                className="rounded-t-md w-full object-cover"
                src={item.img}
                alt="Blog Image"
              />
            </div>

            {/* Content section */}
            <div className="space-y-4 px-4 pb-3">
              {/* Category and Read Time */}
              <div className="flex justify-between">
                <p className="text-md font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
                  {item.category}
                </p>
                <div className="flex items-center gap-1 cursor-pointer">
                  <Clock size={16} />
                  <p className="text-sm opacity-80">3 min read</p>
                </div>
              </div>

              {/* Blog title */}
              <p className="text-xl font-semibold opacity-90 tracking-wide hover:text-violet-500 cursor-pointer">
                {item.title}
              </p>

              {/* Blog description */}
              <p className="opacity-70 tracking-wide">{item.description}</p>

              {/* Footer section */}
              <div className="flex items-center gap-2">
                <img
                  src={item.profile}
                  className="w-8 h-8 rounded-full object-cover"
                  alt="Author"
                />
                <span className="text-sm opacity-70 cursor-pointer">
                  {item.authorName}
                </span>
                <span className="opacity-60 text-sm">|</span>
                <div className="flex items-center gap-2 cursor-pointer">
                  <CalendarDays size={16} strokeWidth={1.5} />
                  <span className="text-sm opacity-70 tracking-wider">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}