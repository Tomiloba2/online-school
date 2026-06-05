import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend"
import { VerificationEmail } from "@/components/emailTemplate/verificationMail";
import { ResetPasswordEmail } from "@/components/emailTemplate/passwordResetEmail";

const resend = new Resend(process.env.RESEND_API_KEY)

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
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url, token }, request) => {
            try {
                await resend.emails.send({
                    from: process.env.FROM_MAIL!,
                    to: user.email,
                    subject: "Password reset mail",
                    react: ResetPasswordEmail({
                        resetUrl: url
                    }),
                })
            } catch (error) {
                console.log(error);
                throw error
            }
        }
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url, token }) => {
            await resend.emails.send({
                from: process.env.FROM_MAIL!,
                to: user.email,
                subject: "Verify your email address",
                react: VerificationEmail({
                    name: user.name || user.email.split("@")[0],
                    verificationUrl: url
                })
            });
        },
        redirectTo: "/dashboard"
    },
    plugins: [nextCookies()]
});
