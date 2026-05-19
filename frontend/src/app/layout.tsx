import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DClaw Onboard — AI-Powered Employee Onboarding",
    template: "%s — DClaw Onboard",
  },
  description:
    "Automated employee onboarding powered by AI. Journey builder, document collection, stakeholder introductions, and an AI copilot that guides every new hire.",
  keywords: [
    "employee onboarding",
    "HR software",
    "AI onboarding",
    "new hire",
    "onboarding automation",
  ],
  openGraph: {
    title: "DClaw Onboard — AI-Powered Employee Onboarding",
    description:
      "Automated employee onboarding powered by AI. Journey builder, document collection, stakeholder introductions, and an AI copilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
