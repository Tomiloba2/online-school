// components/landing/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import RoleSelectionModal from "./Modal";
import Image from "next/image";

export default function Hero() {
    const [roleModalOpen, setRoleModalOpen] = useState(false);
    return (
        <section className="relative min-h-dvh flex items-center bg-linear-to-br from-navy-600 via-navy-700 to-navy-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-position-[40px_40px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full border border-white/20">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            2025/2026 Academic Session Now Open
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tighter text-white">
                            A Real Secondary School.<br />
                            <span className="text-blue-400">On Your Device.</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-lg">
                            Structured learning with live classes, term-based enrollment,
                            automated assessments, and official results — built for Nigerian secondary students.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-7 rounded-2xl font-semibold shadow-xl shadow-blue-900/40 flex items-center gap-3 group"
                                onClick={() => {
                                    setRoleModalOpen(true);
                                }}
                            >
                                Enroll Now
                                <ArrowRight className="group-hover:translate-x-1 transition" />
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-blue-600 hover:bg-white/10 hover:text-white text-lg px-8 py-7 rounded-2xl flex items-center gap-3"
                            >
                                <Play className="w-5 h-5" />
                                Watch Intro
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-white/70 pt-6">
                            <div>JSS1 — SS3</div>
                            <div className="h-px w-8 bg-white/30"></div>
                            <div>Live Classes • VOD • CBT Exams</div>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative">
                            {/* Main Mockup */}
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 w-full max-w-130">
                                <div className="bg-gray-900 h-11 flex items-center px-4 gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <Image
                                    src="/lms.png"
                                    alt="OMS Student Dashboard"
                                    className="w-full h-auto"
                                    height={400}
                                    width={600}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -top-6 -right-6 bg-green-100 text-green-800 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-medium"
                            >
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                Live Class in Progress
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <RoleSelectionModal isOpen={roleModalOpen} onSelectRole={() => { }} onClose={() => setRoleModalOpen(false)} />
        </section>
    );
}