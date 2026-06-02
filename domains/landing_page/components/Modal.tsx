// components/landing/RoleSelectionModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface RoleSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectRole: (role: "student" | "parent") => void;
}

export default function RoleSelectionModal({
    isOpen,
    onClose,
    onSelectRole,
}: RoleSelectionModalProps) {
    const router = useRouter();
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-100 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-110 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                            {/* Header */}
                            <div className="bg-navy-600 text-white p-8 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="text-center">
                                    <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                                        <Users className="w-9 h-9" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">Join One Mission School</h2>
                                    <p className="text-white/80 mt-2 text-lg">
                                        Choose how you want to participate
                                    </p>
                                </div>
                            </div>

                            {/* Role Options */}
                            <div className="p-8 space-y-4">
                                {/* Student Option */}
                                <button
                                    onClick={() => onSelectRole("student")}
                                    className="w-full group flex items-center gap-5 p-6 rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 text-left"
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                        <UserRound className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl text-navy-600">I am a Student</h3>
                                        <p className="text-gray-600 mt-1 text-[15px]">
                                            Access live classes, VOD lessons, assessments, and track my academic progress
                                        </p>
                                    </div>
                                </button>

                                {/* Parent Option */}
                                <button
                                    onClick={() => onSelectRole("parent")}
                                    className="w-full group flex items-center gap-5 p-6 rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 text-left"
                                >
                                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                                        <Users className="w-8 h-8 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl text-navy-600">I am a Parent / Guardian</h3>
                                        <p className="text-gray-600 mt-1 text-[15px]">
                                            Monitor my child’s progress, manage subscriptions, and receive academic reports
                                        </p>
                                    </div>
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="border-t border-gray-100 px-8 py-6 text-center">
                                <p className="text-sm text-gray-500">
                                    Already have an account?{" "}
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                            onClose();
                                        }}
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        Login here
                                    </button>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}