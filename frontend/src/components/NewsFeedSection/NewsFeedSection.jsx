import React from "react";
import SingleItem from "./SingleItem";
import SingleFeedSection from "./SingleFeedSection";
import RecentPostCard from "./RecentPostCard";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import WorkExperienceCard from "./WorkExperienceCard";
import MediaPostCard from "./MediaPostCard";
import { AnimatedFade } from "../AnimatedComponent";

export default function NewFeedSection() {
  return (
    <AnimatedFade className="bg-gray-100 mt-13 sm:mt-16 md:mt-20" delay={0.1}>
      <div className="w-11/12 mx-auto  flex flex-col lg:flex-row py-13 sm:py-16 md:py-20 gap-12">
        {/* left feed section - sticky */}
        <AnimatedFade className="lg:w-2/3 lg:sticky h-fit top-24 self-start" delay={0.2}>
          <SingleFeedSection />
        </AnimatedFade>

        {/* right feed section - scrollable */}
        <div className="lg:w-1/3 lg:pl-12 space-y-12 overflow-y-auto">
          {/* search bar section */}
          <AnimatedFade delay={0.3}>
            <SearchBar />
          </AnimatedFade>

          {/* profile section */}
          <AnimatedFade delay={0.4}>
            <ProfileCard />
          </AnimatedFade>

          {/* recent post */}
          <AnimatedFade delay={0.5}>
            <RecentPostCard />
          </AnimatedFade>

          {/* single post */}
          <AnimatedFade delay={0.6}>
            <SingleItem />
          </AnimatedFade>

          <AnimatedFade delay={0.7}>
            <WorkExperienceCard />
          </AnimatedFade>

          {/* media post section */}
          <AnimatedFade delay={0.8}>
            <MediaPostCard />
          </AnimatedFade>
        </div>
      </div>
    </AnimatedFade>
  );
}