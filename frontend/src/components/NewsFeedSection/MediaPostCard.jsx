import { ArrowUpRight, Instagram } from "lucide-react";
import React from "react";
import { AnimatedCard, AnimatedText } from "../AnimatedComponent";

export default function MediaPostCard() {
  return (
    <AnimatedCard className="bg-white rounded-md flex flex-col gap-6 py-8 px-6" delay={0.1}>
      {/* title */}
      <AnimatedText className="text-2xl font-semibold opacity-80" delay={0.2}>
        Instagram Posts
      </AnimatedText>

      {/* post section */}
      <AnimatedCard className="grid grid-cols-3 gap-4 h-full w-full" delay={0.3}>
        {Images.map((image, index) => (
          <AnimatedCard
            key={index}
            className="relative h-full w-full rounded-lg cursor-pointer group overflow-hidden"
            delay={0.2 + index * 0.05}
          >
            {/* images */}
            <img
              className=""
              src={image.image}
              alt={`Instagram post ${index + 1}`}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
            </div>

            {/* instagram logo */}
            <div
              className="bg-violet-800 absolute top-1/2 left-1/2 transform ease-in-out -translate-x-1/2 -translate-y-1/2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Instagram size={20} className="text-white opacity-90" />
            </div>
          </AnimatedCard>
        ))}
      </AnimatedCard>

      {/* footer section */}
      <AnimatedCard className="flex items-center justify-between" delay={0.4}>
        <AnimatedText className="text-2xl font-semibold opacity-80 hover:text-violet-500 cursor-pointer duration-300" delay={0.5}>
          View on Instagram
        </AnimatedText>
        <ArrowUpRight className="hover:text-violet-600 cursor-pointer duration-300" />
      </AnimatedCard>
    </AnimatedCard>
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