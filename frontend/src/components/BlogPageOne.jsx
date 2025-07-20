import React from "react";
import { CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router";
import { AnimatedCard } from "../components/AnimatedComponent";

export default function BlogPageOne({ blogs }) {
  // handle missing or broken image urls
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Available";
  };

  return (
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-13 sm:mt-16 md:mt-20 pb-13 sm:pb-16 md:pb-20 gap-8">
        {/* loop through blogs and render each blog item */}
        {blogs?.map((item, index) => (
          <AnimatedCard
            key={item._id || index}
            delay={0.2 + index * 0.1}
          >
            <Link
              to={`/single-post/${item._id}`}
              className="w-full h-full flex flex-col gap-4 border border-gray-200 rounded-md hover:shadow-lg hover:-translate-y-2 duration-500"
            >
              {/* blog image section */}
              <div>
                <img
                  className="rounded-t-md w-full h-48 object-cover"
                  src={item.image || "https://via.placeholder.com/600x400?text=No+Image"}
                  alt={item.title || "Blog post"}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>

              {/* blog content section */}
              <div className="space-y-4 px-4 pb-3">
                {/* blog category and read time */}
                <div className="flex justify-between">
                  <p className="text-sm font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
                    {item.category || "Social Media"}
                  </p>

                  <div className="flex items-center gap-1 cursor-pointer">
                    <Clock size={16} />

                    <p className="text-sm opacity-80">{item.readTime || "5 min read"}</p>
                  </div>
                </div>

                {/* blog title */}
                <p className="text-xl font-semibold opacity-90 tracking-wide hover:text-violet-500 cursor-pointer">
                  {item.title || "Untitled Blog Post"}
                </p>

                {/* blog description */}
                <p className="opacity-70 tracking-wide line-clamp-2">
                  {item.description || "No description available for this blog post."}
                </p>

                {/* blog footer section */}
                <div className="flex items-center gap-2">
                  {/* author profile image */}
                  <img
                    src={item.profile || `https://ui-avatars.com/api/?name=${item.username || "User"}`}
                    className="w-8 h-8 rounded-full object-cover"
                    alt="Author"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${item.username || "User"}`;
                    }}
                  />

                  {/* author name */}
                  <span className="text-sm opacity-70 cursor-pointer">
                    {item.username || "Anonymous"}
                  </span>

                  {/* separator */}
                  <span className="opacity-60 text-sm">|</span>

                  {/* blog publish date */}
                  <div className="flex items-center gap-2 cursor-pointer">
                    <CalendarDays size={16} strokeWidth={1.5} />
                    <span className="text-sm opacity-70 tracking-wider">
                      {item.date
                        ? new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        : "No date"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}