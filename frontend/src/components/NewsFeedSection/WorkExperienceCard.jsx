import React from "react";
import { AnimatedCard, AnimatedText } from "../AnimatedComponent";

export default function WorkExperienceCard() {
  return (
    <AnimatedCard className="bg-white rounded-md flex flex-col gap-4 py-8 px-6" delay={0.1}>
      <AnimatedText className="text-2xl font-semibold opacity-80" delay={0.2}>
        Work Experience
      </AnimatedText>

      <div className="space-y-4">
        {workExperience.map((item, index) => (
          <AnimatedText
            key={index}
            className="text-lg font-semibold opacity-70 flex items-center border-b border-gray-300 py-2 justify-between"
            delay={0.2 + index * 0.1}
          >
            <span>{item.title}</span> <span>{item.period}</span>
          </AnimatedText>
        ))}

        <AnimatedText
          className="text-lg font-semibold opacity-70 flex items-center py-2 justify-between"
          delay={0.6}
        >
          <span>SEO Expert</span> <span>2019 - Now</span>
        </AnimatedText>
      </div>
    </AnimatedCard>
  );
}

// work experience data
const workExperience = [
  { title: "Product Design", period: "2020 - Now" },
  { title: "Brand Expertise", period: "2018 - Now" },
  { title: "UI/UX Design", period: "2021 - Now" },
];