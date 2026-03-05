"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/ui/NavbarDemo";
import { ThemeProvider } from "next-themes";
import FooterDemo from "@/components/ui/FooterDemo";
import { usePathname } from "next/navigation";
import ChatBot from "@/components/ui/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname() 
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ ThemeProvider দিয়ে পুরো app wrap */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          {
            pathname !== "/blog" ?
            <NavbarDemo /> : " "
          }
          {children}
          <ChatBot /> {/* Floating chatbot */}
          <FooterDemo />
        </ThemeProvider>
      </body>
    </html>
  );
}
