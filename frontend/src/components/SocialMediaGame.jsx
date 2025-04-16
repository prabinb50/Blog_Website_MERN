import React from "react";
import socialmedia from "../../public/socialmediagame.png";

export default function SocialMediaGame() {
  return (
    <div className="h-full lg:h-120 w-full bg-violet-900  flex ">
      <div className=" w-11/12 mx-auto flex flex-col max-lg:px-6 lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col  lg:w-1/2  gap-8 max-lg:mt-12">
          <p className="font-semibold md:text-6xl text-5xl text-white opacity-90 leading-16 lg:leading-18">
            Ready to Elevate Your Social Media Game?
          </p>
          <p className="text-white opacity-80 text-lg tracking-wide leading-8">
            Unlock the tools and insights you need to thrive on social media
            with Vexon. Join our community for expert tips, trending strategies,
            and resources that empower you to stand out and succeed.
          </p>
          <div className=" flex flex-col relative  justify-center  ">
            <input
              type="text"
              className="outline-none  h-16 flex items-center px-4 py-2 bg-white rounded-4xl "
              placeholder="Enter Your Email"
            />

            <button className="  absolute flex items-center  right-2 cursor-pointer hover:bg-black duration-500  px-6 py-3 font-bold bg-violet-800 text-white rounded-4xl">
              Get Start
            </button>
          </div>
        </div>

        <div className="lg:1/2 flex items-center justify-center">
          <img src={socialmedia} alt="" className=" h-120 w-110 object-cover" />
        </div>
      </div>
    </div>
  );
}
