import React, { useState } from "react";
import { CgMenuRight, CgCloseR  } from "react-icons/cg";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Menus = [
    { 
        title: "Home",
        href: "/",
    },
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "Sermon",
      href: "/sermon",
    },
    {
      title: "Event",
      href: "/event",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="">
      <button
        className="text-white focus:outline-none focus:text-gray-200"
        onClick={toggleMenu}
      >
        <CgMenuRight className="text-3xl font-semibold" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 z-10 bg-opacity-90 w-screen h-screen bg-black/80 text-white font-semibold text-[22px] shadow-lg">
          <button onClick={toggleMenu} className="absolute top-5 right-10">
            <CgCloseR className="text-3xl text-white" />
          </button>

          <div className="flex flex-col gap-16 items-start h-screen p-4 pt-[4em]">
            <ul className="flex flex-col gap-4">
              {Menus.map((Menu, index) => (
                <Link
                  key={index}
                  to={Menu.href}
                  onClick={toggleMenu}
                  className="flex rounded-md cursor-pointer hover:bg-light-white text-white items-center gap-3"
                >
                  <span className={`origin-left duration-200 text-lg`}>
                    {Menu.title}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;