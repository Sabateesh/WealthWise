import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<link rel="icon" href="/favicon.ico" sizes="any" />

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WealthWise",
  description: "Generated by create next app",
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
