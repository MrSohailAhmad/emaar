import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import PaymentPlans from "./paymentPlan";

export default function Home() {
  return (
    <div className="container  mx-auto my-8 ">
      <HeroSection />
      <PaymentPlans />
    </div>
  );
}
