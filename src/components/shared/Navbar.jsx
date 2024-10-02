import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
        <div className="flex items-center uppercase text-white font-semibold gap-8 text-[14px] md:text-[18px]">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/sermon">Sermon</Link>
          <Link to="/event">Event</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <Link to="/contact">
        <Button
          value={"Contact Us"}
          className={
            "bg-[#FFA141] text-[16px] font-semibold rounded-xl text-[1C1D28] uppercase px-8 py-3"
          }
        />
      </Link>
    </div>
  );
}
