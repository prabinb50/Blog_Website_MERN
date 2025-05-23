import React from "react";
import heroImage from "../../public/hero1-image.png";
import * as motion from "motion/react-client"

export default function HeroSection() {
  return (
    <div className="h-full  w-full mt-12  flex px-6">
      <div className=" w-11/12 mx-auto bg-purple-100 flex flex-col rounded-md p-4  md:flex-row sm:p-24  items-center justify-between gap-x-8">
        <div className="md:1/2 flex items-center justify-center">
          <img src={heroImage} alt="" className=" h-120 w-120 object-cover" />
        </div>

        <div className="flex flex-col  md:w-1/2  gap-8 max-lg:mt-12">
          <p className="font-bold xl:text-6xl sm:text-4xl xl:leading-16 text-3xl  opacity-80">
            Unlocking The Secrets To Social Media Success
          </p>
          <p className="text-gray-600  opacity-80 md:text-lg tracking-wide lg:leading-8 ">
            Social media is more than just a platform—it’s a powerful tool for
            building connections, amplifying your brand, and driving growth. At
            Vexon, we provide insights and strategies to help you stand out in
            the ever-evolving social media landscape.
          </p>
          <div className=" flex flex-col relative  justify-center  ">
            <input
              type="text"
              className="outline-none  md:h-16 h-14  flex items-center px-4 py-2 bg-white rounded-4xl "
              placeholder="Enter Your Email"
            />

            <button className="  absolute flex items-center  right-2 cursor-pointer hover:bg-black duration-500 px-4 py-2  md:px-6 md:py-3 font-bold bg-violet-800 text-white rounded-4xl">
              Get Start
            </button>
          </div>

          
         <motion.p className=" opacity-90 md:text-base text-sm"
         
         initial={{ opacity: 0, translateX: 2 }}
         animate={{ opacity: 1, translateX: 2 }}
         transition={{
             duration: 10,
             delay: 2,
             ease: [0, 0.71, 0.2, 1.01],
         }}
         >
            ❊ Connect, engage, & inspire—social media success starts here.
          </motion.p>
        </div>
      </div>
    </div>
    
  );
}
 