import React, { useEffect, useState } from "react";
import { BsDashLg } from "react-icons/bs";

export default function Hero() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ];

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
      <span>WELCOME TO OUR CHURCH</span>
      <span>BECOME A PART OF OUR COMMUNITY</span>
      <span className="flex items-center">
        <BsDashLg />
        <span className="ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </span>
      </span>
      <button className="bg-primary mt-4 p-2 rounded text-white">LEARN MORE</button>
    </div>
  );
}
