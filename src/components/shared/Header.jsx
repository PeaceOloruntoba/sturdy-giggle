import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 lg:gap-0 border border-black/60 py-10 shadow-md shadow-black/50">
      <span className="uppercase text-[20px] md:text-[40px] lg:text-[60px] font-bold">
        {title}
      </span>
      <div className="flex items-center justify-center gap-1 font-medium text-[14px] md:text-[18px] uppercase">
        <Link to={"/"}>Home</Link>
        <span>&gt;</span>
        <span className="font-normal">{title}</span>
      </div>
    </div>
  );
}
