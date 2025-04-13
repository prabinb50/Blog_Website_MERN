import { ArrowUpRight, Instagram } from "lucide-react";
import React from "react";

export default function MediaPostCard() {
  return (
    <div className="bg-white rounded-md flex flex-col gap-6 py-8 px-6">
      {/* Title */}
      <p className="text-2xl font-semibold opacity-80">Instagram Posts</p>

      {/* Post section */}
      <div className="grid grid-cols-3 gap-4  h-full w-full">
        {Images.map((image, index) => (
          <div key={index} className="relative h-full w-full  rounded-lg cursor-pointer group overflow-hidden">

            {/* Images */}
            <img className="" src={image.image} alt="" />

            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-500 ">
            </div>
           
           {/* instagram logo  */}
            <div
            
             className="bg-violet-800 absolute top-1/2  left-1/2 transform ease-in-out -translate-x-1/2 -translate-y-1/2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Instagram size={20} className="text-white opacity-90 " />
            </div>
          </div>
        ))}
      </div>

      {/* footer section */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold opacity-80 hover:text-violet-500 cursor-pointer duration-300">
          View on Instagram
        </p>
        <ArrowUpRight className="hover:text-violet-600 cursor-pointer duration-300" />
      </div>
    </div>
  );
}

const Images = [
  { image: "/instagramPost/img1.png" },
  { image: "/instagramPost/img2.png" },
  { image: "/instagramPost/img3.png" },
  { image: "/instagramPost/img4.png" },
  { image: "/instagramPost/img5.png" },
  { image: "/instagramPost/img6.png" },
];
