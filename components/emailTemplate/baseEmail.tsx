// components/emails/BaseEmail.tsx
import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface BaseEmailProps {
  previewText?: string;
  heading: string;
  children: React.ReactNode;
  buttonText?: string;
  buttonUrl?: string;
  footerText?: string;
}

export const BaseEmail = ({
  previewText = "One Mission School Notification",
  heading,
  children,
  buttonText,
  buttonUrl,
  footerText,
}: BaseEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-zinc-50 font-sans">
          <Container className="max-w-[600px] mx-auto bg-white rounded-2xl shadow-sm my-8 overflow-hidden">
            {/* Header */}
            <Section className="bg-navy-600 py-10 text-center">
              <Heading className="text-white text-3xl font-semibold m-0">
                One Mission School
              </Heading>
              <Text className="text-blue-200 mt-2 text-sm">Academic Excellence • Online</Text>
            </Section>

            {/* Content */}
            <Section className="px-10 py-8">
              <Heading className="text-navy-700 text-2xl font-semibold mb-6">
                {heading}
              </Heading>

              {children}

              {buttonText && buttonUrl && (
                <Section className="mt-8 text-center">
                  <Button
                    href={buttonUrl}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-base"
                  >
                    {buttonText}
                  </Button>
                </Section>
              )}
            </Section>

            <Hr className="border-gray-200 mx-10" />

            {/* Footer */}
            <Section className="px-10 py-8 text-center text-gray-500 text-sm">
              <Text className="m-0">
                © 2026 One Mission School • Lagos, Nigeria
              </Text>
              {footerText && <Text className="mt-2">{footerText}</Text>}
              <Text className="mt-4 text-xs">
                This email was sent to you because you have an account with OMS.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};