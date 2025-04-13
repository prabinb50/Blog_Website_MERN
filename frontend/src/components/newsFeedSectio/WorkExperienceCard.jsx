import React from "react";

export default function WorkExperienceCard() {
  return (
    <div className="bg-white rounded-md flex flex-col gap-4 py-8 px-6">
      <p className="text-2xl font-semibold opacity-80">Work Experience</p>
      <div className="space-y-4">
        <p className="text-lg font-semibold opacity-70 flex items-center border-b border-gray-300 py-2 justify-between">
          <span>Product Design</span> <span>2020 - Now</span>
        </p>
        <p className="text-lg font-semibold opacity-70 flex items-center border-b border-gray-300 py-2 justify-between">
          <span>Brand Expertise</span> <span>2018 - Now</span>
        </p>
        <p className="text-lg font-semibold opacity-70 flex items-center border-b border-gray-300 py-2 justify-between">
          <span>UI/UX Design</span> <span>2021 - Now</span>
        </p>
        <p className="text-lg font-semibold opacity-70 flex items-center  py-2 justify-between">
          <span>SEO Expert</span> <span>2019 - Now</span>
        </p>
        
      </div>
    </div>
  );
}
