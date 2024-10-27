import React from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function Rootlayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DBDBDD] w-screen">
      <div className="fixed top-0 left-0 py-2 px-6 z-50 bg-[black] w-full">
        <Navbar />
      </div>
      <div className="w-screen pt-20">
        <Outlet />
      </div>
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
}
