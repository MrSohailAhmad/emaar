"use client";
import { useRef } from "react";
import AvailLocationMap from "./components/AvailLocationMap";
import DescriptiveBrochure from "./components/DescriptiveBrochure";
import FloorPlan from "./components/FloorPlan";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
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
  const availRef = useRef();
  const exprtRef = useRef();

  const scrollToSection = (ref: any) => {
    console.log("ref", ref);
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
      <Navbar scrollToSection={scrollToSection} />
      <div className="container mx-auto my-8">
        <HeroSection heroRef={heroRef} />
        <RequestAvail reqRef={reqRef} />
        <DescriptiveBrochure desRef={desRef} />
        <ImageGallery imgRef={imgRef} />
        <FloorPlan floorRef={floorRef} />
        <PaymentPlans payRef={payRef} />
        <AvailLocationMap availRef={availRef} />
        <OurExpertForm exprtRef={exprtRef} />
      </div>
    </>
  );
}
