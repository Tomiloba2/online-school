// components/auth/ForgotPassword.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";

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
import { ForgotPasswordData, ForgotPasswordSchema } from "../schema";
import Image from "next/image";
import { requestPasswordReset } from "@/lib/auth-client";
import { toast } from "sonner";


export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: ForgotPasswordData) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await requestPasswordReset({
        email: values.email,
        redirectTo: "/reset-password"
      })
      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      toast.error("failed", {
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
          <h1 className="text-3xl font-semibold text-navy-600">Check Your Email</h1>
          <p className="text-gray-600 mt-4">
            We’ve sent a password reset link to your email. Please check your inbox (and spam folder).
          </p>
          <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-900">
            <Link href="/login">Back to Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/OMSlogo.png" alt="one mission school  Logo" width={48} height={48} />
              <h1 className="text-3xl font-semibold text-navy-600">One Mission School</h1>
            </div>
            <h2 className="text-2xl font-semibold text-navy-600">Forgot Password?</h2>
            <p className="text-gray-600 mt-2">
              Enter your email and we’ll send you a reset link.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-700">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" className="h-12" {...field} />
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Reset Link...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          </Form>

          <div className="text-center mt-8">
            <Link href="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-1 bg-navy-600 items-center justify-center p-12">
        <div className="max-w-md text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Password Recovery</h2>
          <p className="text-white/90 text-lg">
            Don’t worry. We’ll help you regain access to your account quickly.
          </p>
        </div>
      </div>
    </div>
  );
}