
import { BaseEmail } from "./baseEmail";

interface VerificationEmailProps {
  name: string;
  verificationUrl: string;
}

export const VerificationEmail = ({ name, verificationUrl }: VerificationEmailProps) => (
  <BaseEmail
    heading={`Welcome, ${name}!`}
    buttonText="Verify Your Email"
    buttonUrl={verificationUrl}
  >
    <p className="text-gray-600 text-[15px] leading-relaxed">
      Thank you for joining One Mission School. Please verify your email address to complete your registration.
    </p>
    <p className="text-gray-600 text-[15px] leading-relaxed mt-4">
      This link will expire in 24 hours.
    </p>
  </BaseEmail>
);