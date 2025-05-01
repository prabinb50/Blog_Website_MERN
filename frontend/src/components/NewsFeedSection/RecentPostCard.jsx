import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import axios from "axios";

export default function RecentPostCard() {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/posts`
      );
      setPosts(response.data.data);
    } catch (error) {
      console.log("Something went wrong to fetch posts.");
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-white rounded-md flex flex-col gap-8 py-8 px-6 ">
      <p className="text-2xl font-semibold opacity-80">Recent Post</p>

      {/* Map Recent post */}
      {posts?.map((item, index) => (
        <div key={index} className="flex items-center  gap-4">
          <img src={item.post} alt="Image" />
          <div className="space-y-2">
            <span className="flex items-center cursor-pointer gap-1 ">
              <CalendarDays size={20} className=" text-gray-600" />
              <p className=" font-semibold opacity-60">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </span>
            <p className="font-semibold hover:text-violet-700 cursor-pointer opacity-80">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
