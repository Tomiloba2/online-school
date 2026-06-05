// components/auth/LoginPage.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

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
import { loginSchema, LoginValues } from "../schemas";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const results = useMutation({
    mutationFn: async (values: LoginValues) => {
      try {
        const data = await axios.post('/api/auth/login', values)
        return data.data
      } catch (err: any) {
        console.log(err);
        throw err
      }
    },
    mutationKey: ['login'],
    onSuccess: () => {
      toast.success("Login successful!", {
        description: "Welcome back",
        duration: 5000,
      });
      form.reset()
      router.push("/dashboard")
    },
    onError: (error) => {

      if (axios.isAxiosError(error)) {

        toast.error("login failed", {
          description:
            error.response?.data?.message ??
            error.message
        })

        return
      }
      toast.error("Login failed")
    }
  })
  const onSubmit = async (values: LoginValues) => {

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
                <p className="text-gray-600 text-sm">Sign in to your account</p>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-700">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" className="h-12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-700">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="h-12 pr-10"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" {...form.register("rememberMe")} />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

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
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>

          <div className="text-center mt-8 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/onboarding" className="text-blue-600 hover:underline font-medium">
              Register here
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Value Proposition */}
      <div className="hidden lg:flex flex-1 bg-navy-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="max-w-md text-white">
          <h2 className="text-4xl font-semibold mb-6">Welcome Back</h2>
          <p className="text-xl text-white/90 mb-10">
            Continue your academic journey with structure, accountability, and excellence.
          </p>

          <div className="space-y-6 text-white/90">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-green-400 text-sm">✓</span>
              </div>
              <p>Access your personalized dashboard and current term timetable</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-green-400 text-sm">✓</span>
              </div>
              <p>Join live classes and watch recorded sessions</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-green-400 text-sm">✓</span>
              </div>
              <p>View assessments, assignments, and term results</p>
            </div>
          </div>

          <div className="mt-16 text-sm text-white/70 border-t border-white/20 pt-8">
            Locked to the <span className="font-medium text-white">2025/2026 Academic Session</span>
          </div>
        </div>
      </div>
    </div>
  );
}