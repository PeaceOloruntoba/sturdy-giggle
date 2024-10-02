import React from "react";
import Footer from "../src/components/shared/Footer";
import Navbar from "../src/components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function Rootlayout() {
  return (
    <div className="min-h-screen flex flex-col min-w-screen">
      <div className="fixed top-0 left-0 py-2 px-6 z-50 bg-black w-full">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
