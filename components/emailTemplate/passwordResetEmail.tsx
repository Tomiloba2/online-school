// components/emails/ResetPasswordEmail.tsx
import { BaseEmail } from "./baseEmail";

export const ResetPasswordEmail = ({ resetUrl }: { resetUrl: string }) => (
  <BaseEmail
    heading="Reset Your Password"
    buttonText="Reset Password"
    buttonUrl={resetUrl}
  >
    <p className="text-gray-600 text-[15px] leading-relaxed">
      You requested to reset your password. Click the button below to set a new one.
    </p>
    <p className="text-amber-600 text-sm mt-4">
      If you didn&apos;t request this, please ignore this email.
    </p>
  </BaseEmail>
);