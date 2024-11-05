import React from "react";
import SermonCard from "../../../components/container/SermonCard";

export default function RecentSermons() {
  return (
    <div className="w-full flex flex-col px-12">
      <span className="font-semibold text-normalb text-xl md:text-2xl">
        RECENT SERMONS
      </span>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
      </div>
    </div>
  );
}

