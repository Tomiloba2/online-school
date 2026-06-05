import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    user: {
        additionalFields: {
            role: {
                type: "string", required: true
            },
            terms: { type: "boolean", required: true },
            phoneNumber: { type: "string", required: false }
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    requireEmailVerification: true,
});