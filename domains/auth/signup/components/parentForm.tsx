// components/auth/ParentRegistrationForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import axios from "axios"
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
import { Loader2 } from "lucide-react";
import { ParentSignUpData, ParentSignUpSchema } from "../schemas/parent";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import PasswordField from "./PasswordField";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export default function ParentRegistrationForm() {
    const router = useRouter();

    const form = useForm<ParentSignUpData>({
        resolver: zodResolver(ParentSignUpSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            password: "",
            terms: false
        },
    });
    const results = useMutation({
        mutationFn: async (values: ParentSignUpData) => {
            try {
                const data = await axios.post('/api/auth/parent-signup', values)
                return data.data
            } catch (err: any) {
                console.log(err);
                throw err
            }
        },
        mutationKey: ['parent-Signup'],
        onSuccess: () => {
            toast.success("Account created successfully!", {
                description: "Welcome! Check your email to verify your account.",
                duration: 5000,
            });
            form.reset()
            router.push("/login")
        },
        onError: (error) => {

            if (axios.isAxiosError(error)) {

                toast.error("Signup failed", {
                    description:
                        error.response?.data?.message ??
                        error.message
                })

                return
            }
            toast.error("Signup failed")
        }
    })
    const onSubmit = async (values: ParentSignUpData) => {
        console.log(values)
        console.log(form.formState.errors);


        await results.mutate(values)
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/OMSlogo.png" alt="one mission school  Logo" width={48} height={48} />
                            <div>
                                <h1 className="text-3xl font-semibold text-navy-600">One Mission School</h1>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-navy-600">Create Parent Account</h2>
                        <p className="text-gray-600 mt-2">
                            Monitor your child’s academic journey with full visibility.
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-navy-700">Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Mrs. Adebayo Oluwaseun" className="h-12" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-navy-700">Email Address</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="parent@example.com" className="h-12" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-navy-700">Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+234 803 123 4567" className="h-12" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <PasswordField control={form.control} name="password" />

                            <FormField
                                control={form.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={(checked) =>
                                                    field.onChange(Boolean(checked))
                                                }
                                                className="border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white data-[state=checked]:border-blue-600"
                                            />
                                        </FormControl>
                                        <div className="text-sm">
                                            <FormLabel className="text-gray-600 font-normal">
                                                I agree to the{" "}
                                                <Link href="/terms" className="text-blue-600 hover:underline">
                                                    Terms and Conditions
                                                </Link>{" "}
                                                and{" "}
                                                <Link href="/privacy" className="text-blue-600 hover:underline">
                                                    Privacy Policy
                                                </Link>
                                            </FormLabel>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            {results.error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{
                                        (results.error as Error).message
                                    }</AlertDescription>
                                </Alert>
                            )}

                            <Button
                                type="submit"
                                className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 font-semibold"
                                disabled={results.isPending}
                            >
                                {results.isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Creating Account...
                                    </>
                                ) : (
                                    "Create Parent Account"
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>

            {/* Right Side - Value Proposition */}
            <div className="hidden lg:flex flex-1 bg-navy-600 items-center justify-center p-12 relative overflow-hidden">
                <div className="max-w-md text-white">
                    <h2 className="text-4xl font-semibold mb-8">
                        Be Actively Involved in Your Child’s Education
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Real-time Monitoring</p>
                                <p className="text-white/80 text-[15px]">Track attendance, live class participation, and academic performance</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Multi-Child Management</p>
                                <p className="text-white/80 text-[15px]">Manage all your children from one secure parent account</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Smart Notifications</p>
                                <p className="text-white/80 text-[15px]">Get alerted for missed classes, low scores, and subscription renewals</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Official Report Cards</p>
                                <p className="text-white/80 text-[15px]">Access detailed term results and performance trends</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/20 text-sm text-white/70">
                        After registration, you can link your child’s account or create a new one for them.
                    </div>
                </div>
            </div>
        </div>
    );
}