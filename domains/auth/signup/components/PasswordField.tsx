// components/auth/PasswordField.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues,Path } from "react-hook-form";

interface PasswordFieldProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>;
    label?: string;
}

export default function PasswordField<T extends FieldValues>({
    control,
    name,
    label = "Password",
}: PasswordFieldProps<T>) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                const password = field.value || "";

                const checks = {
                    length: password.length >= 8,
                    uppercase: /[A-Z]/.test(password),
                    lowercase: /[a-z]/.test(password),
                    number: /[0-9]/.test(password),
                    specialCharacter: /[!@#$%^&*?~`]/.test(password)
                }

                return (
                    <FormItem>
                        <FormLabel className="text-navy-700">{label}</FormLabel>
                        <FormControl>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="h-12 pr-12"
                                    {...field}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </FormControl>

                        {/* Real-time Password Strength Indicators */}
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                {checks.length ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                    <X className="w-4 h-4 text-gray-400" />
                                )}
                                <span className={checks.length ? "text-green-600" : "text-gray-500"}>
                                    At least 8 characters
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                {checks.uppercase ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                    <X className="w-4 h-4 text-gray-400" />
                                )}
                                <span className={checks.uppercase ? "text-green-600" : "text-gray-500"}>
                                    At least one uppercase letter (A-Z)
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                {checks.lowercase ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                    <X className="w-4 h-4 text-gray-400" />
                                )}
                                <span className={checks.lowercase ? "text-green-600" : "text-gray-500"}>
                                    At least one lowercase letter (a-z)
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                {checks.number ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                    <X className="w-4 h-4 text-gray-400" />
                                )}
                                <span className={checks.number ? "text-green-600" : "text-gray-500"}>
                                    At least one number (0-9)
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                {checks.specialCharacter ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                    <X className="w-4 h-4 text-gray-400" />
                                )}
                                <span className={checks.specialCharacter ? "text-green-600" : "text-gray-500"}>
                                    At least one special character
                                </span>
                            </div>

                        </div>

                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}