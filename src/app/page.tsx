"use client";
import { useRef, useState } from "react";
import { images } from "../../public/images";
import AvailLocationMap from "./components/AvailLocationMap";
import DescriptiveBrochure from "./components/DescriptiveBrochure";
import FloorPlan from "./components/FloorPlan";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import OurExpertForm from "./components/OurExpertForm";
import PaymentPlans from "./components/PaymentPlan";
import RequestAvail from "./components/RequestAvail";

export default function Home() {
  const heroRef = useRef();
  const reqRef = useRef();
  const desRef = useRef();
  const imgRef = useRef();
  const floorRef = useRef();
  const payRef = useRef();
  const exprtRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menu = [
    {
      path: heroRef,
      title: "Home",
    },
    {
      path: reqRef,
      title: "About",
    },
    {
      path: desRef,
      title: "Feature",
    },
    {
      path: imgRef,
      title: "Gallery",
    },
    {
      path: payRef,
      title: "Payment plan",
    },
    {
      path: floorRef,
      title: "Floor plan",
    },
    {
      path: exprtRef,
      title: "contact",
    },
  ];

  const scrollToSection = (ref) => {
    const offset = 95; // Adjust this value based on the height of your sticky navbar
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
            aria-controls="navbar-default"
            aria-expanded="false"
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-white">
              {menu.map((item, idx) => (
                <li
                  className="block py-2 px-3 cursor-pointer  uppercase text-gray-500 font-bold rounded md:bg-transparent  md:p-0 "
                  onClick={() => scrollToSection(item.path)}
                  key={idx}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-auto ">
        <HeroSection heroRef={heroRef} />
        <RequestAvail reqRef={reqRef} />
        <DescriptiveBrochure desRef={desRef} />
        <ImageGallery imgRef={imgRef} />

        <FloorPlan floorRef={floorRef} />
        <PaymentPlans payRef={payRef} />
        <AvailLocationMap />
        <OurExpertForm exprtRef={exprtRef} />
      </div>
    </>
  );
}
