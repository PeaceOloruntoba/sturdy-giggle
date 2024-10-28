import React from "react";
import Hero from "./components/Hero";
import WelcomeMessage from "./components/WelcomeMessage";
import RecentSermons from "./components/RecentSermons";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <WelcomeMessage />
      <RecentSermons />
    </div>
  );
}
