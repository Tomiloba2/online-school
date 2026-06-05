import z from "zod";

export const ParentSignUpSchema = z.object({
    fullName: z.string().min(5, "Full name must be at least 5 characters"),
    email: z.email("Please enter a valid email address"),
    phoneNumber: z.string().min(10, "Phone number must be valid"),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[@$!#^%*?&]/, 'Must contain at least one special character (@$!%*?&)'),
    terms: z.boolean("You must accept the terms and conditions").refine((val) => val === true, {
        message: "You must agree to the Terms and Conditions",
    })
});

export type ParentSignUpData = z.infer<typeof ParentSignUpSchema>;
