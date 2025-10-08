import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/Navigation/MobileNav";
import DesktopNav from "@/components/Navigation/DesktopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRD Generator - Dark Theme Mobile-First Edition",
  description: "AI-powered Product Requirements Document generator with a premium dark interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <DesktopNav />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
