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
  return (
    <>
      <Navbar />
      <div className="container  mx-auto my-8 ">
        <HeroSection />
        <RequestAvail />
        <DescriptiveBrochure />
        <ImageGallery />
        <FloorPlan />
        <PaymentPlans />
        <AvailLocationMap />
        <OurExpertForm />
      </div>
    </>
  );
}
