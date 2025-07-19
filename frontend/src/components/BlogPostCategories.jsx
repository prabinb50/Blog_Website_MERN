import React from "react";
import { AnimatedText, AnimatedCard, AnimatedFade } from "./AnimatedComponent";

export default function BlogPostCategories() {
  return (
    <AnimatedFade className="w-11/12 mx-auto  mt-13 sm:mt-16 md:mt-20 mb-13 sm:mb-16 md:mb-20 space-y-8" delay={0.1}>
      {/* title of blog post category */}
      <div className="flex flex-col md:flex-row space-y-4 items-center justify-between">
        <AnimatedText
          className="lg:text-5xl sm:text-4xl text-3xl whitespace-nowrap font-semibold opacity-80"
          delay={0.2}
        >
          All Blog Post Categories
        </AnimatedText>

        {/* button to explore all topics */}
        <AnimatedText delay={0.3}>
          <button className="cursor-pointer max-md:text-sm hover:bg-black duration-500 px-4 py-2 md:px-6 md:py-3 font-bold bg-violet-800 text-white rounded-4xl">
            Explore All Topic
          </button>
        </AnimatedText>
      </div>

      {/* body section */}
      <div className="max-md:flex items-center justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((item, index) => (
            <AnimatedCard
              key={index}
              delay={0.2 + index * 0.1}
              className="flex flex-col justify-center gap-2 text-center hover:-translate-y-2 duration-500 w-full max-md:w-90 max-sm:h-100"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  className="hover:scale-110 duration-500 w-full object-cover"
                  src={item.image}
                  alt={`${item.text} category`}
                  loading="lazy" // for performance optimization
                />
              </div>

              {/* category text */}
              <p className="font-bold opacity-80 text-lg hover:text-violet-700 cursor-pointer">
                {item.text}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedFade>
  );
}

// categories data
const categories = [
  {
    image: "/instagramPost/img11.png",
    text: "Social Media",
  },
  {
    image: "/instagramPost/img10.png",
    text: "Digital Marketing",
  },
  {
    image: "/instagramPost/img8.png",
    text: "Design & Development",
  },
  {
    image: "/instagramPost/img9.png",
    text: "Startup Agency",
  },
  {
    image: "/instagramPost/img7.png",
    text: "Life style",
  },
];