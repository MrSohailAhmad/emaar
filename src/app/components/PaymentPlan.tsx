"use client"; // Mark the component as a Client Component
import { useState } from "react";

interface PaymentDetail {
  percentage: string;
  description: string;
}

interface PaymentPlan {
  title: string;
  details: PaymentDetail[];
}

const paymentPlansData: PaymentPlan[] = [
  {
    title: "Standard Payment Plan",
    details: [
      { percentage: "10%", description: "Down Payment" },
      { percentage: "0.5%", description: "Monthly 20 Installments" },
      { percentage: "5%", description: "Every 6 Months (4 Installments)" },
      { percentage: "60%", description: "On Handover" },
    ],
  },
  {
    title: "3 Years Post Handover (50/50)",
    details: [
      { percentage: "5%", description: "Down Payment" },
      { percentage: "0.8%", description: "Monthly 36 Installments" },
      { percentage: "45%", description: "On Handover" },
      { percentage: "50%", description: "Post Handover" },
    ],
  },
];

const PaymentPlans = ({ payRef }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      ref={payRef}
      className="p-8 bg-white shadow-lg my-32 md:my-16 lg:my-8 max-w-screen-xl mx-auto mt-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black text-center md:text-left">
        PAYMENT PLANS
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start mb-6 border-b">
        {paymentPlansData.map((plan, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`mr-4 md:mr-8 pb-2 text-sm md:text-md font-small ${
              activeTab === index
                ? "text-black border-b-4 border-black"
                : "text-black border-b-2 border-transparent"
            }`}
          >
            {plan.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 mt-6">
        {paymentPlansData[activeTab].details.map((detail, index) => (
          <div
            key={index}
            className="p-6 bg-white h-40 w-full flex flex-col justify-center items-center shadow-lg transition-shadow hover:shadow-xl rounded-md"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-2 text-center">
              {detail.percentage}
            </h3>
            <p className="text-sm md:text-md text-black text-center">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
      <button className="text-black border border-black text-black px-4 py-2 md:px-4 md:py-3 text-center w-full sm:w-auto shadow hover:shadow-lg transition-shadow buttonHoverAnimation">
        Reserve Yours Today
      </button>
    </div>
  );
};

export default PaymentPlans;
