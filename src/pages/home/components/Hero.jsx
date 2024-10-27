import React, { useEffect, useState } from "react";
import { BsDashLg } from "react-icons/bs";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
} from "../../../assets";

export default function Hero() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="flex flex-col w-full mainbg bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="w-full bg-[black]/70 p-16 py-40 text-white">
        <div className="w-full flex flex-col w-1/3 gap-6">
          <span className="text-xl font-semibold">WELCOME TO OUR CHURCH</span>
          <span className="text-4xl font-semibold">
            BECOME A PART OF OUR COMMUNITY
          </span>
          <span className="flex gap-2">
            <BsDashLg />
            <span>
              Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do.
            </span>
          </span>
          <button className="bg-[#FFA141] px-6 text-[16px] text-black mt-4 p-2 rounded text-white w-fit">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
