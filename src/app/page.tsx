import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import PaymentPlans from "../components/PaymentPlan";
import RequestAvail from "@/components/RequestAvail";
import Cards from "@/components/Cards";
import DescriptiveBrochure from "@/components/DescriptiveBrochure";
import OurExpertForm from "@/components/OurExpertForm";
import AvailLocationMap from "@/components/AvailLocationMap";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto my-8 ">
        <HeroSection />
        <RequestAvail />
        {/* <DescriptiveBrochure /> */}
        <PaymentPlans />
        <AvailLocationMap />
        <OurExpertForm />
      </div>
    </>
  );
}
