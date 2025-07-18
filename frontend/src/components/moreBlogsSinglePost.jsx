import { CalendarDays, Clock } from "lucide-react";
import React from "react";
import Img1 from "../../public/blog1-image6.png";
import Img2 from "../../public/blog1-image7.png";
import Img3 from "../../public/blog1-image8.png";
import { AnimatedText, AnimatedCard } from "./AnimatedComponent";

export default function MoreBlogsSinglePost() {
  // array of blog post items
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
      category: "Gen - Z",
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
    <div className="py-13 sm:py-16 md:py-20 bg-gray-100 rounded-md shadow-md cursor-pointer">
      {/* section title */}
      <AnimatedText className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12" delay={0.1}>
        More Blogs
      </AnimatedText>

      {/* grid layout for blog posts */}
      <div className="w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Items1.map((item, index) => (
          // each blog card 
          <AnimatedCard
            key={index}
            className="w-full h-full flex flex-col gap-3 md:gap-4 border border-gray-200 rounded-md bg-white hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
            delay={0.2 + index * 0.1} // staggered delay - 0.2, 0.3, 0.4 seconds
          >
            {/* Image section */}
            <div className="">
              <img
                className="w-full object-cover transform transition-transform duration-500 hover:scale-105 overflow-hidden rounded-t-md"
                src={item.img}
                alt="Blog Image"
                loading="lazy" // improved performance with lazy loading
              />
            </div>

            {/* content section */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 px-3 sm:px-4 pb-3 flex-grow">
              {/* category and read time */}
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-md font-semibold opacity-90 hover:text-violet-500  truncate max-w-[60%]">
                  {item.category} {/* blog category */}
                </p>

                <div className="flex items-center gap-1">
                  <Clock size={14} className="flex-shrink-0" />
                  <p className="text-sm opacity-80 whitespace-nowrap">3 min read</p> {/* read time */}
                </div>
              </div>

              {/* blog title */}
              <p className="text-base sm:text-lg md:text-xl font-semibold opacity-90 tracking-wide hover:text-violet-500  line-clamp-2">
                {item.title}
              </p>

              {/* blog description */}
              <p className="opacity-70 tracking-wide text-sm md:text-base line-clamp-3">{item.description}</p>

              {/* footer section */}
              <div className="flex items-center gap-1 sm:gap-2 mt-auto pt-2">
                <img
                  src={item.profile} // author profile image
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                  alt="Author"
                  loading="lazy"
                />

                <span className="text-sm opacity-70 truncate max-w-[25%]">
                  {item.authorName} {/* author name */}
                </span>

                <span className="opacity-60 text-sm">|</span>

                <div className="flex items-center gap-1 sm:gap-2 ">
                  <CalendarDays size={14} strokeWidth={1.5} className="flex-shrink-0" /> {/* date icon */}

                  <span className="text-sm opacity-70 tracking-wider whitespace-nowrap">
                    {item.date} {/* blog post date */}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}