// components/landing/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
    return (
        <section className="bg-linear-to-r from-navy-400 to-navy-900 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-size[50px_50px]"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full text-sm border border-white/20">
                        2025/2026 Academic Session is Open
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                        Ready to Give Your Child<br />
                        a World-Class Education?
                    </h2>

                    <p className="text-xl text-white/80 max-w-lg mx-auto">
                        Join hundreds of students already learning with structure, accountability,
                        and real academic results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-7 rounded-2xl font-semibold shadow-xl shadow-blue-900/40 flex items-center gap-3 group"
                            onClick={() => {
                                const event = new CustomEvent('openRoleModal');
                                window.dispatchEvent(event);
                            }}
                        >
                            Enroll Now – It’s Free to Start
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <p className="text-sm text-white/60 pt-4">
                        No credit card required • Instant access to Free Tier •
                        <span className="text-green-400"> 30-day guarantee on paid plans</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}