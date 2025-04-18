import React from "react";

export default function BlogPostCategories() {
  return (
    <div className="w-11/12 mx-auto px-6 mt-12 mb-12 space-y-8">
      {/* Title of blog post category */}

      <div className="flex flex-col md:flex-row space-y-4 items-center justify-between ">
        <p className="lg:text-5xl sm:text-4xl text-3xl  whitespace-nowrap font-semibold opacity-80">
          All Blog Post Categories
        </p>
        <button className="cursor-pointer max-md:text-sm hover:bg-black duration-500 px-4 py-2 md:px-6 md:py-3 font-bold bg-violet-800 text-white rounded-4xl">
          Explore All Topic
        </button>
      </div>

      {/* Body section */}

      {/* From sm to md screen items are in flex and stay in the centre of the screen otherwise stay initial position. */}
      <div className="max-md:flex items-center justify-center">
        {/* Make it responsive  */}
        <div className="grid md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center  gap-2  text-center hover:-translate-y-2 duration-500 w-full max-md:w-88 max-sm:h-100 "
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  className="hover:scale-110 duration-500 w-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <p className="font-bold opacity-80 text-lg hover:text-violet-700 cursor-pointer">
                {item.text}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
