import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AnimatedCard, AnimatedText } from "../AnimatedComponent";

export default function ProfileCard() {
  return (
    <AnimatedCard className="flex flex-col items-center justify-center bg-white rounded-md gap-8 px-8 py-10" delay={0.1}>
      <div className="flex flex-col items-center justify-center gap-2">
        <AnimatedCard delay={0.2}>
          <img
            className="rounded-full w-28 h-28 object-cover"
            src="https://images.unsplash.com/photo-1743126642334-ab003ce665da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile image"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </AnimatedCard>

        <AnimatedText className="text-4xl font-semibold opacity-80" delay={0.3}>
          user name
        </AnimatedText>
      </div>

      <AnimatedText className="opacity-60 font-semibold leading-6 text-center text-sm tracking-wide" delay={0.4}>
        Whether you're a tech enthusiast or a business leader, these
        emerging trends are reshaping the future and offering endless
        opportunities for growth and creativity.
      </AnimatedText>

      <AnimatedCard className="flex items-center gap-2 xl:gap-4 lg:gap-1" delay={0.5}>
        <FaFacebookF
          size={40}
          className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
        />

        <FaLinkedinIn
          size={40}
          className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
        />

        <FaInstagram
          size={40}
          className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
        />

        <FaXTwitter
          size={40}
          className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700"
        />
      </AnimatedCard>
    </AnimatedCard>
  )
}