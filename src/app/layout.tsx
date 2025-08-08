import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import HeaderNavMenu from "@/components/HeaderNavMenu/HeaderNavMenu";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aveta | Meet your AI Companion",
  description:
    "Aveta AI is an advanced AI character chat platform that lets you create and talk to custom virtual companions. Enjoy realistic, emotional conversations, immersive AI roleplay, and private, user-controlled experiences designed for writers, gamers, and creative minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <HeaderNavMenu />
        {children}
      </body>
    </html>
  );
}
