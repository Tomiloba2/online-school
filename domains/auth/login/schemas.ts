import z from "zod";


export const loginSchema = z.object({
    email: z.email("please use a valid email address"),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[@$!#^%*?&]/, 'Must contain at least one special character (@$!%*?&)'),
    rememberMe: z.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;
