"use client"

import type React from "react"

import { useState } from "react"
import { IoMdCheckmark } from "react-icons/io"
import { RiSparkling2Fill } from "react-icons/ri"

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("monthly")
  const [animating, setAnimating] = useState(false)

  // Plans data
  const plans = [
    {
      name: "Standard",
      description: "Best for personal use",
      monthlyPrice: 499,
      yearlyPrice: 5689,
      features: ["Stream live to unlimited viewers", "Save shows for 1 month", "store up to 2TB of content."],
      popular: false,
    },
    {
      name: "Premium",
      description: "Best for professional use",
      monthlyPrice: 799,
      yearlyPrice: 9100,
      features: ["Includes Standard features: plus", "save shows for 3 months", "5TB storage", "Clear video quality"],
      popular: true,
    },
  ]

  // Handle billing cycle change with animation
  const handleBillingChange = (cycle: "yearly" | "monthly") => {
    if (cycle === billingCycle) return

    setAnimating(true)
    setTimeout(() => {
      setBillingCycle(cycle)
      setTimeout(() => {
        setAnimating(false)
      }, 50)
    }, 300)
  }

  // Format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Choose the perfect plan for yourself.</h2>
        <div className="mt-8 flex items-center justify-center space-x-2 mb-12">
          <span className="text-sm">Save 10% on yearly plan</span>
          <div className="flex bg-gray-200 p-1 rounded-full">
            <button
              className={`px-4 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                billingCycle === "monthly" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
              onClick={() => handleBillingChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                billingCycle === "yearly" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
              onClick={() => handleBillingChange("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => {
          const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice

          return (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg w-80 transition-all duration-300 ${
                plan.popular ? "bg-blue-600 text-white relative" : "bg-white text-black"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-blue-700 text-blue-700 text-xs px-3 py-1 flex items-center justify-center gap-1 rounded-t-lg w-32">
                  <span>Most Popular</span>
                  <RiSparkling2Fill />
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm">{plan.description}</p>

              <div className="mt-4 h-16 flex flex-col justify-center">
                <div
                  className={`flex items-end transition-all duration-300 ${animating ? "opacity-0 transform -translate-y-4" : "opacity-100 transform translate-y-0"}`}
                >
                  <span className="text-3xl font-bold">${formatPrice(price)}</span>
                  <span className="text-base ml-1">/ {billingCycle === "monthly" ? "month" : "year"}</span>
                </div>
              </div>

              <button
                className={`w-full py-2 rounded-lg transition-all duration-300 ${
                  plan.popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"
                } hover:scale-105`}
              >
                Get started
              </button>

              <ul className="mt-4 text-sm space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <IoMdCheckmark className={`${plan.popular ? "text-white" : "text-blue-600"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PricingSection

