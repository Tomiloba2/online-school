import z from "zod";

export const StudentSignupSchema = z.object({
    fullName: z.string().min(5, "Full name must be at least 5 characters"),
    email: z.email("Invalid email address"),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[@$!#^%*?&]/, 'Must contain at least one special character (@$!%*?&)'),
});

export type StudentSignupData = z.infer<typeof StudentSignupSchema>;