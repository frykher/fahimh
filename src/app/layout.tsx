import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Geologica({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahim H",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
