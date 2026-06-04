// components/landing/RoleSelectionModal.tsx
"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { UserRound, Users } from "lucide-react";
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
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                       .
                    </DialogTitle>
                </DialogHeader>

                <div className="p-8 space-y-4">
                    {/* Student Option */}
                    <button
                        onClick={() => onSelectRole("student")}
                        className="w-full group flex items-center gap-5 p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all text-left"
                    >
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <UserRound className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-xl text-navy-700">I am a Student</h3>
                            <p className="text-gray-600 mt-1 text-[15px]">
                                Access live classes, VOD lessons, assessments, assignments, and track my progress
                            </p>
                        </div>
                    </button>

                    {/* Parent Option */}
                    <button
                        onClick={() => onSelectRole("parent")}
                        className="w-full group flex items-center gap-5 p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all text-left"
                    >
                        <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                            <Users className="w-8 h-8 text-amber-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-xl text-navy-700">I am a Parent / Guardian</h3>
                            <p className="text-gray-600 mt-1 text-[15px]">
                                Monitor my child’s progress, manage subscriptions, and receive academic alerts
                            </p>
                        </div>
                    </button>
                </div>

                <div className="border-t px-8 py-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <button
                        onClick={() => {
                            onClose();
                            router.push("/login");
                        }}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Login here
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}