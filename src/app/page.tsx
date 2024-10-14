import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import PaymentPlans from "../components/PaymentPlan";
import RequestAvail from "@/components/RequestAvail";
import Cards from "@/components/Cards";
import DescriptiveBrochure from "@/components/DescriptiveBrochure";
import OurExpertForm from "@/components/OurExpertForm";

export default function Home() {
  return (
    <div className="container  mx-auto my-8 ">
      <HeroSection />
      <RequestAvail />
      <Cards />
      <DescriptiveBrochure />
      <PaymentPlans />
      <OurExpertForm />
    </div>
  );
}
