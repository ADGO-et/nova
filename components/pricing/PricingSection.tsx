"use client";

import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RiSparkling2Fill } from "react-icons/ri";

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

  const plans = [
    {
      name: "Basic",
      description: "Best for personal use",
      price: billingCycle === "yearly" ? 499 : 599,
      features: [
        "Stream live to unlimited viewers",
        "Save shows for 1 month",
        "7TB storage",
      ],
      popular: false,
    },
    {
      name: "Business",
      description: "Best for professional use",
      price: billingCycle === "yearly" ? 799 : 899,
      features: [
        "All starter features, plus:",
        "Unlocks Basic features",
        "Save shows for 3 months",
        "15TB storage",
        "Clear video quality",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Choose the perfect plan for yourself.</h2>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <span className="text-sm">Save 10% on yearly plan</span>
          <div className="flex bg-gray-200 p-1 rounded-full">
            <button
              className={`px-4 py-1 text-sm font-medium rounded-full ${
                billingCycle === "yearly" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
            <button
              className={`px-4 py-1 text-sm font-medium rounded-full ${
                billingCycle === "monthly" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg w-80 ${
              plan.popular ? "bg-blue-600 text-white relative" : "bg-white text-black"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-blue-700 text-blue-700 text-xs px-3 py-1 w-full flex gap-1 mx-auto rounded-t-lg">
                Most Popular
                <RiSparkling2Fill />
              </div>
            )}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-sm">{plan.description}</p>
            <p className="text-3xl font-bold mt-4">${plan.price} <span className="text-base">/month</span></p>
            <button className="w-full mt-4 py-2 bg-black text-white rounded-lg">
              Get started
            </button>
            <ul className="mt-4 text-sm space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <IoMdCheckmark />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
