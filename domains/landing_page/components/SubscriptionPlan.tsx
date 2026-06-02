// components/landing/SubscriptionPlans.tsx
"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Free",
        price: "0",
        period: "forever",
        description: "Try before you commit",
        features: [
            "Limited preview content",
            "Basic progress tracking",
            "Public community access",
        ],
        color: "gray",
        popular: false,
        cta: "Get Started Free",
    },
    {
        name: "Live",
        price: "4,500",
        period: "per term",
        description: "Structured live learning",
        features: [
            "All Live Classes",
            "Live session recordings",
            "Class Tests & Mid-Term Exams",
            "Assignment submission",
            "Term Report Card",
            "Full attendance tracking",
        ],
        color: "blue",
        popular: false,
        cta: "Choose Live Plan",
    },
    {
        name: "VOD",
        price: "3,500",
        period: "per term",
        description: "Self-paced learning",
        features: [
            "Full VOD Library",
            "Downloadable study materials",
            "Progress analytics",
            "Basic assessments",
        ],
        color: "navy",
        popular: false,
        cta: "Choose VOD Plan",
    },
    {
        name: "Hybrid",
        price: "7,000",
        period: "per term",
        description: "Complete School Experience",
        features: [
            "Everything in Live + VOD",
            "Live classes + Full recordings",
            "All assessments & exams",
            "Priority support",
            "Parent dashboard access",
        ],
        color: "green",
        popular: true,
        cta: "Choose Hybrid",
    },
];

export default function SubscriptionPlans() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-600">
                        Choose Your Learning Plan
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Term-based subscriptions. No long-term lock-in. Renew only when you need to.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl
                ${plan.popular
                                    ? 'border-green-600 shadow-xl scale-105'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-medium px-6 py-1 rounded-full flex items-center gap-1">
                                    <Star className="w-4 h-4" /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-navy-600">{plan.name}</h3>
                                <p className="text-gray-500 mt-1">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-navy-600">₦{plan.price}</span>
                                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full py-7 text-lg font-semibold rounded-2xl transition-all
                  ${plan.popular
                                        ? 'bg-green-600 hover:bg-green-700 text-white'
                                        : 'bg-navy-600 hover:bg-navy-700 text-white'
                                    }`}
                                onClick={() => {
                                    const event = new CustomEvent('openRoleModal');
                                    window.dispatchEvent(event);
                                }}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 text-sm text-gray-500">
                    All plans are scoped to the current academic term • Cancel anytime •
                    <span className="text-green-600 font-medium"> 30-day money-back guarantee on paid plans</span>
                </div>
            </div>
        </section>
    );
}