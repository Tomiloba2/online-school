// components/auth/StudentRegistrationForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

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
import { StudentSignupData, StudentSignupSchema } from "../schemas/student";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import PasswordField from "./PasswordField";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


export default function StudentRegistrationForm() {
    const router = useRouter();

    const form = useForm<StudentSignupData>({
        resolver: zodResolver(StudentSignupSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            terms: false
        },
    });

    const results = useMutation({
        mutationFn: async (values: StudentSignupData) => {
            try {
                const data = await axios.post('/api/auth/student-signup', values)
                return data.data
            } catch (err: any) {
                console.log(err);
                throw err
            }
        },
        mutationKey: ['student-Signup'],
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
    const onSubmit = async (values: StudentSignupData) => {
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
                            <div className="flex items-center gap-3 mb-6">
                                <Image src="/OMSlogo.png" alt="one mission school  Logo" width={48} height={48} />
                                <div>
                                    <h1 className="text-3xl font-semibold text-navy-600">One Mission School</h1>
                                </div>
                            </div>

                        </div>
                        <h2 className="text-2xl font-semibold text-navy-600">Create Your Account</h2>
                        <p className="text-gray-600 mt-2">
                            Join a structured secondary school experience.
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
                                            <Input placeholder="Oluwatomiloba Johnson" className="h-12" {...field} />
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
                                        <FormLabel className="text-navy-700">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="mail@example.com" className="h-12" {...field} />
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
                                                onCheckedChange={field.onChange}
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
                                    <AlertDescription>{(results.error as Error).message}</AlertDescription>
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
                                    "Create Student Account"
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
                        Welcome to a Real School Experience
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Instant Free Tier Access</p>
                                <p className="text-white/80 text-[15px]">Preview curriculum videos and explore the platform</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">5 Free Introductory Lessons</p>
                                <p className="text-white/80 text-[15px]">Start learning immediately while awaiting admin approval</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Free Diagnostic CBT Mock Exam</p>
                                <p className="text-white/80 text-[15px]">Test your readiness for JAMB/WAEC-style questions</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="font-medium">Personal Dashboard Ready</p>
                                <p className="text-white/80 text-[15px]">See your timetable and class information as soon as you’re assigned</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/20 text-sm text-white/70">
                        Your account will be reviewed by the school admin shortly.<br />
                        You will receive an email once your class arm is assigned.
                    </div>
                </div>
            </div>
        </div>
    );
}