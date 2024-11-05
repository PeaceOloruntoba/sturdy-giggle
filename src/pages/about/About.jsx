import React from "react";
import { aboutPage } from "../../assets";

export default function About() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full relative">
        <img src={aboutPage} alt="" />
        <div className="absolute inset-0">
          <div className="flex flex-col w-full h-full items-center text-white p-12">
            <span>About Us</span>
            <span>
              DLCF (Deeper Life Campus Fellowship) at Anchor University is a
              vibrant Christian student fellowship that aims to provide
              spiritual support and growth opportunities for students. As part
              of the broader Deeper Christian Life Ministry, DLCF focuses on
              fostering a deep, personal relationship with God through prayer,
              Bible study, and fellowship.
            </span>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
