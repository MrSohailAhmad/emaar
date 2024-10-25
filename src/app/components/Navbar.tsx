"use client";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "../../../public/images";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active menu item

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menu = [
    { path: "heroRef", title: "Home" },
    { path: "reqRef", title: "About" },
    { path: "desRef", title: "Feature" },
    { path: "imgRef", title: "Gallery" },
    { path: "payRef", title: "Payment plan" },
    { path: "floorRef", title: "Floor plan" },
    { path: "availRef", title: "Contact" },
  ];

  return (
    <nav className="bg-white border-gray-200 top-0 z-[999] drop-shadow-lg sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center w-[7rem] space-x-3 rtl:space-x-reverse"
        >
          {images.Logo}
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {menu.map((item, idx) => (
              <li
                key={idx}
                onClick={() => scrollToSection(item.path)}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(idx)}
                onBlur={() => setActiveIndex(null)}
                className="relative"
              >
                <Link
                  href={""}
                  className="block py-2 px-3 uppercase text-gray-500 font-bold rounded md:bg-transparent md:p-0"
                >
                  {item.title}
                </Link>
                {/* Floating Line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-500 ${
                    activeIndex === idx ? "block" : "hidden"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
