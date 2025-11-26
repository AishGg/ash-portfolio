import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar}  from "@/components/Navbar";

const inter = Inter({weight: ["400","500","600","700","800","900"]});



export const metadata: Metadata = {
  title: "AG Portfolio",
  description: "My portfolio website for my Project and Experience Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
