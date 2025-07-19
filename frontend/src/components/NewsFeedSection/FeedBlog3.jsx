import React from "react";
import { CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router";
import { AnimatedCard } from "../AnimatedComponent";

export default function FeedBlog3({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* map through the blogs array and render each blog item */}
      {blogs?.map((item, index) => (
        <AnimatedCard
          key={item._id || index}
          delay={0.1 + index * 0.1}
          className="w-full"
        >
          <Link
            to={`/single-post/${item._id}`}
            className="w-full h-full flex flex-col gap-4 border border-gray-200 rounded-md hover:shadow-lg hover:-translate-y-2 duration-500">

            {/* image section */}
            <div>
              <img
                className="rounded-t-md w-full"
                src={item.image}
                alt={item.title || "Blog image"}
                loading="lazy"
              />
            </div>

            {/* blog content section */}
            <div className="space-y-4 px-4 pb-3">
              {/* category and read time */}
              <div className="flex justify-between">
                <p className="text-sm font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
                  Social Media
                </p>

                <div className="flex items-center gap-1 cursor-pointer">
                  <Clock size={16} />{" "}
                  <p className="text-sm opacity-80">{item.readTime}</p>
                </div>
              </div>

              {/* blog title */}
              <p className="text-xl font-semibold opacity-90 tracking-wide hover:text-violet-500 cursor-pointer">
                {item.title}
              </p>

              {/* blog description */}
              <p className="opacity-70 tracking-wide">{item.description}</p>

              {/* footer section with author and date */}
              <div className="flex items-center gap-2">
                {/* author profile image */}
                <img
                  src={item.profile}
                  className="w-8 h-8 rounded-full object-cover"
                  alt={item.username || "Author"}
                  loading="lazy"
                />

                {/* author name */}
                <span className="text-sm opacity-70 cursor-pointer">
                  {item.username}
                </span>

                {/* separator */}
                <span className="opacity-60 text-sm">|</span>

                {/* blog post date */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <CalendarDays size={16} strokeWidth={1.5} />{" "}

                  <span className="text-sm opacity-70 tracking-wider">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedCard>
      ))}
    </div>
  );
}