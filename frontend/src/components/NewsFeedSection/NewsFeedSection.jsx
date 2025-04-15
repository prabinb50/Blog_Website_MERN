import React from "react";

import SingleItem from "./SingleItem";
import SingleFeedSection from "./SingleFeedSection";
import RecentPostCard from "./RecentPostCard";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import WorkExperienceCard from "./WorkExperienceCard";
import MediaPostCard from "./MediaPostCard";

export default function NewFeedSection() {
  return (
    <div className="bg-gray-100 mt-24">
      <div className="w-11/12 mx-auto px-6 flex flex-col lg:flex-row py-24 gap-12 ">
       {/* Left feed section - Sticky */}
        <div className="lg:w-2/3 lg:sticky h-fit top-24 self-start ">
          <SingleFeedSection />
        </div>

     {/* Right feed section - Scrollable */}

        <div className="lg:w-1/3 lg:pl-12 space-y-12 overflow-y-auto" >
          {/* Search bar section */}
          <SearchBar />

          {/* Profile section */}
          <ProfileCard />
          {/* Recent Post */}
          <RecentPostCard />

          {/* Single Post */}
          <SingleItem />

          <WorkExperienceCard />

          {/* media post section */}
          <MediaPostCard />
        </div>


      </div>
    </div>
  );
}
