import React from 'react';
import { CalendarDays, Clock } from "lucide-react";




export default function FeedBlog2() {
  return (
    <div>
       <div className="  grid grid-cols-1 md:grid-cols-2  gap-8">
      {Items1.map((item, index) => (
        <div
          key={index}
          className="w-full h-full flex flex-col gap-4 border border-gray-200 rounded-md hover:shadow-lg hover:-translate-y-2 duration-500  "
        >
          {/* Image section */}
          <div className="">
            <img className="rounded-t-md w-full" src={item.img} alt="Image" />
          </div>

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

            {/* Header section  */}

            <p className="text-xl  font-semibold opacity-90 tracking-wide hover:text-violet-500 cursor-pointer">
              {item.title}
            </p>

            {/* Text area */}
            <p className="opacity-70 tracking-wide">{item.desc}</p>

            {/* Footer section  */}

            <div className="flex items-center gap-2">
              <img
                src={item.profile}
                className="w-8 h-8 rounded-full object-cover"
                alt=""
              />
              <span className="text-sm opacity-70 cursor-pointer">
                {item.proName}
              </span>{" "}
              <span className="opacity-60 text-sm">|</span>{" "}
              <div className="flex items-center gap-2 cursor-pointer">
                <CalendarDays size={16} strokeWidth={1.5} />{" "}
                <span className="text-sm opacity-70 tracking-wider">
                  {" "}
                  {item.date}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}


const Items1 = [
 
  {
    img: "/blogImage/img5.png",
    title: "Alternate universes and their impact on the nature of space",
    desc: "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
    date: "26 April 2025",
    profile:
      "https://images.unsplash.com/photo-1742261569279-da244b3aab46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D",
    proName: "John J.",
    date: "26 April 2025",
  },

  {
    img: "/blogImage/img6.png",
    title: "Exploring the future of interdimensional travel possibilities",
    desc: "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
    date: "26 April 2025",
    profile:
      "https://images.unsplash.com/photo-1742261569279-da244b3aab46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D",
    proName: "Yang Y.",
    date: "26 April 2025",
  },
  {
    img: "/blogImage/img7.png",
    title: "Exploring the future of interdimensional travel possibilities",
    desc: "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
    date: "26 April 2025",
    profile:
      "https://images.unsplash.com/photo-1742261569279-da244b3aab46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D",
    proName: "Yang Y.",
    date: "26 April 2025",
  },
  {
    img: "/blogImage/img8.png",
    title: "Exploring the future of interdimensional travel possibilities",
    desc: "This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.",
    date: "26 April 2025",
    profile:
      "https://images.unsplash.com/photo-1742261569279-da244b3aab46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D",
    proName: "Yang Y.",
    date: "26 April 2025",
  },
];
