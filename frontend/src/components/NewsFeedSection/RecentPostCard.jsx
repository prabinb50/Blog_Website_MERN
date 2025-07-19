import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import axios from "axios";
import { AnimatedCard, AnimatedText } from "../AnimatedComponent";

export default function RecentPostCard() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/posts`,
        { timeout: 8000 }
      );
      setPosts(response.data.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Something went wrong when fetching posts.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AnimatedCard className="bg-white rounded-md flex flex-col gap-8 py-8 px-6" delay={0.1}>
      <AnimatedText className="text-2xl font-semibold opacity-80" delay={0.2}>
        Recent Post
      </AnimatedText>

      {/* error message */}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {/* loading indicator */}
      {isLoading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}

      {/* map recent post */}
      {posts?.map((item, index) => (
        <AnimatedCard
          key={item._id || index}
          className="flex items-center gap-4"
          delay={0.2 + index * 0.1}
        >
          <img
            src={item.post}
            alt={item.text || "Recent post image"}
            loading="lazy"
          />
          <div className="space-y-2">
            <span className="flex items-center cursor-pointer gap-1">
              <CalendarDays size={20} className="text-gray-600" />
              <p className="font-semibold opacity-60">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </span>
            <AnimatedText className="font-semibold hover:text-violet-700 cursor-pointer opacity-80" delay={0.1}>
              {item.text}
            </AnimatedText>
          </div>
        </AnimatedCard>
      ))}
    </AnimatedCard>
  );
}