import React from 'react';
import { CalendarDays } from "lucide-react";


export default function RecentPostCard() {
  return (
    <div className="bg-white rounded-md flex flex-col gap-8 py-8 px-6 ">
    <p className="text-2xl font-semibold opacity-80">Recent Post</p>

    {/* Map Recent post */}
    {Itesm.map((item, index) => (
      <div key={index} className="flex items-center  gap-4">
        <img src={item.img} alt="Image" />
        <div className="space-y-2">
          <span className="flex items-center cursor-pointer gap-1 ">
            <CalendarDays size={20} className=" text-gray-600" />
            <p className=" font-semibold opacity-60">{item.date}</p>
          </span>
          <p className="font-semibold hover:text-violet-700 cursor-pointer opacity-80">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}


const Itesm = [
    {
      img: "/recentImage/img1.png",
      date: "Apr 12, 2025",
      desc: "The Power of Storytelling: How Make Your Brand’s Voice...",
    },
    {
      img: "/recentImage/img2.png",
      date: "Apr 12, 2025",
      desc: "Mastering Content Calendars: A Guide to Consistent Strat...",
    },
  
    {
      img: "/recentImage/img3.png",
      date: "Apr 12, 2025",
      desc: "Social Media Trends for 2025: What to Watch and How to...",
    },
  
    {
      img: "/recentImage/img4.png",
      date: "Apr 12, 2025",
      desc: "Creating a Visual Identity: Tips for Aesthetic & Brand Consi...",
    },
  ];