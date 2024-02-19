import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Recipe UI Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-[#f3e5d8] lg:py-32 lg:px-80">{children}</body>
    </html>
  );
}

