import Image from "next/image";
import PaymentPlans from "./paymentPlan";

export default function Home() {
  return (
    <div className="container  mx-auto my-8 ">
      <PaymentPlans />
    </div>
  );
}
