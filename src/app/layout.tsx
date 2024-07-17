import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GradMaster | University Management System",
  description: "GradMaster is an all-in-one university management software designed to streamline academic administration. From student enrollment to faculty management and course scheduling, GradMaster enhances efficiency and improves the educational experience. Discover the future of university administration with our powerful and user-friendly platform.",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
