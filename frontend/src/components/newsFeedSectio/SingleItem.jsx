import React from "react";
import { CalendarDays, Clock } from "lucide-react";

export default function SingleItem() {
  return (
    <div className="h-100   relative ">
      {Items1.map((item, index) => (
        <div
          key={index}
          className="w-full h-full flex flex-col gap-4  rounded-md   "
        >
          {/* Image section */}
          <div className="absolute">
            <img
              className="rounded-md w-[100vw] h-100 object-cover "
              src={item.img}
              alt="Image"
            />
          </div>
          <div className=" absolute bg-black w-full h-full  rounded-md opacity-60"></div>

          <div className="space-y-4  text-white flex flex-col justify-between h-full ">
           
            <div className="flex px-4 py-8 justify-between ">
              <p className=" font-semibold  opacity-90  cursor-pointer">
                Social Media
              </p>

              <div className="flex items-center gap-1 cursor-pointer">
                <Clock size={16} />{" "}
                <p className=" opacity-90"> 3 min read</p>
              </div>
            </div>

            {/* Header section  */}
            <div className="absolute bottom-8 px-4 pt-8 space-y-4">
           
              <div className="flex items-center justify-between gap-2 ">
               
                <div className="flex items-center gap-2">
                <img
                  src={item.profile}
                  className="w-8 h-8 rounded-full object-cover"
                  alt=""
                />
                <span className=" opacity-70 cursor-pointer">
                  {item.proName}
                </span>{" "}
               
                </div>
                
                <div className="flex items-center gap-2 cursor-pointer">
                  <CalendarDays size={16} strokeWidth={1.5} />{" "}
                  <span className="text-sm opacity-70 tracking-wider">
                    {" "}
                    {item.date}
                  </span>{" "}
                </div>
              </div>

              <p className="text-xl  font-semibold opacity-90 tracking-wide hover:text-blue-800 cursor-pointer">
              Handling Negative Feedback: Maintainig Brand Reputation on Socila Media
              </p>

              {/* Text area */}
              {/* <p className="opacity-70 tracking-wide">{item.desc}</p> */}

              {/* Footer section  */}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

const Items1 = [
  {
    img:"/blogImage/img9.png",
   
    
    profile:
      "https://plus.unsplash.com/premium_photo-1668424271073-013772330c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
    proName: "Lama L.",
    date: "26 April 2025",
  },
];
