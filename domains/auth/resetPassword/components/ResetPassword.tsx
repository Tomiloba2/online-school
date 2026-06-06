// components/auth/ResetPassword.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ResetPasswordData, ResetPasswordSchema } from "../schema";
import Image from "next/image";
import { resetPassword } from "@/lib/auth-client";
import { toast } from "sonner";

export default function ResetPassword() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<ResetPasswordData>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        if (!token) {
            setError("Invalid or expired reset link");
        }
    }, [token]);

    const onSubmit = async (values: ResetPasswordData) => {
        if (!token) {
            toast.error("Password reset failed", {
                duration: 5000,
                description: "Invalid reset Link.",
            });
            return setError('Invalid reset link')
        };
        setIsLoading(true);
        setError(null);
        try {

            const { data, error } = await resetPassword({
                newPassword: values.password,
                token
            })
            if (error) throw error;
            setSuccess(true);
        } catch (err: any) {
            toast.error("Password reset failed", {
                duration: 5000,
                description: err.message || 'An error occurred',
            });
            setError(err.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="max-w-md text-center">
                    <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                    <h1 className="text-3xl font-semibold text-navy-600">Password Reset Successful</h1>
                    <p className="text-gray-600 mt-4 mb-8">
                        Your password has been updated successfully.
                    </p>
                    <Button asChild className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-900">
                        <Link href="/login">Sign In Now</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/OMSlogo.png" alt="one mission school  Logo" width={48} height={48} />
                            <h1 className="text-3xl font-semibold text-navy-600">Reset Password</h1>
                        </div>
                        <p className="text-gray-600">Enter your new password below.</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-navy-700">New Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="••••••••" className="h-12" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-navy-700">Confirm New Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="••••••••" className="h-12" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <Button
                                type="submit"
                                className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 font-semibold"
                                disabled={isLoading || !token}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Resetting Password...
                                    </>
                                ) : (
                                    "Reset Password"
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>

            <div className="hidden lg:flex flex-1 bg-navy-600 items-center justify-center p-12">
                <div className="max-w-md text-white">
                    <h2 className="text-4xl font-semibold mb-6">Secure Password Reset</h2>
                    <p className="text-white/90">
                        Choose a strong password that you can remember. Your account security is important to us.
                    </p>
                </div>
            </div>
        </div>
    );
}