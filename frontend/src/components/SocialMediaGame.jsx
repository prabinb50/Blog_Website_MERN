import React from "react";
import socialmedia from "../../public/socialmediagame.png";
import { AnimatedText, AnimatedCard, AnimatedFade } from "./AnimatedComponent";

export default function SocialMediaGame() {
  return (
    <div className="h-full lg:h-120 w-full bg-violet-900 flex">
      <div className="w-11/12 mx-auto flex flex-col max-lg:px-6 lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col lg:w-1/2 gap-8 max-lg:mt-12">
          {/* heading */}
          <AnimatedText
            className="font-bold xl:text-6xl sm:text-4xl xl:leading-16 text-3xl text-white opacity-80"
            delay={0.2}>
            Ready to Elevate Your Social Media Game?
          </AnimatedText>

          {/* description */}
          <AnimatedText
            className="text-white opacity-80 md:text-lg tracking-wide leading-8"
            delay={0.3}
          >
            Unlock the tools and insights you need to thrive on social media
            with Vexon. Join our community for expert tips, trending strategies,
            and resources that empower you to stand out and succeed.
          </AnimatedText>

          {/* form */}
          <AnimatedCard delay={0.4} className="w-full">
            <form className="flex flex-col relative justify-center">
              <input
                type="email"
                // value={email}
                required
                className="outline-none md:h-16 h-14 flex items-center px-4 py-2 bg-white rounded-4xl"
                placeholder="Enter Your Email"
              />

              <button
                type="submit"
                className="absolute flex items-center right-2 cursor-pointer hover:bg-black duration-500 px-4 py-2 md:px-6 md:py-3 font-bold bg-violet-800 text-white rounded-4xl"
              >
                Get Started
              </button>
            </form>
          </AnimatedCard>
        </div>

        {/* image */}
        <AnimatedFade className="lg:1/2 flex items-center justify-center" delay={0.5}>
          <img
            src={socialmedia}
            alt="Social Media Strategy"
            className="h-120 w-110 object-cover"
          />
        </AnimatedFade>
      </div>
    </div>
  );
}
