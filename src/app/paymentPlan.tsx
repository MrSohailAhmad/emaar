// PaymentPlans.tsx
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

const PaymentPlans = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="p-8 bg-white shadow rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">PAYMENT PLANS</h2>
            <div className="flex mb-6 border-b">
                {paymentPlansData.map((plan, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`mr-6 pb-2 text-md font-small ${activeTab === index ? "text-black border-b-2 border-black" : "text-black border-b-2 border-transparent"
                            }`}
                    >
                        {plan.title}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-4 gap-6 mb-8">
                {paymentPlansData[activeTab].details.map((detail, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white h-40 w-full flex flex-col justify-center items-center shadow-lg transition-shadow hover:shadow-xl rounded"
                    >
                        <h3 className="text-4xl font-bold text-black mb-2 text-center">{detail.percentage}</h3>
                        <p className="text-md text-black text-center">{detail.description}</p>
                    </div>
                ))}
            </div>
            <button className="border border-black text-black px-6 py-3 text-center">
                Reserve Yours Today
            </button>
        </div>
    );
};

export default PaymentPlans;
