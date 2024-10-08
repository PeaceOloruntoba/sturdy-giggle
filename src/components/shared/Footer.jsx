import React from "react";
import Input from "./Input";
import Button from "./Button";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();
  const year = date?.getFullYear();
  return (
    <div className="bg-[#01015E] text-white text-[12px] w-full p-20 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
      <div className="flex uppercase flex-col gap-6 col-span-2">
        <span className="text-[18px] font-semibold">
          DLCF Anchor University, Lagos.
        </span>
        <span>&copy; copyright DLCFAUL {year}</span>
        <span>
          <a href="tel:+2348145789624">+234 8145789624</a>
        </span>
        <span>Anchor University, Ayobo Alimosho L.G.A, Lagos 100276</span>
        <span>
          <a href="mailto:dlcfaul@gmail.com">dlcfaul@gmail.com</a>
        </span>
      </div>
      <div className="flex flex-col gap-6 uppercase">
        <span className="text-[18px] font-semibold">QuickLinks</span>
        <Link to="/about">About Us</Link>
        <Link to="/sermon">sermons</Link>
        <Link to="/event">events</Link>
        <Link to="/blog">blog</Link>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-[18px] font-semibold">Connect</span>
        <div className="flex gap-6 text-[#FFA141] text-3xl">
          <a href="https://web.facebook.com/dlcfanchoruni" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/dlcfanchoruni" target="_blank">
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/dlcfanchoruni?igsh=NmlranJkZ3Zxcmty"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6 col-span-2">
        <span className="uppercase text-[21px] font-semibold">
          Subscribe to get Latest Updates and News
        </span>
        <div className="flex border border-white/15 p-2 rounded-xl items-center justify-between">
          <Input
            inputClassName={
              "bg-transparent text-xl font-[400] h-full p-2 focus:outline-none w-full"
            }
            type={"email"}
            placeholder="dlcfaul@gmail.com"
          />
          <Button
            className={
              "bg-[#FFA141] text-[18px] font-semibold rounded-xl text-[#000] uppercase px-8 py-3"
            }
            value={"subscribe"}
          />
        </div>
      </div>
    </div>
  );
}
